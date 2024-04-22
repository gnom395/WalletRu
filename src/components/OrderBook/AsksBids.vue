<template>

    <v-row>
      <v-col>
        <v-table :height="MobileSee" fixed-header>
          <thead>
            <tr>
              <th class="text-left">
                цена asks
              </th>
              <th class="text-left">
                кол-во
              </th>
              <th class="text-left d-none d-md-flex">
                всего
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in MyStore.asks">
              <td>{{ item[0] }}</td>
              <td>{{ item[1] }}</td>
              <td class="d-none d-md-flex">{{ item[0] * item[1] }}</td>
            </tr>
          </tbody>
        </v-table>

      </v-col>
      <v-col>


        <v-table :height="MobileSee" fixed-header>
          <thead>
            <tr>
              <th class="text-left">
                цена bids
              </th>
              <th class="text-left">
                кол-во
              </th>
              <th class="text-left d-none d-md-flex">
                всего
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in MyStore.bids">
              <td>{{ item[0] }}</td>
              <td>{{ item[1] }}</td>
              <td class="d-none d-md-flex">{{ item[0] * item[1] }}</td>
            </tr>
          </tbody>
        </v-table>

      </v-col>
    </v-row>

</template>



<script setup>
import { onMounted, computed } from "vue"

import { useMyStore } from '@/store/index.js'
const MyStore = useMyStore()

// размер дисп.
import { useDisplay } from 'vuetify'
const { smAndUp } = useDisplay()

const MobileSee = computed(() => {
  return (smAndUp.value) ? 'calc(100vh - 200px)' : 'calc(60vh - 200px)'
})



onMounted(() => {
  MyStore.getData()
})


</script>