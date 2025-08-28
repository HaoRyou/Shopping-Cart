import Home_page from './Component/Home_page';
import Storelist from './Component/Store_list';
import Usercart from './Component/Usercart';

const routes = [
  {
    path: '/',
    element: <Home_page />,
  },
  {
    path: '/Storelist',
    element: <Storelist />,
  },
  {
    path: '/usercart',
    element: <Usercart />,
  },
];

export default routes;
