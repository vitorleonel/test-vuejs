<script lang="ts">
import type { PropType } from 'vue'
import type { IProduct } from '@/shared/interfaces/product'
import { formatPrice } from '@/shared/utils/format'

import StyledButton from '@/components/StyledButton.vue'
import InputField from '@/components/InputField.vue'

type IProductModalData = {
  showFullPlot: boolean
  isEditingName: boolean
  productName: string
}

export default {
  components: { StyledButton, InputField },
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
    },
    onClose: {
      required: true,
      type: Function
    },
    onSaveName: {
      required: true,
      type: Function
    }
  },
  data(): IProductModalData {
    return {
      showFullPlot: false,
      isEditingName: false,
      productName: ''
    }
  },
  mounted() {
    this.productName = this.product.name
  },
  computed: {
    formattedPlot(): string | null {
      if (!this.product.plot) {
        return null
      }

      return this.showFullPlot ? this.product.plot : `${this.product.plot.slice(0, 70)}...`
    }
  },
  methods: {
    handleSaveNewName() {
      this.isEditingName = false

      if (this.product.name !== this.productName) {
        this.onSaveName({ ...this.product, name: this.productName })
      }
    },

    handleOnPrevius() {
      this.onPrevious()
    },

    handleOnNext() {
      this.onNext()
    },

    handleOnClose() {
      this.onClose()
    },

    formatPrice(price: number): string {
      return formatPrice(price)
    }
  }
}
</script>

<template>
  <div class="product-modal">
    <div class="product-modal__overlay" @click="handleOnClose"></div>

    <div class="product-modal__content">
      <div class="product-modal__header">
        <h3 v-show="!isEditingName" class="product-modal__name">{{ productName }}</h3>

        <InputField
          v-show="isEditingName"
          v-model.trim="productName"
          class="product-modal__name-input"
          placeholder="Write the product name"
        />

        <div
          v-show="!isEditingName"
          @click="isEditingName = true"
          class="product-modal__name-action"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>

          <span>Edit</span>
        </div>

        <div v-show="isEditingName" @click="handleSaveNewName" class="product-modal__name-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>

          <span>Save</span>
        </div>
      </div>

      <div class="product-modal__body">
        <div v-if="product.genre">
          <h4>Genre:</h4>
          <span class="product-modal__genre">{{ product.genre }}</span>
        </div>

        <div v-if="formattedPlot">
          <h4>Plot:</h4>
          <p class="product-modal__plot">{{ formattedPlot }}</p>

          <button class="product-modal__plot-toggle" @click="showFullPlot = !showFullPlot">
            {{ showFullPlot ? ' [Read less]' : ' [Read more]' }}
          </button>
        </div>

        <div v-if="product.shippingLevelsOfService.length">
          <h4>Shipping options:</h4>

          <ul class="product-modal__shippings">
            <li
              class="product-modal__shipping"
              v-for="(shippingService, index) in product.shippingLevelsOfService"
              :key="index"
            >
              <span class="product-modal__shipping_name">{{
                shippingService.serviceLevelName
              }}</span>
              <span class="product-modal__shipping_price">{{
                formatPrice(shippingService.unitShippingPrice)
              }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="product-modal__actions">
        <StyledButton class="product-modal__previous" text="Previous" @click="handleOnPrevius" />
        <StyledButton class="product-modal__next" text="Next" @click="handleOnNext" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-modal {
  width: 100vw;
  height: 100vh;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  &__overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  &__content {
    width: 100%;
    max-width: 516px;
    padding: 24px;
    border-radius: var(--border-radius);
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 10;
  }

  &__header {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--light-gray-color);
  }

  &__name {
    font-size: 16px;

    &-input {
      width: 100%;
    }

    &-action {
      margin-top: 8px;

      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        opacity: 0.75;
        cursor: pointer;
      }
    }
  }

  &__body {
    max-height: 60vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > * {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }

  &__plot-toggle {
    width: fit-content;
    background-color: transparent;
    border: none;
    color: var(--primary-color);
    font-size: 16px;

    &:hover {
      color: var(--primary-color-darker);
      cursor: pointer;
    }
  }

  &__shippings {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;

    li {
      border: 1px solid var(--light-gray-color);
      padding: 12px;
      border-radius: var(--border-radius);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }

  &__shipping_price {
    font-weight: bold;
  }

  &__actions {
    display: flex;
    gap: 16px;

    > * {
      flex: 1;
    }
  }
}
</style>
