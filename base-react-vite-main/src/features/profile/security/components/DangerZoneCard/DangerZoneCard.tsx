import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import * as S from './DangerZoneCard.styles';

export function DangerZoneCard() {
  const { t } = useTranslation();
  const handleLockAccount = () => {};

  const handleDeleteAccount = () => {};

  return (
    <S.Container>
      <div className="header-line">
        <AlertTriangle size={16} />
        <span>{t('profile:danger_zone_title')}</span>
      </div>
      <span className="sub">
        {t('profile:danger_zone_sub')}
      </span>

      <div className="action-row">
        <div className="txt">
          <span className="name">{t('profile:lock_acc_30_title')}</span>
          <span className="desc">
            {t('profile:lock_acc_30_desc')}
          </span>
        </div>
        <button
          className="btn gray"
          onClick={handleLockAccount}
        >
          {t('profile:lock_acc_btn_text')}
        </button>
      </div>

      <div className="action-row">
        <div className="txt">
          <span className="name">{t('profile:delete_vip_acc_title')}</span>
          <span className="desc">
            {t('profile:delete_vip_acc_desc')}
          </span>
        </div>
        <button
          className="btn red"
          onClick={handleDeleteAccount}
        >
          {t('profile:delete_acc_btn_text')}
        </button>
      </div>
    </S.Container>
  );
}
