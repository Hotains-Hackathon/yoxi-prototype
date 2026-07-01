<template>
  <UButton
    :color="color"
    :data-color="color"
    :class="$attrs.class"
    :variant="variant"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </UButton>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    color?:
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "error"
      | "neutral";
    variant?: "solid" | "outline" | "soft" | "ghost" | "link";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    color: "primary",
    variant: "solid",
    size: "md",
    loading: false,
    disabled: false,
  },
);
</script>

<style lang="scss" scoped>
button[data-color="secondary"] {
  color: var(--color-brand-800);
}
</style>
