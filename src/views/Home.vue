<template>
  <div class="home">
    <myHeader></myHeader>

    <div class="container">
      <MySide></MySide>

      <router-view />
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/subComponents/MyHeader.vue'
import MySide from '@/components/subComponents/MySide.vue'

export default {
  name: 'Home',
  components: {
    MyHeader,
    MySide
  }
}
</script>

<style lang="less" scoped>
.home {
  .container {
    display: flex;

    > :last-child {
      flex: 1;
      padding: 20px 5px;
    }
  }
}
</style>
