import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Fingerprint } from 'lucide-react';
import * as S from './BiometricsCard.styles';

export function BiometricsCard() {
  const { t } = useTranslation();
  const [isPasskeyEnabled, setIsPasskeyEnabled] = useState(true);

  const handleTogglePasskey = () => {
    setIsPasskeyEnabled((prev) => !prev);
  };

  const handleEditPin = () => {};

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Fingerprint size={16} color="#ff535a" />
            <span>{t('profile:biometrics_pin_title')}</span>
          </h3>
          <span className="sub">{t('profile:biometrics_pin_sub')}</span>
        </div>
      </div>

      <S.BiometricContent>
        <div className="setting-item">
          <div className="info">
            <span className="title">{t('profile:passkey_title')}</span>
            <span className="desc">
              {t('profile:passkey_desc')}
            </span>
          </div>
          <S.ToggleSwitch
            $active={isPasskeyEnabled}
            onClick={handleTogglePasskey}
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>

        <div className="setting-item bordered">
          <div className="info">
            <span className="title">{t('profile:pin_code_title')}</span>
            <span className="desc">
              {t('profile:pin_code_desc')}
            </span>
          </div>
          <div className="action-row">
            <div className="pin-dots">● ● ● ● ● ●</div>
            <span
              className="edit-pin-link"
              onClick={handleEditPin}
            >
              {t('profile:edit_pin_btn')}
            </span>
          </div>
        </div>
      </S.BiometricContent>
    </S.Card>
  );
}
