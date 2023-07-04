<script lang="ts">
import { defineComponent } from 'vue'

import DefaultLayout from '@/components/DefaultLayout.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductModal from '@/components/ProductModal.vue'
import InputField from '@/components/InputField.vue'
import SelectField, { type ISelectOption } from '@/components/SelectField.vue'

import ProductService from '@/shared/services/productService'
import type { IAPIGetAllProduct, IProduct } from '@/shared/interfaces/product'
import { sortingOptions } from '@/shared/utils/products'
import { getRandomIndexes } from '@/shared/utils/functions'

type IShopViewData = {
  isLoading: boolean
  sortingOptions: ISelectOption[]
  searchTerm: string
  sortBy: string
  products: IAPIGetAllProduct[]
  productsOnSale: Record<string, boolean>
  selectedProduct: IProduct | null
  selectedProductIndex: number | null
}

export default defineComponent({
  components: { DefaultLayout, ProductCard, ProductModal, InputField, SelectField },
  data(): IShopViewData {
    return {
      isLoading: false,
      sortingOptions,
      searchTerm: '',
      sortBy: '',
      products: [],
      productsOnSale: {},
      selectedProduct: null,
      selectedProductIndex: null
    }
  },
  mounted() {
    this.getProducts()
  },
  computed: {
    filteredProducts() {
      return this.applySortBy(this.applySearchTerm([...this.products]))
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true

      try {
        const products = await ProductService.getAll({
          page: 150,
          pageSize: 100,
          show: 'sku,name,salePrice,image,startDate,onSale'
        })

        const isThereAnyOnSale = products.some((product) => product.onSale)
        const randomIndexes = !isThereAnyOnSale ? getRandomIndexes(products, 5) : []

        this.products = isThereAnyOnSale
          ? products
          : products.map((product, productIndex) =>
              randomIndexes.includes(productIndex) ? { ...product, onSale: true } : product
            )
      } catch (error) {
        // TODO: handle the error
      } finally {
        this.isLoading = false
      }
    },

    applySearchTerm(products: IAPIGetAllProduct[]): IAPIGetAllProduct[] {
      if (!this.searchTerm) {
        return products
      }

      const formattedSearchTerm = this.searchTerm.toLowerCase()
      const searchTermParts = formattedSearchTerm.split(' ')

      const formatProductName = (name: string): string => name.toLowerCase()

      return products.filter((product) =>
        searchTermParts.some((searchTermPart) =>
          formatProductName(product.name).includes(searchTermPart)
        )
      )
    },

    applySortBy(products: IAPIGetAllProduct[]): IAPIGetAllProduct[] {
      switch (this.sortBy) {
        case 'name_asc':
          return products.sort((productA, productB) => productA.name.localeCompare(productB.name))

        case 'name_desc':
          return products.sort((productA, productB) => productB.name.localeCompare(productA.name))

        case 'price_asc':
          return products.sort((productA, productB) => productA.salePrice - productB.salePrice)

        case 'price_desc':
          return products.sort((productA, productB) => productB.salePrice - productA.salePrice)

        default:
          return products
      }
    },

    handleOnDelete({ sku: selectedSku }: IAPIGetAllProduct) {
      this.products = this.products.filter((product) => product.sku !== selectedSku)
    },

    async handleOnSelect({ sku: selectedSku }: IAPIGetAllProduct) {
      const selectedProductIndex = this.products.findIndex((product) => product.sku === selectedSku)

      if (selectedProductIndex === -1) {
        return
      }

      this.selectedProductIndex = selectedProductIndex
    },

    handleModalOnPrevious() {
      if (this.selectedProductIndex === null || !this.products[this.selectedProductIndex - 1]) {
        return
      }

      this.selectedProductIndex--
    },

    handleModalOnNext() {
      if (this.selectedProductIndex === null || !this.products[this.selectedProductIndex + 1]) {
        return
      }

      this.selectedProductIndex++
    },

    handleModalOnClose() {
      this.selectedProduct = null
      this.selectedProductIndex = null
    },

    handleModalOnSaveName(newProduct: IProduct) {
      this.products = this.products.map((product) =>
        product.sku === newProduct.sku ? { ...product, name: newProduct.name } : product
      )
    }
  },
  watch: {
    async selectedProductIndex() {
      if (this.selectedProductIndex === null) {
        return
      }

      this.isLoading = true

      try {
        const selectedProduct = this.products[this.selectedProductIndex]
        const product = await ProductService.getBySku(selectedProduct.sku)

        this.selectedProduct = { ...product, ...selectedProduct }
      } catch (error) {
        // TODO: handle the error
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<template>
  <DefaultLayout>
    <section class="products container">
      <div class="products__filters">
        <InputField v-model.trim="searchTerm" placeholder="Search for a product" />
        <SelectField v-model="sortBy" :options="sortingOptions" />
      </div>

      <div v-if="filteredProducts.length" class="products__list">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.sku"
          :product="product"
          @select="handleOnSelect"
          @delete="handleOnDelete"
        />
      </div>

      <p v-if="isLoading">Loading...</p>

      <p v-if="!isLoading && !filteredProducts.length && !searchTerm">
        There are no products to list.
      </p>

      <p v-if="!isLoading && !filteredProducts.length && searchTerm">
        There are no products to list for <strong>{{ searchTerm }}</strong
        >.
      </p>
    </section>

    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      :key="selectedProduct.sku"
      @previous="handleModalOnPrevious"
      @next="handleModalOnNext"
      @close="handleModalOnClose"
      @save-name="handleModalOnSaveName"
    />
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__filters {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .input,
    .select {
      width: 100%;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 24px;
  }

  @media only screen and (min-width: 512px) {
    &__filters {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .input {
        min-width: 208px;
        width: 35%;
      }

      .select {
        min-width: 160px;
        width: 20%;
      }
    }

    &__list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media only screen and (min-width: 728px) {
    &__list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
