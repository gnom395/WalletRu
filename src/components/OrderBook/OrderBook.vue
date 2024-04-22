<template>
    <v-container color="grey-lighten-3" max-width="1000">
        <ChangeQuantity />
        <AsksBids />
    </v-container>
</template>

<script setup>
import ChangeQuantity from '@/components/OrderBook/ChangeQuantity.vue'
import AsksBids from '@/components/OrderBook/AsksBids.vue'
</script>
