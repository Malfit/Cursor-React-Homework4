import React from 'react';

import Home from './pages/Home/';
import Posts from './pages/Posts';
import Images from './pages/Images';
import Contacts from './pages/Contacts';

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
  {
    path: '/posts',
    component: <Posts />,
  },
  {
    path: '/images',
    component: <Images />,
  },
  {
    path: '/contacts',
    component: <Contacts />,
  },
  
];

export default routes;