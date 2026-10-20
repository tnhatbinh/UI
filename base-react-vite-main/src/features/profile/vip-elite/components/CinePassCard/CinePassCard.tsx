import { useTranslation } from 'react-i18next';
import { Film, Smartphone, Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProfileApi } from '@features/auth/api/auth.api';
import * as S from './CinePassCard.styles';

export function CinePassCard() {
  const { t } = useTranslation();
  const { data: profile } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getProfileApi,
    staleTime: 60000,
  });

  const holderName = profile?.fullName
    ? profile.fullName.toUpperCase()
    : t('profile:member_phimbook').toUpperCase();
  const points = profile?.totalPoints ?? 100;
  const tier = profile?.membershipTier
    ? profile.membershipTier.replace('_', ' ')
    : 'VIP ELITE';
  const targetPoints = Math.max(500, Math.ceil(points / 500) * 500);
  const progressPercent = Math.min(100, Math.round((points / targetPoints) * 100));

  return (
    <S.CinePassCard>
      <div className="card-top">
        <div className="brand">
          <div className="logo-box">
            <Film size={18} />
          </div>
          <div className="brand-text">
            <span className="name">CINEPASS</span>
            <span className="edition">BLACK EDITION</span>
          </div>
        </div>

        <span className="vip-badge">
          <Star size={10} fill="#ffb955" />
          <span>{tier}</span>
        </span>
      </div>

      <div className="chip-nfc-row">
        <div className="chip" />
        <Smartphone size={18} className="nfc-icon" />
      </div>

      <div className="card-number">ELITE • 9928 • 8831</div>

      <div className="holder-points-row">
        <div className="holder">
          <span className="label">{t('profile:card_holder_label')}</span>
          <span className="name">{holderName}</span>
        </div>
        <div className="points">
          <span className="label">{t('profile:accumulated_points_cinepass')}</span>
          <span className="pts">{t('profile:points_format', { points: points.toLocaleString('vi-VN') })}</span>
        </div>
      </div>

      <div className="progress-wrap">
        <div className="labels">
          <span>{t('profile:vip_progress_label')}</span>
          <span className="target">
            {points.toLocaleString('vi-VN')} / {targetPoints.toLocaleString('vi-VN')} pts ({progressPercent}%)
          </span>
        </div>
        <div className="bar-bg">
          <div className="fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>
    </S.CinePassCard>
  );
}
