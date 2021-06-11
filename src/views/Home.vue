<template>
  <div class="home">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <ListeVoiture msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListeVoiture from '@/components/ListeVoiture.vue'

export default {
  name: 'Home',
  components: {
    ListeVoiture
  }
}
</script>
