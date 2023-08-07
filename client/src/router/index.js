// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import Post from "../views/Post.vue"
import EditPost from "../views/EditPost.vue"

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  },
  {
    path: '/add-post',
    name: "add-post",
    component: AddPost
  },
  {
    path: '/about',
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post
  },
  {
    path: "/edit-post/:id",
    name: "edit-post",
    component: EditPost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
