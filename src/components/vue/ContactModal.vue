<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="panel">
      <h3>Contact Cursed Ink Society</h3>
      <p class="muted">DM us on Instagram or send an inquiry:</p>
      <div class="grid">
        <GlowLink href="https://instagram.com/cursedinksociety?utm_source=site&utm_medium=cta&utm_campaign=contact_modal" external led>DM on Instagram</GlowLink>
        <GlowLink href="mailto:hello@cursedinksociety.com">Email</GlowLink>
        <GlowLink href="tel:+1-985-555-0123">Call/Text</GlowLink>
      </div>
      <button class="close" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlowLink from './GlowLink.vue'

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(6px);z-index:60}
.panel{max-width:520px;margin:10vh auto;background:var(--ink-card);border:1px solid var(--ink-line);
  border-radius:18px;padding:1.2rem 1.1rem;box-shadow:inset 0 0 80px rgba(255,255,255,.03)}
h3{font-size:1.25rem;font-weight:800;margin-bottom:.25rem;color:#fff}
.muted{color:#9CA3AF;margin-bottom:.8rem}
.grid{display:grid;gap:.5rem;grid-template-columns:1fr}
.close{margin-top:.8rem;width:100%;padding:.6rem;border-radius:12px;border:1px solid var(--ink-line);background:#0f1115;color:#fff;cursor:pointer;transition:box-shadow .2s}
.close:hover{box-shadow:0 0 10px rgba(255,255,255,.1)}
@media(min-width:560px){.grid{grid-template-columns:repeat(3,1fr)}}
</style>
