import { useTranslation } from 'react-i18next';
import { Award, ChevronRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProfileApi } from '@features/auth/api/auth.api';
import * as S from './UserProfileCard.styles';

export function UserProfileCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: profile } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getProfileApi,
    staleTime: 60000,
  });

  const handleNavigateTaste = () => {
    navigate('/profile/cinematic-taste');
  };

  const displayName = profile?.fullName || t('profile:default_username');
  const tier = profile?.membershipTier || 'VIP_ELITE';
  const moviesCount = profile?.moviesWatchedCount ?? 0;
  const theatersCount = profile?.theatersVisitedCount ?? 0;
  const points = profile?.totalPoints ?? 100;

  return (
    <S.UserProfileCard>
      <div className="user-header">
        <div className="avatar-wrap">
          <img
            src={
              profile?.avatarUrl ||
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'
            }
            alt={displayName}
          />
          <div className="star-badge">
            <Star size={12} fill="#ffb955" />
          </div>
        </div>

        <div className="info">
          <div className="badge-row">
            <span className="vip-pill">{tier.replace('_', ' ')} MEMBER</span>
            <span className="active-dot">{t('profile:active_member')}</span>
          </div>
          <h2 className="name">{displayName}</h2>
          <div className="meta-line">
            {profile?.email || 'testuser@phimbook.vn'} •{' '}
            {profile?.phone || '0988 123 456'}
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-col">
          <span className="label">{t('profile:movies_watched_label')}</span>
          <span className="value">
            {t('profile:works_count', { count: moviesCount })}
          </span>
          <span className="sub">{t('profile:regular_member')}</span>
        </div>

        <div className="stat-col">
          <span className="label">{t('profile:theaters_visited_label')}</span>
          <span className="value">
            {t('profile:theaters_count', { count: theatersCount })}
          </span>
          <span className="sub">{t('profile:phimbook_theaters_sub')}</span>
        </div>

        <div className="stat-col">
          <span className="label">{t('profile:accumulated_points_label')}</span>
          <span className="value">
            {points.toLocaleString('vi-VN')} <span className="unit">pts</span>
          </span>
          <span className="sub">
            {t('profile:reward_estimate', { amount: `${(points * 1000).toLocaleString('vi-VN')}đ` })}
          </span>
        </div>
      </div>

      <div className="privilege-strip">
        <div className="desc">
          <Award size={16} className="icon" />
          <span>
            {t('profile:current_tier_privilege')}
          </span>
        </div>
        <div className="detail-link" onClick={handleNavigateTaste}>
          <span>{t('profile:tier_details_link')}</span>
          <ChevronRight size={13} />
        </div>
      </div>
    </S.UserProfileCard>
  );
}
