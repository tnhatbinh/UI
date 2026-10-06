import type { FC } from 'react';
import { Heart } from 'lucide-react';
import * as S from './SeatLegend.styles';

export const SeatLegend: FC = () => {
  return (
    <S.SeatLegendBar>
      <div className="legend-item">
        <div className="sample-box standard" />
        <span>Ghế Thường</span>
        <span className="price-tag">110.000đ</span>
      </div>

      <div className="legend-item">
        <div className="sample-box vip" />
        <span>Ghế VIP</span>
        <span className="price-tag">130.000đ</span>
      </div>

      <div className="legend-item">
        <div className="sample-box sweetbox">
          <Heart size={8} />
        </div>
        <span>Sweetbox Đôi</span>
        <span className="price-tag">260.000đ/cặp</span>
      </div>

      <div className="legend-item">
        <div className="sample-box selected" />
        <span>Đang chọn</span>
      </div>

      <div className="legend-item">
        <div className="sample-box sold">✕</div>
        <span>Đã bán</span>
      </div>
    </S.SeatLegendBar>
  );
};
