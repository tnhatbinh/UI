import type { FC } from 'react';
import { Maximize2, Armchair, Sparkles, UserCheck } from 'lucide-react';
import * as S from './SeatFeatures.styles';

export const SeatFeatures: FC = () => {
  return (
    <S.FeatureBadgesRow>
      <div className="feat-card">
        <Maximize2 className="icon" />
        <div className="text">
          <span className="title">Tỷ lệ 1.90:1</span>
          <span className="desc">Màn bạc vô cực</span>
        </div>
      </div>

      <div className="feat-card">
        <Armchair className="icon" />
        <div className="text">
          <span className="title">Ghế bọc nhung</span>
          <span className="desc">Góc ngả 135 độ</span>
        </div>
      </div>

      <div className="feat-card">
        <Sparkles className="icon" />
        <div className="text">
          <span className="title">Khử khuẩn UV</span>
          <span className="desc">Trước mỗi suất</span>
        </div>
      </div>

      <div className="feat-card">
        <UserCheck className="icon" />
        <div className="text">
          <span className="title">Hỗ trợ tại chỗ</span>
          <span className="desc">Nhân viên phục vụ</span>
        </div>
      </div>
    </S.FeatureBadgesRow>
  );
};
