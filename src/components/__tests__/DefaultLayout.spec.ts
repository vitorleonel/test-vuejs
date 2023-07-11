import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import DefaultLayout from '@/components/DefaultLayout.vue'

describe('DefaultLayout', () => {
  it('should render properly', () => {
    const wrapper: VueWrapper = mount(DefaultLayout, {
      slots: {
        default: '<p>Test content</p>'
      },
      global: { stubs: ['RouterLink'] }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
