import { shallowMount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import DefaultLayout from '@/components/DefaultLayout.vue'

describe('DefaultLayout', () => {
  it('should render properly', () => {
    const wrapper: VueWrapper = shallowMount(DefaultLayout, {
      slots: {
        default: '<p>Test content</p>'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
