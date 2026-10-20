import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, CheckCircle, QrCode } from 'lucide-react';
import type { OrderDto, PaymentCheckoutResponseData } from '@shared/types/api.types';
import * as S from './PaymentModal.styles';

export interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: OrderDto;
  payment: PaymentCheckoutResponseData;
  onPaymentConfirmed: () => void;
}

export const PaymentModal: FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  order,
  payment,
  onPaymentConfirmed,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOpenPaymentUrl = () => {
    if (payment.paymentUrl) {
      window.open(payment.paymentUrl, '_blank');
    }
  };

  const paymentProviderName =
    payment.paymentMethod === 'MOMO'
      ? t('booking:provider_momo')
      : payment.paymentMethod === 'VNPAY'
        ? t('booking:provider_vnpay')
        : t('booking:provider_card');

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalCard>
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label={t('common:close')}
        >
          <X size={18} />
        </button>

        <div className="header-icon">
          <QrCode size={28} />
        </div>

        <h3 className="title">
          {t('booking:pay_via_provider', { provider: paymentProviderName })}
        </h3>
        <span className="order-code-badge">
          {t('booking:order_code_badge', { code: order.orderCode })}
        </span>

        {payment.qrCodeUrl && (
          <div className="qr-wrapper">
            <img src={payment.qrCodeUrl} alt={t('booking:qr_alt')} />
          </div>
        )}

        <div className="amount-box">
          <div className="label">{t('booking:payment_amount_needed')}</div>
          <div className="amount">
            {(order.totalAmount || payment.amount || 0).toLocaleString('vi-VN')}đ
          </div>
        </div>

        <p className="instruction">
          {t('booking:payment_instruction', { provider: paymentProviderName })}
        </p>

        <div className="actions-row">
          {payment.paymentUrl && (
            <button
              type="button"
              className="btn-pay-url"
              onClick={handleOpenPaymentUrl}
            >
              <span>
                {t('booking:btn_open_gateway', {
                  provider: paymentProviderName,
                })}
              </span>
              <ExternalLink size={16} />
            </button>
          )}

          <button
            type="button"
            className="btn-confirm-done"
            onClick={onPaymentConfirmed}
          >
            <CheckCircle size={16} />
            <span>{t('booking:btn_paid_success')}</span>
          </button>

          <button type="button" className="btn-cancel" onClick={onClose}>
            {t('booking:btn_back_to_order')}
          </button>
        </div>
      </S.ModalCard>
    </S.ModalOverlay>
  );
};

