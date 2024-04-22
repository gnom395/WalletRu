<template>
        <v-row dense>
            <v-col>
                <v-card subtitle="Селект с выбором валютной пары"
                    text="Захардкодил список из BTCUSDT, BNBBTC, ETHBTC. По умолчанию выбрана BTCUSDT">
                    <v-select v-model="MyStore.Selected" label="Select" class="ma-3" :items="MyStore.List"
                        @update:modelValue="Change"></v-select>
                </v-card>
            </v-col>
        </v-row>
</template>

<script setup>
import { useMyStore } from '@/store/index.js'
import moment from 'moment';

const MyStore = useMyStore()


const Change = (currency) => {
    localStorage.setItem('currency', currency)

    const datenow = moment().format('DD.MM.YYYY hh:mm')

    if(MyStore.LogData.length > 0){
        MyStore.LogData.unshift({'cur':currency, 'old': MyStore.LogData[0].cur, 'date': datenow })
    }else{
        MyStore.LogData.unshift({'cur':currency, 'old': 'не было истории', 'date': datenow })
    }

    MyStore.getData()

    localStorage.setItem('LogData', JSON.stringify(MyStore.LogData) )
}

</script>
