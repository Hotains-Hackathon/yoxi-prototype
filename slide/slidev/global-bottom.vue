<script setup>
import logoUrl from '../yoxiLogoRed.svg'
</script>

<template>
  <footer class="brand-footer">
    <img :src="logoUrl" alt="yoxi" />
    <span>{{ String($nav.currentPage).padStart(2, '0') }}</span>
  </footer>
</template>

<style>
.brand-footer{position:fixed;left:76px;right:76px;bottom:20px;display:flex;justify-content:space-between;align-items:center;z-index:30;pointer-events:none}
.brand-footer img{width:70px;height:20px;object-fit:contain;object-position:left center}
.brand-footer span{color:#928b88;font:11px Arial,sans-serif;letter-spacing:.12em}
.product-stage{position:absolute;inset:0}
.product-stage .activity-screen{position:absolute;top:190px;right:90px;width:336px;height:320px;box-sizing:border-box;padding:18px;background:#fff;border:1px solid #d7d0cc;box-shadow:0 16px 34px rgba(0,0,0,.09)}
.product-stage .screen-top{font-weight:800;font-size:18px}.product-stage .screen-top span{float:right;font-size:10px;color:#777;font-weight:500;margin-top:5px}
.product-stage .activity-hero{height:96px;margin-top:12px;background:#e51c23;color:#fff;padding:15px;box-sizing:border-box;font-size:25px;line-height:1.2;font-weight:800;display:flex;align-items:flex-end}
.product-stage .activity-meta{margin-top:13px;font-size:14px;line-height:1.55}.product-stage .activity-source{margin-top:9px;color:#777;font-size:10px}
.product-stage .ride-cta{position:absolute;left:18px;right:18px;bottom:18px;padding:10px 13px;background:#e51c23;color:#fff;font-weight:800}.product-stage .ride-cta span{float:right}
.card-callout{position:absolute;left:105px;width:275px;color:#e51c23;font-size:14px;font-weight:800;white-space:nowrap}.card-callout::after{content:"";display:block;height:1px;background:#e51c23;margin-top:8px;width:100%}
.card-callout.time{top:320px}.card-callout.source{top:395px}.card-callout.ride{top:460px}
</style>
