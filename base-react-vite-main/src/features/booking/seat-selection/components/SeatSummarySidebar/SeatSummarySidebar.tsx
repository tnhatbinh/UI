import type { FC } from 'react';
import { ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import * as S from './SeatSummarySidebar.styles';

interface SeatSummarySidebarProps {
  onContinue: () => void;
}

export const SeatSummarySidebar: FC<SeatSummarySidebarProps> = ({
  onContinue,
}) => {
  const { state, clearSeats, calculateSeatsTotal } = useBooking();
  const seatsTotal = calculateSeatsTotal();
  const phimPoints = Math.round(seatsTotal / 10000);

  return (
    <S.BookingSummarySidebar>
      <S.SummaryCard>
        {/* Movie Header */}
        <div className="movie-header">
          <img
            src={state.movie.posterUrl}
            alt={state.movie.title}
            className="poster"
          />
          <div className="meta">
            <span className="format-badge">{state.movie.format}</span>
            <span className="title">{state.movie.title}</span>
            <span className="sub">
              {state.movie.originalTitle} • {state.movie.duration}
            </span>
            <div className="rating-line">
              <span>★ {state.movie.rating} /10 (3.2k đánh giá)</span>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="session-info-table">
          <div className="row">
            <span className="label">Rạp:</span>
            <span className="val">{state.session.cinemaName}</span>
          </div>
          <div className="row">
            <span className="label">Phòng:</span>
            <span className="val">{state.session.room}</span>
          </div>
          <div className="row">
            <span className="label">Suất chiếu:</span>
            <span className="val">
              {state.session.time} - {state.session.date}
            </span>
          </div>
        </div>

        {/* Selected Seats List */}
        <div className="selected-seats-block">
          <div className="block-header">
            <span className="title">
              Ghế đã chọn ({state.selectedSeats.length})
            </span>
            {state.selectedSeats.length > 0 && (
              <button type="button" className="clear-btn" onClick={clearSeats}>
                Bỏ chọn tất cả
              </button>
            )}
          </div>

          <div className="seat-items-list">
            {state.selectedSeats.length === 0 ? (
              <span style={{ fontSize: '12px', color: '#7d6b6a' }}>
                Vui lòng chọn ít nhất 1 vị trí ghế trên sơ đồ.
              </span>
            ) : (
              state.selectedSeats.map((seat) => (
                <div key={seat.id} className="seat-item-row">
                  <div className="left">
                    <span className="seat-badge">{seat.id}</span>
                    <span className="name">
                      {seat.type === 'vip'
                        ? 'Ghế VIP'
                        : seat.type === 'sweetbox'
                          ? 'Sweetbox Đôi'
                          : 'Ghế Thường'}{' '}
                      (Đã xác nhận vị trí)
                    </span>
                  </div>
                  <span className="price">
                    {seat.price.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Price Calculation */}
        <div className="pricing-calculation">
          <div className="calc-row">
            <span className="label">Tạm tính vé ghế:</span>
            <span className="val">{seatsTotal.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="calc-row">
            <span className="label">Phí tiện ích & Bảo hiểm:</span>
            <span className="free-badge">Miễn phí (VIP Elite)</span>
          </div>
          <div className="grand-total-row">
            <div className="label-group">
              <span className="label">TỔNG CỘNG:</span>
              <span className="bonus">Tích luỹ +{phimPoints} PhimPoints</span>
            </div>
            <span className="total-amount">
              {seatsTotal.toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* Continue CTA Button */}
        <button
          type="button"
          className="continue-cta-btn"
          disabled={state.selectedSeats.length === 0}
          onClick={onContinue}
        >
          <span>Tiếp tục: Chọn bắp nước & Thanh toán</span>
          <ArrowRight size={16} />
        </button>

        <div className="assurance-note">
          <ShieldCheck size={14} color="#ffb955" />
          <span>Giữ chỗ tức thời & Hoàn vé trước 60 phút miễn phí</span>
        </div>
      </S.SummaryCard>

      {/* Upsell Card */}
      <S.UpsellCard>
        <div className="left">
          <div className="icon-box">
            <Gift size={18} />
          </div>
          <div className="text">
            <span className="title">Ưu đãi Combo Bắp Lắc Phô Mai</span>
            <span className="sub">Tiết kiệm 25% khi đặt kèm vé ngay</span>
          </div>
        </div>
        <span className="price-tag">89k</span>
      </S.UpsellCard>
    </S.BookingSummarySidebar>
  );
};
