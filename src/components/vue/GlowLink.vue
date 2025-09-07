<template>
  <a :href="href" :target="external ? '_blank' : undefined" rel="noopener" class="btn">
    <span class="dot" v-if="led"/>
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{ href:string; external?:boolean; led?:boolean }>()
</script>

<style scoped>
.btn{display:inline-flex;gap:.55rem;align-items:center;padding:.7rem 1rem;
  border:1px solid var(--ink-line);border-radius:14px;background:#0f1115;color:#fff;
  transition:box-shadow .2s, transform .1s}
.btn:hover{box-shadow:0 0 14px rgba(255,255,255,.12);transform:translateY(-1px)}
.dot{width:.5rem;height:.5rem;border-radius:999px;background:var(--ink-blue);
  box-shadow:0 0 12px color-mix(in oklab,var(--ink-blue) 80%, transparent)}
</style>
