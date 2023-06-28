import {ref} from "vue"
import {defineStore} from "pinia"


export const useCart = defineStore("cart", () => {
    const sum = ref(0)
    const commodities = ref([
        {
            id: 1,
            name: "Commodity1",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
        {
            id: 2,
            name: "Commodity2",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
        {
            id: 3,
            name: "Commodity3",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
        {
            id: 4,
            name: "Commodity4",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
        {
            id: 5,
            name: "Commodity5",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
    ])
    return {
        sum,
        commodities,
    }
})