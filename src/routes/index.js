// import HeaderOnly from '~/layout/HeaderOnly';
import FollowingPage from '~/pages/FollowingPage';
import HomePage from '~/pages/HomePage';
import LivePage from '~/pages/LivePage';
import ProfilePage from '~/pages/ProfilePage';

export const publicRoutes = [
  {
    path: '/',
    component: HomePage,
    // không có field layout => lấy default layout
  },
  {
    path: '/following',
    component: FollowingPage,
  },
  {
    path: '/live',
    component: LivePage,
  },
  {
    path: '/profile',
    component: ProfilePage,
    layout: null, // không cần layout
  },
];
export const privateRoutes = [];
