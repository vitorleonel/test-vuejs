import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  it('should render properly', () => {
    const wrapper: VueWrapper = mount(AboutView, { global: { stubs: ['RouterLink'] } })

    expect(wrapper.element).toMatchSnapshot()
  })
})
