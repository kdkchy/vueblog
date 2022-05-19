<template>
  <div class="home">
    <h1>Home</h1>

    <input type="text" v-model="search">
    <div v-for="(name, index) in resultSearch" :key="index">{{ name }}</div>

    <button @click="handleClick">Stop</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';
export default {
  name: 'Home',
  setup () {
    const search = ref('');
    const names = ref(['John Doe', 'Jane Doe', 'Joe Doe', 'Jill Doe']);

    const kocak = watch(search, () => {
      console.log('fungsi berjalan');
    })
    
    const kocok = watchEffect(() => {
      console.log('fungsi berjalan effect', search.value);
    })

    const handleClick = () => {
      kocak()
      kocok()
    }
    const resultSearch = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    })
    return { names, search, resultSearch, handleClick }
  },
}
</script>
