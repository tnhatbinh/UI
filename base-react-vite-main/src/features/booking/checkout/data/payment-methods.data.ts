export type PaymentMethodId =
  'momo' | 'vnpay' | 'credit-card' | 'atm' | 'phimpoints';

export interface PaymentMethodItemData {
  id: PaymentMethodId;
  name: string;
  desc: string;
  brandClass: 'momo' | 'vnpay' | 'card' | 'bank' | 'points';
  promoBadge?: string;
  vipBadge?: string;
  subtitle?: string;
  rightTag?: string;
  hasLock?: boolean;
}

export const PAYMENT_METHODS: PaymentMethodItemData[] = [
  {
    id: 'momo',
    name: 'Ví Điện Tử MoMo',
    desc: 'Tặng voucher 30.000đ khi thanh toán đơn phim đầu tiên',
    brandClass: 'momo',
    promoBadge: 'Giảm 30K',
    rightTag: '⚡ Tức thì',
  },
  {
    id: 'vnpay',
    name: 'Cổng VNPAY-QR',
    desc: 'Quét mã VNPAY-QR qua 40+ ứng dụng ngân hàng & ví đối tác',
    brandClass: 'vnpay',
  },
  {
    id: 'credit-card',
    name: 'Thẻ Quốc Tế (Credit / Debit)',
    subtitle: 'Visa • Master • JCB',
    desc: 'Xác thực 3D-Secure 2.0 chống gian lận tiêu chuẩn toàn cầu',
    brandClass: 'card',
    hasLock: true,
  },
  {
    id: 'atm',
    name: 'Thẻ ATM Nội Địa / Internet Banking',
    desc: 'Hỗ trợ 35+ ngân hàng nội địa: Vietcombank, Techcombank, MBBank...',
    brandClass: 'bank',
  },
  {
    id: 'phimpoints',
    name: 'Ví PhimPoints / CinePass Elite',
    vipBadge: 'VIP Balance',
    desc: 'Số dư hiện tại: 1,250 Điểm (Tương đương 125.000đ)',
    brandClass: 'points',
    rightTag: 'Đổi Điểm',
  },
];
