import type { FC } from 'react';
import { Popcorn } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './PickupMethodSelector.styles';

export const PickupMethodSelector: FC = () => {
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
        <span>Phương Thức Nhận Đồ Ăn & Dịch Vụ Đi Kèm</span>
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
              <span className="title">Phục vụ tận chỗ ngồi (Ghế VIP/IMAX)</span>
              <span className="free-badge">MIỄN PHÍ</span>
            </div>
            <span className="desc">
              Nhân viên phục vụ trước giờ chiếu 10 phút ngay tại hàng ghế{' '}
              {seatNames || 'đã chọn'}.
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
              <span className="title">Nhận tại Quầy Fast-Track Quầy 03</span>
            </div>
            <span className="desc">
              Quét mã QR tại line riêng cho thành viên VIP, không cần xếp hàng
              chờ đợi.
            </span>
          </div>
        </S.PickupOptionCard>
      </div>
    </S.PickupMethodSection>
  );
};
