<script lang="ts">
import { defineComponent } from 'vue'

import DefaultLayout from '@/components/DefaultLayout.vue'

export default defineComponent({
  components: { DefaultLayout }
})
</script>

<template>
  <DefaultLayout>
    <section class="about container">
      <h2 class="about__title">About us</h2>

      <p class="about__subtitle">
        Embark on a captivating journey and explore the transformation of
        <strong>BestBuy</strong>'s small town store into the largest e-commerce platform in Latin
        America.
      </p>

      <img class="about__image" src="@/assets/about-how-we-started.png" alt="How we started" />

      <div class="about__history">
        <p>
          In 1978, in the quiet town of Uberaba, Brazil, a young and ambitious entrepreneur named
          Vitor Leonel founded a small physical store called
          <strong><strong>BestBuy</strong></strong
          >. With a modest inventory of a few items, Vitor set out to serve the local community and
          fulfill their needs.
        </p>

        <p>
          Over the years, <strong>BestBuy</strong> gained a reputation for offering quality products
          and exceptional customer service. However, like any business, it faced its fair share of
          challenges. A significant financial setback tested Vitor's resilience and determination.
        </p>

        <p>
          Instead of giving up, Vitor saw an opportunity to adapt and evolve. Recognizing the rising
          popularity of online shopping, he made a bold decision to transform his company into an
          e-commerce platform. With the vision of reaching a broader audience and expanding beyond
          the limitations of a physical store, Vitor embraced the digital revolution.
        </p>

        <p>
          The transition from a brick-and-mortar store to an e-commerce giant was not without its
          hurdles. Vitor had to learn about the intricacies of online retail, including web
          development, logistics, and digital marketing. However, his unwavering determination and
          entrepreneurial spirit guided him through the challenges.
        </p>

        <p>
          By leveraging the power of technology and providing a seamless online shopping experience,
          <strong>BestBuy</strong>'s e-commerce venture started to gain traction. The convenience
          and accessibility of the platform attracted customers from not only Uberaba but also other
          towns and cities across Brazil.
        </p>

        <p>
          As the business flourished, Vitor invested in expanding the product range, partnering with
          suppliers and manufacturers nationwide. The e-commerce platform became a one-stop shop,
          offering a vast array of products ranging from electronics and appliances to fashion and
          household items.
        </p>

        <p>
          With each passing year, <strong>BestBuy</strong>'s online shop grew exponentially,
          solidifying its position as the leading e-commerce platform in Latin America. The
          company's success was attributed to Vitor's unwavering commitment to customer
          satisfaction, competitive pricing, and continuous innovation.
        </p>

        <p>
          Today, <strong>BestBuy</strong>'s online shop is a household name, known for its vast
          product selection, efficient logistics, and exceptional customer service. It has not only
          revolutionized the way people shop in Uberaba but has become a go-to destination for
          online shoppers across Brazil.
        </p>

        <p>
          <strong>BestBuy</strong>'s journey from a small physical store in Uberaba to building the
          largest e-commerce platform in Latin America is a testament to his resilience,
          adaptability, and entrepreneurial vision. Its transformation serves as an inspiration for
          aspiring entrepreneurs, showcasing that even in the face of adversity, one can overcome
          challenges and build something extraordinary.
        </p>
      </div>
    </section>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.about {
  padding-top: 32px;
  padding-bottom: 32px;

  &__title {
    margin-bottom: 16px;
  }

  &__subtitle {
    color: var(--gray-color);
  }

  &__title,
  &__subtitle {
    text-align: center;
  }

  &__image {
    border-radius: var(--border-radius);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    margin-top: 32px;
    margin-bottom: 32px;
  }

  &__history {
    display: flex;
    flex-direction: column;
    gap: 24px;

    p {
      line-height: 1.75;
    }
  }
}
</style>
