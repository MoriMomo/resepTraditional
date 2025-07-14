<template>
  <header class="py-4 border-b border-food-indianred bg-food-sambal">
    <nav class="container flex items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg
          width="56px"
          densities="1x"
          src="/icon-green.png"
          alt="Nuxtcipes Logo"
          format="webp"
        />
        <span class="text-3xl font-bold text-food-rice font-montserrat"
          >Rumah Makan</span
        >
      </NuxtLink>
      <ul
        class="flex gap-6 ml-auto text-xl font-bold text-food-rice font-sans capitalize"
      >
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";
</script>

<style scoped>
</style>