import { Armchair } from 'lucide-react';
import * as S from './SeatVisualizerCard.styles';

export function SeatVisualizerCard() {
  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Armchair size={16} color="#ff535a" />
            <span>VỊ TRÍ GHẾ RẠP TỐI ƯU</span>
          </h3>
        </div>
        <span className="badge">Dãy H, J (Trung tâm)</span>
      </div>

      <S.MiniTheaterCard>
        <div className="screen-banner">
          <div className="arc" />
          <span>MÀN CHIẾU CHÍNH</span>
        </div>

        <div className="seat-grid-mini">
          <div className="row">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="row">
            <span className="dot" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot" />
          </div>
          <div className="row">
            <span className="dot" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot vip" />
            <span className="dot" />
          </div>
        </div>

        <span className="caption">
          Tự động giữ vị trí ghế VIP trung tâm khi đặt vé nhanh.
        </span>
      </S.MiniTheaterCard>
    </S.Card>
  );
}
