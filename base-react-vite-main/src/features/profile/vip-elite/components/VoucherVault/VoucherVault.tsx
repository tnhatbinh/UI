import { ChevronRight, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VOUCHERS } from '../../data/vip-elite-data';
import * as S from './VoucherVault.styles';

export function VoucherVault() {
  const navigate = useNavigate();

  const handleNavigateTickets = () => {
    navigate('/ve-cua-toi');
  };

  const handleUseVoucher = () => {
    navigate('/movie-details');
  };

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Gift size={18} />
          </div>
          <div>
            <h3>Ví Voucher Của Bạn</h3>
            <span className="sub-desc">
              3 ưu đãi sẵn sàng áp dụng khi thanh toán
            </span>
          </div>
        </div>
        <span className="link-all" onClick={handleNavigateTickets}>
          Xem tất cả (5)
        </span>
      </div>

      {VOUCHERS.map((voucher) => (
        <S.VoucherMiniCard key={voucher.id}>
          <div className="left">
            <div className={`discount-box ${voucher.id}`}>
              {voucher.discountLabel}
            </div>
            <div className="info">
              <span className="title">{voucher.title}</span>
              <span className="desc">{voucher.desc}</span>
              <span className={`hsd ${voucher.id === 'v2' ? 'urgent' : ''}`}>
                {voucher.hsd}
              </span>
            </div>
          </div>
          <div className="right">
            <span className={`badge ${voucher.id === 'v2' ? 'urgent' : ''}`}>
              {voucher.badge}
            </span>
            <span
              className="use-link"
              onClick={handleUseVoucher}
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
