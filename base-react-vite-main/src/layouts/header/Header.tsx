import type { FC } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import { BiCameraMovie } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import tokenManager from '@shared/utils/tokenManager';
import { LocationPicker } from './components/LocationPicker';
import { LangSwitcher } from './components/LangSwitcher';
import { NotificationDropdownMenu } from './components/NotificationDropdown';
import { ProfileDropdownMenu } from './components/ProfileDropdown';
import { HeaderLogo } from './components/HeaderLogo';
import { HeaderNav } from './components/HeaderNav';
import { HeaderSearch } from './components/HeaderSearch';
import {
  ActionsGroup,
  TicketPassBtn,
} from './components/HeaderActions.styles';
import {
  EdgeMenuTrigger,
  InnerContainer,
  NavLeftGroup,
  OuterHeader,
} from './header.styles';

export interface HeaderProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

const Header: FC<HeaderProps> = ({
  isSidebarOpen = false,
  onToggleSidebar,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [, setAuthTick] = useState(0);

  const handleScrollOrNavigate = (sectionId: string) => {
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

  return (
    <OuterHeader>
      <InnerContainer>
        {/* Left Side: Logo + Navigation */}
        <NavLeftGroup>
          <HeaderLogo />
          <HeaderNav onScrollOrNavigate={handleScrollOrNavigate} />
        </NavLeftGroup>

        {/* Right Side: Actions */}
        <ActionsGroup>
          {/* Language Switcher */}
          <LangSwitcher />

          {/* Search Box */}
          <HeaderSearch />

          {/* Location Picker */}
          <LocationPicker />

          {/* My Tickets */}
          <TicketPassBtn onClick={() => navigate('/ve-cua-toi')}>
            <BiCameraMovie className="ticket-icon" />
            <span>{t('header:my_tickets')}</span>
          </TicketPassBtn>

          {/* Notification Dropdown */}
          <NotificationDropdownMenu
            onCloseOthers={() => {}} // each dropdown manages its own state
            onScrollOrNavigate={handleScrollOrNavigate}
          />

          {/* Profile / Login */}
          <ProfileDropdownMenu
            onLogout={() => {
              tokenManager.removeAccessToken();
              setAuthTick((v) => v + 1);
            }}
          />
        </ActionsGroup>
      </InnerContainer>

      {/* Sidebar Toggle Button */}
      <EdgeMenuTrigger
        type="button"
        $isOpen={isSidebarOpen}
        onClick={onToggleSidebar}
        title="Menu hệ thống (Sidebar)"
        aria-label="Mở menu hệ thống"
      >
        <MenuIcon size={20} />
      </EdgeMenuTrigger>
    </OuterHeader>
  );
};

export default Header;
