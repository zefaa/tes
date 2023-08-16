import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3aa47366 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5e0c791c = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _60157238 = () => interopDefault(import('../pages/career/index.vue' /* webpackChunkName: "pages/career/index" */))
const _0618ad3c = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _263deaa7 = () => interopDefault(import('../pages/home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _ee8caed6 = () => interopDefault(import('../pages/home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _b1bb69e6 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _352000f8 = () => interopDefault(import('../pages/ppdb/index.vue' /* webpackChunkName: "pages/ppdb/index" */))
const _3f58c1b5 = () => interopDefault(import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */))
const _618b6a51 = () => interopDefault(import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */))
const _5ffbb07e = () => interopDefault(import('../pages/unit/index.vue' /* webpackChunkName: "pages/unit/index" */))
const _16ae4d8d = () => interopDefault(import('../pages/blog/blog-classic.vue' /* webpackChunkName: "pages/blog/blog-classic" */))
const _b45ca186 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _32b9d446 = () => interopDefault(import('../pages/news/news-details.vue' /* webpackChunkName: "pages/news/news-details" */))
const _0c1770b1 = () => interopDefault(import('../pages/project/project-details.vue' /* webpackChunkName: "pages/project/project-details" */))
const _5e4ea706 = () => interopDefault(import('../pages/unit/unit-details.vue' /* webpackChunkName: "pages/unit/unit-details" */))
const _f51d0206 = () => interopDefault(import('../pages/blog/categories/_slug.vue' /* webpackChunkName: "pages/blog/categories/_slug" */))
const _66dc118c = () => interopDefault(import('../pages/blog/tags/_slug.vue' /* webpackChunkName: "pages/blog/tags/_slug" */))
const _5c55d7d4 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _5fd4c909 = () => interopDefault(import('../pages/service/_slug.vue' /* webpackChunkName: "pages/service/_slug" */))
const _5a5c4e2b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3aa47366,
    name: "about"
  }, {
    path: "/blog",
    component: _5e0c791c,
    name: "blog"
  }, {
    path: "/career",
    component: _60157238,
    name: "career"
  }, {
    path: "/contact-us",
    component: _0618ad3c,
    name: "contact-us"
  }, {
    path: "/home-three",
    component: _263deaa7,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _ee8caed6,
    name: "home-two"
  }, {
    path: "/news",
    component: _b1bb69e6,
    name: "news"
  }, {
    path: "/ppdb",
    component: _352000f8,
    name: "ppdb"
  }, {
    path: "/project",
    component: _3f58c1b5,
    name: "project"
  }, {
    path: "/service",
    component: _618b6a51,
    name: "service"
  }, {
    path: "/unit",
    component: _5ffbb07e,
    name: "unit"
  }, {
    path: "/blog/blog-classic",
    component: _16ae4d8d,
    name: "blog-blog-classic"
  }, {
    path: "/blog/blog-details",
    component: _b45ca186,
    name: "blog-blog-details"
  }, {
    path: "/news/news-details",
    component: _32b9d446,
    name: "news-news-details"
  }, {
    path: "/project/project-details",
    component: _0c1770b1,
    name: "project-project-details"
  }, {
    path: "/unit/unit-details",
    component: _5e4ea706,
    name: "unit-unit-details"
  }, {
    path: "/blog/categories/:slug?",
    component: _f51d0206,
    name: "blog-categories-slug"
  }, {
    path: "/blog/tags/:slug?",
    component: _66dc118c,
    name: "blog-tags-slug"
  }, {
    path: "/blog/:slug",
    component: _5c55d7d4,
    name: "blog-slug"
  }, {
    path: "/service/:slug",
    component: _5fd4c909,
    name: "service-slug"
  }, {
    path: "/",
    component: _5a5c4e2b,
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
