<template>
<div style="width: 100%; max-width: 1200px;margin: 0 auto; padding: 50px 0;">
  <p style="font-size: 16px; font-weight: bold; padding-bottom: 20px">因为错误，导致事件都失效了。。。 点击下面按钮无反应</p>
  <n-button @click="handleTap">123</n-button>
</div>
</template>

<script setup>
function handleTap(){
  console.log(123);
}
</script>
