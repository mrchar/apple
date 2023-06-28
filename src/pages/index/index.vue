<template>
  <view class="index">
    <text class="text-2xl">{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.css'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
