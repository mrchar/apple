<template>
  <AFullScreen>
    <AFramework>
      <template #header>
        <AHeader class="z-10"/>
      </template>
      <template #default>
        <view class="w-full h-full z-0">
          <router-view/>
        </view>
      </template>
      <template #footer>
        <AFooter class="z-10"/>
      </template>
    </AFramework>
  </AFullScreen>
</template>

<script lang="ts" setup>
import "./index.css"
import AFullScreen from "../../layouts/AFullScreen.vue"
import AFramework from "../../layouts/AFramework.vue"
import AHeader from "../../components/AHeader.vue"
import AFooter from "../../components/AFooter.vue"
</script>
