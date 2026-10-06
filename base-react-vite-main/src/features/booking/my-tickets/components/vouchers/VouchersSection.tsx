import { Sparkles, Copy } from 'lucide-react';
import type { VoucherData } from '../../data/past-tickets.data';
import * as S from './VouchersSection.styles';

interface VouchersSectionProps {
  vouchers: VoucherData[];
  onCopyCode: (code: string) => void;
}

export function VouchersSection({
  vouchers,
  onCopyCode,
}: VouchersSectionProps) {
  return (
    <div>
      <S.VoucherSectionHeader>
        <h2>
          <Sparkles size={20} color="#ffb955" />
          <span>Ví Voucher &amp; Ưu Đãi Độc Quyền</span>
        </h2>
        <span className="sub">
          Các mã khuyến mãi đang có hiệu lực trong tài khoản thành viên VIP
          CinePass của bạn.
        </span>
      </S.VoucherSectionHeader>

      <S.VouchersGrid>
        {vouchers.map((voucher) => (
          <S.VoucherCard key={voucher.id}>
            <div className="top-row">
              <span className="code-badge">{voucher.code}</span>
              <span className="discount-val">{voucher.discount}</span>
            </div>

            <div className="title">{voucher.title}</div>
            <div className="desc">{voucher.desc}</div>

            <div className="bottom-row">
              <span className="expiry">{voucher.expiry}</span>
              <button
                className="copy-btn"
                onClick={() => onCopyCode(voucher.code)}
              >
                <Copy size={12} />
                <span>Sao chép mã</span>
              </button>
            </div>
          </S.VoucherCard>
        ))}
      </S.VouchersGrid>
    </div>
  );
}
