<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <router-view/>
  
</template>
<script>
test = true;
</script>

<style lang="scss">

@import 'bootstrap/scss/bootstrap.scss';
//@import 'bootstrap-vue/src/index.scss';

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
