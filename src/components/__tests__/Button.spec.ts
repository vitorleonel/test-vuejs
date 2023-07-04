import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '@/components/Button.vue'

describe('Button', () => {
  it('should renders properly', () => {
    const wrapper = mount(Button, { props: { text: 'My button' } })

    expect(wrapper.text()).toContain('My button')
  })

  it('should call "onClick" when clicking', () => {
    const onClick = vi.fn(() => {})
    const wrapper = mount(Button, { props: { text: 'My button', onClick } })

    wrapper.trigger('click')

    expect(onClick).toHaveBeenCalledOnce()
  })
})
