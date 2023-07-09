<template>
  <view class="box-border px-2 py-4 bg-white flex flex-col gap-4">
    <template v-if="categories&&categories.length>0">
      <view v-for="item in categories" :key="item.id">
        <view>
          ❤️ {{ item.name }}
        </view>
      </view>
    </template>
    <view v-else class="text-center">
      商品品类为空
    </view>
  </view>
</template>

<script lang="ts" setup>
import {useShelf} from "../../../store/shelf"
import {storeToRefs} from "pinia"

const shelf = useShelf()

const {categories} = storeToRefs(shelf)
</script>
