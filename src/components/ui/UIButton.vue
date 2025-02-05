<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'outline', 'text', 'success', 'danger', 'warning'].includes(value),
  },
  disabled: Boolean,
  loading: Boolean,
  icon: Boolean,
})

const emit = defineEmits(['click'])
const buttonClass = computed(() => {
  const base =
    'px-4 py-2 rounded-sm font-semibold transtition duration-200 flex items-center justify-center'
  const variant = {
    primary: 'bg-goldi-black text-white hover:bg-goldi-white hover:text-black',
    secondary: 'bg-goldi-white text-black hover:bg-goldi-black hover:text-white',
    outline:
      'border border-goldi-accent hover:bg-white hover:border-goldi-white focus:outline-none',
    text: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
  }
  const disabledClass = 'opacity-50 cursor-not-allowed'

  return `${base} ${variant[props.variant]} ${props.disabled || props.loading ? disabledClass : ''}`
})

const handleClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}
</script>

<template>
  <button :class="buttonClass" :disabled="disabled || loading" @click="handleClick">
    <span v-if="loading" class="animate-spin mr-2">⏳</span>
    <slot />
  </button>
</template>
