import HeaderOnly from '~/layout/HeaderOnly';
import FollowingPage from '~/pages/FollowingPage';
import HomePage from '~/pages/HomePage';
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
    layout: HeaderOnly,
  },
  {
    path: '/profile',
    component: ProfilePage,
    layout: null, // không cần layout
  },
];
export const privateRoutes = [];
