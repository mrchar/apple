import {computed, ref} from "vue"
import {defineStore} from "pinia"
import {Commodity} from "../models"

export const useCart = defineStore("cart", () => {
  const commodities = ref<(Commodity & { count: number })[]>([])

  function setCommodity(commodity: Commodity & { count: number }) {
    const found = commodities.value.find(item => item.id === commodity.id)
    if (found) {
      console.debug("在购物车中找到商品，正在修改商品数量，当前数量为", found.count)
      found.count = commodity.count
    } else {
      console.debug("没有找到商品，正在添加商品", commodity)
      commodities.value.push(commodity)
    }

    commodities.value = commodities.value.filter(item => item.count > 0)
  }

  const sum = computed(() => {
    if (commodities.value.length === 0) {
      console.debug("购物车中没有商品")
      return 0
    }

    const sum = commodities.value
      .map(item => item.price * item.count)
      .reduce((total, price) => (total + price), 0)

    console.debug("购物车中商品总额为", sum)
    return sum
  })

  return {
    sum,
    commodities,
    setCommodity,
  }
})
