<template>
    <div class="detail-voiture">
        <h1>
            {{ voiture.nom }}
        </h1>
        <p :style="{ color: voiture.couleurhex }">
            {{ voiture.marque }}
        </p>
        <div class="row">
            <div class="api-test col-4" v-for="post in posts" :key="post.id">
                {{post.slug}}
                <img :src="post.featured_image" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'DetailVoiture',
  data() {
    return {
      voiture: this.$store.state.voiture[this.$route.params.id - 1]
    }
  },
  mounted () {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    posts() {
        return this.$store.state.posts
    }
  },
  methods: {
  },
}
</script>
<style>

</style>