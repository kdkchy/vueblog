<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <div class="site-heading">
                      <h1>Clean Blog</h1>
                      <span class="subheading">Post(s) by Tag</span>
                  </div>
              </div>
          </div>
      </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
              <div v-if="error">{{ error }}</div>
                <PostList :posts="postWithTag"></PostList>
              <div v-if="!posts.length">
                  <Loading/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import getPosts from '@/composable/posts/getPosts';
import PostList from '@/components/posts/PostList';
import Loading from '@/components/Loading';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'Tag',
  components : {
    PostList,
    Loading
  },
  setup () {
    const router = useRoute();
    const { error, posts, load } = getPosts();
    load()

    const postWithTag = computed(() => {
      return posts.value.filter((p) => 
        p.tags.includes(router.params.tag)
      )
    })
    return { posts, error, postWithTag }
  },
}
</script>
