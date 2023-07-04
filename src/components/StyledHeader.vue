<template>
  <header class="header">
    <div class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/about">About us</RouterLink>
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
