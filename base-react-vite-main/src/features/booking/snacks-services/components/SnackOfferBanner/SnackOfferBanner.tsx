import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import * as S from './SnackOfferBanner.styles';

export const SnackOfferBanner: FC = () => {
  const { t } = useTranslation();

  return (
    <S.OfferBanner>
      <div className="banner-left">
        <div className="icon-box">
          <Sparkles size={20} />
        </div>
        <div className="banner-text">
          <span className="title">
            {t('booking:snack_offer_title')}
          </span>
          <span className="sub">
            {t('booking:snack_offer_desc')}
          </span>
        </div>
      </div>
      <div className="badge-hot">{t('booking:snack_offer_badge')}</div>
    </S.OfferBanner>
  );
};
