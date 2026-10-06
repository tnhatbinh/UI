import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock } from 'lucide-react';
import { useBooking } from "../context/use-booking";
import type { SeatItem } from "../context/booking.types";;
import { useBookingTimer } from '../hooks/use-booking-timer';
import {
  SOLD_SEATS,
  SOLD_SWEETBOX,
  getSeatType,
  getSeatPrice,
  SWEETBOX_PRICE,
} from './data/seat-matrix.data';
import { ScreenView } from './components/ScreenView/ScreenView';
import { SeatLegend } from './components/SeatLegend/SeatLegend';
import { SeatGrid } from './components/SeatGrid/SeatGrid';
import { SeatFeatures } from './components/SeatFeatures/SeatFeatures';
import { SeatSummarySidebar } from './components/SeatSummarySidebar/SeatSummarySidebar';
import { MobileStickyBar } from './components/MobileStickyBar/MobileStickyBar';
import * as S from './SeatSelectionPage.styles';

export const SeatSelectionPage: FC = () => {
  const navigate = useNavigate();
  const { state, toggleSeat } = useBooking();

  // 10-minute live countdown timer
  const { formattedTime } = useBookingTimer(597); // 09:57

  const handleSeatClick = (row: string, number: number) => {
    const id = `${row}${number}`;
    if (SOLD_SEATS.has(id)) return;

    const type = getSeatType(row);
    const price = getSeatPrice(row);

    const seat: SeatItem = {
      id,
      row,
      number,
      type,
      price,
    };

    toggleSeat(seat);
  };

  const handleSweetboxClick = (id: string, number: number) => {
    if (SOLD_SWEETBOX.has(id)) return;

    const seat: SeatItem = {
      id,
      row: 'J',
      number,
      type: 'sweetbox',
      price: SWEETBOX_PRICE,
    };

    toggleSeat(seat);
  };

  const handleContinue = () => {
    if (state.selectedSeats.length === 0) return;
    navigate('/booking/snacks-services');
  };

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* Top Navigation & Status Bar */}
        <S.TopBar>
          <div className="breadcrumbs">
            <div
              className="back-btn"
              onClick={() => navigate('/movie-details')}
            >
              <ChevronLeft size={16} />
              <span>Lịch chiếu</span>
            </div>
            <span className="sep">/</span>
            <span>{state.movie.title}</span>
            <span className="sep">/</span>
            <span className="current">Chọn Ghế</span>
          </div>

          <div className="status-badges">
            <div className="timer-badge">
              <Clock size={14} />
              <span>THỜI GIAN GIỮ VÉ: {formattedTime}</span>
            </div>
            <div className="live-badge">
              <div className="dot" />
              <span>Hệ thống trực tiếp</span>
            </div>
          </div>
        </S.TopBar>

        {/* Main Content Grid (Left: Seat Map, Right: Summary) */}
        <S.MainContentGrid>
          {/* Left Column: Seat Map Area */}
          <S.SeatSelectionArea>
            {/* Cinema & Session Header and Curved Screen */}
            <ScreenView />

            {/* Interactive Seat Map Grid */}
            <SeatGrid
              onSeatClick={handleSeatClick}
              onSweetboxClick={handleSweetboxClick}
            />

            {/* Seat Legends */}
            <SeatLegend />

            {/* Feature Guarantees */}
            <SeatFeatures />
          </S.SeatSelectionArea>

          {/* Right Column: Booking Summary Sidebar */}
          <SeatSummarySidebar onContinue={handleContinue} />
        </S.MainContentGrid>
      </S.InnerWrapper>

      {/* Mobile Sticky Checkout Bar */}
      <MobileStickyBar onContinue={handleContinue} />
    </S.PageContainer>
  );
};

export default SeatSelectionPage;
