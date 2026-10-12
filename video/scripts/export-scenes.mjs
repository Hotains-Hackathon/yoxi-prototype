import {spawnSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import {join, resolve} from 'node:path';

const cuts = [0, 415, 803, 1382, 1779, 2353, 2845, 3319, 3870, 4392, 4740];
const names = [
  'opening', 'friction', 'inspiration', 'ride', 'puzzle',
  'data', 'journey', 'measurement', 'pilot', 'closing',
];
const input = resolve('out/yoxi-today-inspiration-silent.mp4');
const output = resolve('out/scenes');
const binaryDir = resolve('node_modules/@remotion/compositor-darwin-arm64');
const ffmpeg = join(binaryDir, 'ffmpeg');
mkdirSync(output, {recursive: true});

for (let index = 0; index < names.length; index++) {
  const startFrame = cuts[index];
  const frames = cuts[index + 1] - startFrame;
  const prefix = `${String(index + 1).padStart(2, '0')}-${names[index]}`;
  const common = {
    env: {...process.env, DYLD_LIBRARY_PATH: binaryDir},
    stdio: 'inherit',
  };
  const clip = spawnSync(ffmpeg, [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-ss', (startFrame / 30).toFixed(6), '-i', input,
    '-frames:v', String(frames), '-an', '-c:v', 'libx264',
    '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p',
    join(output, `${prefix}.mp4`),
  ], common);
  if (clip.status !== 0) throw new Error(`Failed to export clip ${prefix}`);

  const still = spawnSync(ffmpeg, [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-ss', ((startFrame + frames * .75) / 30).toFixed(6),
    '-i', input, '-frames:v', '1', join(output, `${prefix}.png`),
  ], common);
  if (still.status !== 0) throw new Error(`Failed to export still ${prefix}`);
  console.log(`${prefix}: ${frames} frames, ${(frames / 30).toFixed(2)}s`);
}
