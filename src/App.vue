<template>
  <div id="app">
    <div class="base left">

    </div>
    <div class="base right">
      <Landing />
      <router-view />
    </div>
    
  </div>
</template>

<script>
//import Register from './components/Register.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing,
  },
  data() {
    return {
     
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}

.base {
  height: 100%;
  width: 100%;
}

.left {
  background-image: linear-gradient(to bottom right, #152032, #305fbe, #ec7787);
}

.right {
  padding: 60px 100px;
  text-align: left;
}

</style>
