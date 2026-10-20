import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './MobileStickyBar.styles';

interface MobileStickyBarProps {
  onContinue: () => void;
  isLocking?: boolean;
}

export const MobileStickyBar: FC<MobileStickyBarProps> = ({
  onContinue,
  isLocking = false,
}) => {
  const { t } = useTranslation();
  const { state, calculateSeatsTotal } = useBooking();
  const seatsTotal = calculateSeatsTotal();

  return (
    <S.MobileStickySeatBar $visible={state.selectedSeats.length > 0}>
      <div className="bar-content">
        <div className="seat-info">
          <span className="seats-label">
            {t('booking:mobile_seats_label')}{' '}
            <strong>{state.selectedSeats.map((s) => s.id).join(', ')}</strong>
          </span>
          <span className="total-price">
            {seatsTotal.toLocaleString('vi-VN')}đ
          </span>
        </div>

        <button
          type="button"
          className="action-btn"
          disabled={isLocking}
          onClick={onContinue}
        >
          <span>
            {isLocking
              ? t('booking:mobile_locking')
              : t('booking:mobile_continue')}
          </span>
          <ArrowRight size={15} />
        </button>
      </div>
    </S.MobileStickySeatBar>
  );
};
