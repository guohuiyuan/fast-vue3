export default [
  {
    path: '/',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: 'shi',
    component: () => import('@/pages/shi/index.vue'),
  },
  {
    path: '/music',
    component: () => import('@/pages/music/index.vue'),
  },
];
