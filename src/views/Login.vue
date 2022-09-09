<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="liftcat" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="reset">重置</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      // console.log('submit', values)
      const username = values.username
      // 清空两边空白
      const password = values.password.trim()
      if (username == 'liftcat' && password) {
        // 存储 token
        localStorage.setItem('login', 'Bearer xxxx')
        // 跳转到 home
        this.$router.push('/home')
      } else {
        localStorage.removeItem('login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  margin: 0 auto;
  max-width: 720px;
}
</style>
