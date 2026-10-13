## 📁 Cấu Trúc Mã Nguồn (Project Structure)

```text
booking app/
├── .gitignore                      # File cấu hình Gitignore chuẩn production
├── README.md                       # Tài liệu hướng dẫn dự án
└── base-react-vite-main/           # Thư mục mã nguồn ứng dụng React
    ├── .env.example                # File mẫu biến môi trường
    ├── package.json                # Dependencies và scripts
    ├── tsconfig.app.json           # Cấu hình TypeScript nghiêm ngặt (strict mode)
    ├── vite.config.ts              # Cấu hình Vite & Path Aliases (@features, @layouts...)
    └── src/
        ├── App.tsx                 # Root component khởi tạo Styles & Router
        ├── main.tsx                # Entry point (Antd, QueryClient, i18n, NetworkDetector)
        ├── config/
        │   ├── AppRoutes.tsx       # Bảng định tuyến trung tâm với Guard & Layout
        │   ├── antDesign.ts        # Theme tokens cho Ant Design
        │   └── reactQuery/         # Cấu hình React Query client
        ├── guards/
        │   ├── AuthGuard.tsx       # Chặn truy cập khi chưa đăng nhập -> chuyển về /login
        │   └── GuestGuard.tsx      # Chặn vào /login khi đã đăng nhập
        ├── layouts/
        │   ├── MainLayout.tsx      # Layout chính (Header, Footer, Sidebar, Body)
        │   ├── BookingLayout.tsx   # Layout bọc riêng phạm vi BookingProvider
        │   ├── header/             # Header kính mờ, tìm kiếm, đổi ngôn ngữ, chọn rạp
        │   ├── sidebar/            # Menu điều hướng trượt cạnh màn hình
        │   └── footer/             # Chân trang phong cách điện ảnh
        ├── features/
        │   ├── auth/               # Đăng nhập VIP, Social Login, QR Code
        │   ├── home/               # Trang chủ: Hero Spotlight, Phim đang chiếu, AI Advisor...
        │   ├── movie-discovery/    # Khám phá phim, bộ lọc nâng cao
        │   ├── movie-details/      # Chi tiết phim, trailer 4K, bảng suất chiếu
        │   ├── booking/            # Chọn ghế, chọn bắp nước, checkout, vé của tôi
        │   │   ├── context/        # BookingContext & State luồng đặt vé
        │   │   ├── seat-selection/ # Sơ đồ ghế thời gian thực
        │   │   ├── snacks-services/# Chọn combo bắp nước & hình thức nhận
        │   │   ├── checkout/       # Cổng thanh toán & áp dụng voucher
        │   │   └── my-tickets/     # Quản lý vé điện tử & lịch sử
        │   └── profile/            # Hồ sơ VIP Elite, cài đặt bảo mật, khẩu vị điện ảnh
        ├── shared/                 # Thành phần dùng chung (layout, utils, tokenManager...)
        └── styles/
            ├── GlobalStyles.ts     # Design tokens Cinema Noir & Reset CSS
            ├── AntdOverrides.ts    # Đồng bộ giao diện Ant Design sang Dark Theme
            └── breakpoints.ts      # Kích thước màn hình responsive
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### 1. Yêu Cầu Môi Trường (Prerequisites)

- **Node.js**: Phiên bản **$\ge$ 18.x** (Khuyến nghị **Node 20.x hoặc 22.x LTS**).
- **Package Manager**: `npm` (có sẵn theo Node.js) hoặc `yarn` / `pnpm`.

### 2. Các Bước Khởi Chạy

```bash
# Bước 1: Clone repository về máy tính
git clone https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
cd "booking app"

# Bước 2: Di chuyển vào thư mục ứng dụng
cd base-react-vite-main

# Bước 3: Tạo file biến môi trường từ file mẫu
cp .env.example .env

# Bước 4: Cài đặt các thư viện phụ thuộc
npm install

# Bước 5: Khởi động server phát triển (Dev server)
npm run dev
```
