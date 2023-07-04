<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type ISelectOption = {
  label: string
  value: number | string
}

export default defineComponent({
  props: {
    modelValue: String,
    options: {
      required: true,
      type: Array as PropType<ISelectOption[]>
    },
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
  <select
    :class="`select select-${variant}`"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.select {
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
