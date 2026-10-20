import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, MessageSquare, Mail } from 'lucide-react';
import * as S from './NotificationChannelsCard.styles';

export function NotificationChannelsCard() {
  const { t } = useTranslation();
  const [isAppPushEnabled, setIsAppPushEnabled] = useState(true);
  const [isSmsZaloEnabled, setIsSmsZaloEnabled] = useState(true);
  const [isEmailNewsEnabled, setIsEmailNewsEnabled] = useState(true);

  const handleToggleAppPush = () => {
    setIsAppPushEnabled((prev) => !prev);
  };

  const handleToggleSmsZalo = () => {
    setIsSmsZaloEnabled((prev) => !prev);
  };

  const handleToggleEmailNews = () => {
    setIsEmailNewsEnabled((prev) => !prev);
  };

  const activeCount = [isAppPushEnabled, isSmsZaloEnabled, isEmailNewsEnabled].filter(Boolean).length;

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Bell size={17} color="#ff535a" />
            <span>{t('profile:notif_channels_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:notif_channels_sub')}
          </span>
        </div>
        <span className="badge">
          {t('profile:channels_active_badge', { count: activeCount })}
        </span>
      </div>

      <S.ChannelRowList>
        <div className="channel-item">
          <div className="left">
            <div className="icon-box">
              <Bell size={18} />
            </div>
            <div className="text">
              <span className="name">{t('profile:channel_push_name')}</span>
              <span className="desc">
                {t('profile:channel_push_desc')}
              </span>
            </div>
          </div>
          <div
            className={`switch ${isAppPushEnabled ? '' : 'off'}`}
            onClick={handleToggleAppPush}
          />
        </div>

        <div className="channel-item">
          <div className="left">
            <div className="icon-box">
              <MessageSquare size={18} />
            </div>
            <div className="text">
              <span className="name">{t('profile:channel_zalo_name')}</span>
              <span className="desc">
                {t('profile:channel_zalo_desc')}
              </span>
            </div>
          </div>
          <div
            className={`switch ${isSmsZaloEnabled ? '' : 'off'}`}
            onClick={handleToggleSmsZalo}
          />
        </div>

        <div className="channel-item">
          <div className="left">
            <div className="icon-box">
              <Mail size={18} />
            </div>
            <div className="text">
              <span className="name">{t('profile:channel_email_name')}</span>
              <span className="desc">
                {t('profile:channel_email_desc')}
              </span>
            </div>
          </div>
          <div
            className={`switch ${isEmailNewsEnabled ? '' : 'off'}`}
            onClick={handleToggleEmailNews}
          />
        </div>
      </S.ChannelRowList>
    </S.Card>
  );
}
