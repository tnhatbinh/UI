import { ChevronRight, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VOUCHERS } from '../../data/vip-elite-data';
import * as S from './VoucherVault.styles';

export function VoucherVault() {
  const navigate = useNavigate();

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Gift size={18} />
          </div>
          <div>
            <h3>Ví Voucher Của Bạn</h3>
            <span style={{ fontSize: '11px', color: '#ae8786' }}>
              3 ưu đãi sẵn sàng áp dụng khi thanh toán
            </span>
          </div>
        </div>
        <span className="link-all" onClick={() => navigate('/ve-cua-toi')}>
          Xem tất cả (5)
        </span>
      </div>

      {VOUCHERS.map((voucher) => (
        <S.VoucherMiniCard key={voucher.id}>
          <div className="left">
            <div className="discount-box" style={voucher.discountBoxStyle}>
              {voucher.discountLabel}
            </div>
            <div className="info">
              <span className="title">{voucher.title}</span>
              <span className="desc">{voucher.desc}</span>
              <span className="hsd" style={voucher.hsdStyle}>
                {voucher.hsd}
              </span>
            </div>
          </div>
          <div className="right">
            <span className="badge" style={voucher.badgeStyle}>
              {voucher.badge}
            </span>
            <span
              className="use-link"
              onClick={() => navigate('/movie-details')}
            >
              <span>Dùng ngay</span>
              <ChevronRight size={12} />
            </span>
          </div>
        </S.VoucherMiniCard>
      ))}
    </S.SectionCard>
  );
}
