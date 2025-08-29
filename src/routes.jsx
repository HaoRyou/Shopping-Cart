import Home_page from './Component/Home_page';
import Storelist from './Component/Store_list';

const routes = [
  {
    path: '/',
    element: <Home_page />,
  },
  {
    path: '/Storelist',
    element: <Storelist />,
  },
];

export default routes;
