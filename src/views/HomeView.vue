<script lang="ts">
import { defineComponent } from 'vue'

import StyledButton from '@/components/StyledButton.vue'
import InputField from '@/components/InputField.vue'
import SelectField from '@/components/SelectField.vue'

import ProductService from '@/shared/services/productService'

export default defineComponent({
  components: { StyledButton, InputField, SelectField },
  mounted() {
    ProductService.getBySku(27358169).then(console.log)
  }
})
</script>

<template>
  <StyledButton text="My Button" variant="default" />
  <InputField />
  <SelectField
    :options="[
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
      { value: 4, label: 'Option 4' },
      { value: 5, label: 'Option 5' }
    ]"
  />
</template>
