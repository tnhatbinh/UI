import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import CinemaNoirShell from '../components/CinemaNoirShell';
import { LinkedPaymentMethodsCard } from './components/LinkedPaymentMethodsCard';
import { VouchersCard } from './components/VouchersCard';
import { VatInvoiceCard } from './components/VatInvoiceCard';
import { RecentTransactionsCard } from './components/RecentTransactionsCard';
import * as S from './PaymentMethodsPage.styles';

export default function PaymentMethodsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <CinemaNoirShell pageTitle="Phương thức thanh toán">
      <S.PaymentGrid>
        {/* Left Column: Linked Cards & Wallets */}
        <S.LeftColumn>
          <LinkedPaymentMethodsCard onToast={showToast} />
        </S.LeftColumn>

        {/* Right Column: Vouchers, VAT Invoice, Recent Transactions */}
        <S.RightColumn>
          <VouchersCard onToast={showToast} />
          <VatInvoiceCard />
          <RecentTransactionsCard />
        </S.RightColumn>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastNotification>
            <Sparkles size={16} color="#ff535a" />
            <span>{toastMessage}</span>
          </S.ToastNotification>
        )}
      </S.PaymentGrid>
    </CinemaNoirShell>
  );
}
