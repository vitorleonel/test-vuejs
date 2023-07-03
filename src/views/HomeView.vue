<script lang="ts">
import { defineComponent } from 'vue'

import SButton from '@/components/SButton.vue'
import SInput from '@/components/SInput.vue'
import SSelect from '@/components/SSelect.vue'

export default defineComponent({
  components: { SButton, SInput, SSelect }
})
</script>

<template>
  <SButton text="My Button" variant="default" />
  <SInput />
  <SSelect
    :options="[
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
      { value: 4, label: 'Option 4' },
      { value: 5, label: 'Option 5' }
    ]"
  />
</template>
