import App from "./App.vue"
import { AppContext, createApp } from "vue"
import { setupLayouts } from "virtual:generated-layouts"
import routes from "~pages"
import { createRouter, createWebHistory } from "vue-router"
import { createHead } from "@vueuse/head"
import { MenuPlugin } from "./plugins/menu"

const layouts = setupLayouts(routes)

const head = createHead()

const router = createRouter({
  history: createWebHistory("/"),
  routes: layouts,
})

const app = createApp(App)

app.use(MenuPlugin)

app.use(router)

app.use(head)

app.mount("#app")
