import type { FC } from 'react';
import { Volume2, Ticket } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import * as S from './ScreenView.styles';

export const ScreenView: FC = () => {
  const { state } = useBooking();

  return (
    <>
      {/* Cinema & Session Header */}
      <S.ScreenHeader>
        <div className="header-left">
          <div className="cinema-title-row">
            <span className="badge">
              {state.session.format || 'IMAX LASER'}
            </span>
            <h2 className="cinema-name">{state.session.cinemaName}</h2>
          </div>
          <div className="sub-meta">
            <Ticket size={13} />
            <span>
              {state.session.room} • {state.session.time} - {state.session.date}{' '}
              • Bản phụ đề tiếng Việt
            </span>
          </div>
        </div>

        <div className="sound-badge">
          <Volume2 size={14} />
          <span>{state.session.soundSystem}</span>
        </div>
      </S.ScreenHeader>

      {/* Screen Arc Curve */}
      <S.ScreenGraphicWrapper>
        <div className="curve-screen" />
        <div className="screen-glow" />
        <span className="screen-label">[ MÀN HÌNH CHÍNH • SCREEN ]</span>
      </S.ScreenGraphicWrapper>
    </>
  );
};
