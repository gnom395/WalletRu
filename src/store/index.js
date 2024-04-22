import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios"

export const useMyStore = defineStore("MyStore", () => {
    const title = 'WalletRu'
    const Selected = ref('BTCUSDT')
    const List = ['BTCUSDT', 'BNBBTC', 'ETHBTC']
    const SelctedCount = ref('100')
    const UrlAPI = 'https://api.binance.com/api/v3/depth?limit='
    const UrlTradeStream = 'wss://stream.binance.com:9443/ws/'
    const asks = ref([])
    const bids = ref([])
    const lastUpdateId = ref(null)
    const WS = ref([])

    /// rest api
    const getData = async () => {

        await axios.get(UrlAPI + SelctedCount.value + '&symbol=' + Selected.value)
            .then(response => {

                /// заполняем данные
                asks.value = response.data.asks
                bids.value = response.data.bids
                lastUpdateId.value = response.data.lastUpdateId

                console.log(response.data);

                // запускаем сокет
                getTradeStream()
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    /// WebSocket
    const getTradeStream = () => {

        /// если открыт сокет, закрываем
        if (WS.value.readyState <= 1) {
            WS.value.close()
        }

        WS.value = new WebSocket(UrlTradeStream + Selected.value.toLowerCase() + '@depth');

        /// пошла жара
        WS.value.addEventListener("message", (event) => {

            const data = JSON.parse(event.data)

            if (data.U <= lastUpdateId.value + 1 && data.u >= lastUpdateId.value + 1) {
                lastUpdateId.value = data.u
            } 


            /// отбразываем 0
            let filteredAsks = data.a.filter(el => el[1] != 0)
            let filteredBids = data.b.filter(el => el[1] != 0)

            /// обрезаем массив 
            asks.value = asks.value.slice(0, SelctedCount.value - data.a.length)
            /// добававим новые данные
            asks.value.unshift(...filteredAsks);
            asks.value.sort(function (a, b) {
                return b[0] - a[0];
            });

            /// обрезаем массив 
            bids.value = bids.value.slice(0, SelctedCount.value - data.b.length)
            /// добававим новые данные
            bids.value.unshift(...filteredBids);
            bids.value.sort(function (a, b) {
                return b[0] - a[0];
            });

        });

    }


    return { UrlAPI, Selected, List, asks, bids, lastUpdateId, SelctedCount, title, getData, getTradeStream }
})