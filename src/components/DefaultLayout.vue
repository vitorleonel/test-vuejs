<script lang="ts">
import StyledHeader from '@/components/StyledHeader.vue'

export default {
  components: {
    StyledHeader
  }
}
</script>

<template>
  <StyledHeader />

  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 32px;
  padding-bottom: 32px;
}
</style>
