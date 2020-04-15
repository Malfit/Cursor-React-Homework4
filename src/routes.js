import React from 'react';

import Home from './pages/Home/';
import Posts from './pages/Posts';
import Images from './pages/Images';
import Contacts from './pages/Contacts';

const routes = [
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
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
  {
    path: '/Cursor-React-Homework4',
    component: <Home />,
    exact: true,
  },
];

export default routes;