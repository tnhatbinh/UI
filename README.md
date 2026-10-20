## 🔑 1. Thông Tin Trải Nghiệm Nhanh

- **Tài khoản test:**
  - **Email:** `testuser@phimbook.vn` (hoặc bấm nhanh nút **"Điền tài khoản Demo"** ngay tại form đăng nhập)
  - **Mật khẩu:** `Password123@`
- **Backend Live:** Ứng dụng đã được cấu hình proxy tự động trỏ về Backend Railway (`https://be-bookphim-production.up.railway.app`). Không cần cấu hình môi trường phức tạp hay chạy server local.

---

## 📋 2. Báo Cáo Tích Hợp API (API Integration Checklist)

Hệ thống đã kết nối và xử lý hoàn chỉnh các luồng API từ Backend:

### 🔐 A. Xác Thực & Hồ Sơ (Auth & Profile)

| Phương thức | Endpoint                   | Chức năng & Xử lý Frontend                                                                     |
| :---------- | :------------------------- | :--------------------------------------------------------------------------------------------- |
| `POST`      | `/api/v1/auth/login`       | Đăng nhập hệ thống, lưu JWT qua `tokenManager`, tự động gắn Bearer Token vào axios interceptor |
| `POST`      | `/api/v1/auth/register`    | Đăng ký tài khoản thành viên mới                                                               |
| `GET`       | `/api/v1/profile`          | Lấy thông tin cá nhân, điểm tích lũy CinePoints và thẻ thành viên VIP                          |
| `PUT`       | `/api/v1/profile`          | Cập nhật thông tin hồ sơ (họ tên, số điện thoại, ngày sinh, giới tính)                         |
| `GET`       | `/api/v1/profile/taste-ai` | Lấy dữ liệu phân tích khẩu vị điện ảnh CineMatch AI                                            |

### 🎬 B. Phim & Suất Chiếu (Movies & Showtimes)

| Phương thức | Endpoint                            | Chức năng & Xử lý Frontend                                                                          |
| :---------- | :---------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `GET`       | `/api/v1/movies?Status=NOW_SHOWING` | Hiển thị danh sách phim đang chiếu trên Trang chủ (cache 5 phút bằng TanStack Query)                |
| `GET`       | `/api/v1/movies`                    | Trang Khám phá: Lọc đa chiều theo trạng thái, thể loại, định dạng (IMAX/2D/3D), sắp xếp và tìm kiếm |
| `GET`       | `/api/v1/movies/{slug}`             | Lấy chi tiết phim theo slug (video trailer, thời lượng, độ tuổi, tóm tắt)                           |
| `GET`       | `/api/v1/showtimes`                 | Lấy danh sách cụm rạp, phòng chiếu và các khung giờ chiếu theo phim và ngày đã chọn                 |

### 🎟️ C. Đặt Vé, Khóa Ghế & Thanh Toán (Booking & Tickets)

| Phương thức | Endpoint                              | Chức năng & Xử lý Frontend                                                                   |
| :---------- | :------------------------------------ | :------------------------------------------------------------------------------------------- |
| `GET`       | `/api/v1/showtimes/{id}/seatmap`      | Tải sơ đồ ghế động; tự động polling đồng bộ sau mỗi 15 giây để cập nhật ghế trống/ghế đã bán |
| `POST`      | `/api/v1/showtimes/{id}/seats/lock`   | Khóa giữ ghế tạm thời (Redis Distributed Lock) trong 10 phút                                 |
| `POST`      | `/api/v1/showtimes/{id}/seats/unlock` | Hủy khóa ghế khi người dùng hủy chọn hoặc chuyển trang                                       |
| `POST`      | `/api/v1/orders`                      | Khởi tạo đơn hàng kèm header `Idempotency-Key` (UUIDv4) chống gửi trùng lặp đơn              |
| `POST`      | `/api/v1/payments/checkout`           | Tạo giao dịch thanh toán qua MoMo, VNPAY hoặc Quick-Pay                                      |
| `GET`       | `/api/v1/tickets/{passCode}`          | Tra cứu trạng thái vé điện tử thông minh (Smart E-Ticket)                                    |
| `POST`      | `/api/v1/tickets/turnstile-checkin`   | Giả lập quét mã QR vé tại cổng soát vé rạp Fast-Track                                        |
| `POST`      | `/api/v1/tickets/{passCode}/refund`   | Yêu cầu hoàn vé / hủy vé điện tử trực tuyến                                                  |

