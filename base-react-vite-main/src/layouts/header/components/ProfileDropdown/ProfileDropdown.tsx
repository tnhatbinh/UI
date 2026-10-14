import { useRef, useState } from 'react';
import {
  ChevronDown,
  CreditCard,
  Film,
  LogIn,
  LogOut,
  Shield,
  User,
} from 'lucide-react';
import { BiCameraMovie } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import tokenManager from '@shared/utils/tokenManager';
import { useClickOutside } from '../../hooks/useClickOutside';
import * as S from './ProfileDropdown.styles';

// Map icon name → component (avoids importing all icons in data file)
const MENU_ICONS: Record<string, React.ReactNode> = {
  user: <User size={13} />,
  shield: <Shield size={13} />,
  creditcard: <CreditCard size={13} />,
  film: <Film size={13} />,
  camera: <BiCameraMovie size={13} />,
};

const PROFILE_MENU = [
  {
    id: 'vip',
    icon: 'user',
    label: 'Hồ sơ VIP Elite & Đặc quyền',
    path: '/profile/vip-elite',
  },
  {
    id: 'personal',
    icon: 'user',
    label: 'Thông tin cá nhân',
    path: '/profile/personal-info',
  },
  {
    id: 'security',
    icon: 'shield',
    label: 'Bảo mật & Mật khẩu',
    path: '/profile/security',
  },
  {
    id: 'payment',
    icon: 'creditcard',
    label: 'Phương thức thanh toán',
    path: '/profile/payment-methods',
  },
  {
    id: 'taste',
    icon: 'film',
    label: 'Khẩu vị điện ảnh',
    path: '/profile/cinematic-taste',
  },
  {
    id: 'tickets',
    icon: 'camera',
    label: 'Vé đã đặt & Lịch sử',
    path: '/ve-cua-toi',
  },
];

interface ProfileDropdownMenuProps {
  /** Callback để Header cập nhật lại trạng thái auth khi logout */
  onLogout: () => void;
}

export function ProfileDropdownMenu({ onLogout }: ProfileDropdownMenuProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigateLogin = () => {
    navigate('/login');
  };

  const handleMenuItemClick = (path: string) => () => {
    setIsOpen(false);
    navigate(path);
  };

  useClickOutside([ref], [handleClose]);

  const isLoggedIn = Boolean(tokenManager.getAccessToken());
  const userName = localStorage.getItem('user_name') || 'VIP Elite';

  const handleLogout = () => {
    tokenManager.removeAccessToken();
    localStorage.removeItem('user_name');
    setIsOpen(false);
    onLogout();
    navigate('/login');
  };

  if (!isLoggedIn) {
    return (
      <S.LoginBtn onClick={handleNavigateLogin}>
        <LogIn size={13} />
        <span>Đăng nhập</span>
      </S.LoginBtn>
    );
  }

  return (
    <S.ProfileWrapper ref={ref}>
      <S.UserProfileBadge $isOpen={isOpen} onClick={handleToggleOpen}>
        <div className="avatar-circle">
          <User size={12} strokeWidth={3} />
        </div>
        <div className="user-info">
          <span className="vip-tag">{userName}</span>
          <span className="points-text">1.250 Điểm</span>
        </div>
        <ChevronDown size={10} className="profile-chevron" />
      </S.UserProfileBadge>

      {isOpen && (
        <S.ProfileDropdown>
          <S.ProfileHeader>
            <div className="profile-name">{userName}</div>
            <div className="profile-membership">VIP Elite • 1.250 Điểm</div>
          </S.ProfileHeader>

          <S.ProfileDivider />

          {PROFILE_MENU.map((item) => (
            <S.ProfileMenuItem
              key={item.id}
              onClick={handleMenuItemClick(item.path)}
            >
              {MENU_ICONS[item.icon]}
              <span>{item.label}</span>
            </S.ProfileMenuItem>
          ))}

          <S.ProfileDivider />

          <S.ProfileLogoutItem onClick={handleLogout}>
            <LogOut size={13} />
            <span>Đăng xuất</span>
          </S.ProfileLogoutItem>
        </S.ProfileDropdown>
      )}
    </S.ProfileWrapper>
  );
}
