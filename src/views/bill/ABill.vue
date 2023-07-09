<template>
  <AView>
    <template v-if="commodities && commodities.length>0">
      <view v-for="item in commodities" :key="item.id">
        <view class="flex justify-between">
          <view class="flex-none w-24 h-24 box-border p-1">
            <img class="max-w-full max-h-full" :src="item.image" alt="商品图片" loading="lazy">
          </view>
          <view class="flex-1">
            <view>{{item.name}}</view>
            <view>{{item.description}}</view>
          </view>
          <view class="flex-none box-border p-4">
            {{ item.count}}
          </view>
        </view>
      </view>
    </template>
    <view v-else class="box-border p-4 text-center">
      🛒购物车现在还是空的
    </view>
  </AView>
</template>
<script setup lang="ts">
import AView from "../../layouts/AView.vue"
import {useCart} from "../../store/cart"
import {storeToRefs} from "pinia"

const cart = useCart()

const {commodities} = storeToRefs(cart)
</script>
