<template>
  <div class="myUser">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
          <th>年龄</th>
          <th>权限</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userInfo" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.root }}</td>
          <td>
            <a href="#" @click.prevent="gotoDetail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: [
        { id: 1, name: 'liftcat', age: 666, root: 1 },
        { id: 2, name: 'abab', age: 333, root: 10 },
        { id: 3, name: 'ccc', age: 222, root: 10 },
        { id: 4, name: 'mtt', age: 666, root: 20 }
      ]
    }
  },
  methods: {
    // 前往用户详情
    gotoDetail(id) {
      this.$router.push('/home/userInfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.myUser {
  table {
    width: 100%;

    tr > * {
      padding: 5px;
    }
  }
}
</style>
