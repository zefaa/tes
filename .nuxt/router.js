import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a6997da = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d46005b0 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _34b72d6e = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _5e016eb3 = () => interopDefault(import('../pages/home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _913280be = () => interopDefault(import('../pages/home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _ee879bae = () => interopDefault(import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */))
const _aa224a76 = () => interopDefault(import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */))
const _273c6401 = () => interopDefault(import('../pages/blog/blog-classic.vue' /* webpackChunkName: "pages/blog/blog-classic" */))
const _9340749e = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _88e03fb6 = () => interopDefault(import('../pages/project/project-details.vue' /* webpackChunkName: "pages/project/project-details" */))
const _4931891e = () => interopDefault(import('../pages/blog/categories/_slug.vue' /* webpackChunkName: "pages/blog/categories/_slug" */))
const _4adb1aae = () => interopDefault(import('../pages/blog/tags/_slug.vue' /* webpackChunkName: "pages/blog/tags/_slug" */))
const _d7cd4840 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _ad8f8d06 = () => interopDefault(import('../pages/service/_slug.vue' /* webpackChunkName: "pages/service/_slug" */))
const _6a21729f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4a6997da,
    name: "about"
  }, {
    path: "/blog",
    component: _d46005b0,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _34b72d6e,
    name: "contact-us"
  }, {
    path: "/home-three",
    component: _5e016eb3,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _913280be,
    name: "home-two"
  }, {
    path: "/project",
    component: _ee879bae,
    name: "project"
  }, {
    path: "/service",
    component: _aa224a76,
    name: "service"
  }, {
    path: "/blog/blog-classic",
    component: _273c6401,
    name: "blog-blog-classic"
  }, {
    path: "/blog/blog-details",
    component: _9340749e,
    name: "blog-blog-details"
  }, {
    path: "/project/project-details",
    component: _88e03fb6,
    name: "project-project-details"
  }, {
    path: "/blog/categories/:slug?",
    component: _4931891e,
    name: "blog-categories-slug"
  }, {
    path: "/blog/tags/:slug?",
    component: _4adb1aae,
    name: "blog-tags-slug"
  }, {
    path: "/blog/:slug",
    component: _d7cd4840,
    name: "blog-slug"
  }, {
    path: "/service/:slug",
    component: _ad8f8d06,
    name: "service-slug"
  }, {
    path: "/",
    component: _6a21729f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
