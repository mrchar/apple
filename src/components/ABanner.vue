<template>
  <view class="w-full box-border px-4 py-2 flex gap-2 justify-between">
    <view class="flex-none text-lg box-border p-2 w-24">☀️Logo</view>
    <AButton class="flex-none text-lg" @click="router.push('/search')">🔍Search</AButton>
  </view>
</template>

<script setup>
import AButton from "./AButton.vue"
import {useRouter} from "vue-router"

const router = useRouter()
</script>
