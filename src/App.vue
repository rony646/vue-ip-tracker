<template>
  <div id="container">
    <Header />
    <Info />
    <Map />
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Info from './components/Info/Info';

export default {
  name: 'App',
  components: {
    Header,
    Map,
    Info,
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
