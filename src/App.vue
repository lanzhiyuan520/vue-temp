<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name : 'App',
    mounted () {
      this.$http.index.getHouseRequest().then(res => {
        this.$store.commit('setHouseList',res.data.data)
      })
    }
  }
</script>
<style>
@import "common/css/style.css";
</style>
