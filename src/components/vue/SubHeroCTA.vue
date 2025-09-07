<template>
  <section class="wrap">
    <GlowLink href="/artists" led>View Artists</GlowLink>
    <GlowLink href="/gallery">Portfolio</GlowLink>
    <GlowLink href="/services">Studio Policies</GlowLink>
    <GlowLink href="https://instagram.com/cursedinksociety?utm_source=site&utm_medium=cta&utm_campaign=hero_strip" external led>Instagram</GlowLink>
    <button class="ghost" @click="open=true">Contact</button>

    <ContactModal v-if="open" @close="open=false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GlowLink from './GlowLink.vue'
import ContactModal from './ContactModal.vue'

const open = ref(false)
</script>

<style scoped>
.wrap{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:center;
  padding:1rem 1.25rem;margin:0 auto;max-width:800px}
.ghost{padding:.7rem 1rem;border:1px dashed var(--ink-line);border-radius:14px;
  background:transparent;color:#fff;cursor:pointer;transition:border-style .2s, box-shadow .2s}
.ghost:hover{border-style:solid;box-shadow:0 0 10px rgba(255,255,255,.1)}
</style>
