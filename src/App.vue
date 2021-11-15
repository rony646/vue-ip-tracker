<template>
  <div id="container">
    <Header />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> !-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> !-->
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  font-family: 'Roboto', impact, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111111e1;
  margin: 0;
  padding: 0;
}
</style>
