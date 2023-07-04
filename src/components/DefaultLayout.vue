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

  <StyledFooter />
</template>
