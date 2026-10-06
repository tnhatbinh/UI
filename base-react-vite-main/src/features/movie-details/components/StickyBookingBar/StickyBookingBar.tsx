import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { BiCameraMovie } from 'react-icons/bi';
import type {
  CinemaSchedule,
  ScreenFormatGroup,
  ShowtimeSlot,
  DayOption,
} from '../../data/mock-movie-details';
import * as S from './StickyBookingBar.styles';

interface StickyBookingBarProps {
  selectedSlot: {
    cinema: CinemaSchedule;
    format: ScreenFormatGroup;
    slot: ShowtimeSlot;
  } | null;
  selectedDate: DayOption;
  onProceed: () => void;
}

export const StickyBookingBar: FC<StickyBookingBarProps> = ({
  selectedSlot,
  selectedDate,
  onProceed,
}) => {
  return (
    <S.StickyBottomBar $visible={Boolean(selectedSlot)}>
      {selectedSlot && (
        <div className="bar-inner">
          <div className="bar-left">
            <div className="cinema-icon-wrap">
              <BiCameraMovie size={24} />
            </div>
            <div className="info-group">
              <div className="cinema-name-row">
                <span className="cinema-name">{selectedSlot.cinema.name}</span>
                <span className="badge">{selectedSlot.cinema.badge}</span>
              </div>
              <span className="session-details">
                {selectedDate.dayLabel}, {selectedDate.dateStr} • Suất{' '}
                <strong>{selectedSlot.slot.time}</strong> •{' '}
                {selectedSlot.format.roomDetails}
              </span>
            </div>
          </div>

          <div className="bar-right">
            <div className="price-group">
              <span className="label">Tạm tính vé xem phim</span>
              <span className="price">
                {selectedSlot.slot.price.toLocaleString('vi-VN')}đ
              </span>
            </div>

            <button type="button" className="cta-btn" onClick={onProceed}>
              <span className="cta-full">Tiếp tục chọn ghế</span>
              <span className="cta-short">Chọn ghế</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </S.StickyBottomBar>
  );
};
