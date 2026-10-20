import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './SeatSummarySidebar.styles';

interface SeatSummarySidebarProps {
  onContinue: () => void;
  isLocking?: boolean;
}

export const SeatSummarySidebar: FC<SeatSummarySidebarProps> = ({
  onContinue,
  isLocking = false,
}) => {
  const { t } = useTranslation();
  const { state, clearSeats, calculateSeatsTotal } = useBooking();
  const seatsTotal = calculateSeatsTotal();
  const phimPoints = Math.round(seatsTotal / 10000);

  return (
    <S.BookingSummarySidebar>
      <S.SummaryCard>
        {/* Movie Header */}
        <div className="movie-header">
          <img
            src={state.movie.posterUrl}
            alt={state.movie.title}
            className="poster"
          />
          <div className="meta">
            <span className="format-badge">{state.movie.format}</span>
            <span className="title">{state.movie.title}</span>
            <span className="sub">
              {state.movie.originalTitle} • {state.movie.duration}
            </span>
            <div className="rating-line">
              <span>★ {state.movie.rating} /10 {t('booking:seat_reviews_count', { total: '3.2k' })}</span>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="session-info-table">
          <div className="row">
            <span className="label">{t('booking:cinema_label')}</span>
            <span className="val">{state.session.cinemaName}</span>
          </div>
          <div className="row">
            <span className="label">{t('booking:room_label')}</span>
            <span className="val">{state.session.room}</span>
          </div>
          <div className="row">
            <span className="label">{t('booking:showtime_info')}:</span>
            <span className="val">
              {state.session.time} - {state.session.date}
            </span>
          </div>
        </div>

        {/* Selected Seats List */}
        <div className="selected-seats-block">
          <div className="block-header">
            <span className="title">
              {t('booking:seats_selected_count', {
                count: state.selectedSeats.length,
              })}
            </span>
            {state.selectedSeats.length > 0 && (
              <button type="button" className="clear-btn" onClick={clearSeats}>
                {t('booking:deselect_all')}
              </button>
            )}
          </div>

          <div className="seat-items-list">
            {state.selectedSeats.length === 0 ? (
              <span className="empty-hint">
                {t('booking:empty_seats_hint')}
              </span>
            ) : (
              state.selectedSeats.map((seat) => (
                <div key={seat.id} className="seat-item-row">
                  <div className="left">
                    <span className="seat-badge">{seat.id}</span>
                    <span className="name">
                      {seat.type === 'vip'
                        ? t('booking:seat_vip')
                        : seat.type === 'sweetbox'
                          ? t('booking:seat_sweetbox')
                          : t('booking:seat_standard')}{' '}
                      {t('booking:position_confirmed')}
                    </span>
                  </div>
                  <span className="price">
                    {seat.price.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Price Calculation */}
        <div className="pricing-calculation">
          <div className="calc-row">
            <span className="label">{t('booking:subtotal_seats')}</span>
            <span className="val">{seatsTotal.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="calc-row">
            <span className="label">{t('booking:convenience_fee')}</span>
            <span className="free-badge">{t('booking:free_vip_elite')}</span>
          </div>
          <div className="grand-total-row">
            <div className="label-group">
              <span className="label">{t('booking:grand_total')}</span>
              <span className="bonus">
                {t('booking:points_earn', { points: phimPoints })}
              </span>
            </div>
            <span className="total-amount">
              {seatsTotal.toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* Continue CTA Button */}
        <button
          type="button"
          className="continue-cta-btn"
          disabled={state.selectedSeats.length === 0 || isLocking}
          onClick={onContinue}
        >
          <span>
            {isLocking
              ? t('booking:btn_locking_seats')
              : t('booking:btn_continue_to_snacks')}
          </span>
          <ArrowRight size={16} />
        </button>

        <div className="assurance-note">
          <ShieldCheck size={14} color="#ffb955" />
          <span>{t('booking:assurance_note')}</span>
        </div>
      </S.SummaryCard>

      {/* Upsell Card */}
      <S.UpsellCard>
        <div className="left">
          <div className="icon-box">
            <Gift size={18} />
          </div>
          <div className="text">
            <span className="title">{t('booking:upsell_title')}</span>
            <span className="sub">{t('booking:upsell_sub')}</span>
          </div>
        </div>
        <span className="price-tag">89k</span>
      </S.UpsellCard>
    </S.BookingSummarySidebar>
  );
};
