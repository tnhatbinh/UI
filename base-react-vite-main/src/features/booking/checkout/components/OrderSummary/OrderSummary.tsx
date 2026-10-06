import type { FC } from 'react';
import { MapPin, Calendar, Lock, ShieldCheck, Ticket } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import * as S from './OrderSummary.styles';

export interface OrderSummaryProps {
  isAgreed: boolean;
  isProcessing: boolean;
  onCompleteOrder: () => void;
}

export const OrderSummary: FC<OrderSummaryProps> = ({
  isAgreed,
  isProcessing,
  onCompleteOrder,
}) => {
  const { state, calculateSeatsTotal, calculateGrandTotal } = useBooking();

  const seatsTotal = calculateSeatsTotal();
  const grandTotal = calculateGrandTotal();
  const points = Math.round(grandTotal / 10000);
  const seatNames = state.selectedSeats.map((s: any) => s.id).join(', ');
  const snacksExtra = state.selectedSnacks.length === 0 ? 189000 : 0;
  const finalTotal = grandTotal + snacksExtra;

  return (
    <S.OrderSummaryContainer>
      <S.TicketConfirmationCard>
        <div className="card-top-title">
          <span className="title">PHIẾU XÁC NHẬN VÉ</span>
          <span className="badge-format">
            {state.session.format || 'IMAX Laser'}
          </span>
        </div>

        {/* Movie info */}
        <div className="movie-preview-row">
          <img
            src={state.movie.posterUrl}
            alt={state.movie.title}
            className="poster"
          />
          <div className="meta">
            <span className="age-runtime">
              {state.movie.ageRating} • {state.movie.duration}
            </span>
            <span className="name">{state.movie.title}</span>
            <span className="sub">{state.movie.originalTitle}</span>
            <span className="format">
              Phụ đề Tiếng Việt • {state.movie.format}
            </span>
          </div>
        </div>

        {/* Session Recap */}
        <S.SessionRecapBox>
          <div className="cinema-line">
            <MapPin size={13} color="#ffb955" />
            <strong>{state.session.cinemaName}</strong>
          </div>
          <div className="address-line">{state.session.cinemaAddress}</div>
          <div className="time-line">
            <Calendar size={13} color="#ff535a" />
            <span>
              {state.session.time} - {state.session.date}
            </span>
            <span className="room-badge">{state.session.room}</span>
          </div>
        </S.SessionRecapBox>

        {/* Items List Breakdown */}
        <div className="items-list-breakdown">
          <div className="item-line">
            <span className="item-name">
              ● Ghế VIP ({seatNames || 'H8, H9'})
            </span>
            <span className="item-price">
              {seatsTotal.toLocaleString('vi-VN')}đ
            </span>
          </div>

          {state.selectedSnacks.map((s: any) => (
            <div key={s.id} className="item-line">
              <span className="item-name">
                ● {s.quantity}x {s.name}
              </span>
              <span className="item-price">
                {(s.price * s.quantity).toLocaleString('vi-VN')}đ
              </span>
            </div>
          ))}

          {state.selectedSnacks.length === 0 && (
            <div className="item-line">
              <span className="item-name">● 1x Combo Dune Sandworm</span>
              <span className="item-price">189.000đ</span>
            </div>
          )}

          <div className="item-line free">
            <span className="item-name">Phí dịch vụ trực tuyến</span>
            <span className="item-price">0đ (VIP Elite Free)</span>
          </div>

          {state.appliedVoucher && (
            <div className="item-line discount">
              <span className="item-name">
                🏷 Ưu đãi {state.appliedVoucher.code}
              </span>
              <span className="item-price">
                -{state.appliedVoucher.discount.toLocaleString('vi-VN')}đ
              </span>
            </div>
          )}
        </div>

        {/* Grand Total */}
        <div className="total-block">
          <div className="label-group">
            <span className="title">TỔNG THANH TOÁN</span>
            <span className="tax-note">(Đã bao gồm thuế GTGT)</span>
            <span className="points-note">+{points} PhimPoints tích lũy</span>
          </div>
          <span className="amount">{finalTotal.toLocaleString('vi-VN')}đ</span>
        </div>

        {/* CTA Submit Button */}
        <button
          type="button"
          className="checkout-cta-btn"
          disabled={!isAgreed || isProcessing}
          onClick={onCompleteOrder}
        >
          <Lock size={16} />
          <span>
            {isProcessing
              ? 'Đang xử lý giao dịch...'
              : `Xác Nhận & Thanh Toán ${finalTotal.toLocaleString('vi-VN')}đ`}
          </span>
        </button>

        <div className="pci-dss-note">
          <ShieldCheck size={14} color="#ffb955" style={{ flexShrink: 0 }} />
          <span>
            Bảo Mật Giao Dịch Chuẩn PCI-DSS Level 1. Mọi thông tin thanh toán
            được mã hóa SSL 256-bit theo tiêu chuẩn ngân hàng quốc tế.
          </span>
        </div>
      </S.TicketConfirmationCard>

      {/* Digital Pass Assurance */}
      <S.DigitalPassAssurance>
        <div className="icon-wrap">
          <Ticket size={24} />
        </div>
        <div className="text">
          <span className="title">Đảm bảo giữ ghế 100%</span>
          <span className="sub">
            Vé vào phòng chiếu quét trực tiếp tại cổng soát vé không cần in vé
            giấy.
          </span>
        </div>
      </S.DigitalPassAssurance>
    </S.OrderSummaryContainer>
  );
};
