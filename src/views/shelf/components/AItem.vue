<template>
    <view class="w-full h-26 box-border p-2 bg-white rounded flex">
        <view class="flex-none w-24 h-24 box-border p-1">
            <img :src="data.image" alt="商品图片" loading="lazy">
        </view>
        <view class="flex-1 w-full flex flex-col gap-2">
            <view class="w-full text-base">
                {{ data.description }}
            </view>
            <view class="w-full flex justify-between">
                <view class="text-base">
                    {{ data.price }}
                </view>
                <view class="flex-none">
                    - 1 +
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
const {data} = defineProps(["data"])
</script>
