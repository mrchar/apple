<template>
  <view class="w-full h-full flex flex-col">
    <view class="flex-none h-12 box-border m-2 p-2 bg-white" @tap="router.back()">
      返回
    </view>
    <AScroll>
      <view class="w-full h-full box-border p-2 flex flex-col gap-2">
        <AItem v-for="item in commodities" :key="item.id"
               :model-value="item" @update:model-value="onItemChange"/>
      </view>
    </AScroll>
  </view>
</template>
<script lang="ts" setup>
import {useRouter} from "vue-router"
import {useCart} from "../../store/cart"
import {storeToRefs} from "pinia"
import {Commodity} from "../../models"
import AScroll from "../../components/AScroll.vue"
import AItem from "../shelf/components/AItem.vue"

const router = useRouter()

const cart = useCart()

const {commodities} = storeToRefs(cart)

function onItemChange(commodity: Commodity & { count: number }) {
  console.debug("正在修改购物车，要处理的商品是", commodity)
  cart.setCommodity(commodity)
}
</script>
