import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import * as S from './SeatLegend.styles';

interface SeatLegendProps {
  standardPrice?: number;
  vipPrice?: number;
  sweetboxPrice?: number;
}

export const SeatLegend: FC<SeatLegendProps> = ({
  standardPrice = 135000,
  vipPrice = 160000,
  sweetboxPrice = 270000,
}) => {
  const { t } = useTranslation();

  return (
    <S.SeatLegendBar>
      <div className="legend-item">
        <div className="sample-box standard" />
        <span>{t('booking:seat_standard')}</span>
        <span className="price-tag">{standardPrice.toLocaleString('vi-VN')}đ</span>
      </div>

      <div className="legend-item">
        <div className="sample-box vip" />
        <span>{t('booking:seat_vip')}</span>
        <span className="price-tag">{vipPrice.toLocaleString('vi-VN')}đ</span>
      </div>

      <div className="legend-item">
        <div className="sample-box sweetbox">
          <Heart size={8} />
        </div>
        <span>{t('booking:seat_sweetbox')}</span>
        <span className="price-tag">{sweetboxPrice.toLocaleString('vi-VN')}đ</span>
      </div>

      <div className="legend-item">
        <div className="sample-box selected" />
        <span>{t('booking:seat_selecting')}</span>
      </div>

      <div className="legend-item">
        <div className="sample-box sold">✕</div>
        <span>{t('booking:seat_sold')}</span>
      </div>
    </S.SeatLegendBar>
  );
};
