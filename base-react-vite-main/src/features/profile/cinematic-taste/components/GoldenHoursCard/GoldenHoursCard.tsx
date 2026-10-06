import { Moon } from 'lucide-react';
import * as S from './GoldenHoursCard.styles';

export function GoldenHoursCard() {
  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Moon size={16} color="#ff535a" />
            <span>KHUNG GIỜ VÀNG ƯA CHUỘNG</span>
          </h3>
        </div>
      </div>

      <S.GoldenHoursGrid>
        <div className="hour-card">
          <Moon size={18} className="icon" />
          <div className="text">
            <span className="title">Tối Thứ Sáu</span>
            <span className="sub">Sau 19:30</span>
          </div>
        </div>

        <div className="hour-card">
          <Moon size={18} className="icon" />
          <div className="text">
            <span className="title">Cuối Tuần Đêm</span>
            <span className="sub">Suất 22:00+</span>
          </div>
        </div>
      </S.GoldenHoursGrid>
    </S.Card>
  );
}
