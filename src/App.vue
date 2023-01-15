<template>
  <InputSearch />
  <ItemsList />
</template>

<script>

import { useSearchStore } from './stores/useSearchStore'
import InputSearch from './components/InputSearch.vue'
import ItemsList from './components/ItemsList.vue'

export default {
  name: 'App',
  components: {
    InputSearch,
    ItemsList,
  },
  setup() {
    const store = useSearchStore()

    return { store }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 40px;
}
</style>
