import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Ticket, Popcorn } from 'lucide-react';
import * as S from './VouchersCard.styles';

interface VouchersCardProps {
  onToast?: (msg: string) => void;
}

export function VouchersCard({ onToast }: VouchersCardProps) {
  const navigate = useNavigate();
  const [voucherCode, setVoucherCode] = useState('');

  const handleApplyGift = () => {
    if (!voucherCode.trim()) return;
    onToast?.(
      `Đã áp dụng mã thẻ quà tặng ${voucherCode.toUpperCase()} thành công!`,
    );
    setVoucherCode('');
  };

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Gift size={16} color="#ff535a" />
            <span>Voucher & CineGift Cards</span>
          </h3>
        </div>
        <span className="badge-count">3 Đang có</span>
      </div>

      <S.VoucherInputRow>
        <input
          type="text"
          placeholder="NHẬP MÃ THẺ QUÀ TẶNG HOẶC GIFTVOUCHER..."
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
        />
        <button className="apply-btn" type="button" onClick={handleApplyGift}>
          Áp dụng
        </button>
      </S.VoucherInputRow>

      <div className="vouchers-list">
        <S.VoucherMiniItem>
          <div className="left">
            <div className="icon-box">
              <Ticket size={16} />
            </div>
            <div className="info">
              <span className="title">Giảm 50.000đ Vé IMAX</span>
              <span className="hsd">HSD: 30/11/2025 • Đơn từ 200k</span>
            </div>
          </div>
          <button
            className="use-btn"
            onClick={() => navigate('/movie-details')}
          >
            Dùng ngay
          </button>
        </S.VoucherMiniItem>

        <S.VoucherMiniItem>
          <div className="left">
            <div
              className="icon-box"
              style={{
                background: 'rgba(255,185,85,0.15)',
                color: '#ffb955',
              }}
            >
              <Ticket size={16} />
            </div>
            <div className="info">
              <span className="title">Miễn phí Sweetbox Cuối Tuần</span>
              <span className="hsd">HSD: 15/12/2025 • Áp dụng rạp CGV</span>
            </div>
          </div>
          <button
            className="use-btn"
            onClick={() => navigate('/movie-details')}
          >
            Dùng ngay
          </button>
        </S.VoucherMiniItem>

        <S.VoucherMiniItem>
          <div className="left">
            <div
              className="icon-box"
              style={{
                background: 'rgba(74,222,128,0.15)',
                color: '#4ade80',
              }}
            >
              <Popcorn size={16} />
            </div>
            <div className="info">
              <span className="title">Tặng 01 Bắp Phô Mai Size Lớn</span>
              <span className="hsd">HSD: 20/11/2025 • Vé suất sau 18:00</span>
            </div>
          </div>
          <button
            className="use-btn"
            onClick={() => navigate('/movie-details')}
          >
            Dùng ngay
          </button>
        </S.VoucherMiniItem>
      </div>
    </S.MainCard>
  );
}
