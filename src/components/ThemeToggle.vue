<template>
  <button @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="rounded-full p-2 bg-white/20 hover:bg-white/40 dark:bg-gray-800/40 dark:hover:bg-gray-700/60 shadow transition">
    <span v-if="isDark" class="inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95-7.07l-.71.71M6.34 6.34l-.71-.71" /></svg>
    </span>
    <span v-else class="inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isDark = ref(false);

const setTheme = (dark) => {
  isDark.value = dark;
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};

const toggleTheme = () => setTheme(!isDark.value);

onMounted(() => {
  const saved = localStorage.getItem('theme');
  setTheme(saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches));
});
</script> 