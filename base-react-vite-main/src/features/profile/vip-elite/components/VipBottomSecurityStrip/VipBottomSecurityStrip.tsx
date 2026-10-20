import { useTranslation } from 'react-i18next';
import { LogOut, Shield } from 'lucide-react';
import * as S from './VipBottomSecurityStrip.styles';

interface VipBottomSecurityStripProps {
  onNavigateTickets: () => void;
  onShowPrivilegeTerms: () => void;
  onLogout: () => void;
}

export function VipBottomSecurityStrip({
  onNavigateTickets,
  onShowPrivilegeTerms,
  onLogout,
}: VipBottomSecurityStripProps) {
  const { t } = useTranslation();

  return (
    <S.BottomSecurityStrip>
      <div className="left-sec">
        <Shield size={14} className="icon" />
        <span>
          {t('profile:vip_security_note')}
        </span>
      </div>

      <div className="links">
        <a onClick={onNavigateTickets}>{t('profile:transaction_history_link')}</a>
        <span>•</span>
        <a onClick={onShowPrivilegeTerms}>{t('profile:privilege_terms_link')}</a>
        <span>•</span>
        <span className="logout-btn" onClick={onLogout}>
          <LogOut size={12} />
          <span>{t('profile:logout_btn')}</span>
        </span>
      </div>
    </S.BottomSecurityStrip>
  );
}
