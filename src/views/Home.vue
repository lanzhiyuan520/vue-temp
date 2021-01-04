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
  }
}
</script>
<style lang="scss">

</style>
