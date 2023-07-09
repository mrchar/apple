<template>
  <view class="w-full h-full flex flex-col">
    <view class="flex-none h-12 box-border m-2 p-2 bg-white" @tap="router.back()">
      返回
    </view>
    <view class="flex-none w-full box-border px-4 py-2 bg-gray-100">
      <view class="box-border p-4 border-solid border-gray-200 border rounded-xl">
        <input v-model="keyword" placeholder="请输入商品名称或描述"/>
      </view>
    </view>
    <AScroll>
      <view class="w-full h-full box-border p-2 flex flex-col gap-2">
        <AItem v-for="item in commodities"
               :key="item.id"
               :model-value="item"
               @update:model-value="onItemChange"/>
      </view>
    </AScroll>
  </view>
</template>
<script lang="ts" setup>
import {computed, ref} from "vue"
import {useShelf} from "../../store/shelf"
import {useCart} from "../../store/cart"
import {useRouter} from "vue-router"
import {Commodity} from "../../models"
import AItem from "../shelf/components/AItem.vue"
import AScroll from "../../components/AScroll.vue"

const router = useRouter()

const shelf = useShelf()
const cart = useCart()

const keyword = ref("")

const commodities = computed<(Commodity & { count: number })[]>(() => {
  let commodities = shelf.commodities
  if (keyword.value) {
    commodities = shelf.commodities
      .filter(item => (
        item.name.includes(keyword.value) || item.description.includes(keyword.value)
      ))
  }

  return commodities.map(commodity => {
    const found = cart.commodities.find(item => item.id === commodity.id)
    if (found) {
      return found
    }

    return {...commodity, count: 0}
  })
})

function onItemChange(commodity: Commodity & { count: number }) {
  cart.setCommodity(commodity)
}
</script>
