<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
    <!-- Header -->
    <div
      class="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between"
    >
      <div class="flex items-center space-x-3">
        <span class="text-gray-300 text-sm font-mono font-bold"
          >Live Code Demo</span
        >
      </div>
      <div class="flex items-center space-x-2">
        <button
          @click="toggleAutoPlay"
          class="px-3 py-1 bg-kiro-600 hover:bg-kiro-700 text-white text-xs rounded-md transition-colors"
        >
          {{ isAutoPlaying ? "Pause" : "Play" }}
        </button>
        <span class="text-gray-400 text-xs"
          >{{ currentStepIndex + 1 }}/{{ steps.length }}</span
        >
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 h-96">
      <!-- Code Side -->
      <div class="bg-gray-900 dark:bg-gray-800 p-4 overflow-auto">
        <div class="text-xs text-gray-400 mb-2 font-mono">
          {{ currentStep.filename }}
        </div>
        <pre
          class="text-sm text-gray-100 font-mono whitespace-pre-wrap"
          v-html="currentStep.escapedCode"
        ></pre>
      </div>
      <!-- Documentation Side -->
      <div
        class="bg-white p-4 overflow-auto border-l border-gray-200 dark:border-gray-600"
      >
        <div class="text-xs text-gray-500 mb-2">
          Documentation
        </div>
        <div class="prose prose-sm max-w-none">
          <h3 class="font-semibold mb-2">{{ currentStep.docTitle }}</h3>
          <p class="mb-2">{{ currentStep.documentation }}</p>
          <ul
            v-if="currentStep.docList && currentStep.docList.length"
            class="list-disc ml-5"
          >
            <li v-for="item in currentStep.docList" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div
      class="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <button
            @click="previousStep"
            :disabled="currentStepIndex === 0"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
            @click="nextStep"
            :disabled="currentStepIndex === steps.length - 1"
            class="px-4 py-2 bg-kiro-600 hover:bg-kiro-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
        <!-- Progress bar -->
        <div class="flex-1 mx-6">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              class="bg-gradient-to-r from-kiro-500 to-primary-600 h-2 rounded-full transition-all duration-500"
              :style="{
                width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
              }"
            ></div>
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
import { ref, computed, onMounted, onUnmounted } from "vue";

// Utility to escape HTML for code display
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Example steps for the live code demo
const steps = [
  {
    title: "Component Creation",
    filename: "src/components/UserCard.vue",
    code:
      `<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" />
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<script setup>
defineProps({
  user: Object
})
</scr` + `ipt>`,
    docTitle: "UserCard Component",
    documentation:
      "Displays user information in a card format. Accepts a user prop with name, email, and avatar.",
    docList: [
      "Prop: user (Object, required)",
      "Shows name, email, and avatar",
      "Accessible and semantic HTML",
    ],
    description: "Create a simple user card component.",
  },
  {
    title: "API Integration",
    filename: "api/users.ts",
    code: `// Get user profile by ID
export async function getUserById(id) {
  // Fetch user from database
  return await db.users.findById(id)
}`,
    docTitle: "API: getUserById",
    documentation: "Fetches a user profile from the database by user ID.",
    docList: [
      "Route: GET /api/users/:id",
      "Returns user object with id, name, email, avatar, createdAt",
      "Throws error if user not found",
    ],
    description: "Integrate backend API for user data.",
  },
  {
    title: "Tutorial Completion",
    filename: "TUTORIAL.md",
    code: `# User Management Tutorial

- Create the UserCard component
- Integrate the user API
- Handle user actions
`,
    docTitle: "Tutorial Complete",
    documentation:
      "You have completed the user management tutorial! Review your code and test all features.",
    docList: ["Component created", "API integrated", "CRUD actions handled"],
    description: "Congratulations! You finished the tutorial.",
  },
];

// Add escapedCode property to each step for safe display
steps.forEach((step) => {
  step.escapedCode = escapeHtml(step.code);
});

const currentStepIndex = ref(0);
const isAutoPlaying = ref(false);
let autoPlayInterval = null;

const currentStep = computed(() => steps[currentStepIndex.value]);

function nextStep() {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++;
  }
}
function previousStep() {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
}
function toggleAutoPlay() {
  isAutoPlaying.value = !isAutoPlaying.value;
  if (isAutoPlaying.value) {
    autoPlayInterval = setInterval(() => {
      if (currentStepIndex.value < steps.length - 1) {
        nextStep();
      } else {
        currentStepIndex.value = 0;
      }
    }, 4000);
  } else {
    clearInterval(autoPlayInterval);
  }
}
onMounted(() => {
  // Optionally auto-start demo after a short delay
  setTimeout(() => {
    toggleAutoPlay();
  }, 2000);
});
onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
});
</script>

<style scoped>
.prose {
  max-width: 100%;
}
.bg-kiro-600 {
  background-color: #6366f1;
}
.bg-kiro-700 {
  background-color: #4f46e5;
}
.from-kiro-500 {
  --tw-gradient-from: #818cf8;
  --tw-gradient-to: rgb(129 140 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-primary-600 {
  --tw-gradient-to: #2563eb;
}
</style>
