<script lang="ts">
import type { PropType } from 'vue'

import { formatPrice } from '@/shared/utils/format'
import type { IProduct } from '@/shared/interfaces/product'

export default {
  props: {
    product: {
      required: true,
      type: Object as PropType<IProduct>
    },
    onSelect: {
      required: true,
      type: Function as PropType<(product: IProduct) => void>
    },
    onDelete: {
      required: true,
      type: Function as PropType<(product: IProduct) => void>
    }
  },
  computed: {
    formattedPrice() {
      return formatPrice(this.product.salePrice)
    },
    parsedImage() {
      return this.product.image || '/images/default-product.png'
    }
  },
  methods: {
    handleOnSelect() {
      this.onSelect(this.product)
    },
    handleOnDelete() {
      this.onDelete(this.product)
    }
  }
}
</script>

<template>
  <div class="product">
    <img class="product__image" :src="parsedImage" :alt="product.name" />
    <h3 class="product__name">{{ product.name }}</h3>
    <span
      :class="{
        product__price: true,
        'product__price--green': product.salePrice < 15,
        'product__price--red': product.salePrice > 50
      }"
      >{{ formattedPrice }}</span
    >
    <span class="product__sale" v-if="product.onSale">Sale</span>

    <button class="product__select" @click="handleOnSelect">Select</button>
    <button class="product__delete" @click="handleOnDelete">Delete</button>
  </div>
</template>
