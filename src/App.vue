<template>
  <div>
    <b-navbar class="nav-bar" type="dark">
      <b-navbar-brand href="#" style="margin-left:10px;margin-bottom:3px" > &lt; CD /&gt; </b-navbar-brand>
      <b-navbar-nav>

        <b-nav-item href="#">Github</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="#">Resume</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bar{
  height: 50px;
  background-color: #343a40;
}

</style>
