<template>

  <v-app-bar>

    <v-icon class="ma-2" size="x-large" icon="mdi-devices" @click="$router.push('/')" />

    <h3>{{ MyStore.title }} | {{ MyStore.Selected }}</h3>

    <v-spacer></v-spacer>

    <v-btn @click="$router.push('/settings')">
      <v-icon>mdi-cog</v-icon>
      <span class="d-none d-md-flex">Settings</span>
    </v-btn>

    <v-btn @click="$router.push('/orderbook')">
      <v-icon>mdi-heart</v-icon>
      <span class="d-none d-md-flex">OrderBook</span>
    </v-btn>

  </v-app-bar>

</template>

<script setup>
import { useMyStore } from '@/store/index.js'
const MyStore = useMyStore()

</script>
