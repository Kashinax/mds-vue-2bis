<template>
  <div class="wordpress-api">
    <div class="container">
      <div class="row">
        <div class="api-test col-4" v-for="post in posts" :key="post.id">
          <div class="test-style" :style="{ backgroundImage: 'url(' + post.featured_image + ')' }">
            <h2>
              {{post.title.rendered}}
            </h2>
          </div>
          <router-link :to="{name: 'PortfolioPost', params: { slug: post.slug }}">Voir détail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordpressApi',
  mounted () {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    posts() {
        return this.$store.state.posts
    },
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .test-style {
        background-size: cover;
        background-position: center;
        padding: 15px;
        position: relative;
        z-index: 0;
        color: white;
        &:after {
            content: '';
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            background-color: rgba(0, 0, 0, .3);
        }
    }
</style>
