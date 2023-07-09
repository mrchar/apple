<template>
  <view class="w-full h-full flex flex-col">
    <view class="flex-none h-12 box-border m-2 p-2 bg-white" @tap="router.back()">
      返回
    </view>
    <slot/>
  </view>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router"

const router = useRouter()
</script>
