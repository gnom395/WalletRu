<template>

    <v-row dense>
        <v-col>
            <v-card subtitle="Блок с логом наших действий по изменение валютной пары. "
                text="С какой на какую мы изменили и во сколько времени.">

                <v-table density="compact">
                    <thead>
                        <tr>
                            <th class="text-left">
                                стало
                            </th>
                            <th class="text-left">
                                было
                            </th>
                            <th class="text-left">
                                Дата
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(Log, index) in MyStore.LogData" :key="index">
                            <td>{{ Log.cur }}</td>
                            <td>{{ Log.old }}</td>
                            <td>{{ Log.date }}</td>
                        </tr>
                    </tbody>
                </v-table>


            </v-card>
        </v-col>
    </v-row>

</template>

<script setup>
import { useMyStore } from '@/store/index.js'


const MyStore = useMyStore()
MyStore.LogData = (localStorage.getItem('LogData')) ? JSON.parse(localStorage.getItem('LogData')) : []

</script>
