<template>
    <div class="detail-post">
        <h1 :style="{ backgroundImage: 'url(' + post.featured_image + ')' }">
            {{ post.title.rendered }}
        </h1>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div v-html="post.content.rendered">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailWordpressPost',
  data() {
  },
  mounted () {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    post() {
        var posts = this.$store.state.posts;
        var slug = this.$route.params.slug;
        var filteredposts = posts.filter(function(obj) {
            return (obj.slug === slug);
        });
        return filteredposts[0]
    }
  },
  methods: {
  },
  
}
</script>
<style scoped lang="scss">
    h1 {
        color: white;
        font-size: 42px;
        text-transform: uppercase;

        background-size: cover;
        background-position: center;
        padding: 60px 15px;
        position: relative;
        z-index: 0;
        
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