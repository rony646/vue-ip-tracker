<template>
    <header class="header-container">
        <h1>IP Adress Tracker</h1>
        <form class="form-container">
            <input type="text" name="ip" id="ip-input" v-model="ip">
            <button type="submit">
                <img src="../../assets/icon-arrow.svg" alt="arrow icon"/>
            </button>
        </form>
    </header>
</template>

<script>
export default {
   name: 'Header',
   computed: {
      ip: {
          get () {
              return this.$store.state.ip
          },
          set (value) {
              this.$store.commit('updateIp', value)
          }
      }
   },
   
}
</script>

<style>
    @import'./header.css';
</style>