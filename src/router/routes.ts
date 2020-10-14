import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      { path: '', component: () => import('pages/page1.vue') },
      { path: 'page2', component: () => import('pages/page2.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
