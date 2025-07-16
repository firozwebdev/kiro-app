<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
    <!-- Demo Header -->
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="flex space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-gray-300 text-sm font-mono">{{ currentStep.title }}</span>
      </div>
      <div class="flex items-center space-x-2">
        <button @click="toggleAutoPlay" 
                class="px-3 py-1 bg-kiro-600 hover:bg-kiro-700 text-white text-xs rounded-md transition-colors">
          {{ isAutoPlaying ? 'Pause' : 'Play' }}
        </button>
        <span class="text-gray-400 text-xs">{{ currentStepIndex + 1 }}/{{ demoSteps.length }}</span>
      </div>
    </div>

    <!-- Demo Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 h-96">
      <!-- Code Editor Side -->
      <div class="bg-gray-900 p-4 overflow-auto">
        <div class="text-xs text-gray-400 mb-2 font-mono">{{ currentStep.filename }}</div>
        <pre class="text-sm text-gray-100 font-mono whitespace-pre-wrap">{{ currentStep.code }}</pre>
        
        <!-- Typing indicator -->
        <div v-if="isTyping" class="flex items-center mt-2 text-kiro-400">
          <div class="animate-pulse mr-2">●</div>
          <span class="text-xs">Kiro is updating documentation...</span>
        </div>
      </div>

      <!-- Documentation Side -->
      <div class="bg-white dark:bg-gray-800 p-4 overflow-auto border-l border-gray-200 dark:border-gray-700">
        <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">Generated Documentation</div>
        <div class="prose prose-sm dark:prose-invert max-w-none" v-html="currentStep.documentation"></div>
        
        <!-- Update indicator -->
        <div v-if="isUpdating" class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div class="flex items-center text-green-700 dark:text-green-400">
            <svg class="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Documentation auto-updated!
          </div>
        </div>
      </div>
    </div>

    <!-- Demo Controls -->
    <div class="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <button @click="previousStep" :disabled="currentStepIndex === 0"
                  class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Previous
          </button>
          <button @click="nextStep" :disabled="currentStepIndex === demoSteps.length - 1"
                  class="px-4 py-2 bg-kiro-600 hover:bg-kiro-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Next
          </button>
        </div>
        
        <!-- Progress bar -->
        <div class="flex-1 mx-6">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-gradient-to-r from-kiro-500 to-primary-600 h-2 rounded-full transition-all duration-500"
                 :style="{ width: `${((currentStepIndex + 1) / demoSteps.length) * 100}%` }"></div>
          </div>
        </div>
        
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ currentStep.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentStepIndex = ref(0)
const isAutoPlaying = ref(false)
const isTyping = ref(false)
const isUpdating = ref(false)
let autoPlayInterval = null

