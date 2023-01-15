<template>
  <form @submit.prevent>
    <input v-model="query" type="text" placeholder="Введите название" class="input" />
  </form>
</template>

<script>
import { useSearchStore } from '../stores/useSearchStore'
import debounce from 'lodash/debounce'

export default {
  name: 'InputSearch',
  computed: {
    // отсроченный запуск поиска. Дождаться пока пользователь закончит ввод
    debouncedQuerySearch() {
      return debounce(() => {
        if (this.query.length > 0) {
          this.store.fetchData(this.query)
        }
      }, 500)
    }
  },
  data() {
    return {
      query: ''
    }
  },
  setup() {
    const store = useSearchStore()

    return { store }
  },
  watch: {
    query() {
      // отсроченный запуск поиска
      this.debouncedQuerySearch()
    }
  },
}
</script>

<style scoped>
.input {
  width: 525px;
  height: 30px;
  border: 1px solid #acacac;
  border-radius: 5px;
  padding: 3px;
  outline: none;
}
</style>
