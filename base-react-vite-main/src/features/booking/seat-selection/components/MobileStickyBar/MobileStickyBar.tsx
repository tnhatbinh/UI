import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import * as S from './MobileStickyBar.styles';

interface MobileStickyBarProps {
  onContinue: () => void;
}

export const MobileStickyBar: FC<MobileStickyBarProps> = ({ onContinue }) => {
  const { state, calculateSeatsTotal } = useBooking();
  const seatsTotal = calculateSeatsTotal();

  return (
    <S.MobileStickySeatBar $visible={state.selectedSeats.length > 0}>
      <div className="bar-content">
        <div className="seat-info">
          <span className="seats-label">
            Ghế:{' '}
            <strong>{state.selectedSeats.map((s) => s.id).join(', ')}</strong>
          </span>
          <span className="total-price">
            {seatsTotal.toLocaleString('vi-VN')}đ
          </span>
        </div>

        <button type="button" className="action-btn" onClick={onContinue}>
          <span>Tiếp tục</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </S.MobileStickySeatBar>
  );
};
