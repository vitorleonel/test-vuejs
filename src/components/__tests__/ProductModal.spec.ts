import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import ProductModal from '@/components/ProductModal.vue'
import { testFullProduct } from '@/shared/mocks/product'
import { formatPrice } from '@/shared/utils/format'

describe('ProductModal', () => {
  let mockOnPrevious: () => void
  let mockOnNext: () => void
  let wrapper: VueWrapper

  beforeEach(() => {
    mockOnPrevious = vi.fn(() => {})
    mockOnNext = vi.fn(() => {})

    wrapper = mount(ProductModal, {
      props: { product: testFullProduct, onPrevious: mockOnPrevious, onNext: mockOnNext }
    })
  })

  it('should render properly', () => {
    const formattedPlot = `${testFullProduct.plot.slice(0, 70)}...`

    expect(wrapper.find('.product__name').text()).toBe(testFullProduct.name)
    expect(wrapper.find('.product__genre').text()).toBe(testFullProduct.genre)
    expect(wrapper.find('.product__plot').text()).toBe(formattedPlot)
  })

  it('should only show 70 characters of the plot, and a toggle button that shows the rest or not', async () => {
    const shortPlotWithResidences = 73

    expect(wrapper.find('.product__plot').text().length).toBe(shortPlotWithResidences)

    await wrapper.find('.product__plot-toggle').trigger('click')

    expect(wrapper.find('.product__plot').text().length).toBe(testFullProduct.plot.length)

    await wrapper.find('.product__plot-toggle').trigger('click')

    expect(wrapper.find('.product__plot').text().length).toBe(shortPlotWithResidences)
  })

  it('should render shipping options properly', async () => {
    const shippingOptions = wrapper.findAll('.product__shipping')

    for (let index = 0; index < testFullProduct.shippingLevelsOfService.length; index++) {
      expect(shippingOptions[index].find('.product__shipping_name').text()).toBe(
        testFullProduct.shippingLevelsOfService[index].serviceLevelName
      )

      expect(shippingOptions[index].find('.product__shipping_price').text()).toBe(
        formatPrice(testFullProduct.shippingLevelsOfService[index].unitShippingPrice)
      )
    }
  })

  it('should not render shipping options when there is no option', () => {
    const customWrapper: VueWrapper = mount(ProductModal, {
      props: {
        product: { ...testFullProduct, shippingLevelsOfService: [] },
        onPrevious: mockOnPrevious,
        onNext: mockOnNext
      }
    })

    expect(customWrapper.find('.product__shipping').exists()).toBeFalsy()
  })

  it('should call "onPrevious" when click on delete button', () => {
    wrapper.find('.product__previous').trigger('click')

    expect(mockOnPrevious).toHaveBeenCalledOnce()
  })

  it('should call "onNext" when click on delete button', () => {
    wrapper.find('.product__next').trigger('click')

    expect(mockOnNext).toHaveBeenCalledOnce()
  })
})
