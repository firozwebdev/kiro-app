<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 dark:from-black dark:via-gray-900 dark:to-slate-900">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center px-4 py-2 bg-kiro-500/20 border border-kiro-500/30 rounded-full mb-6">
          <svg class="w-5 h-5 text-kiro-400 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12L8 10l2-2 2 2-2 2zM10 4l6 6-6 6-6-6 6-6z"/>
          </svg>
          <span class="text-kiro-200 font-semibold">Live Demo</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          <span class="bg-gradient-to-r from-kiro-400 to-primary-500 bg-clip-text text-transparent">
            Kiro in Action
          </span>
        </h1>
        
        <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
          Watch documentation write itself as you code. Experience the magic of 
          <span class="text-kiro-300 font-semibold">Specs</span>, 
          <span class="text-green-300 font-semibold">Hooks</span>, and 
          <span class="text-orange-300 font-semibold">Steering</span> working together.
        </p>
      </div>
    </section>

    <!-- Live Demo Section -->
    <section class="pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <LiveCodeDemo />
      </div>
    </section>

    <!-- Demo Features -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">What You Just Witnessed</h2>
          <p class="text-blue-200 max-w-2xl mx-auto">
            Every step in this demo represents real Kiro functionality that keeps your documentation perfectly synchronized with your code.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Feature 1 -->
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Spec-Driven Generation</h3>
            <p class="text-blue-200 text-sm">
              Define documentation structure once, generate comprehensive docs automatically from your code.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Real-Time Hooks</h3>
            <p class="text-blue-200 text-sm">
              Documentation updates instantly when you save files. No manual intervention required.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Consistent Steering</h3>
            <p class="text-blue-200 text-sm">
              Maintain consistent voice, style, and technical depth across all generated content.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Smart Search</h3>
            <p class="text-blue-200 text-sm">
              AI-powered semantic search finds exactly what developers need, when they need it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo Controls -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">Try It Yourself</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Specs Demo -->
            <div class="text-center">
              <button @click="triggerSpecDemo" 
                      class="w-full p-6 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 group">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2">Generate API Docs</h3>
                <p class="text-blue-200 text-sm">See how Specs create comprehensive API documentation</p>
              </button>
            </div>

            <!-- Hooks Demo -->
            <div class="text-center">
              <button @click="triggerHookDemo" 
                      class="w-full p-6 bg-gradient-to-br from-green-500/20 to-teal-600/20 border border-green-500/30 rounded-xl hover:from-green-500/30 hover:to-teal-600/30 transition-all duration-300 group">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2">Auto-Update Docs</h3>
                <p class="text-blue-200 text-sm">Watch Hooks sync documentation with code changes</p>
              </button>
            </div>

            <!-- Steering Demo -->
            <div class="text-center">
              <button @click="triggerSteeringDemo" 
                      class="w-full p-6 bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-xl hover:from-orange-500/30 hover:to-red-600/30 transition-all duration-300 group">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2">Style Consistency</h3>
                <p class="text-blue-200 text-sm">Experience how Steering maintains consistent quality</p>
              </button>
            </div>
          </div>

          <!-- Demo Result -->
          <div v-if="demoResult" class="mt-8 p-6 bg-gradient-to-r from-kiro-500/20 to-primary-600/20 border border-kiro-500/30 rounded-xl">
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-kiro-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">{{ demoResult.title }}</h4>
                <p class="text-blue-200">{{ demoResult.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
        <p class="text-xl text-blue-200 mb-8">
          This is just a glimpse of what Kiro can do. Explore the full documentation hub and see how it can revolutionize your team's productivity.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/docs" 
                      class="px-8 py-4 bg-gradient-to-r from-kiro-500 to-primary-600 hover:from-kiro-600 hover:to-primary-700 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Explore Documentation
          </router-link>
          
          <router-link to="/showcase" 
                      class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            View Showcase
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '../components/Navigation.vue'
import LiveCodeDemo from '../components/LiveCodeDemo.vue'

const demoResult = ref(null)

const triggerSpecDemo = () => {
  demoResult.value = {
    title: 'Specs Demo Activated!',
    description: 'Kiro analyzed your API endpoints and generated comprehensive documentation with examples, authentication details, and interactive playground. All from a simple specification file.'
  }
  
  setTimeout(() => {
    demoResult.value = null
  }, 5000)
}

const triggerHookDemo = () => {
  demoResult.value = {
    title: 'Hooks Demo Activated!',
    description: 'File change detected! Kiro automatically updated component documentation, validated all code examples, and refreshed the search index. Zero manual work required.'
  }
  
  setTimeout(() => {
    demoResult.value = null
  }, 5000)
}

const triggerSteeringDemo = () => {
  demoResult.value = {
    title: 'Steering Demo Activated!',
    description: 'Kiro applied consistent writing style, ensured beginner-friendly explanations, and validated accessibility compliance across all generated documentation.'
  }
  
  setTimeout(() => {
    demoResult.value = null
  }, 5000)
}
</script> 