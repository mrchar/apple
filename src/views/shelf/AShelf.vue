<template>
  <view class="w-full h-full flex">
    <ACategory class="flex-auto w-1/3"/>
    <view class="flex-auto w-2/3 h-full">
      <AScroll>
        <view class="w-full h-full p-2 flex flex-col gap-2">
          <AItem v-for="item in commodities" :key="item.id" :data="item"/>
        </view>
      </AScroll>
    </view>
  </view>
</template>
<script setup>
import ACategory from "./components/ACategory.vue"
import AItem from "./components/AItem.vue"
import AScroll from "../../components/AScroll.vue"
import {useShelf} from "../../store/shelf"
import {storeToRefs} from "pinia"

const shelf = useShelf()

const {commodities} = storeToRefs(shelf)
</script>
