import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import ProductModal from '@/components/ProductModal.vue'
import { testProduct } from '@/shared/mocks/productMock'
import { formatPrice } from '@/shared/utils/format'

describe('ProductModal', () => {
  let mockOnPrevious: () => void
  let mockOnNext: () => void
  let mockOnClose: () => void
  let mockOnSaveName: () => void
  let wrapper: VueWrapper

  beforeEach(() => {
    mockOnPrevious = vi.fn(() => {})
    mockOnNext = vi.fn(() => {})
    mockOnClose = vi.fn(() => {})
    mockOnSaveName = vi.fn(() => {})

    wrapper = mount(ProductModal, {
      props: {
        product: testProduct,
        onPrevious: mockOnPrevious,
        onNext: mockOnNext,
        onClose: mockOnClose,
        onSaveName: mockOnSaveName
      }
    })
  })

  it('should render properly', () => {
    const formattedPlot = `${testProduct.plot?.slice(0, 70)}...`

    expect(wrapper.find('.product-modal__name').text()).toBe(testProduct.name)
    expect(wrapper.find('.product-modal__genre').text()).toBe(testProduct.genre)
    expect(wrapper.find('.product-modal__plot').text()).toBe(formattedPlot)
  })

  it('should only show 70 characters of the plot, and a toggle button that shows the rest or not', async () => {
    const shortPlotWithResidences = 73

    expect(wrapper.find('.product-modal__plot').text().length).toBe(shortPlotWithResidences)

    await wrapper.find('.product-modal__plot-toggle').trigger('click')

    expect(wrapper.find('.product-modal__plot').text().length).toBe(testProduct.plot?.length)

    await wrapper.find('.product-modal__plot-toggle').trigger('click')

    expect(wrapper.find('.product-modal__plot').text().length).toBe(shortPlotWithResidences)
  })

  it('should render shipping options properly', async () => {
    const shippingOptions = wrapper.findAll('.product-modal__shipping')

    for (let index = 0; index < testProduct.shippingLevelsOfService.length; index++) {
      expect(shippingOptions[index].find('.product-modal__shipping_name').text()).toBe(
        testProduct.shippingLevelsOfService[index].serviceLevelName
      )

      expect(shippingOptions[index].find('.product-modal__shipping_price').text()).toBe(
        formatPrice(testProduct.shippingLevelsOfService[index].unitShippingPrice)
      )
    }
  })

  it('should not render shipping options when there is no option', () => {
    const customWrapper: VueWrapper = mount(ProductModal, {
      props: {
        product: { ...testProduct, shippingLevelsOfService: [] },
        onPrevious: mockOnPrevious,
        onNext: mockOnNext,
        onClose: mockOnClose,
        onSaveName: mockOnSaveName
      }
    })

    expect(customWrapper.find('.product-modal__shipping').exists()).toBeFalsy()
  })

  it('should not render genre when there is no genre', () => {
    const customWrapper: VueWrapper = mount(ProductModal, {
      props: {
        product: { ...testProduct, genre: null },
        onPrevious: mockOnPrevious,
        onNext: mockOnNext,
        onClose: mockOnClose,
        onSaveName: mockOnSaveName
      }
    })

    expect(customWrapper.find('.product-modal__genre').exists()).toBeFalsy()
  })

  it('should not render plot when there is no plot', () => {
    const customWrapper: VueWrapper = mount(ProductModal, {
      props: {
        product: { ...testProduct, plot: null },
        onPrevious: mockOnPrevious,
        onNext: mockOnNext,
        onClose: mockOnClose,
        onSaveName: mockOnSaveName
      }
    })

    expect(customWrapper.find('.product-modal__plot').exists()).toBeFalsy()
    expect(customWrapper.find('.product-modal__plot-toggle').exists()).toBeFalsy()
  })

  it('should call "onClose" when clicking outside the content', () => {
    wrapper.find('.product-modal__overlay').trigger('click')

    expect(mockOnClose).toHaveBeenCalledOnce()
  })

  it('should call "onPrevious" when clicking on delete button', () => {
    wrapper.find('.product-modal__previous').trigger('click')

    expect(mockOnPrevious).toHaveBeenCalledOnce()
  })

  it('should call "onNext" when clicking on delete button', () => {
    wrapper.find('.product-modal__next').trigger('click')

    expect(mockOnNext).toHaveBeenCalledOnce()
  })
})
