<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
      <PostList v-if="showPost" :posts="posts"></PostList>
      <button @click="showPost = !showPost">Mounted / Unmounted</button>
      <button @click="posts.pop()">Delete Post</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import getPosts from '../composable/posts/getPosts';
import PostList from '../components/PostList';

export default {
  name: 'Home',
  components : {
    PostList
  },
  setup () {
    const { error, posts, load } = getPosts();

    load()

    const showPost = ref(true);

    return { posts, showPost, error }
  },
}
</script>
