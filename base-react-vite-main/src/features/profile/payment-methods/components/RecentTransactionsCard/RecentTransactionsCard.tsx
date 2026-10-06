import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import * as S from './RecentTransactionsCard.styles';

export function RecentTransactionsCard() {
  const navigate = useNavigate();

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Clock size={16} color="#ff535a" />
            <span>Giao dịch gần nhất</span>
          </h3>
        </div>
        <span className="see-all-link" onClick={() => navigate('/ve-cua-toi')}>
          Xem tất cả
        </span>
      </div>

      <S.RecentTxList>
        <div className="tx-item">
          <div className="info">
            <span className="name">Dune: Hành Tinh Cát 2 (IMAX)</span>
            <span className="sub">Hôm qua, 19:45 • Thẻ Visa **** 4421</span>
          </div>
          <div className="amt-status">
            <span className="amt">- 380.000 đ</span>
            <span className="status">● Thành công</span>
          </div>
        </div>

        <div className="tx-item">
          <div className="info">
            <span className="name">Combo 2 Bắp + 2 Pepsi Lớn</span>
            <span className="sub">02/11/2025 • Ví MoMo</span>
          </div>
          <div className="amt-status">
            <span className="amt">- 145.000 đ</span>
            <span className="status">● Thành công</span>
          </div>
        </div>
      </S.RecentTxList>
    </S.MainCard>
  );
}
