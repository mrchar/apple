<template>
  <view class="w-full box-border px-4 py-2 flex gap-2 justify-between">
    <view class="text-lg box-border px-4 py-2" @tap="router.push('/cart')">
      🛒Cart
    </view>
    <view class="flex-none flex gap-2">
      <view class="box-border px-4 py-2">
        ￥{{ sum }}
      </view>
      <AButton @click="router.push('/bill')">Pay</AButton>
    </view>
  </view>
</template>
<script setup>
import AButton from "./AButton.vue"
import {useCart} from "../store/cart"
import {storeToRefs} from "pinia"
import {useRouter} from "vue-router"

const router = useRouter()

const cart = useCart()

const {sum} = storeToRefs(cart)
</script>
