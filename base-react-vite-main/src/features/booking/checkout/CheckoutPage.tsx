import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Lock } from 'lucide-react';
import { message } from 'antd';
import { useBooking } from '../context/useBooking';
import { useBookingTimer } from '../hooks/useBookingTimer';
import { RecipientForm } from './components/RecipientForm/RecipientForm';
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods';
import { OrderSummary } from './components/OrderSummary/OrderSummary';
import * as S from './CheckoutPage.styles';

export const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { state, applyVoucher, calculateGrandTotal } = useBooking();

  // Guard: Redirect if no seats are selected
  useEffect(() => {
    if (state.selectedSeats.length === 0) {
      navigate('/booking/seat-selection', { replace: true });
    }
  }, [state.selectedSeats.length, navigate]);

  const { formattedTime } = useBookingTimer(433); // 07:13

  const [voucherCode, setVoucherCode] = useState('');
  const [isAgreed, setIsAgreed] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const grandTotal = calculateGrandTotal();
  const seatNames = state.selectedSeats.map((s) => s.id).join(', ');

  const handleApplyVoucher = (codeToApply?: string) => {
    const code = (codeToApply || voucherCode).trim().toUpperCase();
    if (code === 'GIAM30K') {
      applyVoucher({
        code: 'GIAM30K',
        discount: 30000,
        title: 'Giảm 30K combo phim bom tấn',
      });
    } else if (code === 'TECHCOMVIP') {
      applyVoucher({
        code: 'TECHCOMVIP',
        discount: Math.round(grandTotal * 0.15) || 45000,
        title: 'Giảm 15% khi thanh toán thẻ Techcombank',
      });
    }
  };

  const handleCompleteOrder = () => {
    if (!isAgreed) return;
    if (!state.recipient.name.trim() || !state.recipient.phone.trim()) {
      message.warning('Vui lòng điền đầy đủ Họ tên và Số điện thoại nhận vé!');
      return;
    }
    setIsProcessing(true);

    setTimeout(() => {
      // Save newly minted ticket into localStorage so /ve-cua-toi displays it immediately
      const newTicket = {
        orderId: '#VN - 8849204',
        status: 'ĐÃ THANH TOÁN THÀNH CÔNG • SẴN SÀNG VÀO RẠP',
        movieTitle: state.movie.title,
        movieOriginalTitle: state.movie.originalTitle,
        posterUrl: state.movie.posterUrl,
        cinemaName: state.session.cinemaName,
        cinemaRoom: state.session.room,
        showtime: state.session.time,
        date: state.session.date,
        format: state.session.format,
        seats: seatNames || 'Ghế tiêu chuẩn',
        seatsType: state.selectedSeats.some((s) => s.type === 'vip')
          ? 'VIP Prime Center'
          : state.selectedSeats.some((s) => s.type === 'sweetbox')
            ? 'Sweetbox Couple'
            : 'Tiêu Chuẩn (Standard)',
        combo:
          state.selectedSnacks.length > 0
            ? state.selectedSnacks.map((s) => `${s.quantity}x ${s.name}`).join(', ')
            : 'Không kèm bắp nước',
        totalAmount: grandTotal,
        qrCodeValue: 'PBK - 8849204',
      };

      try {
        localStorage.setItem(
          'phimbook_active_ticket',
          JSON.stringify(newTicket),
        );
      } catch {
        // ignore
      }

      setIsProcessing(false);
      navigate('/ve-cua-toi');
    }, 1200);
  };

  const handleNavigateToMovieDetails = () => {
    navigate('/movie-details');
  };

  const handleNavigateToSeatSelection = () => {
    navigate('/booking/seat-selection');
  };

  const handleNavigateToSnacks = () => {
    navigate('/booking/snacks-services');
  };

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* Top Stepper & Countdown Bar */}
        <S.TopBar>
          <S.StepperRow>
            <div
              className="step-item completed"
              onClick={handleNavigateToMovieDetails}
            >
              <div className="step-num">✓</div>
              <span>1. Suất Chiếu</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div
              className="step-item completed"
              onClick={handleNavigateToSeatSelection}
            >
              <div className="step-num">✓</div>
              <span>2. Chọn Ghế</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div
              className="step-item completed"
              onClick={handleNavigateToSnacks}
            >
              <div className="step-num">✓</div>
              <span>3. Bắp Nước</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div className="step-item active">
              <div className="step-num">
                <Lock size={11} />
              </div>
              <span>4. Thanh Toán &amp; Đặt Vé</span>
            </div>
          </S.StepperRow>

          <S.TimerBadge>
            <Clock size={14} />
            <span>THỜI GIAN HOÀN TẤT: {formattedTime}</span>
          </S.TimerBadge>
        </S.TopBar>

        {/* Main 2-Column Grid */}
        <S.MainGrid>
          {/* Left Column: Form Details & Payment Methods */}
          <S.LeftContent>
            <RecipientForm />
            <PaymentMethods
              voucherCode={voucherCode}
              onVoucherCodeChange={setVoucherCode}
              onApplyVoucher={handleApplyVoucher}
              isAgreed={isAgreed}
              onToggleAgreed={setIsAgreed}
            />
          </S.LeftContent>

          {/* Right Column: Phiếu Xác Nhận Vé */}
          <OrderSummary
            isAgreed={isAgreed}
            isProcessing={isProcessing}
            onCompleteOrder={handleCompleteOrder}
          />
        </S.MainGrid>
      </S.InnerWrapper>
    </S.PageContainer>
  );
};

export default CheckoutPage;
