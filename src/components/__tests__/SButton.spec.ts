import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import SButton from '@/components/SButton.vue'

describe('SButton', () => {
  it('should renders properly', () => {
    const wrapper = mount(SButton, { props: { text: 'My button' } })

    expect(wrapper.text()).toContain('My button')
  })

  it('should call "onClick" when clicking', () => {
    const onClick = vi.fn(() => {})
    const wrapper = mount(SButton, { props: { text: 'My button', onClick } })

    wrapper.trigger('click')

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('should throw an warning when pass invalid variant', () => {
    const defaultConsoleWarn = console.warn
    console.warn = vi.fn(() => {})

    mount(SButton, { props: { text: 'My button', variant: 'invalid' } })

    expect(console.warn).toHaveBeenCalledOnce()

    console.warn = defaultConsoleWarn
  })
})
