export interface SeatItem {
  id: string; // e.g. "H8"
  row: string;
  number: number;
  type: 'standard' | 'vip' | 'sweetbox';
  price: number;
}

export interface SnackItem {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  tag?: string;
}

export interface VoucherItem {
  code: string;
  discount: number;
  title: string;
}

export interface BookingState {
  movie: {
    id: string;
    title: string;
    originalTitle: string;
    posterUrl: string;
    backdropUrl: string;
    rating: number;
    ageRating: string;
    duration: string;
    format: string;
  };
  session: {
    cinemaId: string;
    cinemaName: string;
    cinemaAddress: string;
    room: string;
    date: string;
    time: string;
    format: string;
    soundSystem: string;
  };
  selectedSeats: SeatItem[];
  selectedSnacks: SnackItem[];
  pickupMethod: 'at-seat' | 'fast-track';
  appliedVoucher: VoucherItem | null;
  recipient: {
    name: string;
    phone: string;
    email: string;
    sendZalo: boolean;
  };
  paymentMethod: 'momo' | 'vnpay' | 'credit-card' | 'atm' | 'phimpoints';
}
