<template>
  <view class="w-full h-full flex">
    <ACategory class="flex-auto w-1/3"/>
    <view class="flex-auto w-2/3 h-full">
      <AScroll>
        <view class="w-full h-full box-border p-2 flex flex-col gap-2">
          <AItem v-for="item in commodities" :key="item.id"
                 :model-value="item" :count="item.count"
                 @change="(value)=>onItemChange({...item, count:value})"/>
        </view>
      </AScroll>
    </view>
  </view>
</template>
<script setup>
import ACategory from "./components/ACategory.vue"
import AItem from "./components/AItem.vue"
import AScroll from "../../components/AScroll.vue"
import {useShelf} from "../../store/shelf"
import {useCart} from "../../store/cart"
import {computed} from "vue"

const shelf = useShelf()

const cart = useCart()

const commodities = computed(() => {
  return shelf.commodities
    .map(commodity => {
      console.debug("正在从购物车中查找商品, 商品id为: ", commodity.id)
      const found = cart.commodities.find(item => item.id === commodity.id)
      if (found) {
        console.debug("从购物车中查找到商品", found)
        return {...commodity, count: found.count}
      }

      console.debug("没有从购物车中查找到商品，返回0")
      return {...commodity, count: 0}

    })
})


function onItemChange(commodity) {
  console.debug("正在修改购物车，要处理的商品是", commodity)
  cart.setCommodity(commodity)
}
</script>
