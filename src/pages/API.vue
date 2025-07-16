<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Navigation />
    
    <!-- Header -->
    <section class="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8">
          <div class="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <svg class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <span class="text-purple-700 dark:text-purple-300 font-semibold">API Reference</span>
          </div>
          
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ScaffoldSmart API Documentation
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete API reference for integrating ScaffoldSmart into your development workflow. 
            All endpoints are automatically documented and kept in sync with the latest code.
          </p>
        </div>
        
        <!-- API Status -->
        <div class="flex items-center justify-center space-x-6 text-sm">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span class="text-gray-600 dark:text-gray-300">API Status: Operational</span>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span class="text-gray-600 dark:text-gray-300">Version: v1.2.0</span>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            <span class="text-gray-600 dark:text-gray-300">Last Updated: 2 minutes ago</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <!-- Quick Links -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <nav class="space-y-2">
                <a v-for="endpoint in apiEndpoints" 
                   :key="endpoint.id"
                   :href="`#${endpoint.id}`"
                   @click="scrollToEndpoint(endpoint.id)"
                   class="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors"
                   :class="{ 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20': activeEndpoint === endpoint.id }">
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mr-3"
                        :class="endpoint.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                               endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                               endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                               'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'">
                    {{ endpoint.method }}
                  </span>
                  {{ endpoint.title }}
                </a>
              </nav>
            </div>

            <!-- API Tools -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Tools</h3>
              <div class="space-y-3">
                <button class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Download OpenAPI Spec
                </button>
                <button class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-colors">
                  Import to Postman
                </button>
                <button class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-colors">
                  Generate SDK
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- API Documentation -->
        <main class="lg:col-span-3 space-y-8">
          <!-- Authentication -->
          <section class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h2>
            
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                ScaffoldSmart API uses API key authentication. Include your API key in the Authorization header of all requests.
              </p>
              
              <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-6">
                <pre class="text-green-400 text-sm"><code>curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     https://api.scaffoldsmart.com/v1/docs</code></pre>
              </div>

              <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="text-blue-900 dark:text-blue-100 font-semibold mb-1">Getting Your API Key</h4>
                    <p class="text-blue-800 dark:text-blue-200 text-sm">
                      API keys can be generated from your ScaffoldSmart dashboard under Settings → API Keys. 
                      Keep your keys secure and never expose them in client-side code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Documentation Endpoints -->
          <section id="docs-list" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">List Documentation</h2>
              <div class="flex items-center text-sm text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Auto-generated from specs
              </div>
            </div>

            <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-4">
                      GET
                    </span>
                    <code class="text-lg font-mono text-gray-900 dark:text-gray-100">/api/v1/docs</code>
                  </div>
                  <button @click="tryEndpoint('docs-list')" 
                          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors">
                    Try it out
                  </button>
                </div>
              </div>
              
              <div class="p-6">
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  Retrieve a list of all documentation projects and their current status.
                </p>

                <!-- Parameters -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Query Parameters</h4>
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Parameter</th>
                          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Required</th>
                          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td class="px-4 py-3 text-sm font-mono text-purple-600 dark:text-purple-400">limit</td>
                          <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300">integer</td>
                          <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No</td>
                          <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300">Number of results to return (default: 20, max: 100)</td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3 text-sm font-mono text-purple-600 dark:text-purple-400">offset</td>
                          <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300">integer</td>
                          <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No</td>
                          <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300">Number of results to skip for pagination</td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3 text-sm font-mono text-purple-600 dark:text-purple-400">status</td>
                          <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300">string</td>
                          <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No</td>
                          <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300">Filter by status: 'active', 'syncing', 'error'</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Response Example -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response Example</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-100 overflow-x-auto"><code>{
  "data": [
    {
      "id": "doc_123",
      "name": "API Documentation",
      "status": "active",
      "lastUpdated": "2024-01-15T10:30:00Z",
      "coverage": 87,
      "endpoints": 45,
      "components": 23
    },
    {
      "id": "doc_456", 
      "name": "Component Library",
      "status": "syncing",
      "lastUpdated": "2024-01-15T10:25:00Z",
      "coverage": 92,
      "endpoints": 0,
      "components": 156
    }
  ],
  "pagination": {
    "total": 12,
    "limit": 20,
    "offset": 0,
    "hasMore": false
  }
}</code></pre>
                  </div>
                </div>

                <!-- Try It Out Section -->
                <div v-if="activeDemo === 'docs-list'" class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 class="text-blue-900 dark:text-blue-100 font-semibold mb-3">Interactive Example</h4>
                  <div class="space-y-3">
                    <div>
                      <label class="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">Limit</label>
                      <input v-model="demoParams.limit" type="number" class="w-full px-3 py-2 border border-blue-300 dark:border-blue-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">Status Filter</label>
                      <select v-model="demoParams.status" class="w-full px-3 py-2 border border-blue-300 dark:border-blue-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm">
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="syncing">Syncing</option>
                        <option value="error">Error</option>
                      </select>
                    </div>
                    <button @click="executeDemoRequest" 
                            class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                      Send Request
                    </button>
                  </div>
                  
                  <div v-if="demoResponse" class="mt-4">
                    <h5 class="text-blue-900 dark:text-blue-100 font-medium mb-2">Response:</h5>
                    <div class="bg-gray-900 rounded-lg p-3">
                      <pre class="text-green-400 text-xs overflow-x-auto">{{ demoResponse }}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Create Documentation -->
          <section id="docs-create" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Documentation Project</h2>

            <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-4">
                      POST
                    </span>
                    <code class="text-lg font-mono text-gray-900 dark:text-gray-100">/api/v1/docs</code>
                  </div>
                  <button @click="tryEndpoint('docs-create')" 
                          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors">
                    Try it out
                  </button>
                </div>
              </div>
              
              <div class="p-6">
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  Create a new documentation project with Kiro specs, hooks, and steering configuration.
                </p>

                <!-- Request Body -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Request Body</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-100 overflow-x-auto"><code>{
  "name": "My API Documentation",
  "description": "Comprehensive API documentation for my project",
  "repository": {
    "url": "https://github.com/user/repo",
    "branch": "main"
  },
  "specs": {
    "apiDocs": {
      "enabled": true,
      "openApiPath": "openapi.yaml"
    },
    "componentDocs": {
      "enabled": true,
      "patterns": ["src/**/*.vue", "src/**/*.tsx"]
    }
  },
  "hooks": {
    "autoSync": true,
    "triggers": ["push", "pull_request"]
  },
  "steering": {
    "style": "beginner-friendly",
    "includeExamples": true,
    "validateLinks": true
  }
}</code></pre>
                  </div>
                </div>

                <!-- Response -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Response</h4>
                  <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-100 overflow-x-auto"><code>{
  "id": "doc_789",
  "name": "My API Documentation",
  "status": "initializing",
  "createdAt": "2024-01-15T10:35:00Z",
  "webhookUrl": "https://api.scaffoldsmart.com/webhooks/doc_789",
  "dashboardUrl": "https://app.scaffoldsmart.com/docs/doc_789"
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Webhook Events -->
          <section id="webhooks" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Webhook Events</h2>
            
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              ScaffoldSmart sends webhook events when documentation is updated, errors occur, or sync operations complete.
            </p>

            <div class="space-y-4">
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">docs.updated</h4>
                  <span class="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                    Common
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Triggered when documentation is successfully updated via hooks or manual sync.
                </p>
                <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                  <pre class="text-xs text-gray-100"><code>{
  "event": "docs.updated",
  "docId": "doc_123",
  "timestamp": "2024-01-15T10:30:00Z",
  "changes": {
    "componentsUpdated": 3,
    "endpointsAdded": 1,
    "linksValidated": 45
  }
}</code></pre>
                </div>
              </div>

              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">docs.error</h4>
                  <span class="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded-full">
                    Alert
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Triggered when an error occurs during documentation generation or sync.
                </p>
                <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                  <pre class="text-xs text-gray-100"><code>{
  "event": "docs.error",
  "docId": "doc_123", 
  "timestamp": "2024-01-15T10:30:00Z",
  "error": {
    "code": "SPEC_PARSE_ERROR",
    "message": "Unable to parse OpenAPI specification",
    "file": "openapi.yaml",
    "line": 45
  }
}</code></pre>
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

