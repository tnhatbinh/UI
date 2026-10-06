export interface PastTicketData {
  id: string;
  movieName: string;
  genre: string;
  poster: string;
  date: string;
  cinema: string;
  cost: string;
  seats: string;
  rating: number;
}

export interface VoucherData {
  id: string;
  code: string;
  discount: string;
  title: string;
  desc: string;
  expiry: string;
}

export const PAST_TICKETS: PastTicketData[] = [
  {
    id: 'past-1',
    movieName: 'MAI (2024)',
    genre: 'Tâm Lý, Gia Đình, Tình Cảm • 131 phút',
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80',
    date: '14/02/2024 • 20:15',
    cinema: 'CGV Vincom Đồng Khởi - Gold Class Lounge',
    cost: '360.000đ',
    seats: 'Gold E1, E2',
    rating: 5,
  },
  {
    id: 'past-2',
    movieName: 'OPPENHEIMER (2023)',
    genre: 'Tiểu Sử, Lịch Sử, Kịch Tính • 180 phút',
    poster:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&auto=format&fit=crop&q=80',
    date: '22/01/2024 • 19:00',
    cinema: 'CGV Vincom Landmark 81 - IMAX Laser',
    cost: '450.000đ',
    seats: 'VIP H10, H11',
    rating: 5,
  },
  {
    id: 'past-3',
    movieName: 'KUNG FU PANDA 4 (2024)',
    genre: 'Hoạt Hình, Phiêu Lưu, Hài Hước • 94 phút',
    poster:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80',
    date: '08/03/2024 • 15:30',
    cinema: 'Lotte Cinema Diamond Plaza - Phòng 02',
    cost: '260.000đ',
    seats: 'Standard F7, F8',
    rating: 4.5,
  },
  {
    id: 'past-4',
    movieName: 'AVATAR: DÒNG CHẢY CỦA NƯỚC',
    genre: 'Khoa Học Viễn Tưởng • 192 phút',
    poster:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80',
    date: '10/12/2023 • 18:30',
    cinema: 'CGV Vincom Landmark 81 - IMAX 3D',
    cost: '480.000đ',
    seats: 'VIP H14, H15',
    rating: 5,
  },
  {
    id: 'past-5',
    movieName: 'INTERSTELLAR (RE-RELEASE)',
    genre: 'Khoa Học Viễn Tưởng • 169 phút',
    poster:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80',
    date: '05/11/2023 • 20:00',
    cinema: 'CGV Vincom Landmark 81 - IMAX Laser',
    cost: '450.000đ',
    seats: 'VIP G8, G9',
    rating: 5,
  },
  {
    id: 'past-6',
    movieName: 'THE BATMAN (2022)',
    genre: 'Hành Động, Trinh Thám • 176 phút',
    poster:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80',
    date: '18/09/2023 • 21:00',
    cinema: 'CGV Hùng Vương Plaza - Gold Class',
    cost: '340.000đ',
    seats: 'Gold D1, D2',
    rating: 4.8,
  },
];

/** Chỉ 3 vé gần nhất – dùng cho teaser trong tab "Vé sắp xem" */
export const RECENT_PAST_TICKETS = PAST_TICKETS.slice(0, 3);

export const VOUCHERS: VoucherData[] = [
  {
    id: 'v-1',
    code: 'CINEVIP30',
    discount: '30.000đ',
    title: 'Ưu Đãi Đặt Vé Bom Tấn VIP',
    desc: 'Áp dụng cho mọi suất chiếu IMAX & Gold Class trên toàn hệ thống.',
    expiry: 'HSD: 15/04/2024',
  },
  {
    id: 'v-2',
    code: 'POPCORN50',
    discount: '50% OFF',
    title: 'Giảm 50% Combo Bắp Nước Cao Cấp',
    desc: 'Áp dụng khi mua kèm bất kỳ 02 vé xem phim cuối tuần.',
    expiry: 'HSD: 30/04/2024',
  },
  {
    id: 'v-3',
    code: 'TECHCOMVIP',
    discount: '15% CASHBACK',
    title: 'Hoàn Tiền 15% Thẻ Techcombank',
    desc: 'Hoàn tiền trực tiếp vào tài khoản cho hóa đơn từ 400.000đ.',
    expiry: 'HSD: 01/05/2024',
  },
];
