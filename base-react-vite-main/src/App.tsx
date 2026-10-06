import { router } from '@config/AppRoutes';
import { getZoomRatio } from '@shared/utils/getZoomRatio';
import { useLayoutEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { BookingProvider } from '@features/booking/context/BookingContext';

function App() {
  useLayoutEffect(() => {
    const handleResize = () => {
      const viewportWidth =
        window.innerWidth || window.document.documentElement.clientWidth;
      const isNarrow = viewportWidth < 1200;

      if (!isNarrow) {
        const zoom = getZoomRatio();
        document.documentElement.style.setProperty('--zoom', zoom.toString());
      } else {
        document.documentElement.style.setProperty('--zoom', '1');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  );
}

export default App;
