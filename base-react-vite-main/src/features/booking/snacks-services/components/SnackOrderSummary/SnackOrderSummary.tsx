import type { FC } from 'react';
import { useState } from 'react';
import { Gift, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import * as S from './SnackOrderSummary.styles';

interface SnackOrderSummaryProps {
  onContinue: () => void;
  onSkip: () => void;
}

export const SnackOrderSummary: FC<SnackOrderSummaryProps> = ({
  onContinue,
  onSkip,
}) => {
  const {
    state,
    applyVoucher,
    removeVoucher,
    calculateSeatsTotal,
    calculateSnacksTotal,
    calculateGrandTotal,
  } = useBooking();

  const [voucherInput, setVoucherInput] = useState('VIPMEMBER');

  const handleApplyVoucher = () => {
    if (voucherInput.trim().toUpperCase() === 'VIPMEMBER') {
      applyVoucher({
        code: 'VIPMEMBER',
        discount: 20000,
        title: 'Ưu đãi thành viên VIP PhimBook',
      });
    }
  };

  const seatsTotal = calculateSeatsTotal();
  const snacksTotal = calculateSnacksTotal();
  const grandTotal = calculateGrandTotal();
  const points = Math.round(grandTotal / 10000);
  const seatNames = state.selectedSeats.map((s) => s.id).join(', ');

  return (
    <S.OrderSummarySidebar>
      <S.SummaryCard>
        {/* Movie & Cinema Header */}
        <div className="movie-header">
          <img
            src={state.movie.posterUrl}
            alt={state.movie.title}
            className="poster"
          />
          <div className="meta">
            <span className="title">{state.movie.title}</span>
            <span className="sub">{state.session.cinemaName}</span>
            <span className="sub">
              {state.session.room} • {state.movie.format}
            </span>
            <span className="sub">
              ⏱ {state.session.time} - {state.session.date}
            </span>
          </div>
        </div>

        {/* Tickets Recap */}
        <div className="ticket-recap">
          <div className="left">
            <span className="main">
              {state.selectedSeats.length}x Ghế VIP Hạng Sang
            </span>
            <span className="seats">
              Số ghế: {seatNames || 'Chưa chọn'} (Hàng giữa IMAX)
            </span>
          </div>
          <span className="amount">{seatsTotal.toLocaleString('vi-VN')}đ</span>
        </div>

        {/* Snacks Recap */}
        <div className="snacks-recap">
          <div className="header-row">
            <span className="label">
              BẮP NƯỚC ĐÃ CHỌN ({state.selectedSnacks.length} MÓN)
            </span>
          </div>

          <div className="snack-items">
            {state.selectedSnacks.length === 0 ? (
              <span style={{ fontSize: '11.5px', color: '#7d6b6a' }}>
                Chưa chọn combo hoặc bắp nước nào.
              </span>
            ) : (
              state.selectedSnacks.map((s) => (
                <div key={s.id} className="snack-line">
                  <span className="name">
                    {s.quantity}x {s.name}
                  </span>
                  <span className="price">
                    {(s.price * s.quantity).toLocaleString('vi-VN')}đ
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Voucher Input & Applied */}
        <div className="voucher-input-block">
          <span className="label">ƯU ĐÃI THÀNH VIÊN & VOUCHER</span>
          <div className="input-row">
            <input
              type="text"
              placeholder="Nhập mã ưu đãi..."
              value={voucherInput}
              onChange={(e) => setVoucherInput(e.target.value)}
            />
            <button
              type="button"
              className="apply-btn"
              onClick={handleApplyVoucher}
            >
              Áp dụng
            </button>
          </div>

          {state.appliedVoucher && (
            <div className="applied-tag">
              <span>
                ✓ Đã áp dụng {state.appliedVoucher.code} (-
                {(state.appliedVoucher.discount / 1000).toFixed(0)}k)
              </span>
              <button
                type="button"
                className="remove-btn"
                onClick={removeVoucher}
                title="Bỏ voucher"
              >
                <X size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Pricing Breakdown */}
        <div className="price-breakdown">
          <div className="row">
            <span className="label">Tạm tính vé xem phim:</span>
            <span className="val">{seatsTotal.toLocaleString('vi-VN')}đ</span>
          </div>

          <div className="row">
            <span className="label">Tạm tính bắp nước & combo:</span>
            <span className="val">{snacksTotal.toLocaleString('vi-VN')}đ</span>
          </div>

          {state.appliedVoucher && (
            <div className="row discount">
              <span className="label">Giảm giá thành viên VIP:</span>
              <span className="val">
                -{state.appliedVoucher.discount.toLocaleString('vi-VN')}đ
              </span>
            </div>
          )}

          <div className="grand-total">
            <div className="label-group">
              <span className="main">TỔNG CỘNG:</span>
              <span className="sub">(Đã bao gồm VAT & Phục vụ)</span>
              <span className="bonus">Tích luỹ +{points} PhimPoints</span>
            </div>
            <span className="amount">
              {grandTotal.toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* CTA Continue */}
        <button type="button" className="continue-cta" onClick={onContinue}>
          <span>Tiếp tục: Thanh toán ngay</span>
          <ArrowRight size={16} />
        </button>

        <button type="button" className="skip-link" onClick={onSkip}>
          Bỏ qua bắp nước &amp; Thanh toán vé &gt;
        </button>

        <div className="assurance-line">
          <ShieldCheck
            size={13}
            color="#ffb955"
            style={{ display: 'inline', verticalAlign: 'middle' }}
          />{' '}
          Giữ chỗ tức thời • Đổi trả bắp nước trước 30 phút
        </div>
      </S.SummaryCard>

      {/* VIP Lounge Perk Banner */}
      <S.VipPrivilegeBanner>
        <div className="icon-wrap">
          <Gift size={20} />
        </div>
        <div className="text">
          <span className="title">Ưu quyền phòng chiếu IMAX Lounge</span>
          <span className="sub">
            Khăn lạnh và nước khoáng tinh khiết phục vụ miễn phí trước suất
            chiếu.
          </span>
        </div>
      </S.VipPrivilegeBanner>
    </S.OrderSummarySidebar>
  );
};
