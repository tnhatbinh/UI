import type { CSSProperties } from 'react';

// ─── Voucher Data ───────────────────────────────────────────────────────────

export interface VoucherItem {
  id: string;
  discountLabel: string;
  discountBoxStyle?: CSSProperties;
  title: string;
  desc: string;
  hsd: string;
  hsdStyle?: CSSProperties;
  badge: string;
  badgeStyle?: CSSProperties;
}

export const VOUCHERS: VoucherItem[] = [
  {
    id: 'v1',
    discountLabel: '-50K',
    title: 'Giảm 50.000đ Vé IMAX',
    desc: 'Áp dụng cho mọi suất chiếu cuối tuần',
    hsd: 'HSD: 30/11/2024',
    badge: 'VIP ONLY',
  },
  {
    id: 'v2',
    discountLabel: '🍿',
    discountBoxStyle: {
      background: 'rgba(255, 185, 85, 0.15)',
      color: '#ffb955',
    },
    title: 'Tặng 01 Bắp Ngọt Lớn',
    desc: 'Khi đặt từ 02 vé trở lên trên ứng dụng',
    hsd: 'HSD: 15/11/2024 (Còn 3 ngày)',
    hsdStyle: { color: '#ff535a' },
    badge: 'SẮP HẾT HẠN',
    badgeStyle: undefined, // uses .urgent class instead
  },
  {
    id: 'v3',
    discountLabel: '1+1',
    discountBoxStyle: {
      background: 'rgba(74, 222, 128, 0.12)',
      color: '#4ade80',
    },
    title: 'Mua 1 Tặng 1 Rạp Galaxy',
    desc: 'Đặc quyền Ngày Thứ Ba Vui Vẻ hàng tuần',
    hsd: 'Áp dụng: Mỗi Thứ Ba',
    badge: 'ĐỊNH KỲ',
  },
];

// ─── Quick Pay Methods Data ──────────────────────────────────────────────────

export interface QuickPayMethod {
  id: string;
  brandLabel: string;
  brandColor: string;
  name: string;
  sub: string;
  badge: string;
  badgeStyle?: CSSProperties;
}

export const QUICK_PAY_METHODS: QuickPayMethod[] = [
  {
    id: 'momo',
    brandLabel: 'MOMO',
    brandColor: '#a50064',
    name: 'Ví Điện Tử MoMo',
    sub: 'Thanh toán tức thì không cần OTP',
    badge: 'MẶC ĐỊNH',
  },
  {
    id: 'visa',
    brandLabel: 'VISA',
    brandColor: '#1a1f71',
    name: 'Thẻ Quốc Tế Visa •••• 4421',
    sub: 'Hết hạn: 08/27 • Techcombank Signature',
    badge: 'ĐÃ XÁC THỰC',
    badgeStyle: { color: '#4ade80', background: 'rgba(74, 222, 128, 0.12)' },
  },
];
