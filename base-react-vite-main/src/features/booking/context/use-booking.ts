import { createContext, useContext } from 'react';
import type { BookingState, SeatItem, SnackItem, VoucherItem } from './booking.types';

export interface BookingContextType {
  state: BookingState;
  setMovieAndSession: (
    movie: Partial<BookingState['movie']>,
    session: Partial<BookingState['session']>,
  ) => void;
  toggleSeat: (seat: SeatItem) => void;
  clearSeats: () => void;
  updateSnackQuantity: (snack: SnackItem, delta: number) => void;
  setPickupMethod: (method: 'at-seat' | 'fast-track') => void;
  applyVoucher: (voucher: VoucherItem) => void;
  removeVoucher: () => void;
  setRecipient: (recipient: Partial<BookingState['recipient']>) => void;
  setPaymentMethod: (
    method: 'momo' | 'vnpay' | 'credit-card' | 'atm' | 'phimpoints',
  ) => void;
  calculateSeatsTotal: () => number;
  calculateSnacksTotal: () => number;
  calculateGrandTotal: () => number;
  resetBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
