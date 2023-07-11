<script lang="ts">
import type { PropType } from 'vue'

import StyledButton from '@/components/StyledButton.vue'

import { formatPrice } from '@/shared/utils/format'
import type { IAPIGetAllProduct } from '@/shared/interfaces/product'

export default {
  components: { StyledButton },
  props: {
    product: {
      required: true,
      type: Object as PropType<IAPIGetAllProduct>
    },
    onSelect: {
      required: true,
      type: Function as PropType<(product: IAPIGetAllProduct) => void>
    },
    onDelete: {
      required: true,
      type: Function as PropType<(product: IAPIGetAllProduct) => void>
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
  <div class="product" :title="product.name">
    <div class="product__header">
      <img
        class="product__image"
        :src="parsedImage"
        :alt="product.name"
        loading="lazy"
        data-test="product-image"
      />

      <img
        v-if="product.onSale"
        src="@/assets/sale-icon.png"
        alt="Sale"
        class="product__sale"
        loading="lazy"
        data-test="product-sale"
      />
    </div>

    <div class="product__content">
      <h3 class="product__name" data-test="product-name">{{ product.name }}</h3>

      <span
        :class="{
          product__price: true,
          'product__price--green': product.salePrice < 15,
          'product__price--red': product.salePrice > 50
        }"
        data-test="product-price"
        >{{ formattedPrice }}</span
      >
    </div>

    <div class="product__footer">
      <StyledButton
        class="product__select"
        variant="default"
        text="Select"
        @click="handleOnSelect"
        data-test="product-action-select"
      />
      <StyledButton
        class="product__delete"
        variant="outlined"
        text="Delete"
        @click="handleOnDelete"
        data-test="product-action-delete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  border: 1px solid var(--light-gray-color);
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }

  &__header {
    position: relative;
  }

  &__image {
    width: 100%;
    height: 160px;
    background-color: var(--light-gray-color);
    object-fit: scale-down;
    object-position: center;
    padding: 16px;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  &__sale {
    width: 80px;
    position: absolute;
    bottom: -16px;
    left: 8px;
  }

  &__name {
    font-size: 16px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__content {
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__price {
    &--green {
      color: var(--primary-color);
    }

    &--red {
      color: var(--danger-color);
    }
  }

  &__footer {
    padding: 0 24px 20px 24px;
    margin-top: auto;
    display: flex;
    gap: 16px;

    > * {
      flex: 1;
    }
  }
}
</style>
