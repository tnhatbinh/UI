import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Calendar,
  Armchair,
  Coffee,
  CreditCard,
  Crown,
  User,
  ShieldCheck,
  Wallet,
  Bell,
  Sparkles,
  Home,
  Film,
  Clapperboard,
  Tag,
  MapPin,
  LogOut,
  LogIn,
  X,
  ChevronRight,
  Globe,
  Menu,
  Search,
} from 'lucide-react';
import { BiCameraMovie } from 'react-icons/bi';
import tokenManager from '@shared/utils/tokenManager';
import {
  LANGUAGES,
  INITIAL_NOTIFICATIONS,
} from '@layouts/header/data/header-data';
import * as S from './Sidebar.styles';

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CITIES = ['TP. HCM', 'Hà Nội', 'Đà Nẵng'];

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCity, setSelectedCity] = useState('TP. HCM');
  const [searchQuery, setSearchQuery] = useState('');

  const isLoggedIn = Boolean(tokenManager.getAccessToken());
  const userName = localStorage.getItem('user_name') || 'VIP Elite';
  const unreadCount = INITIAL_NOTIFICATIONS.filter((n) => n.isUnread).length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/kham-pha?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/kham-pha');
    }
    onClose();
  };

  // Đóng sidebar khi nhấn phím Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Khóa scroll body khi sidebar mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleNavigateTo = (path: string) => () => {
    handleNavigate(path);
  };

  const handleScrollOrNavigate = (sectionId: string) => {
    onClose();
    if (location.pathname === '/' || location.pathname === '/home') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(`/#${sectionId}`);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleScrollTo = (sectionId: string) => () => {
    handleScrollOrNavigate(sectionId);
  };

  const handleSelectLang = (code: string) => () => {
    i18n.changeLanguage(code);
  };

  const handleSelectCity = (city: string) => () => {
    setSelectedCity(city);
  };

  const handleLogout = () => {
    tokenManager.removeAccessToken();
    localStorage.removeItem('user_name');
    onClose();
    navigate('/login');
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Backdrop mờ phía sau */}
      <S.Backdrop $isOpen={isOpen} onClick={onClose} />

      {/* Thanh Sidebar Dọc Nằm Sát Rìa Màn Hình */}
      <S.SidebarWrapper $isOpen={isOpen} aria-label="Sidebar Menu">
        {/* Header của Sidebar (Không dùng logo - thiết kế tinh gọn) */}
        <S.SidebarHeader>
          <S.SidebarHeaderTitle>
            <Menu size={18} className="header-icon" />
            <span>MENU</span>
          </S.SidebarHeaderTitle>

          <S.CloseBtn onClick={onClose} title="Đóng menu">
            <X size={18} />
          </S.CloseBtn>
        </S.SidebarHeader>

        {/* Nội dung menu cuộn mượt */}
        <S.ScrollContent>
          {/* Thanh tìm kiếm nhanh trên Mobile */}
          <S.SidebarSearchForm onSubmit={handleSearchSubmit}>
            <S.SidebarSearchBox>
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder={t('header:search', 'Tìm phim, rạp chiếu...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </S.SidebarSearchBox>
          </S.SidebarSearchForm>

          {/* Bộ chọn đa ngôn ngữ */}
          <S.QuickLangBar>
            <div className="lang-title-row">
              <div className="title-left">
                <Globe size={13} className="icon" />
                <span>Ngôn ngữ / Language</span>
              </div>
            </div>
            <div className="lang-chips-grid">
              {LANGUAGES.map((lang) => (
                <S.LangChip
                  key={lang.code}
                  $isSelected={Boolean(i18n.language?.startsWith(lang.code))}
                  onClick={handleSelectLang(lang.code)}
                >
                  <img
                    src={lang.flagUrl}
                    alt={lang.label}
                    className="flag-img"
                  />
                  <span>{lang.label}</span>
                </S.LangChip>
              ))}
            </div>
          </S.QuickLangBar>

          {/* Chọn thành phố nhanh */}
          <S.QuickLocationBar>
            <div className="loc-title">
              <MapPin size={13} className="icon" />
              <span>Khu vực</span>
            </div>
            <div className="city-chips">
              {CITIES.map((city) => (
                <S.CityChip
                  key={city}
                  $isSelected={selectedCity === city}
                  onClick={handleSelectCity(city)}
                >
                  {city}
                </S.CityChip>
              ))}
            </div>
          </S.QuickLocationBar>

          {/* NHÓM 1: KHÁM PHÁ & ĐIỀU HƯỚNG CHÍNH */}
          <S.SectionGroup>
            <S.SectionHeader>Khám Phá & Điều Hướng</S.SectionHeader>

            <S.NavItemBtn
              $isActive={isActive('/')}
              onClick={handleNavigateTo('/')}
            >
              <div className="item-left">
                <Home className="item-icon" />
                <span className="item-title">{t('header:home')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/kham-pha')}
              onClick={handleNavigateTo('/kham-pha')}
            >
              <div className="item-left">
                <Film className="item-icon" />
                <span className="item-title">{t('header:discovery')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/lich-chieu')}
              onClick={handleNavigateTo('/lich-chieu')}
            >
              <div className="item-left">
                <Clapperboard className="item-icon" />
                <span className="item-title">{t('header:showtimes')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={false}
              onClick={handleScrollTo('uu-dai')}
            >
              <div className="item-left">
                <Tag className="item-icon" />
                <span className="item-title">{t('header:offers')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={false}
              onClick={handleScrollTo('rap-chieu')}
            >
              <div className="item-left">
                <MapPin className="item-icon" />
                <span className="item-title">{t('header:cinemas')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={false}
              onClick={handleScrollTo('ai-tro-ly')}
            >
              <div className="item-left">
                <Sparkles className="item-icon gold" />
                <span className="item-title">{t('header:ai_assistant')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/ve-cua-toi')}
              onClick={handleNavigateTo('/ve-cua-toi')}
            >
              <div className="item-left">
                <BiCameraMovie className="item-icon" />
                <span className="item-title">{t('header:my_tickets')}</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>
          </S.SectionGroup>

          <S.SectionDivider />

          {/* NHÓM 2: ĐẶT VÉ & DỊCH VỤ */}
          <S.SectionGroup>
            <S.SectionHeader>Đặt Vé & Dịch Vụ</S.SectionHeader>

            <S.NavItemBtn
              $isActive={isActive('/movie-details')}
              onClick={handleNavigateTo('/movie-details')}
            >
              <div className="item-left">
                <Calendar className="item-icon" />
                <span className="item-title">Chi tiết phim & Lịch chiếu</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/booking/seat-selection')}
              onClick={handleNavigateTo('/booking/seat-selection')}
            >
              <div className="item-left">
                <Armchair className="item-icon" />
                <span className="item-title">Chọn ghế xem phim</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/booking/snacks-services')}
              onClick={handleNavigateTo('/booking/snacks-services')}
            >
              <div className="item-left">
                <Coffee className="item-icon" />
                <span className="item-title">Bắp nước & Dịch vụ</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/booking/checkout')}
              onClick={handleNavigateTo('/booking/checkout')}
            >
              <div className="item-left">
                <CreditCard className="item-icon" />
                <span className="item-title">Thanh toán vé</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>
          </S.SectionGroup>

          <S.SectionDivider />

          {/* NHÓM 3: HỒ SƠ & CÁ NHÂN */}
          <S.SectionGroup>
            <S.SectionHeader>Hồ Sơ & Cá Nhân</S.SectionHeader>

            <S.NavItemBtn
              $isActive={isActive('/profile/vip-elite')}
              onClick={handleNavigateTo('/profile/vip-elite')}
            >
              <div className="item-left">
                <Crown className="item-icon gold" />
                <span className="item-title">Hồ sơ VIP Elite</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/profile/personal-info')}
              onClick={handleNavigateTo('/profile/personal-info')}
            >
              <div className="item-left">
                <User className="item-icon" />
                <span className="item-title">Hồ sơ cá nhân</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/profile/security')}
              onClick={handleNavigateTo('/profile/security')}
            >
              <div className="item-left">
                <ShieldCheck className="item-icon" />
                <span className="item-title">Bảo mật & Mật khẩu</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/profile/payment-methods')}
              onClick={handleNavigateTo('/profile/payment-methods')}
            >
              <div className="item-left">
                <Wallet className="item-icon" />
                <span className="item-title">Phương thức thanh toán</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/profile/notification-settings')}
              onClick={handleNavigateTo('/profile/notification-settings')}
            >
              <div className="item-left">
                <Bell className="item-icon" />
                <span className="item-title">Cài đặt thông báo & Ưu đãi</span>
              </div>
              {unreadCount > 0 && <S.BadgePill>{unreadCount} mới</S.BadgePill>}
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>

            <S.NavItemBtn
              $isActive={isActive('/profile/cinematic-taste')}
              onClick={handleNavigateTo('/profile/cinematic-taste')}
            >
              <div className="item-left">
                <Sparkles className="item-icon gold" />
                <span className="item-title">Khẩu vị điện ảnh</span>
              </div>
              <ChevronRight className="item-arrow" />
            </S.NavItemBtn>
          </S.SectionGroup>
        </S.ScrollContent>

        {/* Footer Sidebar: User Status & Login/Logout */}
        <S.SidebarFooter>
          {isLoggedIn ? (
            <>
              <S.UserCard>
                <div className="user-meta">
                  <div className="avatar">
                    <User size={16} strokeWidth={2.5} />
                  </div>
                  <div className="user-details">
                    <span className="name">{userName}</span>
                    <span className="status">
                      Hội viên VIP Elite • 1.250 Điểm
                    </span>
                  </div>
                </div>
              </S.UserCard>

              <S.ActionBtn $isLogout onClick={handleLogout}>
                <LogOut size={15} />
                <span>Đăng xuất</span>
              </S.ActionBtn>
            </>
          ) : (
            <S.ActionBtn onClick={handleNavigateTo('/login')}>
              <LogIn size={15} />
              <span>{t('header:login')}</span>
            </S.ActionBtn>
          )}
        </S.SidebarFooter>
      </S.SidebarWrapper>
    </>
  );
};

export default Sidebar;
