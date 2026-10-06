// ─── Navigation Items ────────────────────────────────────────────────────────

export interface NavItemConfig {
  labelKey: string;
  path?: string;
  scrollTarget?: string;
  hasAiDot?: boolean;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { labelKey: 'header:home', path: '/' },
  { labelKey: 'header:discovery', path: '/kham-pha' },
  { labelKey: 'header:showtimes', path: '/lich-chieu' },
  { labelKey: 'header:offers', scrollTarget: 'uu-dai' },
  { labelKey: 'header:cinemas', scrollTarget: 'rap-chieu' },
  {
    labelKey: 'header:ai_assistant',
    scrollTarget: 'ai-tro-ly',
    hasAiDot: true,
  },
];

// ─── Cities ──────────────────────────────────────────────────────────────────

export const CITIES = ['Hà Nội', 'TP. HCM', 'Đà Nẵng'];

// ─── Languages ───────────────────────────────────────────────────────────────

export interface Language {
  code: string;
  label: string;
  flagUrl: string;
}

export const LANGUAGES: Language[] = [
  {
    code: 'vi',
    label: 'Tiếng Việt',
    flagUrl: 'https://flagcdn.com/w40/vn.png',
  },
  { code: 'en', label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ko', label: '한국어', flagUrl: 'https://flagcdn.com/w40/kr.png' },
  { code: 'ja', label: '日本語', flagUrl: 'https://flagcdn.com/w40/jp.png' },
  { code: 'zh', label: '中文', flagUrl: 'https://flagcdn.com/w40/cn.png' },
];

// ─── Notifications ────────────────────────────────────────────────────────────

export type NotifType = 'ticket' | 'voucher' | 'release' | 'points';
export type NotifCategory = 'all' | 'offers';

export interface NotificationItem {
  id: string;
  type: NotifType;
  category: NotifCategory;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
  link: string;
}

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    type: 'ticket',
    category: 'all',
    title: 'Suất chiếu sắp diễn ra',
    desc: 'Vé xem phim Dune: Part Two sẽ bắt đầu lúc 19:30 tối nay tại IMAX Landmark 81.',
    time: '15 phút trước',
    unread: true,
    link: '/ve-cua-toi',
  },
  {
    id: '2',
    type: 'voucher',
    category: 'offers',
    title: 'Voucher ưu đãi VIP',
    desc: 'Tặng voucher giảm 50% Combo Bắp Nước CineLounge VIP cho hội viên Diamond.',
    time: '1 giờ trước',
    unread: true,
    link: '/uu-dai',
  },
  {
    id: '3',
    type: 'release',
    category: 'all',
    title: 'Mở bán suất chiếu sớm',
    desc: 'Deadpool & Wolverine đã mở bán vé suất chiếu sớm Midnight Sneak-show.',
    time: 'Hôm qua',
    unread: false,
    link: '/phim/5?booking=true',
  },
  {
    id: '4',
    type: 'points',
    category: 'offers',
    title: 'Cộng điểm PhimPoints',
    desc: '+150 PhimPoints đã được tích lũy vào tài khoản hội viên VIP của bạn.',
    time: '2 ngày trước',
    unread: false,
    link: '/profile/vip-elite',
  },
];

