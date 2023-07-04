import { describe, it, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

import InputField from '@/components/InputField.vue'

describe('InputField', () => {
  it('should update the v-model property when the value is filled', async () => {
    const wrapper: VueWrapper = mount(InputField, {
      props: {
        'onUpdate:modelValue': (event) => wrapper.setProps({ modelValue: event })
      }
    })

    await wrapper.find('input').setValue('test')

    expect(wrapper.props('modelValue')).toBe('test')
  })
})
