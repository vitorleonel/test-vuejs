import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('should render properly', () => {
    const wrapper: VueWrapper = mount(HomeView)

    expect(wrapper.element).toMatchSnapshot()
  })
})
