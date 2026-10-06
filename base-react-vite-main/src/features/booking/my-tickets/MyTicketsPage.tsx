import { Sparkles } from 'lucide-react';
import * as S from './MyTicketsPage.styles';
import { useMyTickets } from './hooks/use-my-tickets';
import {
  PAST_TICKETS,
  RECENT_PAST_TICKETS,
  VOUCHERS,
} from './data/past-tickets.data';
import { ActiveTicket } from './components/ActiveTicket/ActiveTicket';
import { TicketHistory } from './components/TicketHistory/TicketHistory';
import { VouchersSection } from './components/vouchers/VouchersSection';
import { UrgentSupport } from './components/UrgentSupport/UrgentSupport';

export default function MyTicketsPage() {
  const {
    activeTab,
    setActiveTab,
    historyFilter,
    setHistoryFilter,
    activeTicket,
    toastMessage,
    triggerToast,
    handleCopyCode,
  } = useMyTickets();

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* Page Header */}
        <S.PageHeader>
          <div className="title-meta">
            <span className="sub-tag">CINEPASS LUXURY SERVICE</span>
            <div className="title-row">
              <h1>Vé Của Tôi</h1>
              <span className="eng-sub">/ My Tickets &amp; Passes</span>
            </div>
          </div>

          <div className="tabs-group">
            <S.TabPill
              $isActive={activeTab === 'upcoming'}
              onClick={() => setActiveTab('upcoming')}
            >
              Vé Sắp Xem ( 1 )
            </S.TabPill>
            <S.TabPill
              $isActive={activeTab === 'history'}
              onClick={() => setActiveTab('history')}
            >
              Lịch Sử Đặt Vé ( 8 )
            </S.TabPill>
            <S.TabPill
              $isActive={activeTab === 'vouchers'}
              onClick={() => setActiveTab('vouchers')}
            >
              Voucher &amp; Ưu Đãi ( 3 )
            </S.TabPill>
          </div>
        </S.PageHeader>

        {/* TAB 1: VÉ SẮP XEM */}
        {activeTab === 'upcoming' && (
          <>
            <ActiveTicket ticket={activeTicket} onToast={triggerToast} />

            {/* Teaser lịch sử gần đây */}
            <TicketHistory
              tickets={RECENT_PAST_TICKETS}
              title="Lịch Sử Đặt Vé Gần Đây"
              subtitle="Các tác phẩm điện ảnh đỉnh cao bạn đã thưởng thức tại hệ thống PhimBook"
              historyFilter={historyFilter}
              onFilterChange={setHistoryFilter}
              onToast={triggerToast}
              onViewAll={() => setActiveTab('history')}
            />
          </>
        )}

        {/* TAB 2: LỊCH SỬ ĐẶT VÉ TOÀN DIỆN */}
        {activeTab === 'history' && (
          <TicketHistory
            tickets={PAST_TICKETS}
            title="Toàn Bộ Lịch Sử Đặt Vé ( 8 Buổi Chiếu )"
            subtitle="Lưu trữ vĩnh viễn các giao dịch, đánh giá phim và điểm thưởng CinePass"
            historyFilter={historyFilter}
            onFilterChange={setHistoryFilter}
            onToast={triggerToast}
            exportLabel="Xuất Hóa Đơn VAT"
            exportToast="Đang xuất tệp hóa đơn điện tử VAT (.pdf)..."
          />
        )}

        {/* TAB 3: VOUCHER & ƯU ĐÃI */}
        {activeTab === 'vouchers' && (
          <VouchersSection vouchers={VOUCHERS} onCopyCode={handleCopyCode} />
        )}

        {/* 24/7 Urgent Support */}
        <UrgentSupport onToast={triggerToast} />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastPill>
            <Sparkles size={16} className="toast-icon" />
            <span>{toastMessage}</span>
          </S.ToastPill>
        )}
      </S.InnerWrapper>
    </S.PageContainer>
  );
}
