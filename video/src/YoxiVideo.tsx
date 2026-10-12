/* eslint-disable no-irregular-whitespace */
import React from "react";
import {AbsoluteFill, Series, interpolate, useCurrentFrame} from "remotion";

// Scene changes sit inside the measured pauses in narration.mp3.
const cutsFrames = [0, 415, 803, 1382, 1779, 2353, 2845, 3319, 3870, 4392, 4740];
const durations = cutsFrames.slice(1).map((end, i) => end - cutsFrames[i]);
const show = (f: number, at = 0, dur = 20) => interpolate(f, [at, at + dur], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
const up = (f: number, at = 0) => interpolate(f, [at, at + 20], [38, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
const pop = (f: number, at = 0): React.CSSProperties => ({opacity: show(f, at), translate: `0 ${up(f, at)}px`});

type SceneProps = {n: string; label: string; title: string; caption: string; note: string; dark?: boolean; children: React.ReactNode};
const Scene: React.FC<SceneProps> = ({n, label, title, note, dark, children}) => {
  const f = useCurrentFrame();
  return <AbsoluteFill className={`scene ${dark ? "dark" : "light"}`}>
    <div className="dots" />
    <header><div className="logo">yoxi <span>今日靈感</span></div><div>{n} / 10 · {label}</div></header>
    <div className="heading" style={pop(f, 3)}><div className="eyebrow">{label}</div><h1>{title}</h1></div>
    {children}
    <div className="note">{note}</div>
    <div className="progress"><i style={{width: `${Number(n) * 10}%`}} /></div>
  </AbsoluteFill>;
};

const City: React.FC<{f: number}> = ({f}) => <div className="city">
  <div className="moon" style={{translate: `0 ${-f * .08}px`}} />
  {[180, 270, 225, 350, 250, 315, 195, 285, 225, 330, 245, 290].map((h, i) => <div className="building" key={i} style={{left: `${i * 9 - 2}%`, height: h, opacity: show(f, i * 3)}}><div className="windows" /></div>)}
  <div className="street" /><div className="lane" />
</div>;

const Phone: React.FC<{kind: "home" | "list" | "detail" | "ride"; f: number; delay?: number}> = ({kind, f, delay = 0}) => <div className="phone" style={pop(f, delay)}><div className="speaker" /><div className="screen">
  <div className="status">9:41 <span>●●● 100%</span></div><div className="phone-logo">yoxi <span>⌕</span></div>
  {kind === "home" && <><h3>今天去哪裡？</h3><div className="hero-card">✦ 今日靈感<strong>找到值得出發<br/>的城市日常</strong><small>看看本週末 →</small></div><div className="mini-card">◎ 叫車出發　→</div><div className="mini-card">◇ 我的城市收藏　→</div></>}
  {kind === "list" && <><h3>今日靈感</h3><div className="filters">台北市　 本週末　 戶外</div><div className="event"><div className="event-img"/><b>河畔的午後散步</b><small>週六 14:00 · 城市河岸</small><small>範例活動 · 資訊待核對</small></div><div className="event"><div className="event-img second"/><b>巷弄裡的光影展</b><small>週日 16:00 · 藝文街區</small></div></>}
  {kind === "detail" && <><div className="event-img detail-img"/><h3>河畔的午後散步</h3><p>◷　週六 14:00–17:00</p><p>◎　城市河岸 · 地點待核對</p><p>↗　查看原始來源與交通</p><div className="hint">範例活動 · 資訊待核對</div><div className="phone-cta">前往叫車　→</div></>}
  {kind === "ride" && <><h3>規劃叫車</h3><div className="map"><span>●</span></div><div className="ride-row">上車點 <b>請確認</b></div><div className="ride-row">目的地 <b>城市河岸</b></div><div className="hint">車種、供車與實際價格<br/>以當下畫面為準</div><div className="phone-cta">確認行程　→</div></>}
  <div className="nav">⌂　　 ◇　　 ☰</div>
</div></div>;

const Block: React.FC<{f: number; at: number; no: string; title: string; detail?: string; red?: boolean}> = ({f, at, no, title, detail, red}) => <div className={`block ${red ? "red" : ""}`} style={pop(f, at)}><small>{no}</small><strong>{title}</strong>{detail && <span>{detail}</span>}</div>;

const S1 = () => {const f=useCurrentFrame(); return <Scene n="01" label="THE QUESTION" title="從叫車，到出門靈感" caption="還沒想好去哪裡？讓 yoxi 先給你一點出門靈感。" note="產品概念示意" dark><City f={f}/><div className="opening-question" style={pop(f, 80)}>今天去哪裡<span>？</span></div><div className="opening-phone"><Phone kind="home" f={f}/></div></Scene>};
const S2 = () => {const f=useCurrentFrame(); return <Scene n="02" label="THE FRICTION" title="「想去」常停在出發前" caption="資訊散落各處；時間、地點和交通，都要重新確認。" note="使用情境假設／待驗證"><div className="windows-row"><div className="web" style={pop(f, 6)}><small>活動貼文　•••</small><div className="web-art"/><strong>這週末有什麼活動？</strong><span>收藏了好多貼文</span></div><div className="web" style={pop(f, 18)}><small>票務資訊　•••</small><div className="web-lines">━━━<br/>━━━━━━<br/>━━━━</div><strong>時間還有效嗎？</strong><span>需要再查一次</span></div><div className="web" style={pop(f, 32)}><small>地圖搜尋　•••</small><div className="web-map">◎　目的地？</div><strong>重新輸入地點</strong><span>才能規劃路線</span></div></div><div className="callout" style={pop(f, 90)}>想去 <em>≠</em> 已出發</div></Scene>};
const S3 = () => {const f=useCurrentFrame(); return <Scene n="03" label="THE IDEA" title="讓近期活動，成為出門入口" caption="依城市、日期與興趣探索；活動卡標示來源和更新資訊。" note="產品概念示意 · 活動為虛構範例"><div className="single-phone"><Phone kind="list" f={f}/></div><div className="right-blocks"><div className="flow">首頁　→　活動清單　→　活動詳情</div><Block f={f} at={20} no="01" title="用自己的條件探索" detail="城市／日期／興趣"/><Block f={f} at={60} no="02" title="資訊來源看得見" detail="活動時間、來源、更新狀態" red/></div></Scene>};
const S4 = () => {const f=useCurrentFrame(); return <Scene n="04" label="THE JOURNEY" title="找到想去的，接著規劃怎麼去" caption="前往叫車可帶入目的地；上車點、車種和價格仍由你確認。" note="產品概念示意 · 不保證供車或價格"><div className="phone-pair"><Phone kind="detail" f={f}/><div className="big-arrow" style={pop(f, 40)}>→</div><Phone kind="ride" f={f} delay={55}/></div><div className="pair-note" style={pop(f, 90)}>從活動詳情<br/><em>直接開始</em><br/>出行規劃</div></Scene>};
const S5 = () => {const f=useCurrentFrame(); return <Scene n="05" label="THE RETURN LOOP" title="把城市走成一張收藏卡" caption="每日碎片、探索印記與路線碎片，集成六片或九片城市卡。" note="產品概念示意 · 規則與回饋待核定"><div className="puzzle"><div className="tiles">{["日","常","出","走","城","市"].map((t,i)=><div key={t} style={{opacity: show(f, 20+i*17), scale: interpolate(f,[20+i*17,40+i*17],[.75,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})}}>{t}</div>)}</div><span>我的城市收藏 · 6 / 6</span></div><div className="puzzle-blocks"><Block f={f} at={8} no="01" title="今日碎片" detail="每天選一張卡累積"/><Block f={f} at={36} no="02" title="探索印記" detail="走訪公開景點或活動區域"/><Block f={f} at={64} no="03" title="路線碎片" detail="完成符合資格的訂單" red/><p>收藏為主 · 分享由自己決定</p></div></Scene>};
const S6 = () => {const f=useCurrentFrame(); return <Scene n="06" label="AI & DATA" title="AI 整理資料，不編造活動" caption="先核對來源、時間、地點與狀態；理由只使用核實資訊。" note="提案流程／資料介接待驗證"><div className="pipeline"><Block f={f} at={8} no="01" title="官方公開資料" detail="來源與授權核對"/><b>→</b><Block f={f} at={34} no="02" title="欄位驗證" detail="去重／時間／地點／狀態" red/><b>→</b><Block f={f} at={60} no="03" title="可解釋排序" detail="讓推薦理由說得清楚"/></div><div className="reject" style={pop(f, 90)}>未核實票價或時間　<em>✕ 不補寫</em></div></Scene>};
const S7 = () => {const f=useCurrentFrame(); return <Scene n="07" label="ONE CONTINUOUS JOURNEY" title="把發現與出發接在一起" caption="發現活動、判斷可達性、規劃叫車，再留下城市收藏。" note="差異化主張／待驗證" dark><City f={f}/><div className="journey-line" style={{scale: `${show(f, 15, 90)} 1`}}/><div className="journey"><Block f={f} at={10} no="01" title="發現活動"/><Block f={f} at={28} no="02" title="判斷可達性"/><Block f={f} at={46} no="03" title="前往叫車" red/><Block f={f} at={64} no="04" title="城市收藏"/></div></Scene>};
const S8 = () => {const f=useCurrentFrame(); return <Scene n="08" label="PROVE THE IMPACT" title="用增量完成訂單，驗證價值" caption="比較隨機兩組在 28 天內，每千名使用者的活動相關完成訂單。" note="試點設計 · 尚無實測成效"><div className="ab"><div className="group" style={pop(f, 12)}><b>A</b><strong>對照組</strong><span>● ● ● ● ●</span></div><div className="group" style={pop(f, 30)}><b>B</b><strong>體驗組</strong><span>● ● ● ● ●</span></div><div className="metric" style={pop(f, 55)}><small>28 天／每千名符合資格使用者</small><strong>增量完成訂單</strong><span>同步查看全站訂單，避免誤算成長</span></div></div><div className="guards" style={pop(f, 100)}><span>資訊品質</span><span>叫車失敗</span><span>客服申訴</span><span>新增成本</span></div></Scene>};
const S9 = () => {const f=useCurrentFrame(); return <Scene n="09" label="FROM IDEA TO PILOT" title="先驗證，再決定是否擴大" caption="資料品質、概念測試、技術營運準備完成後，才進入城市試點。" note="時程為提案假設 · 各階段尚未執行"><div className="timeline"><div className="track"/>{[["資料與研究","2 週"],["概念驗證","2 週"],["技術與營運","4–6 週"],["城市試點","4 週"]].map(([t,d],i)=><div className="step" key={t} style={pop(f, 12+i*27)}><div>0{i+1}</div><b>{t}</b><span>{d}</span></div>)}</div><div className="checks" style={pop(f, 112)}>檢查點　<span>資料品質</span><span>圖片授權</span><span>隱私風控</span><span>供車能力</span></div></Scene>};
const S10 = () => {const f=useCurrentFrame(); return <Scene n="10" label="THE INVITATION" title="找到想去的地方，更容易真的出發" caption="yoxi 今日靈感，讓決定去哪的那一刻成為出發的起點。" note="概念提案｜非已上線功能" dark><City f={f}/><div className="orbit" style={{opacity: show(f,4), scale: interpolate(f,[0,100],[.7,1],{extrapolateRight:"clamp"})}}>✦</div><div className="closing" style={pop(f, 40)}><div>yoxi</div><strong>今日靈感</strong><span>城市生活的下一個入口</span></div></Scene>};

export const YoxiVideo: React.FC = () => <AbsoluteFill><Series>
  <Series.Sequence durationInFrames={durations[0]}><S1/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[1]}><S2/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[2]}><S3/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[3]}><S4/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[4]}><S5/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[5]}><S6/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[6]}><S7/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[7]}><S8/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[8]}><S9/></Series.Sequence>
  <Series.Sequence durationInFrames={durations[9]}><S10/></Series.Sequence>
</Series></AbsoluteFill>;
