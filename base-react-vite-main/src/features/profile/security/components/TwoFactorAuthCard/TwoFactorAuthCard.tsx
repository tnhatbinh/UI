import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Smartphone, Key, Copy, RefreshCw } from 'lucide-react';
import * as S from './TwoFactorAuthCard.styles';

interface TwoFactorAuthCardProps {
  onToast?: (msg: string) => void;
}

export function TwoFactorAuthCard({ onToast }: TwoFactorAuthCardProps) {
  const { t } = useTranslation();
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(true);

  const handleToggleTwoFactor = () => {
    setIsTwoFactorEnabled((prev) => !prev);
  };

  const handleChangePhone = () => {
    onToast?.(t('profile:toast_change_phone_2fa'));
  };

  const handleRegenCodes = () => {
    onToast?.(t('profile:toast_regen_backup_codes'));
  };

  const handleCopyCodes = () => {
    const codes =
      '4920-8192, 7718-0244, 9104-3821, 6201-5589, 3319-4402, 8821-9015, 5012-7634, 1498-6620';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codes);
    }
    onToast?.(t('profile:toast_copy_backup_codes'));
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Shield size={16} color="#ff535a" />
            <span>{t('profile:two_fa_name')}</span>
          </h3>
        </div>
        <S.ToggleSwitch
          $active={isTwoFactorEnabled}
          onClick={handleToggleTwoFactor}
        >
          <div className="thumb" />
        </S.ToggleSwitch>
      </div>

      <S.TwoFactorContent>
        <p className="desc">
          {t('profile:two_fa_desc_full')}
        </p>

        <div className="method-box">
          <div className="left">
            <Smartphone size={16} className="icon" />
            <div className="text">
              <span className="name">{t('profile:two_fa_auth_name')}</span>
              <span className="sub">
                {t('profile:two_fa_auth_sub')}
              </span>
            </div>
          </div>
          <span className="badge-primary">{t('profile:badge_default')}</span>
        </div>

        <div className="method-box">
          <div className="left">
            <Shield size={16} className="icon" />
            <div className="text">
              <span className="name">Zalo OTP / SMS Điện Thoại</span>
              <span className="sub">{t('profile:two_fa_sms_sub')}</span>
            </div>
          </div>
          <span
            className="change-link"
            onClick={handleChangePhone}
          >
            {t('profile:change_btn')}
          </span>
        </div>

        {/* Emergency Backup Codes */}
        <div className="backup-codes-block">
          <div className="top-meta">
            <span className="title">
              <Key size={12} />
              <span>{t('profile:backup_codes_title')}</span>
            </span>
            <span className="count">{t('profile:backup_codes_count')}</span>
          </div>

          <div className="codes-grid">
            <div>4920 - 8192</div>
            <div>7718 - 0244</div>
            <div>9104 - 3821</div>
            <div>6201 - 5589</div>
            <div>3319 - 4402</div>
            <div>8821 - 9015</div>
            <div>5012 - 7634</div>
            <div>1498 - 6620</div>
          </div>

          <div className="actions-row">
            <span className="copy-link" onClick={handleCopyCodes}>
              <Copy size={12} />
              <span>{t('profile:copy_all_btn')}</span>
            </span>
            <span
              className="regen-link"
              onClick={handleRegenCodes}
            >
              <RefreshCw size={12} />
              <span>{t('profile:regen_codes_btn')}</span>
            </span>
          </div>
        </div>
      </S.TwoFactorContent>
    </S.Card>
  );
}
