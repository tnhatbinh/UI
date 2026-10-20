import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './TicketShowtimesNotifCard.styles';

export function TicketShowtimesNotifCard() {
  const { t } = useTranslation();
  const [isNotify2hEnabled, setIsNotify2hEnabled] = useState(true);
  const [isNotify24hEnabled, setIsNotify24hEnabled] = useState(true);
  const [isNotifyEmergencyEnabled, setIsNotifyEmergencyEnabled] = useState(true);
  const [isNotifyReviewEnabled, setIsNotifyReviewEnabled] = useState(true);

  const handleToggleNotify2h = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotify2hEnabled(e.target.checked);
  };

  const handleToggleNotify24h = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotify24hEnabled(e.target.checked);
  };

  const handleToggleNotifyEmergency = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyEmergencyEnabled(e.target.checked);
  };

  const handleToggleNotifyReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyReviewEnabled(e.target.checked);
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <span>{t('profile:notif_tickets_showtimes_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:notif_tickets_showtimes_sub')}
          </span>
        </div>
      </div>

      <S.CheckOptionList>
        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotify2hEnabled}
            onChange={handleToggleNotify2h}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">{t('profile:notif_2h_title')}</span>
              <span className="pill">{t('profile:recommended_pill')}</span>
            </div>
            <span className="desc">
              {t('profile:notif_2h_full_desc')}
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotify24hEnabled}
            onChange={handleToggleNotify24h}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">{t('profile:notif_24h_title')}</span>
            </div>
            <span className="desc">
              {t('profile:notif_24h_desc')}
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotifyEmergencyEnabled}
            onChange={handleToggleNotifyEmergency}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                {t('profile:notif_emergency_title')}
              </span>
            </div>
            <span className="desc">
              {t('profile:notif_emergency_desc')}
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotifyReviewEnabled}
            onChange={handleToggleNotifyReview}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                {t('profile:notif_review_title')}
              </span>
            </div>
            <span className="desc">
              {t('profile:notif_review_desc')}
            </span>
          </div>
        </label>
      </S.CheckOptionList>
    </S.Card>
  );
}
