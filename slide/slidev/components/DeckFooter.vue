<script setup>
defineProps({
  page: { type: Number, default: 1 },
  inverse: { type: Boolean, default: false },
})
</script>

<template>
  <footer class="deck-footer" :class="{ inverse }">
    <span class="footer-wordmark">yoxi</span>
    <span class="footer-page">{{ String(page).padStart(2, '0') }}</span>
  </footer>
</template>

<style>
.metric-hero { padding:22px 34px; }
.metric-hero strong { font-size:25px; }
.funnel-row { margin-top:24px; }
.deck-footer { position:fixed; bottom:20px; left:76px; right:76px; z-index:10; display:flex; align-items:center; justify-content:space-between; pointer-events:none; }
.footer-wordmark { color:#e51c23; font-family:Arial, sans-serif; font-size:20px; line-height:1; font-weight:900; font-style:italic; letter-spacing:-1.6px; }
.footer-page { color:#928b88; font-size:11px; font-family:Arial, sans-serif; letter-spacing:.12em; }
.inverse .footer-wordmark,.inverse .footer-page { color:#fff; }
</style>
