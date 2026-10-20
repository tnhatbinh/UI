import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, Plus, Edit, CheckCircle2, Lock, Zap } from 'lucide-react';
import * as S from './LinkedPaymentMethodsCard.styles';

interface LinkedPaymentMethodsCardProps {
  onToast?: (msg: string) => void;
}

export function LinkedPaymentMethodsCard({
  onToast,
}: LinkedPaymentMethodsCardProps) {
  const { t } = useTranslation();
  const [isQuickPayEnabled, setIsQuickPayEnabled] = useState(true);

  const handleAddNewMethod = () => {
    onToast?.(t('profile:toast_add_method'));
  };

  const handleEditCard = () => {
    onToast?.(t('profile:toast_edit_card'));
  };

  const handleSetDefaultMethod = (name: string) => () => {
    onToast?.(t('profile:toast_set_default', { name }));
  };

  const handleUnlinkMethod = (name: string) => () => {
    onToast?.(t('profile:toast_unlink_method', { name }));
  };

  const handleToggleQuickPay = () => {
    setIsQuickPayEnabled((prev) => !prev);
  };

  const handleChangeLimit = () => {
    onToast?.(t('profile:toast_change_limit'));
  };

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <CreditCard size={18} color="#ff535a" />
            <span>{t('profile:linked_cards_wallets_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:linked_cards_wallets_sub')}
          </span>
        </div>
        <button
          className="add-btn"
          onClick={handleAddNewMethod}
        >
          <Plus size={14} />
          <span>{t('profile:add_new_method_btn')}</span>
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
                <span className="default-badge">{t('profile:badge_default')}</span>
              </div>
              <span className="type-sub">
                {t('profile:card_platinum_3d_secure')}
              </span>
            </div>
          </div>
          <span className="bank-brand">TECHCOMBANK</span>
        </div>

        <div className="card-digits">•••• •••• •••• 4421</div>

        <div className="card-footer-line">
          <div className="holder-expiry">
            <div className="col">
              <span className="lbl">{t('profile:card_holder_label')}</span>
              <span className="val">{t('profile:card_holder_name_sample')}</span>
            </div>
            <div className="col">
              <span className="lbl">{t('profile:card_expiry_lbl')}</span>
              <span className="val">11/28</span>
            </div>
          </div>

          <div className="actions">
            <button
              className="edit-btn"
              onClick={handleEditCard}
            >
              <Edit size={12} />
              <span>{t('profile:edit_btn')}</span>
            </button>
          </div>
        </div>
      </S.BigCreditCard>

      {/* Wallet 1: MoMo */}
      <S.WalletItemCard>
        <div className="item-top">
          <div className="left-brand">
            <div className="brand-box momo">M</div>
            <div className="text">
              <div className="name-row">
                <span className="name">Ví Điện Tử MoMo</span>
                <span className="badge">{t('profile:momo_cashback_badge')}</span>
              </div>
              <span className="meta">
                {t('profile:momo_meta_sub')}
              </span>
            </div>
          </div>
          <CheckCircle2 size={18} className="check-icon" />
        </div>
        <div className="item-bottom">
          <span className="note">
            {t('profile:momo_auto_deduct_note')}
          </span>
          <div className="links">
            <span
              className="link"
              onClick={handleSetDefaultMethod('MoMo')}
            >
              {t('profile:set_as_default_btn')}
            </span>
            <span
              className="unlink"
              onClick={handleUnlinkMethod('MoMo')}
            >
              {t('profile:unlink_btn')}
            </span>
          </div>
        </div>
      </S.WalletItemCard>

      {/* Wallet 2: ZaloPay */}
      <S.WalletItemCard>
        <div className="item-top">
          <div className="left-brand">
            <div className="brand-box zalopay">Z</div>
            <div className="text">
              <div className="name-row">
                <span className="name">Ví ZaloPay</span>
                <span className="badge gold">
                  {t('profile:zalopay_badge')}
                </span>
              </div>
              <span className="meta">
                {t('profile:zalopay_meta_sub')}
              </span>
            </div>
          </div>
          <CheckCircle2 size={18} className="check-icon" />
        </div>
        <div className="item-bottom">
          <span className="note">
            {t('profile:zalopay_note')}
          </span>
          <div className="links">
            <span
              className="link"
              onClick={handleSetDefaultMethod('ZaloPay')}
            >
              {t('profile:set_as_default_btn')}
            </span>
            <span
              className="unlink"
              onClick={handleUnlinkMethod('ZaloPay')}
            >
              {t('profile:unlink_btn')}
            </span>
          </div>
        </div>
      </S.WalletItemCard>

      {/* Wallet 3: Vietcombank Napas ATM */}
      <S.WalletItemCard>
        <div className="item-top">
          <div className="left-brand">
            <div className="brand-box vcb">VCB</div>
            <div className="text">
              <div className="name-row">
                <span className="name">{t('profile:napas_vcb_name')}</span>
                <span className="badge neutral">Smart OTP</span>
              </div>
              <span className="meta">
                {t('profile:napas_vcb_meta')}
              </span>
            </div>
          </div>
          <Lock size={16} color="#7d6b6a" />
        </div>
        <div className="item-bottom">
          <span className="note">
            {t('profile:napas_vcb_note')}
          </span>
          <div className="links">
            <span
              className="link"
              onClick={handleSetDefaultMethod('Vietcombank ATM')}
            >
              {t('profile:set_as_default_btn')}
            </span>
            <span
              className="unlink"
              onClick={handleUnlinkMethod('thẻ Vietcombank')}
            >
              {t('profile:unlink_btn')}
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
                {t('profile:quick_pay_feature_title')}
              </span>
              <span className="sub">
                {t('profile:quick_pay_feature_sub')}
              </span>
            </div>
          </div>
          <S.ToggleSwitch
            $active={isQuickPayEnabled}
            onClick={handleToggleQuickPay}
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>

        <div className="bottom-limit">
          <span className="txt">
            {t('profile:quick_pay_limit_desc')}
          </span>
          <div className="limit-val">
            <span className="amount">500.000 đ</span>
            <span
              className="change-link"
              onClick={handleChangeLimit}
            >
              {t('profile:change_btn')}
            </span>
          </div>
        </div>
      </S.QuickPayCard>
    </S.MainCard>
  );
}
