import { useTranslation } from 'react-i18next';
import { Bell, Sliders, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getQuickPayMethods } from '../../data/vip-elite-data';
import * as S from './VipSettingsPanel.styles';

interface VipSettingsPanelProps {
  isNotify2hEnabled: boolean;
  isAutoAiTasteEnabled: boolean;
  onToggleNotify2h: () => void;
  onToggleAutoAiTaste: () => void;
}

export function VipSettingsPanel({
  isNotify2hEnabled,
  isAutoAiTasteEnabled,
  onToggleNotify2h,
  onToggleAutoAiTaste,
}: VipSettingsPanelProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const quickPayMethods = getQuickPayMethods(t);

  const handleNavigatePaymentMethods = () => {
    navigate('/profile/payment-methods');
  };

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Sliders size={18} />
          </div>
          <h3>{t('profile:utilities_settings_title')}</h3>
        </div>
        <span className="auto-sync">{t('profile:auto_sync_label')}</span>
      </div>

      {/* Notification Toggles */}
      <div>
        <S.ToggleRow>
          <div className="text">
            <span className="title">
              <Bell size={13} />
              {t('profile:notif_2h_vip_title')}
            </span>
            <span className="sub">
              {t('profile:notif_2h_vip_sub')}
            </span>
          </div>
          <div
            className={`switch ${isNotify2hEnabled ? '' : 'off'}`}
            onClick={onToggleNotify2h}
          />
        </S.ToggleRow>

        <S.ToggleRow>
          <div className="text">
            <span className="title">
              <Sparkles size={13} />
              {t('profile:auto_ai_taste_title')}
            </span>
            <span className="sub">
              {t('profile:auto_ai_taste_sub')}
            </span>
          </div>
          <div
            className={`switch ${isAutoAiTasteEnabled ? '' : 'off'}`}
            onClick={onToggleAutoAiTaste}
          />
        </S.ToggleRow>
      </div>

      {/* 1-Click Payments */}
      <S.QuickPaySection>
        <S.QuickPayHeader>
          <span className="title">{t('profile:quick_pay_section_title')}</span>
          <span
            className="add-link"
            onClick={handleNavigatePaymentMethods}
          >
            {t('profile:add_card_link')}
          </span>
        </S.QuickPayHeader>

        <S.QuickPayList>
          {quickPayMethods.map((method) => (
            <S.QuickPayItem key={method.id}>
              <div className="left">
                <S.BrandIcon $bg={method.brandColor}>
                  {method.brandLabel}
                </S.BrandIcon>
                <div className="info">
                  <span className="name">{method.name}</span>
                  <span className="sub">{method.sub}</span>
                </div>
              </div>
              <span
                className={`badge${method.id === 'visa' ? ' verified' : ''}`}
              >
                {method.badge}
              </span>
            </S.QuickPayItem>
          ))}
        </S.QuickPayList>
      </S.QuickPaySection>
    </S.SectionCard>
  );
}
