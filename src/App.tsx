import './App.css'
import Main from './components/Main';

import Styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  min-width: 80vw;
`;

function Root() {
  return (
    <StyledDiv>
      <Nav />
      <Main />
    </StyledDiv>
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
