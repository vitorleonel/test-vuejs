<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
    variant: {
      type: String as PropType<'default' | 'danger' | 'warning'>,
      default: 'default'
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
  height: 40px;
  border: 1px solid transparent;
  font-size: 16px;
  padding: 0 12px;
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
