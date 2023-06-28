import {ref} from "vue"
import {defineStore} from "pinia"

export const useShelf = defineStore("shelf", () => {
    const categories = ref([
        {id: 1, name: "Category1"},
        {id: 2, name: "Category2"},
        {id: 3, name: "Category3"},
        {id: 4, name: "Category4"},
    ])

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
        {
            id: 6,
            name: "Commodity6",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
        {
            id: 7,
            name: "Commodity7",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
        {
            id: 8,
            name: "Commodity8",
            description: "description",
            price: "￥100",
            image: "/vite.svg",
        },
    ])

    return {
        categories,
        commodities,
    }
})