<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full mb-6">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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

            <!-- Authentication Section -->
            <div class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Authentication Required</h3>
              <p class="text-blue-700 dark:text-blue-300 mb-4">All API endpoints require Bearer token authentication. Include your API key in the Authorization header.</p>
              
              <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <pre class="text-green-400 text-sm"><code>curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     https://api.scaffoldsmart.com/v1/docs</code></pre>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-blue-700 dark:text-blue-300">Free: 100 req/hour</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-blue-700 dark:text-blue-300">Pro: 1,000 req/hour</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span class="text-blue-700 dark:text-blue-300">Enterprise: Custom</span>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Documentation Endpoints -->
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-3">
                        GET
                      </span>
                      <code class="text-sm font-mono text-gray-900 dark:text-gray-100">/api/v1/docs</code>
                    </div>
                    <button @click="tryEndpoint('docs')" class="text-sm text-kiro-600 dark:text-kiro-400 hover:text-kiro-700 dark:hover:text-kiro-300">
                      Try it out
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Retrieve all documentation projects and their metadata.</p>
                  
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response Example</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-100"><code>{
  "projects": [
    {
      "id": "scaffold-smart-docs",
      "name": "ScaffoldSmart Documentation",
      "status": "active",
      "lastUpdated": "2024-01-15T10:30:00Z",
      "coverage": 87,
      "components": 12,
      "apiEndpoints": 8
    }
  ],
  "total": 1,
  "lastSync": "2024-01-15T10:30:00Z"
}</code></pre>
                  </div>
                </div>
              </div>

              <!-- Component Documentation Endpoint -->
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-3">
                        POST
                      </span>
                      <code class="text-sm font-mono text-gray-900 dark:text-gray-100">/api/v1/docs/generate</code>
                    </div>
                    <button @click="tryEndpoint('generate')" class="text-sm text-kiro-600 dark:text-kiro-400 hover:text-kiro-700 dark:hover:text-kiro-300">
                      Try it out
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Generate documentation for specific components or API endpoints.</p>
                  
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-4">
                    <pre class="text-sm text-gray-100"><code>{
  "type": "component",
  "source": "src/components/KiroFeatureCard.vue",
  "options": {
    "includeExamples": true,
    "generateScreenshots": false
  }
}</code></pre>
                  </div>

                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-100"><code>{
  "success": true,
  "documentation": {
    "component": "KiroFeatureCard",
    "props": [...],
    "events": [...],
    "examples": [...]
  },
  "generatedAt": "2024-01-15T10:30:00Z"
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

          <!-- Troubleshooting Section -->
          <section id="troubleshooting" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Troubleshooting</h2>
              <div class="ml-auto flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Auto-maintained solutions
              </div>
            </div>

            <div class="space-y-6">
              <!-- Common Issues -->
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Common Issues</h3>
                
                <div class="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-start">
                      <div class="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg class="w-3 h-3 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-sm font-medium text-gray-900 dark:text-white">Documentation not updating automatically</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Check if your hooks are properly configured and the file patterns match your project structure.</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 bg-gray-50 dark:bg-gray-700/50">
                    <h5 class="text-xs font-medium text-gray-900 dark:text-white mb-2">Solution:</h5>
                    <div class="bg-gray-900 dark:bg-gray-800 rounded p-3">
                      <pre class="text-xs text-green-400"><code># Check hook configuration
kiro hooks list

# Verify file patterns
kiro hooks validate

# Restart documentation sync
kiro sync restart</code></pre>
                    </div>
                  </div>
                </div>

                <div class="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-start">
                      <div class="flex-shrink-0 w-6 h-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg class="w-3 h-3 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-sm font-medium text-gray-900 dark:text-white">Search results are not relevant</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">The search index might need rebuilding or your content lacks proper semantic structure.</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 bg-gray-50 dark:bg-gray-700/50">
                    <h5 class="text-xs font-medium text-gray-900 dark:text-white mb-2">Solution:</h5>
                    <div class="bg-gray-900 dark:bg-gray-800 rounded p-3">
                      <pre class="text-xs text-green-400"><code># Rebuild search index
