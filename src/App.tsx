import './App.css'
import Main from './components/Main';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';

function Root() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

const router = createBrowserRouter(
  [
    { path: "*", Component: Root },
  ]
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
