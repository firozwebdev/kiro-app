<template>
  <section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <div class="max-w-3xl w-full p-8 rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-xl backdrop-blur-md">
      <h2 class="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Live Documentation</h2>
      <SearchBar />
      <div class="mt-8">
        <!-- Live docs content will go here -->
        <p class="text-lg text-gray-700 dark:text-gray-200">Docs will auto-update as you work. (Demo content coming soon!)</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue';
</script> 