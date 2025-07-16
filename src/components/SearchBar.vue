<template>
  <div class="flex flex-col items-center w-full">
    <input
      v-model="query"
      @input="onSearch"
      type="text"
      placeholder="Search documentation, e.g. 'how to authenticate'..."
      class="w-full max-w-xl px-4 py-3 rounded-lg border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
    <div v-if="results.length" class="mt-4 w-full max-w-xl bg-white dark:bg-gray-900 rounded-lg shadow divide-y divide-blue-100 dark:divide-gray-800">
      <div v-for="(result, i) in results" :key="i" class="p-4 hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer">
        <div class="font-semibold text-blue-700 dark:text-blue-300">{{ result.title }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ result.snippet }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const query = ref('');
const results = ref([]);

const mockResults = [
  { title: 'How to authenticate', snippet: 'Learn how to implement authentication in your app with step-by-step examples.' },
  { title: 'API Docs: Auth Endpoints', snippet: 'Reference for all authentication-related API endpoints.' },
  { title: 'Component: LoginForm.vue', snippet: 'Props, events, and usage for the LoginForm component.' },
];

function onSearch() {
  if (query.value.length > 2) {
    results.value = mockResults.filter(r => r.title.toLowerCase().includes(query.value.toLowerCase()));
  } else {
    results.value = [];
  }
}
</script> 