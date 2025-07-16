<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 text-white overflow-hidden">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-kiro-500/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <!-- Logo and brand -->
          <div class="flex justify-center mb-8">
            <div class="relative">
              <div class="w-20 h-20 bg-gradient-to-br from-kiro-400 to-primary-600 rounded-2xl flex items-center justify-center animate-glow shadow-2xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="absolute -inset-1 bg-gradient-to-r from-kiro-400 to-primary-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-white via-blue-100 to-kiro-200 bg-clip-text text-transparent">
              ScaffoldSmart
            </span>
            <br>
            <span class="text-3xl md:text-4xl bg-gradient-to-r from-kiro-400 to-primary-500 bg-clip-text text-transparent">
              Documentation Hub
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            AI-Powered Knowledge Management that 
            <span class="text-kiro-300 font-semibold">writes itself</span> using Kiro's three pillars
          </p>
          
          <!-- Contest badge -->
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 mb-8">
            <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-yellow-100 font-semibold">Contest Entry: Productivity & Workflow Tools</span>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <router-link to="/demo" 
                        class="group px-8 py-4 bg-gradient-to-r from-kiro-500 to-primary-600 hover:from-kiro-600 hover:to-primary-700 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Watch Live Demo
            </router-link>
            <router-link to="/docs" 
                        class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Explore Docs
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Kiro Features Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Powered by Kiro's Three Pillars
            </span>
          </h2>
          <p class="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience the future of documentation with AI that understands your code, 
            automates maintenance, and maintains consistency across your entire project.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <KiroFeatureCard
            type="specs"
            title="Specs: Define & Generate"
            description="Create comprehensive documentation specifications that automatically generate API docs, component guides, and tutorials."
            :features="[
              'Auto-generate API documentation',
              'Component prop tables & examples', 
              'Interactive tutorial creation',
              'OpenAPI spec integration'
            ]"
            action-text="See Specs in Action"
            @action="$router.push('/showcase')"
          />
          
          <KiroFeatureCard
            type="hooks"
            title="Hooks: Auto-Maintenance"
            description="Smart automation that keeps your documentation in perfect sync with code changes, no manual updates required."
            :features="[
              'Real-time doc synchronization',
              'Broken link detection & fixing',
              'Code example validation',
              'Dependency update tracking'
            ]"
            action-text="Watch Hooks Work"
            @action="$router.push('/demo')"
          />
          
          <KiroFeatureCard
            type="steering"
            title="Steering: Consistency"
            description="Maintain consistent voice, style, and technical depth across all documentation with intelligent guidelines."
            :features="[
              'Consistent writing style',
              'Technical depth control',
              'Accessibility compliance',
              'Brand voice maintenance'
            ]"
            action-text="Explore Steering"
            @action="$router.push('/docs')"
          />
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Problem -->
          <div class="space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
              <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <span class="text-red-200 font-semibold">The Problem</span>
            </div>
            <h3 class="text-3xl font-bold text-white">Documentation That's Always Outdated</h3>
            <div class="space-y-4 text-blue-100">
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <p>Code changes but docs don't follow</p>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <p>Inconsistent writing styles across team</p>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <p>Time-consuming manual maintenance</p>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <p>Broken links and outdated examples</p>
              </div>
            </div>
          </div>

          <!-- Solution -->
          <div class="space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
              <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-green-200 font-semibold">The Solution</span>
            </div>
            <h3 class="text-3xl font-bold text-white">Documentation That Writes Itself</h3>
            <div class="space-y-4 text-blue-100">
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <p>Auto-sync with every code change</p>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <p>Consistent voice and style enforcement</p>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <p>Zero-maintenance documentation</p>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <p>Always accurate, tested examples</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <div class="text-4xl font-bold text-kiro-400">90%</div>
            <div class="text-blue-200">Time Saved</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-green-400">100%</div>
            <div class="text-blue-200">Accuracy</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-purple-400">0</div>
            <div class="text-blue-200">Manual Updates</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-yellow-400">24/7</div>
            <div class="text-blue-200">Auto-Sync</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-6 text-white">Ready to Transform Your Documentation?</h2>
        <p class="text-xl text-blue-200 mb-8">
          Join the future of AI-powered knowledge management. Your documentation will never be outdated again.
        </p>
        <router-link to="/demo" 
                    class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-kiro-500 to-primary-600 hover:from-kiro-600 hover:to-primary-700 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          Experience the Magic
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import KiroFeatureCard from '../components/KiroFeatureCard.vue'
</script> 