import { Composition } from "remotion";
import { YoxiVideo } from "./YoxiVideo";

export const MyComposition = () => (
  <Composition
    id="YoxiTodayInspiration"
    component={YoxiVideo}
    durationInFrames={4740}
    fps={30}
    width={1280}
    height={720}
  />
);
