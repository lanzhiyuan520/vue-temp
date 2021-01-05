<template>
  <div class="home">
    <ul>
      <li v-for="item in index.houseList">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      index : state => state.index
    })
  },
  mounted () {
    console.log('home')
    this.$http.index.getHouseRequest().then(res => {
      this.$store.commit('setHouseList',res.data.data)
    })
  }
}
</script>
<style lang="scss">

</style>
