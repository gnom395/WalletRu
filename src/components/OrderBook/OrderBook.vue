<template>
    <v-container fluid ma-0 pa-0 fill-height>
        <ChangeQuantity />
        <AsksBids />
    </v-container>
</template>

<script setup>
import ChangeQuantity from '@/components/OrderBook/ChangeQuantity.vue'
import AsksBids from '@/components/OrderBook/AsksBids.vue'
</script>
