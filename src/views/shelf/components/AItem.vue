<template>
  <view class="w-full h-26 box-border p-2 bg-white rounded flex">
    <view class="flex-none w-24 h-24 box-border p-1">
      <img class="max-w-full max-h-full" :src="modelValue.image" alt="商品图片" loading="lazy">
    </view>
    <view class="flex-1 w-full flex flex-col gap-2">
      <view class="w-full text-base">
        {{ modelValue.description }}
      </view>
      <view class="w-full flex justify-between">
        <view class="text-base">
          ￥{{ modelValue.price }}
        </view>
        <view class="flex-none">
          <view class="inline-block p-2" @click="decrease()">-</view>
          <view class="inline-block p-2">{{ modelValue.count }}</view>
          <view class="inline-block p-2" @click="increase()">+</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {Commodity} from "../../../models"

type Props = {
  modelValue: Commodity & { count: number }
}

const props = defineProps<Props>()

const emit = defineEmits(["update:modelValue"])

function increase() {
  const count = props.modelValue.count
  console.debug("添加商品数量，当前数量", count)
  emit("update:modelValue", {...props.modelValue, count: count + 1})
}

function decrease() {
  const count = props.modelValue.count

  if (count <= 0) {
    console.debug("商品数量不能再减少")
    return
  }

  console.debug("减少商品数量，当前数量", count)
  emit("update:modelValue", {...props.modelValue, count: count - 1})
}
</script>
