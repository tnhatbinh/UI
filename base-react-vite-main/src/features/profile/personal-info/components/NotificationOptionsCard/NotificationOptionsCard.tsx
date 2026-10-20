import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './NotificationOptionsCard.styles';

export const NotificationOptionsCard: FC = () => {
  const { t } = useTranslation();
  const [isNotify2hEnabled, setIsNotify2hEnabled] = useState(true);
  const [isNotifyEarlyEnabled, setIsNotifyEarlyEnabled] = useState(true);
  const [isNotifyVatEnabled, setIsNotifyVatEnabled] = useState(true);

  const handleToggleNotify2h = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotify2hEnabled(e.target.checked);
  };

  const handleToggleNotifyEarly = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyEarlyEnabled(e.target.checked);
  };

  const handleToggleNotifyVat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyVatEnabled(e.target.checked);
  };

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <span>{t('profile:notification_options_title')}</span>
          </h3>
        </div>
      </div>

      <S.NotificationCheckGroup>
        <label className="check-item">
          <input
            type="checkbox"
            checked={isNotify2hEnabled}
            onChange={handleToggleNotify2h}
          />
          <div className="text">
            <span className="title">{t('profile:notif_2h_title')}</span>
            <span className="sub">{t('profile:notif_2h_desc')}</span>
          </div>
        </label>

        <label className="check-item">
          <input
            type="checkbox"
            checked={isNotifyEarlyEnabled}
            onChange={handleToggleNotifyEarly}
          />
          <div className="text">
            <span className="title">{t('profile:notif_early_title')}</span>
            <span className="sub">{t('profile:notif_early_desc')}</span>
          </div>
        </label>

        <label className="check-item">
          <input
            type="checkbox"
            checked={isNotifyVatEnabled}
            onChange={handleToggleNotifyVat}
          />
          <div className="text">
            <span className="title">{t('profile:notif_vat_title')}</span>
            <span className="sub">{t('profile:notif_vat_desc')}</span>
          </div>
        </label>
      </S.NotificationCheckGroup>
    </S.Card>
  );
};

export default NotificationOptionsCard;
