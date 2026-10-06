import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import CinemaNoirShell from '../components/CinemaNoirShell';
import { NotificationChannelsCard } from './components/NotificationChannelsCard';
import { TicketShowtimesNotifCard } from './components/TicketShowtimesNotifCard';
import { ExclusiveOffersCard } from './components/ExclusiveOffersCard';
import { EmailFrequencyCard } from './components/EmailFrequencyCard';
import { ConciergeHelpCard } from './components/ConciergeHelpCard';
import * as S from './NotificationSettingsPage.styles';

export default function NotificationSettingsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <CinemaNoirShell pageTitle="Cài đặt thông báo & Ưu đãi">
      <S.NotifGrid>
        {/* Left Column: Notification Channels & Showtimes/Tickets */}
        <S.LeftColumn>
          <NotificationChannelsCard />
          <TicketShowtimesNotifCard />
        </S.LeftColumn>

        {/* Right Column: Exclusive Offers & Email Frequency */}
        <S.RightColumn>
          <ExclusiveOffersCard />
          <EmailFrequencyCard onToast={showToast} />
          <ConciergeHelpCard />
        </S.RightColumn>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastNotification>
            <CheckCircle size={16} color="#ff535a" />
            <span>{toastMessage}</span>
          </S.ToastNotification>
        )}
      </S.NotifGrid>
    </CinemaNoirShell>
  );
}
