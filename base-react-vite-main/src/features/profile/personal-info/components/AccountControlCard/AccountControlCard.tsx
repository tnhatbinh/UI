import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, LogOut, AlertTriangle } from 'lucide-react';
import * as S from './AccountControlCard.styles';

interface AccountControlCardProps {
  onLogoutDevices: () => void;
}

export const AccountControlCard: FC<AccountControlCardProps> = ({
  onLogoutDevices,
}) => {
  const { t } = useTranslation();
  const handleLockAccount = () => {};

  return (
    <S.Card>
      <div className="card-title">
        <Shield size={14} />
        <span>{t('profile:account_control_title')}</span>
      </div>

      <div className="btn-row">
        <button
          type="button"
          className="device-logout"
          onClick={onLogoutDevices}
        >
          <LogOut size={13} />
          <span>{t('profile:logout_devices_btn')}</span>
        </button>

        <button
          type="button"
          className="lock-acc"
          onClick={handleLockAccount}
        >
          <AlertTriangle size={13} />
          <span>{t('profile:lock_account_btn')}</span>
        </button>
      </div>
    </S.Card>
  );
};

export default AccountControlCard;
