<template>
  <div class="mySide">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="用户管理" to="/home/user" />
      <van-sidebar-item title="商品管理" to="/home/goods" />
      <van-sidebar-item title="系统设置" to="/home/settings" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0
    }
  }
}
</script>
