<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String
    },
    variant: {
      type: String as PropType<'default' | 'outlined' | 'link'>,
      default: 'default'
    }
  }
})
</script>

<template>
  <button :class="`btn btn-${variant}`">{{ text }}</button>
</template>

<style lang="scss" scoped>
.btn {
  height: 40px;
  border: 1px solid transparent;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: var(--border-radius);
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

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

a.btn {
  text-decoration: none;
}
</style>
