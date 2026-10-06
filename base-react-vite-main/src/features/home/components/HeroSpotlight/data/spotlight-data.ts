// ─── Spotlight Movie Type ─────────────────────────────────────────────────────

export interface SpotlightMovie {
  id: number;
  mainTitle: string;
  subTitle: string;
  exclusiveTitle: string;
  bgImage: string;
  imaxBadge: string;
  ageBadge: string;
  ratingScore: string;
  ratingCount: string;
  genre: string;
  synopsis: string;
  duration: string;
  audioSub: string;
  director: string;
}

// ─── Spotlight Carousel Data ──────────────────────────────────────────────────

export const SPOTLIGHT_MOVIES: SpotlightMovie[] = [
  {
    id: 1,
    mainTitle: 'Minions & Monsters',
    subTitle: 'Những rắc rối tí hon (2026)',
    exclusiveTitle: 'SIÊU PHẨM ĐIỆN ẢNH ĐỘC QUYỀN',
    bgImage:
      'https://cdn.elle.vn/5s9UWYADPiC9UOvpVkQTeE_e_xULAkuGDnpsBfRJAbU/rs:fit:1280:0/sharpen:0.5/quality:82/2026/06/30/769840/elle-thumb-review-minions-and-monsters-minions-va-quai-vat-2026.jpg@webp',
    imaxBadge: 'IMAX 3D LASER',
    ageBadge: 'C13 - PHỔ BIẾN TỪ 13 TUỔI',
    ratingScore: '8.8',
    ratingCount: '/10 (12.4k đánh giá)',
    genre: 'Khoa Học Viễn Tưởng • Hành Động',
    synopsis:
      'Nắm trong tay cuốn sách triệu hồi lấy được từ chú cũ là một phù thủy, James, Ed và Henry bắt đầu hành trình tìm kiếm quái vật thực thụ để hiện thực hóa tham vọng, với sự tiếp tay của Goomi – chú quái vật Cthulhu bản mini đáng yêu hơn là đáng sợ.',
    duration: '166 Phút',
    audioSub: 'Tiếng Anh • Phụ đề Tiếng Việt',
    director: 'Pierre Coffin',
  },
  {
    id: 2,
    mainTitle: 'Deadpool & Wolverine',
    subTitle: 'Đại chiến đa vũ trụ (2024)',
    exclusiveTitle: 'BOM TẤN HÀNH ĐỘNG MARVEL',
    bgImage:
      'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
    imaxBadge: 'IMAX 3D',
    ageBadge: 'C18 - DÀNH CHO KHÁN GIẢ TỪ 18 TUỔI',
    ratingScore: '9.2',
    ratingCount: '/10 (28.6k đánh giá)',
    genre: 'Hành Động • Hài Hước • Siêu Anh Hùng',
    synopsis:
      'Sau thời gian dài rửa tay gác kiếm, Wade Wilson buộc phải tái xuất khi cơ quan quản lý phương sai thời gian kéo anh vào một sứ mệnh giải cứu đa vũ trụ cùng người bạn đồng hành Wolverine cộc cằn, tạo nên bộ đôi bùng nổ màn ảnh rộng.',
    duration: '128 Phút',
    audioSub: 'Tiếng Anh • Phụ đề Tiếng Việt',
    director: 'Shawn Levy',
  },
  {
    id: 3,
    mainTitle: 'Dune: Part Two',
    subTitle: 'Hành Tinh Cát - Phần Hai (2024)',
    exclusiveTitle: 'KIỆT TÁC VIỄN TƯỞNG HOÀNH TRÁNG',
    bgImage:
      'https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    imaxBadge: 'IMAX LASER 70MM',
    ageBadge: 'C16 - PHỔ BIẾN TỪ 16 TUỔI',
    ratingScore: '9.5',
    ratingCount: '/10 (35.1k đánh giá)',
    genre: 'Khoa Học Viễn Tưởng • Sử Thi • Phiêu Lưu',
    synopsis:
      'Paul Atreides liên minh cùng Chani và tộc người Fremen khi anh bắt đầu cuộc chiến trả thù những kẻ đã hủy diệt gia tộc của mình, đồng thời đối mặt với lựa chọn nghiệt ngã giữa tình yêu và số phận toàn vũ trụ.',
    duration: '166 Phút',
    audioSub: 'Tiếng Anh • Phụ đề Tiếng Việt',
    director: 'Denis Villeneuve',
  },
  {
    id: 4,
    mainTitle: 'Inside Out 2',
    subTitle: 'Những Mảnh Ghép Cảm Xúc 2 (2024)',
    exclusiveTitle: 'SIÊU PHẨM HOẠT HÌNH TOÀN CẦU',
    bgImage:
      'https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    imaxBadge: '3D DIGITAL',
    ageBadge: 'P - PHỔ BIẾN MỌI ĐỘ TUỔI',
    ratingScore: '9.0',
    ratingCount: '/10 (19.8k đánh giá)',
    genre: 'Hoạt Hình • Hài Hước • Gia Đình',
    synopsis:
      'Bước vào tuổi dậy thì, trụ sở cảm xúc của Riley chào đón những vị khách bất ngờ: Lo Âu, Ganh Tị, Xấu Hổ và Chán Nản, tạo nên chuỗi biến cố dở khóc dở cười và hành trình tìm lại sự cân bằng cảm xúc.',
    duration: '96 Phút',
    audioSub: 'Lồng tiếng & Phụ đề Tiếng Việt',
    director: 'Kelsey Mann',
  },
];

// ─── Quick Booking Bar Dropdown Data ─────────────────────────────────────────

export const BOOKING_MOVIES = [
  'Minions & Monsters',
  'Inside Out 2',
  'Deadpool & Wolverine',
  'Dune: Part Two',
  'Kẻ Trộm Mặt Trăng 4',
];

export const BOOKING_CINEMAS = [
  'CGV Landmark 81 (IMAX Laser)',
  'CGV Vincom Đồng Khởi',
  'BHD Star Cineplex Thảo Điền',
  'Lotte Cinema Cantavil',
  'Galaxy Cinema Nguyễn Du',
];

export const BOOKING_DATES = [
  'Hôm nay, 24 Tháng 10',
  'Ngày mai, 25 Tháng 10',
  'Thứ Bảy, 26 Tháng 10',
  'Chủ Nhật, 27 Tháng 10',
  'Thứ Hai, 28 Tháng 10',
];

export const BOOKING_SHOWTIMES = [
  '10:15 • 2D Phụ đề',
  '14:30 • 3D Lồng tiếng',
  '17:00 • 2D Phụ đề',
  '19:45 • Phòng IMAX',
  '22:15 • IMAX Laser',
];
