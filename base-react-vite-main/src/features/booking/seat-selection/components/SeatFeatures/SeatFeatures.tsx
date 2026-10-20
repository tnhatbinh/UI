import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Maximize2, Armchair, Sparkles, UserCheck } from 'lucide-react';
import * as S from './SeatFeatures.styles';

export const SeatFeatures: FC = () => {
  const { t } = useTranslation();

  return (
    <S.FeatureBadgesRow>
      <div className="feat-card">
        <Maximize2 className="icon" />
        <div className="text">
          <span className="title">{t('booking:feature_ratio_title')}</span>
          <span className="desc">{t('booking:feature_ratio_desc')}</span>
        </div>
      </div>

      <div className="feat-card">
        <Armchair className="icon" />
        <div className="text">
          <span className="title">{t('booking:feature_chair_title')}</span>
          <span className="desc">{t('booking:feature_chair_desc')}</span>
        </div>
      </div>

      <div className="feat-card">
        <Sparkles className="icon" />
        <div className="text">
          <span className="title">{t('booking:feature_hygiene_title')}</span>
          <span className="desc">{t('booking:feature_hygiene_desc')}</span>
        </div>
      </div>

      <div className="feat-card">
        <UserCheck className="icon" />
        <div className="text">
          <span className="title">{t('booking:feature_service_title')}</span>
          <span className="desc">{t('booking:feature_service_desc')}</span>
        </div>
      </div>
    </S.FeatureBadgesRow>
  );
};
