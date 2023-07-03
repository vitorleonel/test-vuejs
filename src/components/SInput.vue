<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
    variant: {
      type: String,
      default: 'default',
      validator: (value: string) => ['default', 'danger', 'warning'].includes(value)
    }
  },
  emits: {
    'update:modelValue': (value: String | null) => value
  }
})
</script>

<template>
  <input
    :class="`input input-${variant}`"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss" scoped>
.input {
  border: 1px solid transparent;
  padding: 8px 12px;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  color: var(--dark-color);

  &::placeholder {
    color: var(--gray-color);
  }

  &-default {
    border-color: var(--gray-color);
  }

  &-success {
    border-color: var(--primary-color);
  }

  &-danger {
    border-color: var(--danger-color);
  }

  &-warning {
    border-color: var(--warning-color);
  }
}
</style>
