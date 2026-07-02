<template>
  <UHeader
    class="bg-yoxi-white"
    :ui="{
      content: 'bg-yoxi-white',
      body: 'bg-yoxi-blue-500 h-screen',
    }"
  >
    <template #left>
      <NuxtLink to="/">
        <NuxtImg src="/yoxi-logo-red.svg" alt="Yoxi Logo" class="h-6 w-auto" />
      </NuxtLink>
    </template>
  </UHeader>
</template>
<script setup lang="ts"></script>
