import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Laptop, Power, Smartphone, Monitor } from 'lucide-react';
import * as S from './ActiveSessionsCard.styles';

interface ActiveSessionsCardProps {
  onToast: (msg: string) => void;
}

export const ActiveSessionsCard: FC<ActiveSessionsCardProps> = ({
  onToast,
}) => {
  const { t } = useTranslation();

  const handleLogoutAllOther = () => {
    onToast(t('profile:toast_logout_others'));
  };

  const handleLogoutDevice = (deviceName: string) => () => {
    onToast(t('profile:toast_logout_dev', { name: deviceName }));
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Laptop size={17} color="#ff535a" />
            <span>{t('profile:active_sessions_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:active_sessions_sub')}
          </span>
        </div>
        <button
          type="button"
          className="logout-all-btn"
          onClick={handleLogoutAllOther}
        >
          <Power size={11} />
          <span>{t('profile:logout_all_others_btn')}</span>
        </button>
      </div>

      <S.DevicesList>
        {/* Device 1 */}
        <div className="device-item">
          <div className="left-side">
            <div className="icon-box">
              <Laptop size={18} />
            </div>
            <div className="info">
              <div className="name-row">
                <span className="name">MacBook Pro 16" (macOS Sonoma)</span>
                <span className="badge">{t('profile:current_device_badge')}</span>
              </div>
              <span className="meta">
                {t('profile:device_macbook_sub')}
              </span>
            </div>
          </div>
          <div className="right-side">
            <span className="online-badge">{t('profile:online_badge')}</span>
          </div>
        </div>

        {/* Device 2 */}
        <div className="device-item">
          <div className="left-side">
            <div className="icon-box">
              <Smartphone size={18} />
            </div>
            <div className="info">
              <div className="name-row">
                <span className="name">iPhone 15 Pro Max</span>
                <span className="badge">PhimBook App iOS</span>
              </div>
              <span className="meta">
                {t('profile:device_iphone_sub')}
              </span>
            </div>
          </div>
          <div className="right-side">
            <button
              type="button"
              className="kill-btn"
              title={t('profile:logout_device_tooltip')}
              onClick={handleLogoutDevice('iPhone 15 Pro Max')}
            >
              <Power size={13} />
            </button>
          </div>
        </div>

        {/* Device 3 */}
        <div className="device-item">
          <div className="left-side">
            <div className="icon-box">
              <Monitor size={18} />
            </div>
            <div className="info">
              <div className="name-row">
                <span className="name">Workstation Windows 11</span>
              </div>
              <span className="meta">
                {t('profile:device_windows_sub')}
              </span>
            </div>
          </div>
          <div className="right-side">
            <button
              type="button"
              className="kill-btn"
              title={t('profile:logout_device_tooltip')}
              onClick={handleLogoutDevice('Workstation Windows 11')}
            >
              <Power size={13} />
            </button>
          </div>
        </div>
      </S.DevicesList>
    </S.Card>
  );
};

export default ActiveSessionsCard;
