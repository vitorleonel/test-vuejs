<script lang="ts">
import type { PropType } from 'vue'
import type { IProduct } from '@/shared/interfaces/product'
import { formatPrice } from '@/shared/utils/format'

import StyledButton from '@/components/StyledButton.vue'

type IProductModalData = {
  showFullPlot: boolean
}

export default {
  components: { StyledButton },
  props: {
    product: {
      required: true,
      type: Object as PropType<IProduct>
    },
    onPrevious: {
      required: true,
      type: Function
    },
    onNext: {
      required: true,
      type: Function
    }
  },
  data(): IProductModalData {
    return {
      showFullPlot: false
    }
  },
  computed: {
    formattedPlot(): string {
      return this.showFullPlot ? this.product.plot : `${this.product.plot.slice(0, 70)}...`
    }
  },
  methods: {
    handleTogglePlot() {
      this.showFullPlot = !this.showFullPlot
    },

    handleOnPrevius() {
      this.onPrevious()
    },

    handleOnNext() {
      this.onNext()
    },

    formatPrice(price: number): string {
      return formatPrice(price)
    }
  }
}
</script>

<template>
  <div class="product">
    <h3 class="product__name">{{ product.name }}</h3>
    <span class="product__genre">{{ product.genre }}</span>
    <p class="product__plot">{{ formattedPlot }}</p>
    <button class="product__plot-toggle" @click="handleTogglePlot">Read more</button>

    <ul class="product__shippings" v-if="product.shippingLevelsOfService.length">
      <li
        class="product__shipping"
        v-for="(shippingService, index) in product.shippingLevelsOfService"
        :key="index"
      >
        <span class="product__shipping_name">{{ shippingService.serviceLevelName }}</span>
        <span class="product__shipping_price">{{
          formatPrice(shippingService.unitShippingPrice)
        }}</span>
      </li>
    </ul>

    <StyledButton class="product__previous" text="Previous item" @click="handleOnPrevius" />
    <StyledButton class="product__next" text="Next item" @click="handleOnNext" />
  </div>
</template>
