---
theme: default
title: yoxi 今日靈感｜活動探索與專屬景點拼圖
class: yoxi-deck
transition: fade
drawings:
  persist: false
duration: 12min
fonts:
  sans: Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif
---

<div class="cover-grid"></div>
<div class="cover-disc" v-motion :initial="{scale:.72,opacity:0}" :enter="{scale:1,opacity:1,transition:{duration:650}}"></div>
<div class="cover-content">
  <div class="cover-kicker">CONCEPT PROPOSAL · 2026.09</div>
  <h1>今日靈感</h1>
  <p class="cover-subtitle">活動探索與專屬景點拼圖</p>
  <p class="cover-statement">每天打開 yoxi 找到去得成的城市活動<br>想出發時，直接規劃叫車</p>
</div>
<div class="cover-aside">城市日常的下一個入口</div>

---
transition: slide-left
---

<div class="eyebrow">THE OPPORTUNITY</div>
<h1>讓 yoxi 在不搭車的日子<br>也有被打開的理由</h1>
<div class="opportunity-layout">
  <div class="big-quote">「今天去哪裡？」</div>
  <div class="opportunity-copy">
    <p>活動資訊分散在不同平台。決定出發後，還要重查交通、重新輸入目的地。</p>
    <p>活動資訊可以成為日常入口，將探索、可達性判斷與叫車串成同一段旅程。</p>
  </div>
</div>
<div class="red-rule"></div>
<p class="bottom-note">提案目標：驗證活動內容是否帶來增量完成訂單</p>

---
transition: fade
---

<div class="eyebrow">AUDIENCE &amp; QUESTIONS</div>
<h1>先驗證誰需要它，以及<br>什麼會促成出發</h1>
<div class="two-col spacious">
  <div>
    <div class="number">01</div>
    <h2>首輪研究對象</h2>
    <p class="lead">會搜尋週末或下班後活動、偶爾叫車，也願意分享生活的成年人</p>
  </div>
  <div class="question-stack">
    <div v-click class="question-row"><span>活動資訊</span><strong>是否仍有效？</strong></div>
    <div v-click class="question-row"><span>決定出發後</span><strong>叫車是否順手？</strong></div>
    <div v-click class="question-row"><span>活動結束後</span><strong>還會再回來嗎？</strong></div>
  </div>
</div>

---
transition: slide-up
---

<div class="eyebrow">THE EXPERIENCE</div>
<h1>從靈感到抵達，一條連續流程</h1>
<div class="journey">
  <div class="journey-step" v-click><span class="step-no">01</span><h3>今日靈感</h3><p>依城市、日期、興趣與可達性瀏覽近期活動</p></div>
  <div class="journey-line" v-click></div>
  <div class="journey-step" v-click><span class="step-no">02</span><h3>活動詳情</h3><p>確認時間、地點、來源與交通資訊，加入收藏</p></div>
  <div class="journey-line" v-click></div>
  <div class="journey-step" v-click><span class="step-no">03</span><h3>前往叫車</h3><p>帶入目的地與活動 ID，使用者仍可確認價格與車種</p></div>
</div>
<div class="journey-caption">活動卡清楚標示來源、更新時間、日期與售票資訊</div>

---
transition: fade
---

<div class="eyebrow">PRODUCT MOMENT</div>
<h1>活動卡先回答<br>「現在去得成嗎？」</h1>
<div class="product-stage">
  <div class="activity-screen" v-motion :initial="{x:65,opacity:0}" :enter="{x:0,opacity:1,transition:{duration:500}}">
    <div class="screen-top">今日靈感 <span>台北 · 本週末</span></div>
    <div class="activity-hero">秋日午後<br>城市散步</div>
    <div class="activity-meta"><b>10.04 Sat · 14:00</b><br>大稻埕碼頭｜距你 3.2 km</div>
    <div class="activity-source">來源：官方活動資料 · 2 小時前更新</div>
    <div class="ride-cta">前往叫車 <span>→</span></div>
  </div>
  <div class="card-callout time" v-click>地點與時間先核對</div>
  <div class="card-callout source" v-click>原始來源可追溯</div>
  <div class="card-callout ride" v-click>目的地直接帶入叫車</div>
</div>

---
transition: slide-left
---

<div class="eyebrow">RETURN LOOP</div>
<h1>一張城市拼圖<br>留下下一次回來的理由</h1>
<div class="puzzle-layout">
  <div class="puzzle-board" v-motion :initial="{scale:.9,opacity:0}" :enter="{scale:1,opacity:1}">
    <div class="tile t1"></div><div class="tile"></div><div class="tile t3"></div>
    <div class="tile"></div><div class="tile t5"></div><div class="tile"></div>
    <div class="tile t7"></div><div class="tile"></div><div class="tile t9"></div>
  </div>
  <div class="puzzle-copy">
    <div v-click class="reward-item"><span>每天選卡</span><b>今日碎片</b></div>
    <div v-click class="reward-item"><span>抵達公開景點或活動區</span><b>探索印記</b></div>
    <div v-click class="reward-item"><span>完成合格活動目的地訂單</span><b>路線碎片</b></div>
    <p class="muted">一張卡由 6 或 9 片構成。完成後收藏、生成徽章或自行分享圖卡。</p>
  </div>
</div>

---
transition: fade
---

<div class="eyebrow">REWARD DESIGN</div>
<h1>收藏是主要回饋<br>折扣只在少數時刻出現</h1>
<div class="reward-spectrum">
  <div class="spectrum-low" v-click><span class="disc-mini"></span><h2>日常累積</h2><p>今日碎片與探索印記<br>每地點、每期最多一次</p></div>
  <div class="spectrum-path" v-click></div>
  <div class="spectrum-high" v-click><span class="gold-mini"></span><h2>少量驚喜</h2><p>金色路線碎片或完成系列<br>才可能附搭車金或合作權益</p></div>
