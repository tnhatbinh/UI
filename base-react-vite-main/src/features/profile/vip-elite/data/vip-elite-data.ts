import type { TFunction } from 'i18next';

// ─── Voucher Data ───────────────────────────────────────────────────────────

export interface VoucherItem {
  id: string;
  discountLabel: string;
  title: string;
  desc: string;
  hsd: string;
  badge: string;
}

export const getVouchers = (t: TFunction): VoucherItem[] => [
  {
    id: 'v1',
    discountLabel: '-50K',
    title: t('profile:voucher1_title'),
    desc: t('profile:voucher1_desc'),
    hsd: t('profile:voucher1_hsd'),
    badge: t('profile:voucher1_badge'),
  },
  {
    id: 'v2',
    discountLabel: '🍿',
    title: t('profile:voucher2_title'),
    desc: t('profile:voucher2_desc'),
    hsd: t('profile:voucher2_hsd'),
    badge: t('profile:voucher2_badge'),
  },
  {
    id: 'v3',
    discountLabel: '1+1',
    title: t('profile:voucher3_title'),
    desc: t('profile:voucher3_desc'),
    hsd: t('profile:voucher3_hsd'),
    badge: t('profile:voucher3_badge'),
  },
];

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
    title: 'Tặng 01 Bắp Ngọt Lớn',
    desc: 'Khi đặt từ 02 vé trở lên trên ứng dụng',
    hsd: 'HSD: 15/11/2024 (Còn 3 ngày)',
    badge: 'SẮP HẾT HẠN',
  },
  {
    id: 'v3',
    discountLabel: '1+1',
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
}

export const getQuickPayMethods = (t: TFunction): QuickPayMethod[] => [
  {
    id: 'momo',
    brandLabel: 'MOMO',
    brandColor: '#a50064',
    name: 'Ví Điện Tử MoMo',
    sub: t('profile:momo_sub'),
    badge: t('profile:momo_badge'),
  },
  {
    id: 'visa',
    brandLabel: 'VISA',
    brandColor: '#1a1f71',
    name: 'Thẻ Quốc Tế Visa •••• 4421',
    sub: t('profile:visa_sub'),
    badge: t('profile:visa_badge'),
  },
];

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
  },
];

