import { Headphones, ChevronRight } from 'lucide-react';
import * as S from './ConciergeHelpCard.styles';

export function ConciergeHelpCard() {
  const handleClick = () => {
    alert('Đang kết nối tổng đài VIP concierge: 1900 8888...');
  };

  return (
    <S.Container onClick={handleClick}>
      <div className="left">
        <div className="icon-box">
          <Headphones size={18} />
        </div>
        <div className="text">
          <span className="title">Trợ giúp thông báo rạp?</span>
          <span className="sub">
            Hotline VIP concierge: <strong>1900 8888 (nhánh 1)</strong>
          </span>
        </div>
      </div>
      <ChevronRight size={16} className="arrow" />
    </S.Container>
  );
}
