import { useTranslation } from 'react-i18next';
import { Armchair } from 'lucide-react';
import * as S from './SeatVisualizerCard.styles';

export function SeatVisualizerCard() {
  const { t } = useTranslation();

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Armchair size={16} color="#ff535a" />
            <span>{t('profile:seat_visualizer_title')}</span>
          </h3>
        </div>
        <span className="badge">{t('profile:seat_center_badge')}</span>
      </div>

      <S.MiniTheaterCard>
        <div className="screen-banner">
          <div className="arc" />
          <span>{t('profile:main_screen_label')}</span>
        </div>

        <div className="seat-grid-mini">
          <div className="row">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="row">
            <span className="dot" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot" />
          </div>
          <div className="row">
            <span className="dot" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot" />
          </div>
        </div>

        <span className="caption">
          {t('profile:seat_visualizer_caption')}
        </span>
      </S.MiniTheaterCard>
    </S.Card>
  );
}
