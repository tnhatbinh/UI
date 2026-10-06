import type { FC } from 'react';
import { Sparkles } from 'lucide-react';
import * as S from './SnackOfferBanner.styles';

export const SnackOfferBanner: FC = () => {
  return (
    <S.OfferBanner>
      <div className="banner-left">
        <div className="icon-box">
          <Sparkles size={20} />
        </div>
        <div className="banner-text">
          <span className="title">
            Ưu đãi đặt trước online: Giảm đến 25% so với mua trực tiếp tại quầy
          </span>
          <span className="sub">
            Nhận thức ăn tức thì tại quầy Fast-Track riêng hoặc phục vụ trực
            tiếp vào phòng chiếu IMAX.
          </span>
        </div>
      </div>
      <div className="badge-hot">🍿 Chuẩn Bỏng Ngô Nóng 100%</div>
    </S.OfferBanner>
  );
};
