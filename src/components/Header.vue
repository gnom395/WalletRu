<template>

  <v-app-bar>


    <v-icon class="ma-2" size="x-large" icon="mdi-devices" @click="this.$router.push('/')" />

    <h3>{{ title }}</h3>

    <v-spacer></v-spacer>


  </v-app-bar>


</template>

<script setup>
const title = 'WalletRu'
</script>
