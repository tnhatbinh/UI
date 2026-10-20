import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, Lock, ShieldCheck, Ticket } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './OrderSummary.styles';

export interface OrderSummaryProps {
  isAgreed: boolean;
  isProcessing: boolean;
  onCompleteOrder: () => void;
}

export const OrderSummary: FC<OrderSummaryProps> = ({
  isAgreed,
  isProcessing,
  onCompleteOrder,
}) => {
  const { t } = useTranslation();
  const { state, calculateSeatsTotal, calculateGrandTotal } = useBooking();

  const seatsTotal = calculateSeatsTotal();
  const grandTotal = calculateGrandTotal();
  const points = Math.round(grandTotal / 10000);
  const seatNames = state.selectedSeats.map((s) => s.id).join(', ');
  const finalTotal = grandTotal;

  return (
    <S.OrderSummaryContainer>
      <S.TicketConfirmationCard>
        <div className="card-top-title">
          <span className="title">{t('booking:ticket_confirmation_title')}</span>
          <span className="badge-format">
            {state.session.format || 'IMAX Laser'}
          </span>
        </div>

        {/* Movie info */}
        <div className="movie-preview-row">
          <img
            src={state.movie.posterUrl}
            alt={state.movie.title}
            className="poster"
          />
          <div className="meta">
            <span className="age-runtime">
              {state.movie.ageRating} • {state.movie.duration}
            </span>
            <span className="name">{state.movie.title}</span>
            <span className="sub">{state.movie.originalTitle}</span>
            <span className="format">
              {t('booking:subtitle_vietnamese', {
                format: state.movie.format || 'IMAX Laser',
              })}
            </span>
          </div>
        </div>

        {/* Session Recap */}
        <S.SessionRecapBox>
          <div className="cinema-line">
            <MapPin size={13} color="#ffb955" />
            <strong>{state.session.cinemaName}</strong>
          </div>
          <div className="address-line">{state.session.cinemaAddress}</div>
          <div className="time-line">
            <Calendar size={13} color="#ff535a" />
            <span>
              {state.session.time} - {state.session.date}
            </span>
            <span className="room-badge">{state.session.room}</span>
          </div>
        </S.SessionRecapBox>

        {/* Items List Breakdown */}
        <div className="items-list-breakdown">
          <div className="item-line">
            <span className="item-name">
              {t('booking:selected_seats_item', {
                seats: seatNames || t('common:noData'),
              })}
            </span>
            <span className="item-price">
              {seatsTotal.toLocaleString('vi-VN')}đ
            </span>
          </div>

          {state.selectedSnacks.map((s) => (
            <div key={s.id} className="item-line">
              <span className="item-name">
                ● {s.quantity}x {s.name}
              </span>
              <span className="item-price">
                {(s.price * s.quantity).toLocaleString('vi-VN')}đ
              </span>
            </div>
          ))}

          {state.selectedSnacks.length === 0 && (
            <div className="item-line muted">
              <span className="item-name">
                {t('booking:no_snacks_selected')}
              </span>
              <span className="item-price">0đ</span>
            </div>
          )}

          <div className="item-line free">
            <span className="item-name">
              {t('booking:online_service_fee')}
            </span>
            <span className="item-price">
              {t('booking:free_vip_fee')}
            </span>
          </div>

          {state.appliedVoucher && (
            <div className="item-line discount">
              <span className="item-name">
                {t('booking:applied_promo_item', {
                  code: state.appliedVoucher.code,
                })}
              </span>
              <span className="item-price">
                -{state.appliedVoucher.discount.toLocaleString('vi-VN')}đ
              </span>
            </div>
          )}
        </div>

        {/* Grand Total */}
        <div className="total-block">
          <div className="label-group">
            <span className="title">{t('booking:total_checkout_amount')}</span>
            <span className="tax-note">{t('booking:vat_note')}</span>
            <span className="points-note">
              {t('booking:points_accumulate_checkout', { points })}
            </span>
          </div>
          <span className="amount">{finalTotal.toLocaleString('vi-VN')}đ</span>
        </div>

        {/* CTA Submit Button */}
        <button
          type="button"
          className="checkout-cta-btn"
          disabled={!isAgreed || isProcessing}
          onClick={onCompleteOrder}
        >
          <Lock size={16} />
          <span>
            {isProcessing
              ? t('booking:btn_processing')
              : t('booking:btn_confirm_pay', {
                  amount: finalTotal.toLocaleString('vi-VN'),
                })}
          </span>
        </button>

        <div className="pci-dss-note">
          <ShieldCheck size={14} color="#ffb955" />
          <span>{t('booking:pci_dss_note')}</span>
        </div>
      </S.TicketConfirmationCard>

      {/* Digital Pass Assurance */}
      <S.DigitalPassAssurance>
        <div className="icon-wrap">
          <Ticket size={24} />
        </div>
        <div className="text">
          <span className="title">
            {t('booking:seat_hold_assurance_title')}
          </span>
          <span className="sub">
            {t('booking:seat_hold_assurance_desc')}
          </span>
        </div>
      </S.DigitalPassAssurance>
    </S.OrderSummaryContainer>
  );
};