kiro search rebuild

# Optimize content structure
kiro docs optimize

# Check search analytics
kiro search analytics</code></pre>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Performance Tips -->
              <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 class="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Performance Optimization</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div class="space-y-2">
                    <div class="flex items-center text-green-700 dark:text-green-300">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      Enable incremental builds
                    </div>
                    <div class="flex items-center text-green-700 dark:text-green-300">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      Use selective file watching
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center text-green-700 dark:text-green-300">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      Optimize image assets
                    </div>
                    <div class="flex items-center text-green-700 dark:text-green-300">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      Cache generated content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Advanced Features Section -->
          <section id="advanced" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Advanced Features</h2>
              <div class="ml-auto flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Enterprise ready
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Custom Integrations -->
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Custom Integrations</h3>
                  <div class="space-y-4">
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <h4 class="text-sm font-medium text-gray-900 dark:text-white">Webhook Integration</h4>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Connect external services to trigger documentation updates</p>
                    </div>

                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <h4 class="text-sm font-medium text-gray-900 dark:text-white">Custom Templates</h4>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Create branded documentation templates for your organization</p>
                    </div>
                  </div>
                </div>

                <!-- Analytics -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Analytics & Insights</h3>
                  <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div class="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">2.4k</div>
                        <div class="text-xs text-purple-700 dark:text-purple-300">Page Views</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">89%</div>
                        <div class="text-xs text-indigo-700 dark:text-indigo-300">Search Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Enterprise Features -->
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Enterprise Features</h3>
                  <div class="space-y-4">
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <h4 class="text-sm font-medium text-gray-900 dark:text-white">SSO Integration</h4>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Single sign-on with SAML, OAuth, and Active Directory</p>
                    </div>

                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <h4 class="text-sm font-medium text-gray-900 dark:text-white">Access Control</h4>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300">Granular permissions and role-based access control</p>
                    </div>
                  </div>
                </div>

                <!-- API Limits -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Limits</h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span class="text-sm text-gray-600 dark:text-gray-300">Free Tier</span>
                      <span class="text-sm font-medium text-gray-900 dark:text-white">100 req/hour</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span class="text-sm text-blue-600 dark:text-blue-300">Pro Tier</span>
                      <span class="text-sm font-medium text-blue-900 dark:text-blue-100">1,000 req/hour</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span class="text-sm text-purple-600 dark:text-purple-300">Enterprise</span>
                      <span class="text-sm font-medium text-purple-900 dark:text-purple-100">Unlimited</span>
                    </div>
                  </div>
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
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: 'TroubleshootIcon'
  },
  {
    id: 'advanced',
    title: 'Advanced Features',
    icon: 'AdvancedIcon'
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// API endpoint testing functionality
const tryEndpoint = (endpoint) => {
  // Simulate API call for demo purposes
  console.log(`Testing ${endpoint} endpoint...`)
  
  // In a real implementation, this would make actual API calls
  const mockResponses = {
    docs: {
      projects: [
        {
          id: "scaffold-smart-docs",
          name: "ScaffoldSmart Documentation",
          status: "active",
          lastUpdated: "2024-01-15T10:30:00Z",
          coverage: 87,
          components: 12,
          apiEndpoints: 8
        }
      ],
      total: 1,
      lastSync: "2024-01-15T10:30:00Z"
    },
    generate: {
      success: true,
      documentation: {
        component: "KiroFeatureCard",
        props: ["title", "type", "features"],
        events: ["@action"],
        examples: ["Basic usage", "All three types"]
      },
      generatedAt: "2024-01-15T10:30:00Z"
    }
  }
  
  // Show mock response in console for demo
  setTimeout(() => {
    console.log('API Response:', mockResponses[endpoint])
    alert(`API call successful! Check console for response data.`)
  }, 1000)
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

const TroubleshootIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
    </svg>
  `
}

const AdvancedIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `
}

export { StartIcon, ApiIcon, ComponentIcon, TutorialIcon, TroubleshootIcon, AdvancedIcon }
</script> 