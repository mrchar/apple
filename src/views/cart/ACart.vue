<template>
  <view class="w-full h-full flex flex-col">
    <view class="flex-none h-12 m-2 p-2 bg-white" @tap="router.back()">
      返回
    </view>
    <AScroll>
      <view class="w-full h-full p-2 flex flex-col gap-2">
        <AItem v-for="item in commodities" :key="item.id" :data="item"/>
      </view>
    </AScroll>
  </view>
</template>
<script setup>
import AScroll from "../../components/AScroll.vue"
import AItem from "../shelf/components/AItem.vue"
import {useCart} from "../../store/cart"
import {storeToRefs} from "pinia"
import {useRouter} from "vue-router"

const router = useRouter()

const cart = useCart()

const {commodities} = storeToRefs(cart)
</script>
