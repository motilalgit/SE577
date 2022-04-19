import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/About.vue') },
      { path: '/about', component: () => import('pages/AppPages/About.vue') },
      {
        path: '/my_repos',
        component: () => import('pages/AppPages/MyRepos.vue'),
      },
      {
        path: '/repo_details',
        component: () => import('pages/AppPages/RepoDetails.vue'),
      },
      {
        path: '/login',
        component: () => import('pages/AppPages/Login.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
