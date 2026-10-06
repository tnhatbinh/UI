export interface SnackProduct {
  id: string;
  name: string;
  category: 'combo' | 'popcorn' | 'drink' | 'exclusive';
  tag: string;
  discountBadge?: string;
  image: string;
  description: string;
  price: number;
  originalPrice?: number;
  unit: string;
  stockNote?: string;
  perkNote?: string;
}

export const SNACK_CATEGORIES = [
  { id: 'all', label: 'Tất cả Combo' },
  { id: 'popcorn', label: 'Bắp Rang Bơ Nóng Hổi' },
  { id: 'drink', label: 'Nước Ngọt & Mocktail' },
  { id: 'exclusive', label: 'Combo Phim Giới Hạn' },
];

export const MOCK_SNACKS: SnackProduct[] = [
  {
    id: 'snack-dune-sandworm',
    name: 'Combo Dune Sandworm',
    category: 'exclusive',
    tag: 'BEST-SELLER BOM TẤN',
    discountBadge: '-24%',
    image:
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=600&auto=format&fit=crop',
    description:
      '1 Bắp phô mai lớn 2 ngăn + 2 Ly nước ngọt kèm topper Dune Sandworm kim loại phiên bản giới hạn.',
    price: 189000,
    originalPrice: 249000,
    unit: '1 Combo',
    stockNote: 'Còn lại: 14 bộ',
  },
  {
    id: 'snack-caramel-sea-salt',
    name: 'Bắp Caramen Muối Biển (L)',
    category: 'popcorn',
    tag: 'ĐẦU BẾP TUYỂN CHỌN',
    discountBadge: 'Size L (Tiêu chuẩn)',
    image:
      'https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=600&auto=format&fit=crop',
    description:
      'Hạt bắp nấm nhập khẩu giòn tan, phủ caramel thủ công cùng muối biển hồng Himalaya hảo hạng.',
    price: 65000,
    unit: '1 Hộp lớn',
    perkNote: 'Chuẩn Bắp Rang Bơ Nóng 100%',
  },
  {
    id: 'snack-sweet-couple',
    name: 'Combo Đôi Sweet Couple',
    category: 'combo',
    tag: 'DÀNH CHO 2 NGƯỜI',
    discountBadge: '-18%',
    image:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=600&auto=format&fit=crop',
    description:
      '1 Bắp bơ phô mai lớn 2 ngăn + 2 Nước ngọt lớn (Coke/Sprite) + 1 Snack snack khoai tây giòn cay.',
    price: 139000,
    originalPrice: 170000,
    unit: '1 Combo Đôi',
  },
  {
    id: 'snack-vip-charlotte',
    name: 'Set VIP Charlotte Wine & Charcuterie',
    category: 'exclusive',
    tag: 'VIP LOUNGE SUITE ONLY',
    discountBadge: 'Thượng hạng',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop',
    description:
      '2 Ly vang đỏ cao cấp + đĩa phô mai xúc xích hun khói nhập khẩu dành riêng cho khán phòng VIP.',
    price: 299000,
    unit: '2 Khách',
    perkNote: 'Phục vụ ly thủy tinh',
  },
  {
    id: 'snack-solo-standard',
    name: 'Combo Solo Standard',
    category: 'combo',
    tag: 'CÁ NHÂN TIẾT KIỆM',
    discountBadge: 'Size M',
    image:
      'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop',
    description:
      '1 Bắp ngọt vừa (Size M) + 1 Nước ngọt tự chọn (Coke/Fanta/Sprite) lạnh sảng khoái.',
    price: 89000,
    originalPrice: 105000,
    unit: '1 Combo',
  },
  {
    id: 'snack-galaxy-sparkle',
    name: 'Mocktail Galaxy Sparkle',
    category: 'drink',
    tag: 'LY PHÁT SÁNG ĐỘC QUYỀN',
    discountBadge: 'Phiên bản giới hạn',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
    description:
      'Nước ép trái cây nhiệt đới pha thạch ngọc trai có đèn LED đáy ly phát sáng vũ trụ.',
    price: 55000,
    unit: '1 Ly Dạ Quang',
    perkNote: 'Giữ lại ly làm kỷ niệm',
  },
];
