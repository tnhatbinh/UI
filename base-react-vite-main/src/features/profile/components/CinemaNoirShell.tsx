import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  User,
  Shield,
  CreditCard,
  Film,
  Bell,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  Camera,
  Crown,
  MapPin,
  Tag,
  Star,
} from 'lucide-react';
import * as S from './CinemaNoirShell.styles';

interface CinemaNoirShellProps {
  children: ReactNode;
  pageTitle: string;
}

const TABS = [
  {
    id: 'personal-info',
    label: 'Thông tin cá nhân',
    path: '/profile/personal-info',
    icon: User,
  },
  {
    id: 'security',
    label: 'Bảo mật & Mật khẩu',
    path: '/profile/security',
    icon: Shield,
  },
  {
    id: 'PaymentMethods',
    label: 'Phương thức thanh toán',
    path: '/profile/payment-methods',
    icon: CreditCard,
  },
  {
    id: 'cinematic-taste',
    label: 'Khẩu vị điện ảnh',
    path: '/profile/cinematic-taste',
    icon: Film,
  },
  {
    id: 'notification-settings',
    label: 'Cài đặt thông báo & Ưu đãi',
    path: '/profile/notification-settings',
    icon: Bell,
  },
];

export default function CinemaNoirShell({
  children,
  pageTitle,
}: CinemaNoirShellProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.ShellContainer>
      <S.InnerWrapper>
        {/* Breadcrumb Navigation */}
        <S.BreadcrumbNav>
          <span className="link" onClick={() => navigate('/')}>
            Trang chủ
          </span>
          <span className="separator">&gt;</span>
          <span className="link" onClick={() => navigate('/profile/vip-elite')}>
            Tài khoản
          </span>
          <span className="separator">&gt;</span>
          <span className="current">{pageTitle}</span>
        </S.BreadcrumbNav>

        {/* Unified Cinema Noir Hero Banner */}
        <S.HeroBannerCard>
          <div className="top-row">
            {/* Left side: Avatar & Info */}
            <div className="user-profile-left">
              <div className="avatar-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
                  alt="Nguyễn Thanh Tùng"
                />
                <span className="vip-tag">VIP ELITE</span>
              </div>

              <div className="user-meta">
                <div className="name-row">
                  <h2>Nguyễn Thanh Tùng</h2>
                  <span className="verified-badge">
                    <CheckCircle size={11} />
                    <span>Đã xác thực danh tính</span>
                  </span>
                </div>

                <div className="contact-row">
                  <span className="item">
                    <Mail size={12} />
                    tung.nguyen@gmail.com
                  </span>
                  <span className="item">
                    <Phone size={12} />
                    0988 123 456
                  </span>
                  <span className="item">
                    <Calendar size={12} />
                    Thành viên từ 04/2021
                  </span>
                </div>

                <div className="cta-buttons">
                  <button
                    className="avatar-btn"
                    onClick={() =>
                      alert(
                        'Tải lên ảnh chân dung định dạng JPG/PNG tối đa 5MB.',
                      )
                    }
                  >
                    <Camera size={12} />
                    <span>Chỉnh sửa ảnh đại diện</span>
                  </button>

                  <button
                    className="upgrade-btn"
                    onClick={() => navigate('/profile/vip-elite')}
                  >
                    <Crown size={12} />
                    <span>Nâng cấp Diamond Member</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Diamond Progress Gauge */}
            <div className="diamond-progress-box">
              <div className="circular-chart">75%</div>
              <div className="text">
                <span className="label">HẠNG TÍCH LŨY 2025</span>
                <span className="title">12/16 Vé nữa tới Diamond</span>
                <span className="sub">Hưởng ưu đãi phòng chờ riêng Lounge</span>
              </div>
            </div>
          </div>

          {/* 4 Stat Metric Cards Row */}
          <div className="stats-grid-row">
            <div className="stat-card">
              <div className="icon-box">
                <Film size={18} />
              </div>
              <div className="info">
                <span className="val">48</span>
                <span className="lbl">Phim đã xem</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="icon-box">
                <MapPin size={18} />
              </div>
              <div className="info">
                <span className="val">12</span>
                <span className="lbl">Cụm rạp đã ghé</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="icon-box">
                <Tag size={18} />
              </div>
              <div className="info">
                <span className="val">1.450.000đ</span>
                <span className="lbl">Tiết kiệm năm nay</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="icon-box">
                <Star size={18} />
              </div>
              <div className="info">
                <span className="val">1.250</span>
                <span className="lbl">PhimPoints tích luỹ</span>
              </div>
            </div>
          </div>
        </S.HeroBannerCard>

        {/* Horizontal Navigation Tab Bar */}
        <S.TabsNavBar>
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.path;
            return (
              <S.NavTabItem
                key={tab.id}
                $isActive={isActive}
                onClick={() => navigate(tab.path)}
              >
                <Icon size={15} className="icon" />
                <span>{tab.label}</span>
              </S.NavTabItem>
            );
          })}
        </S.TabsNavBar>

        {/* Injected Content for Each Page */}
        {children}
      </S.InnerWrapper>
    </S.ShellContainer>
  );
}
