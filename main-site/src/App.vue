<template>
  <div id="app">
    <HelloWorld msg="Editify"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import "http://fonts.googleapis.com/css?family=Raleway";
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ins {
  color: #42b983;
}
del {
  color: #cb3837;
}
</style>
