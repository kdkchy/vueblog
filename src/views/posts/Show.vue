<template>
  <div v-if="post">
        <!-- Page Header-->
        <header class="masthead" style="background-image: url('/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ post.title }}</h1>
                            <button 
                                class="btn btn-danger" 
                                @click="handleDelete"
                            >Delete
                            </button>
                            <span
                                v-for="tag in post.tags" :key="tag"
                                class="post-meta"
                            > 
                                <router-link 
                                    class="text-white"
                                    :to="{ name: 'Tag', params: { tag: tag }}"
                                > #{{ tag }} </router-link>
                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>
                            {{ post.body }}
                        </p>
                        <div v-if="error">{{ error }}</div>
                    </div>
                </div>
            </div>
        </article>
    </div>
    <div v-if="isLoading">
        <Loading/>
    </div>
</template>

<script>
import getPost from '@/composable/posts/getPost';
import Loading from '@/components/Loading';
export default {
    name: 'ShowPosts',
    props: ['id'],
    components: {
        Loading
    },
    setup(props){
        const { error, post, load, handleDelete, isLoading } = getPost(props.id);
        load();

        return { post, error, handleDelete, isLoading };
    }
}
</script>

<style scoped>
.btn {
    padding: 2px;
}
</style>