<template>
  <FullScreen>
    <Framework>
      <template #header>
        <view>Header</view>
      </template>
      <template #default>
        <view class="w-full h-full">
          Main
        </view>
      </template>
      <template #footer>
        <view>Footer</view>
      </template>
    </Framework>
  </FullScreen>
</template>

<script lang="ts" setup>
import "./index.css"
import FullScreen from "../../layouts/FullScreen.vue"
import Framework from "../../layouts/Framework.vue"
</script>
