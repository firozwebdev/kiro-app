# KiroFeatureCard Component

*Auto-generated from Vue component • Last updated: 5 minutes ago*

## Overview

Interactive card component that showcases Kiro's three pillars (Specs, Hooks, Steering) with beautiful hover effects, gradient styling, and responsive design.

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | String | Yes | - | Card title text |
| `description` | String | Yes | - | Card description content |
| `features` | Array<String> | Yes | - | List of feature bullet points |
| `actionText` | String | Yes | - | Text for the action button |
| `type` | String | No | 'specs' | Card type: 'specs', 'hooks', or 'steering' |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@action` | None | Emitted when the action button is clicked |

## Slots

This component does not use slots.

## Usage Examples

### Basic Usage

```vue
<template>
  <KiroFeatureCard
    type="specs"
    title="Specs: Define & Generate"
    description="Create comprehensive documentation specifications."
    :features="[
      'Auto-generate API documentation',
      'Component prop tables & examples',
      'Interactive tutorial creation'
    ]"
    action-text="See Specs in Action"
    @action="handleSpecsAction"
  />
</template>

<script setup>
import KiroFeatureCard from '@/components/KiroFeatureCard.vue'

const handleSpecsAction = () => {
  console.log('Specs action triggered!')
}
</script>
```

### All Three Types

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Specs Card -->
    <KiroFeatureCard
      type="specs"
      title="Specs: Define & Generate"
      description="Create comprehensive documentation specifications."
      :features="specsFeatures"
      action-text="See Specs in Action"
      @action="$router.push('/showcase')"
    />
    
    <!-- Hooks Card -->
    <KiroFeatureCard
      type="hooks"
      title="Hooks: Auto-Maintenance"
      description="Smart automation that keeps docs in sync."
      :features="hooksFeatures"
      action-text="Watch Hooks Work"
      @action="$router.push('/demo')"
    />
    
    <!-- Steering Card -->
    <KiroFeatureCard
      type="steering"
      title="Steering: Consistency"
      description="Maintain consistent voice and style."
      :features="steeringFeatures"
      action-text="Explore Steering"
      @action="$router.push('/docs')"
    />
  </div>
</template>

<script setup>
const specsFeatures = [
  'Auto-generate API documentation',
  'Component prop tables & examples',
  'Interactive tutorial creation',
  'OpenAPI spec integration'
]

const hooksFeatures = [
  'Real-time doc synchronization',
  'Broken link detection & fixing',
  'Code example validation',
  'Dependency update tracking'
]

const steeringFeatures = [
  'Consistent writing style',
  'Technical depth control',
  'Accessibility compliance',
  'Brand voice maintenance'
]
</script>
```

## Styling

The component uses Tailwind CSS with custom gradients based on the `type` prop:

- **Specs**: Blue to purple gradient
- **Hooks**: Green to teal gradient  
- **Steering**: Orange to red gradient

## Accessibility

- Semantic HTML structure with proper headings
- Keyboard navigation support
- Focus indicators for interactive elements
- Screen reader friendly content structure

## Animation Effects

- Hover scale transform on icon
- Gradient text animation on title hover
- Smooth transitions on all interactive elements
- Animated border on card hover

---

*This documentation is automatically maintained by Kiro. Changes to the component will update this guide immediately.*