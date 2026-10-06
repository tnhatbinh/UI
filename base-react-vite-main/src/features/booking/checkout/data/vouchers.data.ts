export interface CheckoutVoucherData {
  code: string;
  discount: number;
  title: string;
  desc: string;
  icon: string;
  type?: 'fixed' | 'percentage';
  percentage?: number;
}

export const CHECKOUT_VOUCHERS: CheckoutVoucherData[] = [
  {
    code: 'GIAM30K',
    discount: 30000,
    title: 'Giảm 30K combo phim bom tấn',
    desc: 'Giảm 30K combo phim bom tấn',
    icon: '%',
    type: 'fixed',
  },
  {
    code: 'TECHCOMVIP',
    discount: 45000,
    title: 'Giảm 15% khi thanh toán thẻ Techcombank',
    desc: 'Giảm 15% khi thanh toán thẻ Techcombank',
    icon: '💳',
    type: 'percentage',
    percentage: 15,
  },
];
