<template>
  <div id="app">
    <ul class="nav">
      <li @click="go('/')">首页</li>
      <li @click="go('/about')">关于</li>
    </ul>
    <keep-alive :include="cache">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name : 'App',
    data () {
      return {
        cache : []
      }
    },
    methods : {
      go (p) {
        this.$router.push(p)
      }
    }
  }
</script>
<style lang="scss">
@import "common/css/style.css";
  .nav {
    display: flex;
    list-style: none;
    li {
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
