<!--
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-21 23:41:13
 * @Description: 
-->
<script setup lang="ts">
//
import { ref } from 'vue'
const count = ref(0)
const handleClick = () => {
  count.value++
  console.log('handleClick')
}
</script>

<template>
  <view class="index">index</view>
  <button type="default" open-type="getPhoneNumber">获取手机号</button>
  <button type="primary" @tap="handleClick">页面主操作 Normal:{{ count }}</button>
</template>

<style lang="scss">
//
</style>
