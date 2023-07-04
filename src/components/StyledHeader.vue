<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <header class="header">
    <div class="container">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/about">About us</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 64px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 10;

  .container {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  nav {
    display: flex;
    gap: 32px;

    a {
      text-transform: lowercase;
      color: var(--white-color);
    }
  }
}
</style>
