<template>
  <h3>Buttons</h3>
  <div class="grid grid-cols-8 gap-4">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="info">info</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
  </div>
  <div class="mb-8" />
  <h3>Other Buttons</h3>
  <div class="grid grid-cols-8 gap-4">
    <Button color="primary" variant="outline">Outline</Button>
    <Button color="primary" disabled>Disabled</Button>
    <Button color="primary" variant="outline" disabled>Outline Disabled</Button>
    <Button color="primary" icon="add">Left Icon Button</Button>
    <Button color="primary" icon="add">Right Icon Button</Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>
