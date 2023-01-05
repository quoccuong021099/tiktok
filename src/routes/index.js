import config from '~/config';
import HeaderOnly from '~/layout/HeaderOnly';
import FollowingPage from '~/pages/FollowingPage';
import HomePage from '~/pages/HomePage';
import LivePage from '~/pages/LivePage';
import ProfilePage from '~/pages/ProfilePage';
import UploadPage from '~/pages/UploadPage';
import SearchPage from '~/pages/SearchPage';

export const publicRoutes = [
  {
    path: config.routes.home,
    component: HomePage,
    // không có field layout => lấy default layout
  },
  {
    path: config.routes.following,
    component: FollowingPage,
  },
  {
    path: config.routes.live,
    component: LivePage,
  },
  {
    path: config.routes.profile,
    component: ProfilePage,
    layout: null, // không cần layout
  },
  { path: config.routes.upload, component: UploadPage, layout: HeaderOnly },
  { path: config.routes.search, component: SearchPage, layout: null },
];
export const privateRoutes = [];
