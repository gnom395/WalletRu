<template>

    <v-select v-model="MyStore.SelctedCount" label="Select" class="ma-3" :items="SelectCount"
      @update:modelValue="ChangeQuantity"></v-select>

</template>



<script setup>

import { useMyStore } from '@/store/index.js'
const MyStore = useMyStore()

const SelectCount = ['100', '500', '1000']

const ChangeQuantity = () => {
  MyStore.getData()
}

</script>