import { router } from '@config/AppRoutes';
import { RouterProvider } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { AntdOverrides } from './styles/AntdOverrides';

function App() {
  return (
    <>
      <GlobalStyles />
      <AntdOverrides />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
