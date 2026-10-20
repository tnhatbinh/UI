import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './MobileStickySnackBottomBar.styles';

interface MobileStickySnackBottomBarProps {
  onContinue: () => void;
}

export const MobileStickySnackBottomBar: FC<MobileStickySnackBottomBarProps> = ({
  onContinue,
}) => {
  const { t } = useTranslation();
  const { state, calculateGrandTotal } = useBooking();
  const grandTotal = calculateGrandTotal();
  const totalSnackCount = state.selectedSnacks.reduce(
    (acc, s) => acc + s.quantity,
    0,
  );

  return (
    <S.MobileStickyBarWrapper>
      <div className="bar-content">
        <div className="summary-info">
          <span className="sub-label">
            {totalSnackCount > 0 ? (
              t('booking:mobile_snacks_summary', {
                snacks: totalSnackCount,
                tickets: state.selectedSeats.length,
              })
            ) : (
              t('booking:mobile_tickets_only', {
                tickets: state.selectedSeats.length,
              })
            )}
          </span>
          <span className="total-price">
            {grandTotal.toLocaleString('vi-VN')}
            <span className="currency">đ</span>
          </span>
        </div>

        <button type="button" className="action-btn" onClick={onContinue}>
          <span>{t('booking:mobile_continue')}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </S.MobileStickyBarWrapper>
  );
};

export default MobileStickySnackBottomBar;

