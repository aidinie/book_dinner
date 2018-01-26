<template>
  <div id="app">
    <head-message></head-message>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import headMessage from '@/components/common/Head'
export default {
  name: 'App',
  components: {
    headMessage
  }
}
</script>

<style>
*{padding:0;margin:0; outline: none; list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
