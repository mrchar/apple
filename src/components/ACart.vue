<template>
  <view class="w-full px-4 py-2 flex gap-2 justify-between">
    <view class="text-lg px-4 py-2" @tap="router.push('/cart')">
      🛒Cart
    </view>
    <view class="flex-none flex gap-2">
      <view class="px-4 py-2">
        {{ sum }}
      </view>
      <AButton>Pay</AButton>
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