const demoSteps = [
  {
    title: 'Component Creation',
    filename: 'src/components/UserCard.vue',
    code: `<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" />
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<script setup>
/**
 * UserCard component displays user information
 * @param {Object} user - User object with name, email, avatar
 */
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>`,
    documentation: `<h3>UserCard Component</h3>
<p>Displays user information in a card format.</p>
<h4>Props</h4>
<table class="min-w-full">
  <tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr>
  <tr><td>user</td><td>Object</td><td>Yes</td><td>User object with name, email, avatar</td></tr>
</table>`,
    description: 'Save a Vue component with JSDoc comments'
  },
  {
    title: 'Auto Documentation Update',
    filename: 'docs/components/UserCard.md',
    code: `# UserCard Component

## Overview
The UserCard component displays user information in a clean, accessible card format.

## Props
| Name | Type | Required | Description |
|------|------|----------|-------------|
| user | Object | Yes | User object containing name, email, and avatar |

## Usage Example
\`\`\`vue
<UserCard :user="{ 
  name: 'John Doe', 
  email: 'john@example.com',
  avatar: '/avatars/john.jpg' 
}" />
\`\`\`

## Accessibility
- Images include proper alt text
- Semantic HTML structure
- Keyboard navigation support`,
    documentation: `<div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
  <h4 class="text-green-800 dark:text-green-400 font-semibold">✅ Documentation Generated</h4>
  <p class="text-green-700 dark:text-green-300 text-sm mt-1">
    Kiro automatically extracted component props, generated usage examples, and added accessibility notes.
  </p>
</div>`,
    description: 'Kiro automatically generates comprehensive documentation'
  },
  {
    title: 'API Endpoint Addition',
    filename: 'api/users.ts',
    code: `/**
 * Get user profile by ID
 * @route GET /api/users/:id
 * @param {string} id - User ID
 * @returns {Object} User profile data
 */
export async function getUserById(id: string) {
  const user = await db.users.findById(id)
  if (!user) {
    throw new Error('User not found')
  }
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    createdAt: user.createdAt
  }
}`,
    documentation: `<h3>API Documentation Updated</h3>
<h4>GET /api/users/:id</h4>
<p>Retrieve user profile information by user ID.</p>
<h5>Parameters</h5>
<ul>
  <li><strong>id</strong> (string, required) - User ID</li>
</ul>
<h5>Response</h5>
<pre><code>{
  "id": "string",
  "name": "string", 
  "email": "string",
  "avatar": "string",
  "createdAt": "date"
}</code></pre>`,
    description: 'API documentation updates automatically from code changes'
  },
  {
    title: 'Tutorial Generation',
    filename: '.kiro/specs/user-tutorial.yaml',
    code: `name: "User Management Tutorial"
description: "Learn how to implement user management features"
steps:
  - title: "Setup User Component"
    description: "Create the UserCard component"
    code_example: "src/components/UserCard.vue"
  - title: "Add API Integration" 
    description: "Connect to user API endpoints"
    code_example: "api/users.ts"
  - title: "Handle User Actions"
    description: "Implement user CRUD operations"
    validation: "Test user creation and updates"`,
    documentation: `<div class="tutorial-preview">
  <h3>📚 Tutorial: User Management</h3>
  <div class="steps">
    <div class="step completed">
      <span class="step-number">1</span>
      <div>
        <h4>Setup User Component</h4>
        <p>Create the UserCard component ✅</p>
      </div>
    </div>
    <div class="step completed">
      <span class="step-number">2</span>
      <div>
        <h4>Add API Integration</h4>
        <p>Connect to user API endpoints ✅</p>
      </div>
    </div>
    <div class="step current">
      <span class="step-number">3</span>
      <div>
        <h4>Handle User Actions</h4>
        <p>Implement user CRUD operations 🔄</p>
      </div>
    </div>
  </div>
</div>`,
    description: 'Generate interactive tutorials from specifications'
  }
]

const currentStep = computed(() => demoSteps[currentStepIndex.value])

const nextStep = () => {
  if (currentStepIndex.value < demoSteps.length - 1) {
    isTyping.value = true
    setTimeout(() => {
      currentStepIndex.value++
      isTyping.value = false
      isUpdating.value = true
      setTimeout(() => {
        isUpdating.value = false
      }, 1500)
    }, 1000)
  }
}

const previousStep = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--
  }
}

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value
  
  if (isAutoPlaying.value) {
    autoPlayInterval = setInterval(() => {
      if (currentStepIndex.value < demoSteps.length - 1) {
        nextStep()
      } else {
        currentStepIndex.value = 0
      }
    }, 4000)
  } else {
    clearInterval(autoPlayInterval)
  }
}

onMounted(() => {
  // Auto-start demo after a short delay
  setTimeout(() => {
    toggleAutoPlay()
  }, 2000)
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<style scoped>
.tutorial-preview .steps {
  @apply space-y-4;
}

.tutorial-preview .step {
  @apply flex items-start space-x-3 p-3 rounded-lg;
}

.tutorial-preview .step.completed {
  @apply bg-green-50 dark:bg-green-900/20;
}

.tutorial-preview .step.current {
  @apply bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800;
}

.tutorial-preview .step-number {
  @apply w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 text-xs font-bold flex items-center justify-center text-gray-700 dark:text-gray-300;
}

.tutorial-preview .step.completed .step-number {
  @apply bg-green-500 text-white;
}

.tutorial-preview .step.current .step-number {
  @apply bg-blue-500 text-white;
}
</style>