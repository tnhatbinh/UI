import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { getProfileApi } from '@features/auth/api/auth.api';
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




export default function CinemaNoirShell({
  children,
  pageTitle,
}: CinemaNoirShellProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      id: 'personal-info',
      label: t('sidebar:nav_personal_info'),
      path: '/profile/personal-info',
      icon: User,
    },
    {
      id: 'security',
      label: t('sidebar:nav_security'),
      path: '/profile/security',
      icon: Shield,
    },
    {
      id: 'PaymentMethods',
      label: t('sidebar:nav_payment_methods'),
      path: '/profile/payment-methods',
      icon: CreditCard,
    },
    {
      id: 'cinematic-taste',
      label: t('sidebar:nav_taste'),
      path: '/profile/cinematic-taste',
      icon: Film,
    },
    {
      id: 'notification-settings',
      label: t('sidebar:nav_notif_settings'),
      path: '/profile/notification-settings',
      icon: Bell,
    },
  ];

  const { data: profile } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getProfileApi,
    staleTime: 60000,
  });

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateVipElite = () => {
    navigate('/profile/vip-elite');
  };

  const handleAvatarAlert = () => {};

  const handleTabClick = (path: string) => () => {
    navigate(path);
  };

  const displayName = profile?.fullName || t('profile:default_username');
  const displayEmail = profile?.email || 'user@phimbook.vn';
  const displayPhone = profile?.phone || t('profile:not_updated');
  const tier = profile?.membershipTier || 'VIP_ELITE';
  const points = profile?.totalPoints ?? 100;
  const moviesCount = profile?.moviesWatchedCount ?? 0;
  const theatersCount = profile?.theatersVisitedCount ?? 0;

  return (
    <S.ShellContainer>
      <S.InnerWrapper>
        {/* Breadcrumb Navigation */}
        <S.BreadcrumbNav>
          <span className="link" onClick={handleNavigateHome}>
            {t('sidebar:nav_home')}
          </span>
          <span className="separator">&gt;</span>
          <span className="link" onClick={handleNavigateVipElite}>
            {t('sidebar:group_profile')}
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
                  src={
                    profile?.avatarUrl ||
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'
                  }
                  alt={displayName}
                />
                <span className="vip-tag">{tier.replace('_', ' ')}</span>
              </div>

              <div className="user-meta">
                <div className="name-row">
                  <h2>{displayName}</h2>
                  <span className="verified-badge">
                    <CheckCircle size={11} />
                    <span>{t('profile:account_verified')}</span>
                  </span>
                </div>

                <div className="contact-row">
                  <span className="item">
                    <Mail size={12} />
                    {displayEmail}
                  </span>
                  <span className="item">
                    <Phone size={12} />
                    {displayPhone}
                  </span>
                  <span className="item">
                    <Calendar size={12} />
                    {profile?.birthDate
                      ? t('profile:birthday_label', {
                          date: profile.birthDate.split('T')[0],
                        })
                      : t('profile:member_phimbook')}
                  </span>
                </div>

                <div className="cta-buttons">
                  <button
                    className="avatar-btn"
                    onClick={handleAvatarAlert}
                  >
                    <Camera size={12} />
                    <span>{t('profile:edit_avatar')}</span>
                  </button>

                  <button
                    className="upgrade-btn"
                    onClick={handleNavigateVipElite}
                  >
                    <Crown size={12} />
                    <span>{t('profile:upgrade_diamond')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Diamond Progress Gauge */}
            <div className="diamond-progress-box">
              <div className="circular-chart">{Math.min(100, Math.round((points / 500) * 100))}%</div>
              <div className="text">
                <span className="label">{t('profile:tier_label')}</span>
                <span className="title">
                  {points >= 500
                    ? t('profile:vip_reached')
                    : t('profile:points_to_vip', {
                        points: Math.max(0, 500 - points),
                      })}
                </span>
                <span className="sub">{t('profile:vip_privilege_note')}</span>
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
                <span className="val">{moviesCount}</span>
                <span className="lbl">{t('profile:movies_watched')}</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="icon-box">
                <MapPin size={18} />
              </div>
              <div className="info">
                <span className="val">{theatersCount}</span>
                <span className="lbl">{t('profile:theaters_visited')}</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="icon-box">
                <Tag size={18} />
              </div>
              <div className="info">
                <span className="val">{(points * 1000).toLocaleString('vi-VN')}đ</span>
                <span className="lbl">{t('profile:reward_value')}</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="icon-box">
                <Star size={18} />
              </div>
              <div className="info">
                <span className="val">{points.toLocaleString('vi-VN')}</span>
                <span className="lbl">{t('profile:accumulated_points')}</span>
              </div>
            </div>
          </div>
        </S.HeroBannerCard>

        {/* Horizontal Navigation Tab Bar */}
        <S.TabsNavBar>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.path;
            return (
              <S.NavTabItem
                key={tab.id}
                $isActive={isActive}
                onClick={handleTabClick(tab.path)}
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
