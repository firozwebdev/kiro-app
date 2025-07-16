<template>
  <section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white transition-colors">
    <div class="max-w-2xl text-center p-8 rounded-xl bg-white/10 shadow-xl backdrop-blur-md">
      <img src="/vite.svg" alt="Kiro Logo" class="mx-auto w-20 mb-6 drop-shadow-lg" />
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Kiro Smart Documentation Hub</h1>
      <p class="text-lg md:text-xl mb-6 font-medium text-blue-200">AI-Powered Knowledge Management for Development Teams</p>
      <div class="flex flex-wrap gap-4 justify-center mb-8">
        <router-link to="/docs" class="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition">Live Docs</router-link>
        <router-link to="/demo" class="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition">Demo</router-link>
      </div>
      <p class="text-base text-blue-100">Contest Category: <span class="font-bold">Productivity & Workflow Tools</span></p>
    </div>
    <div class="absolute top-4 right-4">
      <ThemeToggle />
    </div>
  </section>
</template>

<script setup>
import ThemeToggle from '../components/ThemeToggle.vue';
</script> 