import React, { useState, useEffect } from 'react';
import { BookingContext } from './use-booking';
import type { BookingState, SeatItem, SnackItem, VoucherItem } from './booking.types';

const defaultState: BookingState = {
  movie: {
    id: 'dune-2',
    title: 'Dune: Hành Tinh Cát - Phần Hai',
    originalTitle: 'Dune: Part Two (2024)',
    posterUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop',
    backdropUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop',
    rating: 8.9,
    ageRating: 'T16',
    duration: '166 phút',
    format: 'IMAX Laser 2D',
  },
  session: {
    cinemaId: 'cgv-landmark-81',
    cinemaName: 'PhimBook IMAX Landmark 81',
    cinemaAddress: 'Tầng B1, TTTM Vincom Landmark 81, TP.HCM',
    room: 'Phòng IMAX 01',
    date: 'Thứ Năm, 24/10/2024',
    time: '20:15',
    format: 'IMAX Laser 2D',
    soundSystem: 'DOLBY ATMOS • 64 LOA',
  },
  selectedSeats: [
    { id: 'H8', row: 'H', number: 8, type: 'vip', price: 130000 },
    { id: 'H9', row: 'H', number: 9, type: 'vip', price: 130000 },
  ],
  selectedSnacks: [],
  pickupMethod: 'at-seat',
  appliedVoucher: {
    code: 'GIAM30K',
    discount: 30000,
    title: 'Giảm 30K combo phim bom tấn',
  },
  recipient: {
    name: 'Nguyễn Thanh Tùng',
    phone: '0988 123 456',
    email: 'tung.nguyen@gmail.com',
    sendZalo: true,
  },
  paymentMethod: 'momo',
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<BookingState>(() => {
    try {
      const saved = localStorage.getItem('phimbook_booking_state');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return defaultState;
  });

  useEffect(() => {
    try {
      localStorage.setItem('phimbook_booking_state', JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const setMovieAndSession = (
    movie: Partial<BookingState['movie']>,
    session: Partial<BookingState['session']>,
  ) => {
    setState((prev) => ({
      ...prev,
      movie: { ...prev.movie, ...movie },
      session: { ...prev.session, ...session },
    }));
  };

  const toggleSeat = (seat: SeatItem) => {
    setState((prev) => {
      const exists = prev.selectedSeats.find((s) => s.id === seat.id);
      if (exists) {
        return {
          ...prev,
          selectedSeats: prev.selectedSeats.filter((s) => s.id !== seat.id),
        };
      }
      return {
        ...prev,
        selectedSeats: [...prev.selectedSeats, seat],
      };
    });
  };

  const clearSeats = () => {
    setState((prev) => ({ ...prev, selectedSeats: [] }));
  };

  const updateSnackQuantity = (snack: SnackItem, delta: number) => {
    setState((prev) => {
      const existingIndex = prev.selectedSnacks.findIndex(
        (s) => s.id === snack.id,
      );
      if (existingIndex > -1) {
        const updated = [...prev.selectedSnacks];
        const newQty = updated[existingIndex].quantity + delta;
        if (newQty <= 0) {
          updated.splice(existingIndex, 1);
        } else {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: newQty,
          };
        }
        return { ...prev, selectedSnacks: updated };
      } else if (delta > 0) {
        return {
          ...prev,
          selectedSnacks: [
            ...prev.selectedSnacks,
            { ...snack, quantity: delta },
          ],
        };
      }
      return prev;
    });
  };

  const setPickupMethod = (method: 'at-seat' | 'fast-track') => {
    setState((prev) => ({ ...prev, pickupMethod: method }));
  };

  const applyVoucher = (voucher: VoucherItem) => {
    setState((prev) => ({ ...prev, appliedVoucher: voucher }));
  };

  const removeVoucher = () => {
    setState((prev) => ({ ...prev, appliedVoucher: null }));
  };

  const setRecipient = (recipient: Partial<BookingState['recipient']>) => {
    setState((prev) => ({
      ...prev,
      recipient: { ...prev.recipient, ...recipient },
    }));
  };

  const setPaymentMethod = (
    method: 'momo' | 'vnpay' | 'credit-card' | 'atm' | 'phimpoints',
  ) => {
    setState((prev) => ({ ...prev, paymentMethod: method }));
  };

  const calculateSeatsTotal = () => {
    return state.selectedSeats.reduce((acc, s) => acc + s.price, 0);
  };

  const calculateSnacksTotal = () => {
    return state.selectedSnacks.reduce(
      (acc, s) => acc + s.price * s.quantity,
      0,
    );
  };

  const calculateGrandTotal = () => {
    const seats = calculateSeatsTotal();
    const snacks = calculateSnacksTotal();
    const discount = state.appliedVoucher?.discount || 0;
    return Math.max(0, seats + snacks - discount);
  };

  const resetBooking = () => {
    setState(defaultState);
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        setMovieAndSession,
        toggleSeat,
        clearSeats,
        updateSnackQuantity,
        setPickupMethod,
        applyVoucher,
        removeVoucher,
        setRecipient,
        setPaymentMethod,
        calculateSeatsTotal,
        calculateSnacksTotal,
        calculateGrandTotal,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
