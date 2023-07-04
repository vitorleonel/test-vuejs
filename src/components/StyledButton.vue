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
