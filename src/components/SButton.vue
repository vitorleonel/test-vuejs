<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value: string) => ['default', 'outlined', 'link'].includes(value)
    }
  }
})
</script>

<template>
  <button :class="`btn btn-${variant}`">{{ text }}</button>
</template>

<style lang="scss" scoped>
.btn {
  border: 1px solid transparent;
  padding: 8px 12px;
  border-radius: var(--border-radius);
  background-color: transparent;

  &-default {
    background-color: var(--primary-color);
    color: var(--white-color);

    &:hover {
      background-color: var(--primary-color-darker);
      cursor: pointer;
    }
  }

  &-outlined {
    border-color: var(--primary-color);
    color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color-darker);
      border-color: transparent;
      color: var(--white-color);
      cursor: pointer;
    }
  }

  &-link {
    color: var(--primary-color);

    &:hover {
      color: var(--primary-color-darker);
      cursor: pointer;
    }
  }
}
</style>
