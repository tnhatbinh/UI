import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../data/header-data';
import { NavigationMenu, NavItem } from './HeaderNav.styles';

interface HeaderNavProps {
  onScrollOrNavigate: (sectionId: string) => void;
}

export const HeaderNav: FC<HeaderNavProps> = ({ onScrollOrNavigate }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/')
      return location.pathname === '/' || location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  return (
    <NavigationMenu>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.labelKey}
          $isActive={item.path ? isActive(item.path) : false}
          onClick={() =>
            item.path
              ? navigate(item.path)
              : onScrollOrNavigate(item.scrollTarget!)
          }
        >
          {item.hasAiDot && <div className="ai-dot" />}
          {t(item.labelKey)}
        </NavItem>
      ))}
    </NavigationMenu>
  );
};
