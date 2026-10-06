import { useState } from 'react';
import { DEFAULT_ACTIVE_TICKET } from '../data/active-ticket.data';
import type { ActiveTicketData } from '../data/active-ticket.data';

export type TabType = 'upcoming' | 'history' | 'vouchers';

export function useMyTickets() {
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');
  const [historyFilter, setHistoryFilter] = useState('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [activeTicket] = useState<ActiveTicketData>(() => {
    try {
      const savedTicketStr = localStorage.getItem('phimbook_active_ticket');
      if (savedTicketStr) {
        const parsed = JSON.parse(savedTicketStr);
        if (parsed && parsed.movieTitle) {
          return { ...DEFAULT_ACTIVE_TICKET, ...parsed };
        }
      }
    } catch {
      // Keep default
    }
    return DEFAULT_ACTIVE_TICKET;
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleCopyCode = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    triggerToast(`Đã sao chép mã ưu đãi: ${code}`);
  };

  return {
    activeTab,
    setActiveTab,
    historyFilter,
    setHistoryFilter,
    activeTicket,
    toastMessage,
    triggerToast,
    handleCopyCode,
  };
}
