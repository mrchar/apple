<template>
    <view class="w-full px-4 py-2 flex gap-2 justify-between">
        <view class="text-lg px-4 py-2">
            🛒Cart
        </view>
        <view class="flex-none flex gap-2">
            <view class="px-4 py-2">
                Sum
            </view>
            <AButton>Pay</AButton>
        </view>
    </view>
</template>
<script setup>
import AButton from "./AButton.vue"
</script>
