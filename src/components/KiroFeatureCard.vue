<template>
  <div
    class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
  >
    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
      :class="gradientClass"
    ></div>

    <!-- Icon container -->
    <div class="p-6 pb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        :class="iconBgClass"
      >
        <component :is="iconComponent" class="w-6 h-6 text-white" />
      </div>

      <!-- Content -->
      <h3
        class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
        :class="titleGradientClass"
      >
        {{ title }}
      </h3>

      <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {{ description }}
      </p>

      <!-- Features list -->
      <ul class="space-y-2 mb-6">
        <li
          v-for="feature in features"
          :key="feature"
          class="flex items-center text-sm text-gray-700 dark:text-gray-300"
        >
          <svg
            class="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          {{ feature }}
        </li>
      </ul>

      <!-- Action button -->
      <button
        @click="$emit('action')"
        class="w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50"
        :class="buttonClass"
      >
        {{ actionText }}
        <svg
          class="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>

    <!-- Animated border -->
    <div
      class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :class="borderGradientClass"
      style="background-clip: padding-box"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  description: String,
  features: Array,
  actionText: String,
  type: {
    type: String,
    default: "specs",
    validator: (value) => ["specs", "hooks", "steering"].includes(value),
  },
});

const emit = defineEmits(["action"]);

const iconComponent = computed(() => {
  const icons = {
    specs: SpecsIcon,
    hooks: HooksIcon,
    steering: SteeringIcon,
  };
  return icons[props.type];
});

const gradientClass = computed(() => {
  const gradients = {
    specs: "from-blue-500 to-purple-600",
    hooks: "from-green-500 to-teal-600",
    steering: "from-orange-500 to-red-600",
  };
  return gradients[props.type];
});

const iconBgClass = computed(() => {
  const backgrounds = {
    specs: "bg-gradient-to-br from-blue-500 to-purple-600",
    hooks: "bg-gradient-to-br from-green-500 to-teal-600",
    steering: "bg-gradient-to-br from-orange-500 to-red-600",
  };
  return backgrounds[props.type];
});

const titleGradientClass = computed(() => {
  const gradients = {
    specs: "group-hover:from-blue-500 group-hover:to-purple-600",
    hooks: "group-hover:from-green-500 group-hover:to-teal-600",
    steering: "group-hover:from-orange-500 group-hover:to-red-600",
  };
  return gradients[props.type];
});

const buttonClass = computed(() => {
  const buttons = {
    specs:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500",
    hooks:
      "bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:ring-green-500",
    steering:
      "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:ring-orange-500",
  };
  return buttons[props.type];
});

const borderGradientClass = computed(() => {
  const borders = {
    specs: "from-blue-500 to-purple-600",
    hooks: "from-green-500 to-teal-600",
    steering: "from-orange-500 to-red-600",
  };
  return borders[props.type];
});
</script>

<!-- Icon Components -->
<script>
const SpecsIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  `
}

const HooksIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
    </svg>
  `
}

const SteeringIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `
}

export { SpecsIcon, HooksIcon, SteeringIcon }
</script>
