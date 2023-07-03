import { describe, it, expect, vi } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import SSelect from '@/components/SSelect.vue'

const selectOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]

describe('SSelect', () => {
  it('should update the v-model property when the option is selected', async () => {
    const wrapper: VueWrapper = mount(SSelect, {
      props: {
        'onUpdate:modelValue': (event) => wrapper.setProps({ modelValue: event }),
        options: selectOptions
      }
    })

    const randomIndex = Math.floor(Math.random() * selectOptions.length)
    const randomOption = selectOptions[randomIndex]

    await wrapper.find('select').setValue(randomOption.value)

    expect(wrapper.props('modelValue')).toBe(String(randomOption.value))
  })

  it('should throw an warning when pass invalid variant', () => {
    const defaultConsoleWarn = console.warn
    console.warn = vi.fn(() => {})

    mount(SSelect, { props: { variant: 'invalid', options: selectOptions } })

    expect(console.warn).toHaveBeenCalledOnce()

    console.warn = defaultConsoleWarn
  })

  it('should throw an warning when pass invalid options', () => {
    const defaultConsoleWarn = console.warn
    console.warn = vi.fn(() => {})

    mount(SSelect, { props: { options: [{}] } })

    expect(console.warn).toHaveBeenCalledOnce()

    console.warn = defaultConsoleWarn
  })
})
