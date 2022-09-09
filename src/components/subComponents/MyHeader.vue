<template>
  <div class="myHeader">
    <van-nav-bar title="Home title" right-text="退出登录" @click-right="onLoginOut" />
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  methods: {
    onLoginOut() {
      localStorage.removeItem('login')

      this.$router.push('/login')
      Toast.success('已退出登录！')
    }
  }
}
</script>

<style lang="less" scoped>
.myHeader {
  max-width: 720px;
}
</style>
