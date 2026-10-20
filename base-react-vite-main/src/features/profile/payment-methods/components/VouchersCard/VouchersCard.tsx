import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Gift, Ticket, Popcorn } from 'lucide-react';
import * as S from './VouchersCard.styles';

interface VouchersCardProps {
  onToast?: (msg: string) => void;
}

export function VouchersCard({ onToast }: VouchersCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [voucherCode, setVoucherCode] = useState('');

  const handleVoucherCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoucherCode(e.target.value);
  };

  const handleUseVoucher = () => {
    navigate('/movie-details');
  };

  const handleApplyGift = () => {
    if (!voucherCode.trim()) return;
    onToast?.(
      t('profile:toast_voucher_applied', { code: voucherCode.toUpperCase() }),
    );
    setVoucherCode('');
  };

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Gift size={16} color="#ff535a" />
            <span>{t('profile:vouchers_card_title')}</span>
          </h3>
        </div>
        <span className="badge-count">
          {t('profile:active_vouchers_badge', { count: 3 })}
        </span>
      </div>

      <S.VoucherInputRow>
        <input
          type="text"
          placeholder={t('profile:voucher_code_placeholder')}
          value={voucherCode}
          onChange={handleVoucherCodeChange}
        />
        <button className="apply-btn" type="button" onClick={handleApplyGift}>
          {t('profile:apply_btn')}
        </button>
      </S.VoucherInputRow>

      <div className="vouchers-list">
        <S.VoucherMiniItem>
          <div className="left">
            <div className="icon-box">
              <Ticket size={16} />
            </div>
            <div className="info">
              <span className="title">{t('profile:voucher_imax_title')}</span>
              <span className="hsd">{t('profile:voucher_imax_desc')}</span>
            </div>
          </div>
          <button
            className="use-btn"
            onClick={handleUseVoucher}
          >
            {t('profile:use_now_btn')}
          </button>
        </S.VoucherMiniItem>

        <S.VoucherMiniItem>
          <div className="left">
            <div className="icon-box gold">
              <Ticket size={16} />
            </div>
            <div className="info">
              <span className="title">{t('profile:voucher_sweetbox_title')}</span>
              <span className="hsd">{t('profile:voucher_sweetbox_desc')}</span>
            </div>
          </div>
          <button
            className="use-btn"
            onClick={handleUseVoucher}
          >
            {t('profile:use_now_btn')}
          </button>
        </S.VoucherMiniItem>

        <S.VoucherMiniItem>
          <div className="left">
            <div className="icon-box green">
              <Popcorn size={16} />
            </div>
            <div className="info">
              <span className="title">{t('profile:voucher_popcorn_title')}</span>
              <span className="hsd">{t('profile:voucher_popcorn_desc')}</span>
            </div>
          </div>
          <button
            className="use-btn"
            onClick={handleUseVoucher}
          >
            {t('profile:use_now_btn')}
          </button>
        </S.VoucherMiniItem>
      </div>
    </S.MainCard>
  );
}
