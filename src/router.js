import { createRouter, createWebHistory } from 'vue-router';
import { verifyToken } from './auth/auth';
import RsvpPage from './components/pages/RsvpPage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import AdminDashboardPage from './components/pages/AdminDashboardPage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: AdminDashboardPage,
  },
  {
    path: '/',
    name: 'Rsvp',
    component: RsvpPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.path === '/dashboard') {
    const isValid = await verifyToken();
    if (!isValid) {
      return next('/login');
    }
  }
  next();
});

export default router;