<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Navigation />
    
    <!-- Header -->
    <section class="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8">
          <div class="inline-flex items-center px-4 py-2 bg-kiro-500/10 border border-kiro-500/20 rounded-full mb-4">
            <svg class="w-5 h-5 text-kiro-600 dark:text-kiro-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="text-kiro-700 dark:text-kiro-300 font-semibold">Live Documentation</span>
          </div>
          
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ScaffoldSmart Documentation Hub
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience documentation that stays perfectly synchronized with your code. 
            Search, explore, and discover everything you need to build amazing applications.
          </p>
        </div>
        
        <!-- Enhanced Search -->
        <div class="max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <!-- Quick Navigation -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Navigation</h3>
              <nav class="space-y-2">
                <a v-for="section in navigationSections" 
                   :key="section.id"
                   :href="`#${section.id}`"
                   @click="scrollToSection(section.id)"
                   class="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-kiro-600 dark:hover:text-kiro-400 hover:bg-kiro-50 dark:hover:bg-kiro-900/20 rounded-lg transition-colors"
                   :class="{ 'text-kiro-600 dark:text-kiro-400 bg-kiro-50 dark:bg-kiro-900/20': activeSection === section.id }">
                  <component :is="section.icon" class="w-4 h-4 mr-3 flex-shrink-0" />
                  {{ section.title }}
                </a>
              </nav>
            </div>

            <!-- Documentation Stats -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Documentation Health</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Coverage</span>
                  <div class="flex items-center">
                    <div class="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                      <div class="w-14 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span class="text-sm font-medium text-green-600">87%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Up to Date</span>
                  <div class="flex items-center">
                    <div class="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                      <div class="w-16 h-2 bg-kiro-500 rounded-full"></div>
                    </div>
                    <span class="text-sm font-medium text-kiro-600">100%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Links Valid</span>
                  <div class="flex items-center">
                    <div class="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                      <div class="w-15 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span class="text-sm font-medium text-blue-600">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Main Documentation Content -->
        <main class="lg:col-span-3 space-y-8">
          <!-- Getting Started Section -->
          <section id="getting-started" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Getting Started</h2>
              <div class="ml-auto flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Auto-updated 2 minutes ago
              </div>
            </div>
            
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Welcome to ScaffoldSmart Documentation Hub! This guide will help you understand how Kiro's three pillars work together to create self-maintaining documentation.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8">
                <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">1. Define Specs</h3>
                  <p class="text-blue-700 dark:text-blue-300 text-sm">Create specifications that describe what documentation you need</p>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 class="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">2. Setup Hooks</h3>
                  <p class="text-green-700 dark:text-green-300 text-sm">Configure automation to keep docs synchronized with code</p>
                </div>
                <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h3 class="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">3. Apply Steering</h3>
                  <p class="text-orange-700 dark:text-orange-300 text-sm">Maintain consistent quality and style across all content</p>
                </div>
              </div>

              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Start</h3>
              <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-6">
                <pre class="text-green-400 text-sm"><code># Install ScaffoldSmart CLI
npm install -g @scaffoldsmart/cli

# Initialize your documentation hub
scaffoldsmart init

# Start the development server
scaffoldsmart dev</code></pre>
              </div>
            </div>
          </section>

          <!-- API Documentation Section -->
          <section id="api-docs" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">API Documentation</h2>
              <div class="ml-auto flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Generated from OpenAPI spec
              </div>
            </div>

            <div class="space-y-6">
              <!-- API Endpoint Example -->
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-3">
                        GET
                      </span>
                      <code class="text-sm font-mono text-gray-900 dark:text-gray-100">/api/users/{id}</code>
                    </div>
                    <button class="text-sm text-kiro-600 dark:text-kiro-400 hover:text-kiro-700 dark:hover:text-kiro-300">
                      Try it out
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Retrieve user profile information by user ID.</p>
                  
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Parameters</h4>
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                    <div class="text-sm">
                      <span class="font-mono text-purple-600 dark:text-purple-400">id</span>
                      <span class="text-gray-500 mx-2">string</span>
                      <span class="text-red-500">required</span>
                      <p class="text-gray-600 dark:text-gray-300 mt-1">User ID to retrieve</p>
                    </div>
                  </div>

                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response Example</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-100"><code>{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://example.com/avatar.jpg",
  "createdAt": "2024-01-15T10:30:00Z"
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Component Documentation Section -->
          <section id="components" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Component Library</h2>
              <div class="ml-auto flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Auto-generated from Vue components
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Component Card -->
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">KiroFeatureCard</h3>
                  <span class="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                    Stable
                  </span>
                </div>
                
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Interactive card component showcasing Kiro's three pillars with hover effects and gradient styling.
                </p>

                <div class="space-y-3">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Props</h4>
                    <div class="text-xs space-y-1">
                      <div class="flex justify-between">
                        <span class="font-mono text-purple-600 dark:text-purple-400">title</span>
                        <span class="text-gray-500">String</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-mono text-purple-600 dark:text-purple-400">type</span>
                        <span class="text-gray-500">'specs' | 'hooks' | 'steering'</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="font-mono text-purple-600 dark:text-purple-400">features</span>
                        <span class="text-gray-500">Array&lt;String&gt;</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Events</h4>
                    <div class="text-xs">
                      <div class="flex justify-between">
                        <span class="font-mono text-green-600 dark:text-green-400">@action</span>
                        <span class="text-gray-500">Emitted when action button is clicked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Another Component Card -->
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">LiveCodeDemo</h3>
                  <span class="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                    Interactive
                  </span>
                </div>
                
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Animated demonstration component showing real-time documentation updates with code editor simulation.
                </p>

                <div class="space-y-3">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Features</h4>
                    <div class="text-xs space-y-1 text-gray-600 dark:text-gray-300">
                      <div>• Auto-playing demo steps</div>
                      <div>• Syntax highlighted code</div>
                      <div>• Real-time documentation updates</div>
                      <div>• Interactive controls</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Tutorials Section -->
          <section id="tutorials" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Interactive Tutorials</h2>
              <div class="ml-auto flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Generated from specs
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Setting Up Kiro Specs</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Learn how to create your first specification file and generate documentation automatically.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">15 min • Beginner</span>
                  <button class="text-sm text-kiro-600 dark:text-kiro-400 hover:text-kiro-700 dark:hover:text-kiro-300 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>

              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Configuring Auto-Hooks</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Set up intelligent hooks that keep your documentation synchronized with code changes.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">20 min • Intermediate</span>
                  <button class="text-sm text-kiro-600 dark:text-kiro-400 hover:text-kiro-700 dark:hover:text-kiro-300 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import SearchBar from '../components/SearchBar.vue'

const activeSection = ref('getting-started')

const navigationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'StartIcon'
  },
  {
    id: 'api-docs',
    title: 'API Documentation',
    icon: 'ApiIcon'
  },
  {
    id: 'components',
    title: 'Components',
    icon: 'ComponentIcon'
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    icon: 'TutorialIcon'
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Track active section based on scroll position
const handleScroll = () => {
  const sections = navigationSections.map(section => ({
    id: section.id,
    element: document.getElementById(section.id)
  })).filter(section => section.element)

  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const { offsetTop, offsetHeight } = section.element
    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<!-- Icon Components -->
<script>
const StartIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  `
}

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

export { StartIcon, ApiIcon, ComponentIcon, TutorialIcon }
</script> 