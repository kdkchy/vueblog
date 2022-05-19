<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <div class="page-heading">
                      <h1>Create Post</h1>
                  </div>
              </div>
          </div>
      </div>
  </header>
  <!-- Main Content-->
  <main class="mb-4">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <div class="my-5">
                      <form @submit.prevent="handleSubmit">
                          <div class="form-floating">
                              <input 
                                class="form-control"
                                type="text" placeholder="Enter your title..." 
                                data-sb-validations="required" 
                                v-model="title"/>
                              <label for="title">Title</label>
                          </div>
                          <div class="form-floating">
                              <textarea 
                                class="form-control"
                                placeholder="Enter your body here..." style="height: 12rem"
                                data-sb-validations="required"
                                v-model="body"
                              ></textarea>
                              <label for="body">Body</label>
                          </div>
                          <div class="form-floating">
                              <input 
                                class="form-control"
                                type="text" placeholder="Enter your tag..."  
                                v-model="tag" @keydown.enter.prevent="handleKeydown"/>
                              <label for="title">Tag</label>
                          </div>
                          <br />
                          <div>
                              <span v-for="tag in tags" :key="tag">
                                  #{{ tag }}
                              </span>
                          </div>
                          <br />
                          <!-- Submit Button-->
                          <button class="btn btn-primary text-uppercase" type="submit">Create</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import createPost from '@/composable/posts/createPost';
export default {
    setup(){
      const 
        { 
          title, 
          body, 
          tag, 
          tags, 
          handleKeydown, 
          handleSubmit 
        } = createPost();

      return { title, body, tag, tags, handleKeydown, handleSubmit }
    }
}
</script>

<style>

</style>