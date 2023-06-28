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
import {ref} from "vue"
import ACategory from "./components/ACategory.vue"
import AItem from "./components/AItem.vue"
import AScroll from "../../components/AScroll.vue"

const commodities = ref([
  {
    id: 1,
    name: "Commodity1",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 2,
    name: "Commodity2",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 3,
    name: "Commodity3",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 4,
    name: "Commodity4",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 5,
    name: "Commodity5",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 6,
    name: "Commodity6",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 7,
    name: "Commodity7",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
  {
    id: 8,
    name: "Commodity8",
    description: "description",
    price: "￥100",
    image: "/vite.svg",
  },
])
</script>
