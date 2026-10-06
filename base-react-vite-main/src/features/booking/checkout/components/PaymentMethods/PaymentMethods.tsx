import type { FC } from 'react';
import type { BookingState } from '../../../context/booking.types';
import {
  CreditCard,
  Smartphone,
  QrCode,
  Globe,
  Coins,
  Lock,
  Ticket,
} from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import {
  PAYMENT_METHODS,
  type PaymentMethodId,
} from '../../data/payment-methods.data';
import { CHECKOUT_VOUCHERS } from '../../data/vouchers.data';
import * as S from './PaymentMethods.styles';

export interface PaymentMethodsProps {
  selectedMethod?: BookingState['paymentMethod'];
  onSelectMethod?: (method: BookingState['paymentMethod']) => void;
  voucherCode: string;
  onVoucherCodeChange: (code: string) => void;
  onApplyVoucher: (codeToApply?: string) => void;
  isAgreed: boolean;
  onToggleAgreed: (agreed: boolean) => void;
}

export const PaymentMethods: FC<PaymentMethodsProps> = ({
  selectedMethod: propSelectedMethod,
  onSelectMethod,
  voucherCode,
  onVoucherCodeChange,
  onApplyVoucher,
  isAgreed,
  onToggleAgreed,
}) => {
  const { state, setPaymentMethod, applyVoucher, calculateGrandTotal } =
    useBooking();

  const selectedMethod = propSelectedMethod ?? state.paymentMethod;
  const handleSelectMethod = onSelectMethod ?? setPaymentMethod;

  const renderMethodIcon = (id: PaymentMethodId) => {
    switch (id) {
      case 'momo':
        return <Smartphone size={20} />;
      case 'vnpay':
        return <QrCode size={20} />;
      case 'credit-card':
        return <CreditCard size={20} />;
      case 'atm':
        return <Globe size={20} />;
      case 'phimpoints':
        return <Coins size={20} />;
      default:
        return <CreditCard size={20} />;
    }
  };

  const handleCardVoucherClick = (code: string) => {
    if (onApplyVoucher) {
      onApplyVoucher(code);
    } else {
      if (code === 'GIAM30K') {
        applyVoucher({
          code: 'GIAM30K',
          discount: 30000,
          title: 'Giảm 30K combo phim bom tấn',
        });
      } else if (code === 'TECHCOMVIP') {
        const grandTotal = calculateGrandTotal();
        applyVoucher({
          code: 'TECHCOMVIP',
          discount: Math.round(grandTotal * 0.15),
          title: 'Giảm 15% khi thanh toán thẻ Techcombank',
        });
      }
    }
  };

  return (
    <>
      {/* Section 2: Phương Thức Thanh Toán */}
      <S.SectionCard>
        <div className="card-header-row">
          <div className="header-left">
            <div className="icon-box">
              <CreditCard size={18} />
            </div>
            <div className="text-meta">
              <span className="title">Phương Thức Thanh Toán</span>
              <span className="sub">
                Cổng thanh toán mã hóa an toàn đạt chuẩn PCI-DSS Level 1
              </span>
            </div>
          </div>
          <span className="badge-tag">Không phụ phí giao dịch</span>
        </div>

        <S.PaymentMethodsList>
          {PAYMENT_METHODS.map((method) => {
            const isSelected = selectedMethod === method.id;
            return (
              <S.PaymentMethodItem
                key={method.id}
                $isSelected={isSelected}
                onClick={() => handleSelectMethod(method.id)}
              >
                <div className="left-meta">
                  <div className="radio-circle">
                    <div className="dot" />
                  </div>
                  <div className={`brand-icon-wrap ${method.brandClass}`}>
                    {renderMethodIcon(method.id)}
                  </div>
                  <div className="title-details">
                    <div className="title-row">
                      <span className="name">{method.name}</span>
                      {method.promoBadge && (
                        <span className="promo-badge">{method.promoBadge}</span>
                      )}
                      {method.vipBadge && (
                        <span className="vip-balance">{method.vipBadge}</span>
                      )}
                      {method.subtitle && (
                        <span className="desc">{method.subtitle}</span>
                      )}
                    </div>
                    <span className="desc">{method.desc}</span>
                  </div>
                </div>

                {method.rightTag && (
                  <span className="right-tag">{method.rightTag}</span>
                )}
                {method.hasLock && <Lock size={15} color="#ae8786" />}
              </S.PaymentMethodItem>
            );
          })}
        </S.PaymentMethodsList>
      </S.SectionCard>

      {/* Section 3: Chương Trình Khuyến Mãi & Giảm Giá */}
      <S.SectionCard>
        <div className="card-header-row">
          <div className="header-left">
            <div className="icon-box">
              <Ticket size={18} />
            </div>
            <div className="text-meta">
              <span className="title">Chương Trình Khuyến Mãi & Giảm Giá</span>
            </div>
          </div>
          <span className="badge-tag">
            {CHECKOUT_VOUCHERS.length} Voucher khả dụng
          </span>
        </div>

        <S.VouchersBlock>
          <div className="input-row">
            <input
              type="text"
              placeholder="Nhập mã voucher hoặc giftcode..."
              value={voucherCode}
              onChange={(e) => onVoucherCodeChange(e.target.value)}
            />
            <button
              type="button"
              className="apply-btn"
              onClick={() => onApplyVoucher()}
            >
              Áp Dụng
            </button>
          </div>

          <div className="voucher-cards-grid">
            {CHECKOUT_VOUCHERS.map((voucher) => {
              const isSelected = state.appliedVoucher?.code === voucher.code;
              return (
                <S.VoucherCard
                  key={voucher.code}
                  $isSelected={isSelected}
                  onClick={() => handleCardVoucherClick(voucher.code)}
                >
                  <div className="left">
                    <div className="icon-percent">{voucher.icon}</div>
                    <div className="meta">
                      <span className="code">{voucher.code}</span>
                      <span className="desc">{voucher.desc}</span>
                    </div>
                  </div>
                  <span className="status-text">
                    {isSelected ? 'Đã chọn' : 'Chọn'}
                  </span>
                </S.VoucherCard>
              );
            })}
          </div>
        </S.VouchersBlock>
      </S.SectionCard>

      {/* Checkbox cam kết */}
      <S.ConsentCheckbox>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => onToggleAgreed(e.target.checked)}
        />
        <span>
          Tôi xác nhận thông tin vé đã chính xác và đồng ý với Quy chế hoạt động
          rạp &amp; Chính sách hoàn/đổi vé trước 60 phút của PhimBook. Vé đã mua
          không thể quy đổi thành tiền mặt.
        </span>
      </S.ConsentCheckbox>
    </>
  );
};
