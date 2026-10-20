import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { BiCameraMovie } from 'react-icons/bi';
import {
  getDayTagLabel,
  type CinemaSchedule,
  type ScreenFormatGroup,
  type ShowtimeSlot,
  type DayOption,
} from '../../data/mock-movie-details';
import * as S from './StickyBookingBar.styles';

interface StickyBookingBarProps {
  selectedSlot: {
    cinema: CinemaSchedule;
    format: ScreenFormatGroup;
    slot: ShowtimeSlot;
  } | null;
  selectedDate: DayOption;
  onProceed: () => void;
}

export const StickyBookingBar: FC<StickyBookingBarProps> = ({
  selectedSlot,
  selectedDate,
  onProceed,
}) => {
  const { t } = useTranslation();

  return (
    <S.StickyBottomBar $visible={Boolean(selectedSlot)}>
      {selectedSlot && (
        <div className="bar-inner">
          <div className="bar-left">
            <div className="cinema-icon-wrap">
              <BiCameraMovie size={24} />
            </div>
            <div className="info-group">
              <div className="cinema-name-row">
                <span className="cinema-name">{selectedSlot.cinema.name}</span>
                <span className="badge">{selectedSlot.cinema.badge}</span>
              </div>
              <span className="session-details">
                {getDayTagLabel(t, selectedDate.dayLabel)}, {selectedDate.dateStr} • {t('movie:slot_prefix')}{' '}
                <strong>{selectedSlot.slot.time}</strong> •{' '}
                {selectedSlot.format.roomDetails}
              </span>
            </div>
          </div>

          <div className="bar-right">
            <div className="price-group">
              <span className="label">{t('movie:estimated_price')}</span>
              <span className="price">
                {selectedSlot.slot.price.toLocaleString('vi-VN')}đ
              </span>
            </div>

            <button type="button" className="cta-btn" onClick={onProceed}>
              <span className="cta-full">{t('movie:continue_to_seats')}</span>
              <span className="cta-short">{t('movie:select_seats')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </S.StickyBottomBar>
  );
};
