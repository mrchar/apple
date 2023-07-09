import {ref} from "vue"
import {defineStore} from "pinia"
import {Category, Commodity} from "../models"

export const useShelf = defineStore("shelf", () => {
  const categories = ref<Category[]>([
    {id: 1, name: "Category1"},
    {id: 2, name: "Category2"},
    {id: 3, name: "Category3"},
    {id: 4, name: "Category4"},
  ])

  const commodities = ref<Commodity[]>([
    {
      id: 1,
      name: "Commodity1",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 2,
      name: "Commodity2",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 3,
      name: "Commodity3",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 4,
      name: "Commodity4",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 5,
      name: "Commodity5",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 6,
      name: "Commodity6",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 7,
      name: "Commodity7",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
    {
      id: 8,
      name: "Commodity8",
      description: "description",
      price: 100,
      image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
  ])

  return {
    categories,
    commodities,
  }
})
