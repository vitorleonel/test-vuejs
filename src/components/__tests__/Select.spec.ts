import { describe, it, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import Select from '@/components/Select.vue'

describe('Select', () => {
  it('should update the v-model property when the option is selected', async () => {
    const selectOptions = [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
      { value: 4, label: 'Option 4' },
      { value: 5, label: 'Option 5' }
    ]

    const wrapper: VueWrapper = mount(Select, {
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
})
