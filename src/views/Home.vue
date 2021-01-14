<template>
  <div class="home">
    <ul>
      <li v-for="item in index.houseList">{{item.title}}</li>
    </ul>
    <button v-checkClick="showMask">点我</button>
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
    this.$http.index.getHouseRequest().then(res => {
      this.$store.commit('setHouseList',res.data.data)
    })
  },
  methods : {
    showMask () {
      this.$showMask()
      setTimeout(() => {
        this.$closeMask()
      },2000)
    }
  }
}
</script>
<style lang="scss">

</style>
