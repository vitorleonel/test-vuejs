import { beforeEach, describe, expect, it, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import ProductCard from '@/components/ProductCard.vue'

import { formatPrice } from '@/shared/utils/format'
import type { IProduct } from '@/shared/interfaces/product'
import { testProduct } from '@/shared/mocks/productMock'

describe('ProductCard', () => {
  let mockOnSelect: (product: IProduct) => void
  let mockOnDelete: (product: IProduct) => void

  beforeEach(() => {
    mockOnSelect = vi.fn(() => {})
    mockOnDelete = vi.fn(() => {})
  })

  it('should render properly', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: { product: testProduct, onSelect: mockOnSelect, onDelete: mockOnDelete }
    })

    expect(wrapper.find('.product__name').text()).toBe(testProduct.name)
    expect(wrapper.find('.product__price').text()).toBe(formatPrice(testProduct.salePrice))
    expect(wrapper.find('.product__image').attributes()['src']).toBe(testProduct.image)
    expect(wrapper.find('.product__sale').exists()).toBeFalsy()
  })

  it('should render a fallback image if none is passed', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: {
        product: { ...testProduct, image: null },
        onSelect: mockOnSelect,
        onDelete: mockOnDelete
      }
    })

    expect(wrapper.find('.product__image').attributes()['src']).toBe('/images/default-product.png')
  })

  it('should render a sale icon if product onSale is true', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: {
        product: { ...testProduct, onSale: true },
        onSelect: mockOnSelect,
        onDelete: mockOnDelete
      }
    })

    expect(wrapper.find('.product__sale').exists()).toBeTruthy()
  })

  it('should render a green price if product salePrice is lower than $15', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: {
        product: { ...testProduct, salePrice: 12 },
        onSelect: mockOnSelect,
        onDelete: mockOnDelete
      }
    })

    expect(wrapper.find('.product__price').classes()).contain('product__price--green')
  })

  it('should render a red price if product salePrice is higher than $50', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: {
        product: { ...testProduct, salePrice: 53 },
        onSelect: mockOnSelect,
        onDelete: mockOnDelete
      }
    })

    expect(wrapper.find('.product__price').classes()).contain('product__price--red')
  })

  it('should call "onSelect" when click on select button', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: { product: testProduct, onSelect: mockOnSelect, onDelete: mockOnDelete }
    })

    wrapper.find('.product__select').trigger('click')

    expect(mockOnSelect).toHaveBeenCalledOnce()
    expect(mockOnSelect).toBeCalledWith(testProduct)
  })

  it('should call "onDelete" when click on delete button', () => {
    const wrapper: VueWrapper = mount(ProductCard, {
      props: { product: testProduct, onSelect: mockOnSelect, onDelete: mockOnDelete }
    })

    wrapper.find('.product__delete').trigger('click')

    expect(mockOnDelete).toHaveBeenCalledOnce()
    expect(mockOnDelete).toBeCalledWith(testProduct)
  })
})