---

## 🚀 3. Hướng Dẫn Cài Đặt & Chạy Ứng Dụng (Quick Start)

### Yêu Cầu Môi Trường (Prerequisites)

- **Node.js**: Phiên bản **$\ge$ 18.x** (Khuyến nghị **Node 20.x hoặc 22.x LTS**).
- **Package Manager**: `npm` (hoặc `yarn` / `pnpm`).

### Khởi Chạy Nhanh (Chỉ 3 Bước)

```bash
# Bước 1: Di chuyển vào thư mục ứng dụng
cd base-react-vite-main

# Bước 2: Cài đặt dependencies
npm install

# Bước 3: Chạy môi trường phát triển (Dev Server)
npm run dev
```

Ứng dụng sẽ khởi chạy tại: `http://localhost:5173`

---

## 🛠️ 4. Công Nghệ Sử Dụng (Tech Stack)

- **Core:** React 19, TypeScript (Strict Mode), Vite 7.
- **Routing & State:** React Router DOM v7 (Data Router, Lazy loading per page), Context API (`BookingContext`).
- **Server State & Data Fetching:** TanStack React Query v5, Axios với Request/Response Interceptors.
- **Giao diện & Styling:** Styled Components, Ant Design 5 (đồng bộ Dark Theme tokens), Lucide React & React Icons.
- **Đa ngôn ngữ & Tiện ích:** i18next (hỗ trợ Tiếng Việt, Tiếng Anh,...), Day.js, Canvas Confetti.

---

## 📁 5. Cấu Trúc Mã Nguồn (Project Structure)

```text
booking app/
├── .gitignore                      # File cấu hình Gitignore chuẩn production
├── README.md                       # Tài liệu hướng dẫn & báo cáo tích hợp API
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
        │   ├── axios-instance.ts   # Cấu hình Axios Client & Interceptors
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
        │   │   ├── api/            # auth.api.ts (Login, Register, Profile, CineMatch AI)
        │   │   └── components/     # LoginForm, AuthShowcase
        │   ├── home/               # Trang chủ: Hero Spotlight, Phim đang chiếu, AI Advisor...
        │   ├── movie-discovery/    # Khám phá phim, bộ lọc nâng cao
        │   │   └── api/            # movie.api.ts (Movies list & details, showtimes)
        │   ├── movie-details/      # Chi tiết phim, trailer 4K, bảng suất chiếu rạp
        │   ├── booking/            # Quy trình đặt vé tuần tự
        │   │   ├── api/            # booking.api.ts (Seatmap, lock, orders, payments, tickets)
        │   │   ├── context/        # BookingContext & State luồng đặt vé
        │   │   ├── seat-selection/ # Sơ đồ ghế thời gian thực (Polling 15s)
        │   │   ├── snacks-services/# Chọn combo bắp nước & hình thức nhận
        │   │   ├── checkout/       # Cổng thanh toán & áp dụng voucher
        │   │   └── my-tickets/     # Quản lý vé điện tử, lịch sử & quét mã vào rạp
        │   └── profile/            # Hồ sơ VIP Elite, cài đặt bảo mật, khẩu vị điện ảnh
        ├── shared/                 # Thành phần dùng chung (layout, utils, tokenManager...)
        └── styles/
            ├── GlobalStyles.ts     # Design tokens Cinema Noir & Reset CSS
            ├── AntdOverrides.ts    # Đồng bộ giao diện Ant Design sang Dark Theme
            └── breakpoints.ts      # Kích thước màn hình responsive
```
