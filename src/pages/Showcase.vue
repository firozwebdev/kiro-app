<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
          <svg class="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span class="text-purple-200 font-semibold">Kiro Showcase</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Real-World Examples
          </span>
        </h1>
        
        <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
          See how ScaffoldSmart transforms documentation workflows across different project types. 
          From startups to enterprise, these examples show Kiro's three pillars in action.
        </p>
      </div>
    </section>

    <!-- Showcase Grid -->
    <section class="pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- E-commerce Platform -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group">
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-1">E-commerce Platform</h3>
                  <p class="text-green-300 text-sm">ShopFlow • 50+ developers</p>
                </div>
              </div>
              
              <p class="text-blue-200 mb-6">
                Large-scale e-commerce platform with microservices architecture. Kiro maintains documentation 
                for 200+ API endpoints, 150+ React components, and complex integration guides.
              </p>

              <div class="space-y-4 mb-6">
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🎯 Specs Achievement</h4>
                  <p class="text-blue-200 text-sm">Auto-generated comprehensive API docs from OpenAPI specs, reducing documentation time by 85%</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🔄 Hooks Impact</h4>
                  <p class="text-blue-200 text-sm">Real-time sync across 12 microservices, catching breaking changes before deployment</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🎨 Steering Success</h4>
                  <p class="text-blue-200 text-sm">Consistent documentation style across all teams, improving developer onboarding by 60%</p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex space-x-4 text-sm">
                  <span class="text-green-400">↗ 200+ APIs</span>
                  <span class="text-blue-400">⚡ 150+ Components</span>
                  <span class="text-purple-400">📚 50+ Guides</span>
                </div>
                <button class="text-kiro-400 hover:text-kiro-300 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>

          <!-- SaaS Startup -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group">
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-1">SaaS Analytics Platform</h3>
                  <p class="text-blue-300 text-sm">DataViz Pro • 15 developers</p>
                </div>
              </div>
              
              <p class="text-blue-200 mb-6">
                Fast-growing analytics SaaS with rapid feature development. Kiro keeps pace with daily deployments 
                while maintaining comprehensive user and developer documentation.
              </p>

              <div class="space-y-4 mb-6">
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">📊 Rapid Growth</h4>
                  <p class="text-blue-200 text-sm">Documentation scales automatically with 3-5 new features per week</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🚀 Speed to Market</h4>
                  <p class="text-blue-200 text-sm">Feature documentation ready at launch, no delays for manual writing</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">👥 User Experience</h4>
                  <p class="text-blue-200 text-sm">Always up-to-date user guides improve customer satisfaction by 40%</p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex space-x-4 text-sm">
                  <span class="text-green-400">📈 Daily Updates</span>
                  <span class="text-blue-400">⚡ 0 Delays</span>
                  <span class="text-purple-400">😊 +40% Satisfaction</span>
                </div>
                <button class="text-kiro-400 hover:text-kiro-300 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>

          <!-- Open Source Library -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group">
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-1">Open Source UI Library</h3>
                  <p class="text-orange-300 text-sm">ComponentHub • 500+ contributors</p>
                </div>
              </div>
              
              <p class="text-blue-200 mb-6">
                Popular React component library with global contributors. Kiro ensures consistent documentation 
                quality across hundreds of contributors and maintains comprehensive examples.
              </p>

              <div class="space-y-4 mb-6">
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🌍 Global Consistency</h4>
                  <p class="text-blue-200 text-sm">Uniform documentation style across 500+ contributors from 50+ countries</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">📚 Comprehensive Examples</h4>
                  <p class="text-blue-200 text-sm">Auto-generated interactive examples for 200+ components</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">⭐ Community Impact</h4>
                  <p class="text-blue-200 text-sm">GitHub stars increased 300% due to excellent documentation quality</p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex space-x-4 text-sm">
                  <span class="text-green-400">⭐ +300% Stars</span>
                  <span class="text-blue-400">🌍 500+ Contributors</span>
                  <span class="text-purple-400">📦 200+ Components</span>
                </div>
                <button class="text-kiro-400 hover:text-kiro-300 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>

          <!-- Enterprise Integration -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group">
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-1">Enterprise Banking API</h3>
                  <p class="text-purple-300 text-sm">FinanceCore • 200+ developers</p>
                </div>
              </div>
              
              <p class="text-blue-200 mb-6">
                Mission-critical banking infrastructure with strict compliance requirements. Kiro maintains 
                audit-ready documentation while ensuring security and regulatory compliance.
              </p>

              <div class="space-y-4 mb-6">
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🔒 Compliance Ready</h4>
                  <p class="text-blue-200 text-sm">Automated audit trails and compliance documentation generation</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">🛡️ Security First</h4>
                  <p class="text-blue-200 text-sm">Sensitive data automatically sanitized in all documentation examples</p>
                </div>
                
                <div class="bg-black/20 rounded-lg p-4">
                  <h4 class="text-white font-semibold mb-2">📋 Audit Success</h4>
                  <p class="text-blue-200 text-sm">100% audit compliance with zero documentation-related findings</p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex space-x-4 text-sm">
                  <span class="text-green-400">✅ 100% Compliant</span>
                  <span class="text-blue-400">🔒 Secure</span>
                  <span class="text-purple-400">📊 Audit Ready</span>
                </div>
                <button class="text-kiro-400 hover:text-kiro-300 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">Impact Across Industries</h2>
          <p class="text-blue-200 max-w-2xl mx-auto">
            Real metrics from teams using ScaffoldSmart Documentation Hub powered by Kiro
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-kiro-400 mb-2">85%</div>
            <div class="text-blue-200 text-sm">Time Saved on Documentation</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-400 mb-2">60%</div>
            <div class="text-blue-200 text-sm">Faster Developer Onboarding</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div class="text-blue-200 text-sm">Documentation Accuracy</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-yellow-400 mb-2">300%</div>
            <div class="text-blue-200 text-sm">Increase in Community Engagement</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">What Teams Are Saying</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">SF</span>
              </div>
              <div>
                <div class="text-white font-semibold">Sarah Chen</div>
                <div class="text-blue-300 text-sm">Lead Developer, ShopFlow</div>
              </div>
            </div>
            <p class="text-blue-200 text-sm italic">
              "Kiro transformed our documentation workflow. We went from spending 20 hours a week on docs to zero maintenance time. Our API documentation is always perfect and up-to-date."
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">MR</span>
              </div>
              <div>
                <div class="text-white font-semibold">Marcus Rodriguez</div>
                <div class="text-blue-300 text-sm">CTO, DataViz Pro</div>
              </div>
            </div>
            <p class="text-blue-200 text-sm italic">
              "The speed of development increased dramatically. Features ship with perfect documentation automatically. Our customer support tickets dropped by 40% because users can find what they need."
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">AK</span>
              </div>
              <div>
                <div class="text-white font-semibold">Alex Kim</div>
                <div class="text-blue-300 text-sm">Maintainer, ComponentHub</div>
              </div>
            </div>
            <p class="text-blue-200 text-sm italic">
              "Managing documentation for 500+ contributors was impossible before Kiro. Now every component has perfect docs, examples, and consistent style. Our GitHub stars tripled!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Join These Success Stories?</h2>
        <p class="text-xl text-blue-200 mb-8">
          Transform your documentation workflow and see the same incredible results. 
          Start your journey with ScaffoldSmart today.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/demo" 
                      class="px-8 py-4 bg-gradient-to-r from-kiro-500 to-primary-600 hover:from-kiro-600 hover:to-primary-700 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            See Live Demo
          </router-link>
          
          <router-link to="/docs" 
                      class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Explore Documentation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
</script>