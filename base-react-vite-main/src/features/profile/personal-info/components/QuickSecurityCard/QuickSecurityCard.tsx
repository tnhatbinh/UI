import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Shield, Smartphone, KeyRound, Fingerprint } from 'lucide-react';
import * as S from './QuickSecurityCard.styles';

export const QuickSecurityCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isBiometricLoginEnabled, setIsBiometricLoginEnabled] = useState(true);

  const handleNavigateSecurity = () => {
    navigate('/profile/security');
  };

  const handleToggleBiometricLogin = () => {
    setIsBiometricLoginEnabled((prev) => !prev);
  };

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <Shield size={16} color="#ff535a" />
            <span>{t('profile:security_login_title')}</span>
          </h3>
        </div>
        <span className="level-badge">{t('profile:high_security_level')}</span>
      </div>

      <S.SideItemList>
        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <Smartphone size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:two_fa_name')}</span>
              <span className="desc">{t('profile:two_fa_desc')}</span>
            </div>
          </div>
          <span className="badge-on">{t('profile:two_fa_on')}</span>
        </div>

        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <KeyRound size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:account_password')}</span>
              <span className="desc">{t('profile:password_updated_ago')}</span>
            </div>
          </div>
          <button
            className="action-btn"
            onClick={handleNavigateSecurity}
          >
            {t('profile:change_code_btn')}
          </button>
        </div>

        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <Fingerprint size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:biometric_login')}</span>
              <span className="desc">{t('profile:biometric_desc')}</span>
            </div>
          </div>
          <S.ToggleSwitch
            $active={isBiometricLoginEnabled}
            onClick={handleToggleBiometricLogin}
            title={t('profile:toggle_biometric_title')}
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>
      </S.SideItemList>
    </S.Card>
  );
};

export default QuickSecurityCard;
