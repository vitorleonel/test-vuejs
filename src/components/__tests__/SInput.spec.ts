import { describe, it, expect, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import SInput from '@/components/SInput.vue'

describe('SInput', () => {
  it('should update the v-model property when the value is filled', async () => {
    const wrapper: VueWrapper = mount(SInput, {
      props: {
        'onUpdate:modelValue': (event) => wrapper.setProps({ modelValue: event })
      }
    })

    await wrapper.find('input').setValue('test')

    expect(wrapper.props('modelValue')).toBe('test')
  })

  it('should throw an warning when pass invalid variant', () => {
    const defaultConsoleWarn = console.warn
    console.warn = vi.fn(() => {})

    mount(SInput, { props: { variant: 'invalid' } })

    expect(console.warn).toHaveBeenCalledOnce()

    console.warn = defaultConsoleWarn
  })
})
