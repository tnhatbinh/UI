import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Lock } from 'lucide-react';
import { useBooking } from '../context/use-booking';
import { useBookingTimer } from '../hooks/use-booking-timer';
import { RecipientForm } from './components/RecipientForm/RecipientForm';
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods';
import { OrderSummary } from './components/OrderSummary/OrderSummary';
import * as S from './CheckoutPage.styles';

export const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { state, applyVoucher, calculateGrandTotal } = useBooking();
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
        seats: seatNames || 'H8, H9',
        seatsType: 'VIP Prime Center',
        combo: '1x Combo Độc Quyền: Dune Sandworm Bucket & 02 Pepsi Zero 32oz',
        totalAmount:
          grandTotal + (state.selectedSnacks.length === 0 ? 189000 : 0),
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

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* Top Stepper & Countdown Bar */}
        <S.TopBar>
          <S.StepperRow>
            <div
              className="step-item completed"
              onClick={() => navigate('/movie-details')}
            >
              <div className="step-num">✓</div>
              <span>1. Suất Chiếu</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div
              className="step-item completed"
              onClick={() => navigate('/booking/seat-selection')}
            >
              <div className="step-num">✓</div>
              <span>2. Chọn Ghế</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div
              className="step-item completed"
              onClick={() => navigate('/booking/snacks-services')}
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
