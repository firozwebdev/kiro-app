<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-br from-kiro-500 to-primary-600 rounded-lg flex items-center justify-center animate-glow">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <router-link to="/" class="text-xl font-bold bg-gradient-to-r from-kiro-600 to-primary-600 bg-clip-text text-transparent">
            ScaffoldSmart
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-700 dark:text-gray-300 hover:text-kiro-600 dark:hover:text-kiro-400 font-medium transition-colors duration-200 relative group"
            :class="{ 'text-kiro-600 dark:text-kiro-400': $route.path === link.path }"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-kiro-600 transition-all duration-200 group-hover:w-full" 
                  :class="{ 'w-full': $route.path === link.path }"></span>
          </router-link>
        </div>

        <!-- Theme Toggle and Mobile Menu -->
        <div class="flex items-center space-x-3">
          <ThemeToggle />
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
        <div class="flex flex-col space-y-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="text-gray-700 dark:text-gray-300 hover:text-kiro-600 dark:hover:text-kiro-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            :class="{ 'text-kiro-600 dark:text-kiro-400 bg-kiro-50 dark:bg-kiro-900/20': $route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Live Demo', path: '/demo' },
  { name: 'Documentation', path: '/docs' },
  { name: 'Showcase', path: '/showcase' },
  { name: 'API', path: '/api' }
]
</script>