import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";

const app = createApp(App)

const pinia = createPinia()

//Подключаем ui kit чтобы не импортировать его
import components from './UI/index'
components.forEach((component): void => {
    app.component(component.name, component)
})

app
    .use(pinia)
    .mount('#app')
