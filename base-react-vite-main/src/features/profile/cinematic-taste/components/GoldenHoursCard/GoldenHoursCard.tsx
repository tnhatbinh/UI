import { useTranslation } from 'react-i18next';
import { Moon } from 'lucide-react';
import * as S from './GoldenHoursCard.styles';

export function GoldenHoursCard() {
  const { t } = useTranslation();

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Moon size={16} color="#ff535a" />
            <span>{t('profile:golden_hours_title')}</span>
          </h3>
        </div>
      </div>

      <S.GoldenHoursGrid>
        <div className="hour-card">
          <Moon size={18} className="icon" />
          <div className="text">
            <span className="title">{t('profile:hour_friday_night')}</span>
            <span className="sub">{t('profile:hour_friday_night_sub')}</span>
          </div>
        </div>

        <div className="hour-card">
          <Moon size={18} className="icon" />
          <div className="text">
            <span className="title">{t('profile:hour_weekend_night')}</span>
            <span className="sub">{t('profile:hour_weekend_night_sub')}</span>
          </div>
        </div>
      </S.GoldenHoursGrid>
    </S.Card>
  );
}