</div>
<div class="guardrail">分享本身不發券｜圖卡預設不公開｜異常定位與疑似多帳號進入複核</div>

---
transition: slide-up
---

<div class="eyebrow">AI &amp; DATA</div>
<h1>AI 整理資料<br>不替活動編造資訊</h1>
<div class="data-flow">
  <div v-click class="flow-item">官方活動資料<br><small>文化部／觀光署</small></div><div v-click class="flow-arrow">→</div>
  <div v-click class="flow-item">來源、時間、地點檢查<br><small>去重、座標與狀態驗證</small></div><div v-click class="flow-arrow">→</div>
  <div v-click class="flow-item accent">可解釋排序<br><small>活動清單與詳情</small></div><div v-click class="flow-arrow">→</div>
  <div v-click class="flow-item">叫車事件<br><small>訂單歸因與發片</small></div>
</div>

---
transition: fade
---

<div class="eyebrow">RECOMMENDATION</div>
<h1>第一版用規則排序<br>每一個理由都能說明</h1>
<div class="ranking-layout">
  <div><p class="lead">從使用者明示興趣與收藏出發，再納入日期、可達性、新鮮度和來源品質。</p><p class="muted">事件累積足夠後，才比較學習排序模型。</p></div>
  <div class="weights">
    <div v-click class="weight"><span style="width:100%"></span><b>35%</b><em>興趣／收藏</em></div>
    <div v-click class="weight"><span style="width:71%"></span><b>25%</b><em>日期時間</em></div>
    <div v-click class="weight"><span style="width:57%"></span><b>20%</b><em>可達性</em></div>
    <div v-click class="weight"><span style="width:29%"></span><b>10%</b><em>新鮮度</em></div>
    <div v-click class="weight"><span style="width:29%"></span><b>10%</b><em>來源品質</em></div>
  </div>
</div>

---
transition: slide-left
---

<div class="eyebrow">GOVERNANCE</div>
<h1>資料的範圍與使用方式<br>先對使用者說清楚</h1>
<div class="governance-grid">
  <div v-click><span class="governance-no">A</span><h2>資料最小化</h2><p>未登入只用選定城市與時間；登入且同意後才用收藏與瀏覽。</p></div>
  <div v-click><span class="governance-no">B</span><h2>不確定就不寫</h2><p>票價、時間、地點或取消狀態未核實時，不生成內容。</p></div>
  <div v-click><span class="governance-no">C</span><h2>高風險內容複核</h2><p>高風險活動不做個人化推播，爭議內容下架複核。</p></div>
</div>

---
transition: fade
---

<div class="eyebrow">DIFFERENTIATION</div>
<h1>要驗證的差異<br>是一段完整的出發體驗</h1>
<div class="differentiation">
  <div v-click class="d-item"><span>有來源</span><b>當日活動</b></div><div v-click class="d-join">+</div>
  <div v-click class="d-item"><span>可理解</span><b>出行建議</b></div><div v-click class="d-join">+</div>
  <div v-click class="d-item"><span>直接規劃</span><b>yoxi 叫車</b></div><div v-click class="d-join">+</div>
  <div v-click class="d-item red"><span>個人累積</span><b>城市收藏</b></div>
</div>

---
transition: slide-up
---

<div class="eyebrow">MEASUREMENT</div>
<h1>用增量完成訂單<br>檢驗提案是否有價值</h1>
<div class="metric-hero"><span>主要指標</span><strong>28 天內，每 1,000 名符合資格使用者<br>完成的活動相關訂單數差值</strong><small>隨機實驗組 vs. 對照組</small></div>
<div class="funnel-row"><span>活動曝光</span><i></i><span>詳情／收藏</span><i></i><span>叫車啟動</span><i></i><span class="highlight">完成訂單</span></div>

---
transition: fade
---

<div class="eyebrow">ECONOMICS</div>
<h1>先攤開成本<br>再討論規模化</h1>
<div class="economics-layout">
  <div class="equation">增量完成訂單 × 單筆貢獻<br><span>−</span> 回饋折抵 − 插畫／資料／AI／人工等新增成本</div>
  <div class="cost-example"><div class="cost-number">NT$9,000</div><p>1,000 張 NT$30 回饋<br>使用率 30% 的試算</p></div>
</div>

---
transition: slide-left
---

<div class="eyebrow">ROADMAP</div>
<h1>12–14 週的提案路線</h1>
<div class="timeline">
  <div v-click class="timeline-item"><b>2 週</b><h3>資料與研究</h3><p>資料抽樣與使用者訪談</p></div>
  <div v-click class="timeline-item"><b>2 週</b><h3>概念驗證</h3><p>活動清單、叫車入口與拼圖偏好</p></div>
  <div v-click class="timeline-item"><b>4–6 週</b><h3>技術與營運準備</h3><p>串接、歸因、風控與客服確認</p></div>
  <div v-click class="timeline-item"><b>4 週</b><h3>城市試點</h3><p>檢視訂單、品質、成本與客訴</p></div>
</div>
<div class="timeline-base"></div>

---
transition: fade
---

<div class="end-disc"></div>
<div class="end-content">
  <div class="eyebrow">CLOSING</div>
  <h1>每一段城市移動<br>都可以從一個靈感開始</h1>
  <p>以可靠的活動資訊，讓「今天要去哪裡」自然走向「現在就出發」。</p>
  <div class="end-tag">今日靈感 · 概念提案</div>
</div>