const activeEndpoint = ref('docs-list')
const activeDemo = ref(null)
const demoParams = ref({
  limit: 20,
  status: ''
})
const demoResponse = ref(null)

const apiEndpoints = [
  { id: 'docs-list', title: 'List Documentation', method: 'GET' },
  { id: 'docs-create', title: 'Create Documentation', method: 'POST' },
  { id: 'docs-update', title: 'Update Documentation', method: 'PUT' },
  { id: 'docs-delete', title: 'Delete Documentation', method: 'DELETE' },
  { id: 'webhooks', title: 'Webhook Events', method: 'POST' }
]

const scrollToEndpoint = (endpointId) => {
  const element = document.getElementById(endpointId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const tryEndpoint = (endpointId) => {
  activeDemo.value = activeDemo.value === endpointId ? null : endpointId
  demoResponse.value = null
}

const executeDemoRequest = () => {
  // Simulate API response
  const mockResponse = {
    data: [
      {
        id: "doc_123",
        name: "API Documentation",
        status: demoParams.value.status || "active",
        lastUpdated: "2024-01-15T10:30:00Z",
        coverage: 87,
        endpoints: 45,
        components: 23
      },
      {
        id: "doc_456",
        name: "Component Library", 
        status: "syncing",
        lastUpdated: "2024-01-15T10:25:00Z",
        coverage: 92,
        endpoints: 0,
        components: 156
      }
    ].slice(0, parseInt(demoParams.value.limit) || 20),
    pagination: {
      total: 12,
      limit: parseInt(demoParams.value.limit) || 20,
      offset: 0,
      hasMore: false
    }
  }
  
  demoResponse.value = JSON.stringify(mockResponse, null, 2)
}

// Track active endpoint based on scroll position
const handleScroll = () => {
  const endpoints = apiEndpoints.map(endpoint => ({
    id: endpoint.id,
    element: document.getElementById(endpoint.id)
  })).filter(endpoint => endpoint.element)

  const scrollPosition = window.scrollY + 100

  for (const endpoint of endpoints) {
    const { offsetTop, offsetHeight } = endpoint.element
    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
      activeEndpoint.value = endpoint.id
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