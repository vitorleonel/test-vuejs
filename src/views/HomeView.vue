<script lang="ts">
import { defineComponent } from 'vue'

import DefaultLayout from '@/components/DefaultLayout.vue'

export default defineComponent({
  components: { DefaultLayout },
  data() {
    return {
      categories: [
        { id: 1, label: 'Clothes', description: 'The best clothes you can find on the internet' },
        { id: 2, label: 'Electronics', description: 'Exclusive prices on all kind of electronics' },
        {
          id: 3,
          label: 'Automotive',
          description: 'Everything you need for your car at a great price'
        },
        {
          id: 4,
          label: 'Personal care',
          description: 'Take care of yourself and on people you love'
        }
      ]
    }
  }
})
</script>

<template>
  <DefaultLayout>
    <section class="home container">
      <img
        class="home__banner"
        src="@/assets/home-banner.png"
        alt="Everything you need"
        loading="lazy"
      />

      <nav class="home__categories">
        <RouterLink
          class="home__category"
          to="/shop"
          v-for="category in categories"
          :key="category.id"
        >
          <h3>{{ category.label }}</h3>
          <span>{{ category.description }}</span>
        </RouterLink>
      </nav>
    </section>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.home {
  &__banner {
    min-height: 208px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  &__categories {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  &__category {
    border: 1px solid var(--light-gray-color);
    background-color: var(--white-color);
    padding: 12px 16px;
    border-radius: var(--border-radius);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);

    &:hover {
      text-decoration: none;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    }

    h3 {
      font-size: 16px;
      font-weight: bold;
      color: initial;
    }

    span {
      font-size: 12px;
      color: var(--gray-color);
    }
  }

  @media only screen and (min-width: 640px) {
    &__categories {
      margin-top: 24px;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &__categories {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
