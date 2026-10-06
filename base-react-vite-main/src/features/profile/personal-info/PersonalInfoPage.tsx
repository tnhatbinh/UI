import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import CinemaNoirShell from '../components/CinemaNoirShell';
import { UserProfileForm } from './components/UserProfileForm';
import { TasteSummaryCard } from './components/TasteSummaryCard';
import { QuickSecurityCard } from './components/QuickSecurityCard';
import { QuickPaymentCard } from './components/QuickPaymentCard';
import { NotificationOptionsCard } from './components/NotificationOptionsCard';
import { AccountControlCard } from './components/AccountControlCard';
import * as S from './PersonalInfoPage.styles';

export default function PersonalInfoPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <CinemaNoirShell pageTitle="Thông tin cá nhân">
      <S.ProfileContentGrid>
        {/* Left Column: Personal Form & Taste Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Main User Profile Card */}
          <UserProfileForm onSaveSuccess={showToast} />

          {/* Cinematic Taste Summary Card */}
          <TasteSummaryCard />
        </div>

        {/* Right Column: Quick Security, Payment, Notification widgets & Danger zone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Security & Login Widget */}
          <QuickSecurityCard />

          {/* Payment Methods Widget */}
          <QuickPaymentCard />

          {/* Notification Options */}
          <NotificationOptionsCard />

          {/* Account Control Danger Zone */}
          <AccountControlCard
            onLogoutDevices={() =>
              showToast('Đã gửi tín hiệu đăng xuất tất cả các thiết bị khác!')
            }
          />
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastNotification>
            <Sparkles size={16} color="#ff535a" />
            <span>{toastMessage}</span>
          </S.ToastNotification>
        )}
      </S.ProfileContentGrid>
    </CinemaNoirShell>
  );
}
