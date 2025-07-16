<template>
  <div class="relative w-full max-w-2xl mx-auto">
    <!-- Search Input -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
      <input
        ref="searchInput"
        v-model="query"
        @input="onSearch"
        @focus="showResults = true"
        @keydown="handleKeydown"
        type="text"
        placeholder="Search documentation, APIs, components... (try 'authentication' or 'hooks')"
        class="w-full pl-12 pr-12 py-4 text-lg rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-kiro-500 dark:focus:border-kiro-400 focus:ring-4 focus:ring-kiro-500/20 transition-all duration-200 shadow-lg"
      />
      <div class="absolute inset-y-0 right-0 pr-4 flex items-center">
        <div v-if="isSearching" class="animate-spin h-5 w-5 text-kiro-500">
          <svg fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <kbd v-else class="hidden sm:inline-flex items-center px-2 py-1 border border-gray-200 dark:border-gray-600 rounded text-xs font-sans font-medium text-gray-400 dark:text-gray-500">
          ⌘K
        </kbd>
      </div>
    </div>

    <!-- Search Results -->
    <div v-if="showResults && (results.length > 0 || query.length > 0)" 
         class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-slide-down">
      
      <!-- Quick Suggestions -->
      <div v-if="query.length === 0" class="p-4 border-b border-gray-100 dark:border-gray-700">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Quick Suggestions</h4>
        <div class="grid grid-cols-2 gap-2">
          <button v-for="suggestion in quickSuggestions" 
                  :key="suggestion"
                  @click="selectSuggestion(suggestion)"
                  class="text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            {{ suggestion }}
          </button>
        </div>
      </div>

      <!-- Search Results -->
      <div v-if="results.length > 0" class="max-h-96 overflow-y-auto">
        <div v-for="(result, index) in results" 
             :key="result.id"
             @click="selectResult(result)"
             @mouseenter="selectedIndex = index"
             class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors"
             :class="{ 'bg-kiro-50 dark:bg-kiro-900/20': selectedIndex === index }">
          
          <div class="flex items-start space-x-3">
            <!-- Result Icon -->
            <div class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                 :class="result.type === 'api' ? 'bg-purple-100 dark:bg-purple-900/30' :
                        result.type === 'component' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        result.type === 'tutorial' ? 'bg-green-100 dark:bg-green-900/30' :
                        'bg-gray-100 dark:bg-gray-700'">
              <component :is="getResultIcon(result.type)" 
                        class="w-4 h-4"
                        :class="result.type === 'api' ? 'text-purple-600 dark:text-purple-400' :
                               result.type === 'component' ? 'text-blue-600 dark:text-blue-400' :
                               result.type === 'tutorial' ? 'text-green-600 dark:text-green-400' :
                               'text-gray-600 dark:text-gray-400'" />
            </div>
            
            <!-- Result Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white truncate" v-html="highlightMatch(result.title)"></h4>
                <span class="text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2"
                      :class="result.type === 'api' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                             result.type === 'component' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                             result.type === 'tutorial' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                             'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'">
                  {{ result.type }}
                </span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2" v-html="highlightMatch(result.snippet)"></p>
              <div class="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{{ result.category }}</span>
                <span class="mx-2">•</span>
                <span>Updated {{ result.lastUpdated }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-else-if="query.length > 0" class="p-8 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-1">No results found</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Try searching for "authentication", "components", or "API"</p>
      </div>

      <!-- Search Footer -->
      <div class="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
        <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div class="flex items-center space-x-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <div class="flex items-center">
            <span>Powered by</span>
            <span class="ml-1 font-semibold text-kiro-600 dark:text-kiro-400">Kiro AI</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div v-if="showResults" 
         @click="showResults = false"
         class="fixed inset-0 z-40"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const query = ref('')
const results = ref([])
const showResults = ref(false)
const isSearching = ref(false)
const selectedIndex = ref(0)
const searchInput = ref(null)

const quickSuggestions = [
  'Getting Started',
  'API Authentication', 
  'Component Library',
  'Kiro Hooks Setup',
  'Specs Configuration',
  'Steering Guidelines'
]

const mockResults = [
  {
    id: 1,
    title: 'API Authentication Guide',
    snippet: 'Learn how to authenticate with ScaffoldSmart API using Bearer tokens and API keys.',
    type: 'api',
    category: 'Authentication',
    lastUpdated: '2 min ago',
    url: '/docs#authentication'
  },
  {
    id: 2,
    title: 'KiroFeatureCard Component',
    snippet: 'Interactive card component showcasing Kiro\'s three pillars with hover effects and gradient styling.',
    type: 'component',
    category: 'UI Components',
    lastUpdated: '5 min ago',
    url: '/docs#components'
  },
  {
    id: 3,
    title: 'Setting Up Kiro Hooks',
    snippet: 'Configure intelligent hooks that keep your documentation synchronized with code changes automatically.',
    type: 'tutorial',
    category: 'Configuration',
    lastUpdated: '1 hour ago',
    url: '/docs#tutorials'
  },
  {
    id: 4,
    title: 'POST /api/v1/docs',
    snippet: 'Create a new documentation project with Kiro specs, hooks, and steering configuration.',
    type: 'api',
    category: 'API Reference',
    lastUpdated: '10 min ago',
    url: '/api#docs-create'
  },
  {
    id: 5,
    title: 'LiveCodeDemo Component',
    snippet: 'Animated demonstration component showing real-time documentation updates with code editor simulation.',
    type: 'component',
    category: 'Demo Components',
    lastUpdated: '15 min ago',
    url: '/docs#components'
  },
  {
    id: 6,
    title: 'Configuring Auto-Hooks Tutorial',
    snippet: 'Set up intelligent hooks that keep your documentation synchronized with code changes.',
    type: 'tutorial',
    category: 'Advanced Setup',
    lastUpdated: '30 min ago',
    url: '/docs#tutorials'
  }
]

const onSearch = async () => {
  if (query.value.length === 0) {
    results.value = []
    selectedIndex.value = 0
    return
  }

  isSearching.value = true
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  if (query.value.length > 0) {
    results.value = mockResults.filter(result => 
      result.title.toLowerCase().includes(query.value.toLowerCase()) ||
      result.snippet.toLowerCase().includes(query.value.toLowerCase()) ||
      result.category.toLowerCase().includes(query.value.toLowerCase())
    )
    selectedIndex.value = 0
  } else {
    results.value = []
  }
  
  isSearching.value = false
}

const selectSuggestion = (suggestion) => {
  query.value = suggestion
  onSearch()
}

const selectResult = (result) => {
  // Navigate to result URL
  if (result.url.startsWith('/')) {
    window.location.href = result.url
  }
  showResults.value = false
  query.value = ''
}

const highlightMatch = (text) => {
  if (!query.value) return text
  const regex = new RegExp(`(${query.value})`, 'gi')
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>')
}

const getResultIcon = (type) => {
  const icons = {
    api: 'ApiIcon',
    component: 'ComponentIcon', 
    tutorial: 'TutorialIcon',
    docs: 'DocsIcon'
  }
  return icons[type] || 'DocsIcon'
}

const handleKeydown = (event) => {
  if (!showResults.value) return
  
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      selectedIndex.value = Math.min(selectedIndex.value + 1, results.value.length - 1)
      break
    case 'ArrowUp':
      event.preventDefault()
      selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
      break
    case 'Enter':
      event.preventDefault()
      if (results.value[selectedIndex.value]) {
        selectResult(results.value[selectedIndex.value])
      }
      break
    case 'Escape':
      showResults.value = false
      searchInput.value?.blur()
      break
  }
}

// Global keyboard shortcut
const handleGlobalKeydown = (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    event.preventDefault()
    searchInput.value?.focus()
    showResults.value = true
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<!-- Icon Components -->
<script>
const ApiIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>
  `
}

const ComponentIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
    </svg>
  `
}

const TutorialIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
    </svg>
  `
}

const DocsIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  `
}

export { ApiIcon, ComponentIcon, TutorialIcon, DocsIcon }
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

mark {
  background-color: theme('colors.yellow.200');
  color: inherit;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

.dark mark {
  background-color: theme('colors.yellow.800');
}
</style> 