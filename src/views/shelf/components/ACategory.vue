<template>
  <view class="box-border px-2 py-4 bg-white flex flex-col gap-4">
      <view v-for="item in categories" :key="item.id">
          <view>
              ❤️ {{item.name}}
          </view>
      </view>
  </view>
</template>

<script lang="ts" setup>
import {useShelf} from "../../../store/shelf"
import {storeToRefs} from "pinia"

const shelf = useShelf()

const {categories} = storeToRefs(shelf)
</script>
