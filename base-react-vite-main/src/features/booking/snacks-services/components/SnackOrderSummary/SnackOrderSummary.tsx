import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Gift, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './SnackOrderSummary.styles';

interface SnackOrderSummaryProps {
  onContinue: () => void;
  onSkip: () => void;
}

export const SnackOrderSummary: FC<SnackOrderSummaryProps> = ({
  onContinue,
  onSkip,
}) => {
  const { t } = useTranslation();
  const {
    state,
    applyVoucher,
    removeVoucher,
    calculateSeatsTotal,
    calculateSnacksTotal,
    calculateGrandTotal,
  } = useBooking();

  const [voucherInput, setVoucherInput] = useState('VIPMEMBER');

  const handleVoucherInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setVoucherInput(e.target.value);
  };

  const handleApplyVoucher = () => {
    if (voucherInput.trim().toUpperCase() === 'VIPMEMBER') {
      applyVoucher({
        code: 'VIPMEMBER',
        discount: 20000,
        title: 'Ưu đãi thành viên VIP PhimBook',
      });
    }
  };

  const seatsTotal = calculateSeatsTotal();
  const snacksTotal = calculateSnacksTotal();
  const grandTotal = calculateGrandTotal();
  const points = Math.round(grandTotal / 10000);
  const seatNames = state.selectedSeats.map((s) => s.id).join(', ');

  return (
    <S.OrderSummarySidebar>
      <S.SummaryCard>
        {/* Movie & Cinema Header */}
        <div className="movie-header">
          <img
            src={state.movie.posterUrl}
            alt={state.movie.title}
            className="poster"
          />
          <div className="meta">
            <span className="title">{state.movie.title}</span>
            <span className="sub">{state.session.cinemaName}</span>
            <span className="sub">
              {state.session.room} • {state.movie.format}
            </span>
            <span className="sub">
              ⏱ {state.session.time} - {state.session.date}
            </span>
          </div>
        </div>

        {/* Tickets Recap */}
        <div className="ticket-recap">
          <div className="left">
            <span className="main">
              {t('booking:vip_seats_count', {
                count: state.selectedSeats.length,
              })}
            </span>
            <span className="seats">
              {t('booking:seats_selected_recap', {
                seats: seatNames || t('common:noData'),
              })}
            </span>
          </div>
          <span className="amount">{seatsTotal.toLocaleString('vi-VN')}đ</span>
        </div>

        {/* Snacks Recap */}
        <div className="snacks-recap">
          <div className="header-row">
            <span className="label">
              {t('booking:snacks_selected_header', {
                count: state.selectedSnacks.length,
              })}
            </span>
          </div>

          <div className="snack-items">
            {state.selectedSnacks.length === 0 ? (
              <span className="empty-hint">
                {t('booking:snacks_empty')}
              </span>
            ) : (
              state.selectedSnacks.map((s) => (
                <div key={s.id} className="snack-line">
                  <span className="name">
                    {s.quantity}x {s.name}
                  </span>
                  <span className="price">
                    {(s.price * s.quantity).toLocaleString('vi-VN')}đ
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Voucher Input & Applied */}
        <div className="voucher-input-block">
          <span className="label">{t('booking:voucher_block_title')}</span>
          <div className="input-row">
            <input
              type="text"
              placeholder={t('booking:voucher_placeholder')}
              value={voucherInput}
              onChange={handleVoucherInputChange}
            />
            <button
              type="button"
              className="apply-btn"
              onClick={handleApplyVoucher}
            >
              {t('booking:apply_btn')}
            </button>
          </div>

          {state.appliedVoucher && (
            <div className="applied-tag">
              <span>
                {t('booking:applied_voucher', {
                  code: state.appliedVoucher.code,
                  discount: (state.appliedVoucher.discount / 1000).toFixed(0),
                })}
              </span>
              <button
                type="button"
                className="remove-btn"
                onClick={removeVoucher}
                title={t('booking:remove_voucher_title')}
              >
                <X size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Pricing Breakdown */}
        <div className="price-breakdown">
          <div className="row">
            <span className="label">{t('booking:subtotal_movie_tickets')}</span>
            <span className="val">{seatsTotal.toLocaleString('vi-VN')}đ</span>
          </div>

          <div className="row">
            <span className="label">{t('booking:subtotal_snacks_combo')}</span>
            <span className="val">{snacksTotal.toLocaleString('vi-VN')}đ</span>
          </div>

          {state.appliedVoucher && (
            <div className="row discount">
              <span className="label">{t('booking:vip_member_discount')}</span>
              <span className="val">
                -{state.appliedVoucher.discount.toLocaleString('vi-VN')}đ
              </span>
            </div>
          )}

          <div className="grand-total">
            <div className="label-group">
              <span className="main">{t('booking:grand_total_summary')}</span>
              <span className="sub">{t('booking:tax_included')}</span>
              <span className="bonus">
                {t('booking:points_accumulate', { points })}
              </span>
            </div>
            <span className="amount">
              {grandTotal.toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* CTA Continue */}
        <button type="button" className="continue-cta" onClick={onContinue}>
          <span>{t('booking:btn_pay_now')}</span>
          <ArrowRight size={16} />
        </button>

        <button type="button" className="skip-link" onClick={onSkip}>
          {t('booking:skip_snacks_cta')}
        </button>

        <div className="assurance-line">
          <ShieldCheck size={13} color="#ffb955" />{' '}
          {t('booking:snack_assurance')}
        </div>
      </S.SummaryCard>

      {/* VIP Lounge Perk Banner */}
      <S.VipPrivilegeBanner>
        <div className="icon-wrap">
          <Gift size={20} />
        </div>
        <div className="text">
          <span className="title">{t('booking:vip_lounge_perk_title')}</span>
          <span className="sub">
            {t('booking:vip_lounge_perk_desc')}
          </span>
        </div>
      </S.VipPrivilegeBanner>
    </S.OrderSummarySidebar>
  );
};
