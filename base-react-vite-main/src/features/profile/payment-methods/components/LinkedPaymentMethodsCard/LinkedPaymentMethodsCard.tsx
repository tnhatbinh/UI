import { useState } from 'react';
import { CreditCard, Plus, Edit, CheckCircle2, Lock, Zap } from 'lucide-react';
import * as S from './LinkedPaymentMethodsCard.styles';

interface LinkedPaymentMethodsCardProps {
  onToast?: (msg: string) => void;
}

export function LinkedPaymentMethodsCard({
  onToast,
}: LinkedPaymentMethodsCardProps) {
  const [quickPay, setQuickPay] = useState(true);

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <CreditCard size={18} color="#ff535a" />
            <span>Thẻ & Ví đã liên kết</span>
          </h3>
          <span className="sub">
            Quản lý các nguồn tiền thanh toán vé phim, combo bắp nước tự động
          </span>
        </div>
        <button
          className="add-btn"
          onClick={() => alert('Mở giao diện liên kết thẻ / ví điện tử mới...')}
        >
          <Plus size={14} />
          <span>Thêm liên kết phương thức mới</span>
        </button>
      </div>

      {/* Default Big Card: Visa Signature Techcombank */}
      <S.BigCreditCard>
        <div className="card-header-line">
          <div className="card-title-group">
            <div className="chip-icon" />
            <div className="text">
              <div className="name-row">
                <span className="name">Visa Signature Techcombank</span>
                <span className="default-badge">MẶC ĐỊNH</span>
              </div>
              <span className="type-sub">
                Hạng Bạch Kim • Đã kích hoạt 3D Secure Cinema Pay
              </span>
            </div>
          </div>
          <span className="bank-brand">TECHCOMBANK</span>
        </div>

        <div className="card-digits">•••• •••• •••• 4421</div>

        <div className="card-footer-line">
          <div className="holder-expiry">
            <div className="col">
              <span className="lbl">CHỦ THẺ</span>
              <span className="val">NGUYEN THANH TUNG</span>
            </div>
            <div className="col">
              <span className="lbl">HẾT HẠN</span>
              <span className="val">11/28</span>
            </div>
          </div>

          <div className="actions">
            <button
              className="edit-btn"
              onClick={() => alert('Chỉnh sửa thông tin thẻ Techcombank...')}
            >
              <Edit size={12} />
              <span>Chỉnh sửa</span>
            </button>
          </div>
        </div>
      </S.BigCreditCard>

      {/* Wallet 1: MoMo */}
      <S.WalletItemCard>
        <div className="item-top">
          <div className="left-brand">
            <div className="brand-box" style={{ background: '#a50064' }}>
              M
            </div>
            <div className="text">
              <div className="name-row">
                <span className="name">Ví Điện Tử MoMo</span>
                <span className="badge">Hoàn 5% vé</span>
              </div>
              <span className="meta">
                Liên kết tự động • Số ĐT: •••• 9988 (Ví chính)
              </span>
            </div>
          </div>
          <CheckCircle2 size={18} className="check-icon" />
        </div>
        <div className="item-bottom">
          <span className="note">
            Tự động trừ tiền vé & đồ ăn khi đặt ghế nhanh
          </span>
          <div className="links">
            <span
              className="link"
              onClick={() => onToast?.('Đã đặt MoMo làm phương thức mặc định!')}
            >
              Đặt làm mặc định
            </span>
            <span
              className="unlink"
              onClick={() => alert('Hủy liên kết ví MoMo?')}
            >
              Hủy liên kết
            </span>
          </div>
        </div>
      </S.WalletItemCard>

      {/* Wallet 2: ZaloPay */}
      <S.WalletItemCard>
        <div className="item-top">
          <div className="left-brand">
            <div className="brand-box" style={{ background: '#0068ff' }}>
              Z
            </div>
            <div className="text">
              <div className="name-row">
                <span className="name">Ví ZaloPay</span>
                <span
                  className="badge"
                  style={{
                    color: '#ffb955',
                    background: 'rgba(255, 185, 85, 0.12)',
                  }}
                >
                  Ưu đãi Thứ 4 tặng bắp nước
                </span>
              </div>
              <span className="meta">
                Liên kết tài khoản Zalo • Tặng combo Bắp Nước mỗi Thứ Tư
              </span>
            </div>
          </div>
          <CheckCircle2 size={18} className="check-icon" />
        </div>
        <div className="item-bottom">
          <span className="note">
            Đồng bộ tự động mã giảm giá vé đôi Thứ Tư
          </span>
          <div className="links">
            <span
              className="link"
              onClick={() =>
                onToast?.('Đã đặt ZaloPay làm phương thức mặc định!')
              }
            >
              Đặt làm mặc định
            </span>
            <span
              className="unlink"
              onClick={() => alert('Hủy liên kết ví ZaloPay?')}
            >
              Hủy liên kết
            </span>
          </div>
        </div>
      </S.WalletItemCard>

      {/* Wallet 3: Vietcombank Napas ATM */}
      <S.WalletItemCard>
        <div className="item-top">
          <div className="left-brand">
            <div className="brand-box" style={{ background: '#005a3c' }}>
              VCB
            </div>
            <div className="text">
              <div className="name-row">
                <span className="name">Thẻ ATM Napas Nội Địa Vietcombank</span>
                <span
                  className="badge"
                  style={{
                    color: '#ae8786',
                    background: 'rgba(255,255,255,0.08)',
                  }}
                >
                  Smart OTP
                </span>
              </div>
              <span className="meta">
                Thẻ ghi nợ nội địa • Số thẻ: •••• •••• •••• 8832
              </span>
            </div>
          </div>
          <Lock size={16} color="#7d6b6a" />
        </div>
        <div className="item-bottom">
          <span className="note">
            Xác thực OTP qua Smart OTP Vietcombank an toàn
          </span>
          <div className="links">
            <span
              className="link"
              onClick={() =>
                onToast?.('Đã đặt Vietcombank ATM làm phương thức mặc định!')
              }
            >
              Đặt làm mặc định
            </span>
            <span
              className="unlink"
              onClick={() => alert('Hủy liên kết thẻ Vietcombank?')}
            >
              Hủy liên kết
            </span>
          </div>
        </div>
      </S.WalletItemCard>

      {/* QuickPay Feature Card */}
      <S.QuickPayCard>
        <div className="top">
          <div className="info">
            <div className="icon-box">
              <Zap size={16} />
            </div>
            <div className="text">
              <span className="title">
                Thanh toán nhanh một chạm (Quick-Pay)
              </span>
              <span className="sub">
                Bỏ qua bước nhập mã OTP cho các giao dịch vé rạp có giá trị nhỏ
              </span>
            </div>
          </div>
          <S.ToggleSwitch
            $active={quickPay}
            onClick={() => setQuickPay(!quickPay)}
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>

        <div className="bottom-limit">
          <span className="txt">
            Áp dụng cho vé & combo bắp nước dưới 500.000 VND / giao dịch
          </span>
          <div className="limit-val">
            <span className="amount">500.000 đ</span>
            <span
              className="change-link"
              onClick={() => alert('Tùy chỉnh hạn mức Quick-Pay...')}
            >
              Thay đổi
            </span>
          </div>
        </div>
      </S.QuickPayCard>
    </S.MainCard>
  );
}
