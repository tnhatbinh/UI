import { Outlet } from 'react-router-dom';
import { BookingProvider } from '@features/booking/context/BookingContext';

export default function BookingLayout() {
  return (
    <BookingProvider>
      <Outlet />
    </BookingProvider>
  );
}

