import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import CinemaNoirShell from '../components/CinemaNoirShell';
import { ChangePasswordCard } from './components/ChangePasswordCard';
import { ActiveSessionsCard } from './components/ActiveSessionsCard';
import { TwoFactorAuthCard } from './components/TwoFactorAuthCard';
import { BiometricsCard } from './components/BiometricsCard';
import { DangerZoneCard } from './components/DangerZoneCard';
import * as S from './SecurityPage.styles';

export default function SecurityPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <CinemaNoirShell pageTitle="Bảo mật & Mật khẩu">
      <S.SecurityGrid>
        {/* Left Column: Password update & Active Sessions */}
        <S.LeftColumn>
          <ChangePasswordCard onSuccess={showToast} />
          <ActiveSessionsCard onToast={showToast} />
        </S.LeftColumn>

        {/* Right Column: 2FA, Biometrics & Danger Zone */}
        <S.RightColumn>
          <TwoFactorAuthCard onToast={showToast} />
          <BiometricsCard />
          <DangerZoneCard />
        </S.RightColumn>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastNotification>
            <Sparkles size={16} color="#ff535a" />
            <span>{toastMessage}</span>
          </S.ToastNotification>
        )}
      </S.SecurityGrid>
    </CinemaNoirShell>
  );
}
