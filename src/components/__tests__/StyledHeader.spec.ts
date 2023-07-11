import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import StyledHeader from '@/components/StyledHeader.vue'

describe('StyledHeader', () => {
  it('should render properly', () => {
    const wrapper: VueWrapper = mount(StyledHeader, { global: { stubs: ['RouterLink'] } })

    expect(wrapper.element).toMatchSnapshot()
  })
})
