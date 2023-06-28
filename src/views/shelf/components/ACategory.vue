<template>
  <view class="px-2 py-4 bg-white flex flex-col gap-4">
      <view v-for="item in categories" :key="item.id">
          <view>
              ❤️ {{item.name}}
          </view>
      </view>
  </view>
</template>

<script lang="ts" setup>
import {ref} from "vue"

const categories = ref([
  {id: 1, name: "Category1"},
  {id: 2, name: "Category2"},
  {id: 3, name: "Category3"},
  {id: 4, name: "Category4"},
])
</script>
