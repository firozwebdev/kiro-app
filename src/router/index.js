import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Docs from '../pages/Docs.vue';
import Demo from '../pages/Demo.vue';
import Showcase from '../pages/Showcase.vue';
import API from '../pages/API.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { 
      title: 'ScaffoldSmart Documentation Hub - AI-Powered Knowledge Management',
      description: 'Transform your documentation workflow with Kiro\'s three pillars: Specs, Hooks, and Steering'
    }
  },
  { 
    path: '/docs', 
    name: 'Docs', 
    component: Docs,
    meta: { 
      title: 'Documentation - ScaffoldSmart Hub',
      description: 'Explore comprehensive documentation that stays perfectly synchronized with your code'
    }
  },
  { 
    path: '/demo', 
    name: 'Demo', 
    component: Demo,
    meta: { 
      title: 'Live Demo - ScaffoldSmart Hub',
      description: 'Watch Kiro in action as documentation writes itself in real-time'
    }
  },
  { 
    path: '/showcase', 
    name: 'Showcase', 
    component: Showcase,
    meta: { 
      title: 'Success Stories - ScaffoldSmart Hub',
      description: 'Real-world examples of teams transforming their documentation workflows'
    }
  },
  { 
    path: '/api', 
    name: 'API', 
    component: API,
    meta: { 
      title: 'API Reference - ScaffoldSmart Hub',
      description: 'Complete API documentation for integrating ScaffoldSmart into your workflow'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

// Update page title and meta description
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description);
    }
  }
  
  next();
});

export default router; 