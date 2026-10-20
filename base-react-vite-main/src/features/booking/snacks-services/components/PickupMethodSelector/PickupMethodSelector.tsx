import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Popcorn } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './PickupMethodSelector.styles';

export const PickupMethodSelector: FC = () => {
  const { t } = useTranslation();
  const { state, setPickupMethod } = useBooking();
  const seatNames = state.selectedSeats.map((s) => s.id).join(', ');

  const handleSelectPickupAtSeat = () => {
    setPickupMethod('at-seat');
  };

  const handleSelectPickupFastTrack = () => {
    setPickupMethod('fast-track');
  };

  return (
    <S.PickupMethodSection>
      <div className="section-title">
        <Popcorn size={16} />
        <span>{t('booking:pickup_section_title')}</span>
      </div>

      <div className="options-grid">
        <S.PickupOptionCard
          $isSelected={state.pickupMethod === 'at-seat'}
          onClick={handleSelectPickupAtSeat}
        >
          <div className="radio-circle">
            <div className="dot" />
          </div>
          <div className="text-group">
            <div className="title-row">
              <span className="title">{t('booking:pickup_at_seat_title')}</span>
              <span className="free-badge">{t('booking:pickup_free')}</span>
            </div>
            <span className="desc">
              {t('booking:pickup_at_seat_desc', {
                seats: seatNames || t('common:selected'),
              })}
            </span>
          </div>
        </S.PickupOptionCard>

        <S.PickupOptionCard
          $isSelected={state.pickupMethod === 'fast-track'}
          onClick={handleSelectPickupFastTrack}
        >
          <div className="radio-circle">
            <div className="dot" />
          </div>
          <div className="text-group">
            <div className="title-row">
              <span className="title">{t('booking:pickup_fast_track_title')}</span>
            </div>
            <span className="desc">
              {t('booking:pickup_fast_track_desc')}
            </span>
          </div>
        </S.PickupOptionCard>
      </div>
    </S.PickupMethodSection>
  );
};
