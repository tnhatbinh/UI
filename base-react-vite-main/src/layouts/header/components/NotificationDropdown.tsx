import { useRef, useState } from 'react';
import { Award, Bell, CheckCheck, Gift, Sparkles, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  INITIAL_NOTIFICATIONS,
  type NotificationItem,
} from '../data/header-data';
import { useClickOutside } from '../hooks/use-click-outside';
import {
  NotificationBtn,
  NotificationDropdown,
  NotificationDropdownFooter,
  NotificationDropdownHeader,
  NotificationItem as StyledNotificationItem,
  NotificationList,
  NotificationTab,
  NotificationTabs,
  NotificationWrapper,
} from './NotificationDropdown.styles';

interface NotificationDropdownProps {
  onCloseOthers: () => void;
  onScrollOrNavigate: (sectionId: string) => void;
}

const TYPE_ICON: Record<NotificationItem['type'], React.ReactNode> = {
  ticket: <Ticket size={15} />,
  voucher: <Gift size={15} />,
  release: <Sparkles size={15} />,
  points: <Award size={15} />,
};

export function NotificationDropdownMenu({
  onCloseOthers,
  onScrollOrNavigate,
}: NotificationDropdownProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [notifTab, setNotifTab] = useState<'all' | 'offers'>('all');
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside([ref], [() => setIsOpen(false)]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const filteredNotifications =
    notifTab === 'offers'
      ? notifications.filter((n) => n.category === 'offers')
      : notifications;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleItemClick = (item: NotificationItem) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === item.id ? { ...n, unread: false } : n)),
    );
    setIsOpen(false);
    navigate(item.link);
  };

  return (
    <NotificationWrapper ref={ref}>
      <NotificationBtn
        title="Thông báo"
        $isOpen={isOpen}
        onClick={() => {
          setIsOpen((v) => !v);
          onCloseOthers();
        }}
      >
        <Bell size={14} className="bell-icon" />
        {unreadCount > 0 && <span className="badge-dot" />}
      </NotificationBtn>

      {isOpen && (
        <NotificationDropdown>
          <NotificationDropdownHeader>
            <div className="header-left">
              <span className="title">Thông báo</span>
              {unreadCount > 0 && (
                <span className="count-badge">{unreadCount} mới</span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                className="mark-read-btn"
                onClick={markAllAsRead}
              >
                <CheckCheck size={12} />
                <span>Đã đọc hết</span>
              </button>
            )}
          </NotificationDropdownHeader>

          <NotificationTabs>
            <NotificationTab
              type="button"
              $isActive={notifTab === 'all'}
              onClick={() => setNotifTab('all')}
            >
              Tất cả
            </NotificationTab>
            <NotificationTab
              type="button"
              $isActive={notifTab === 'offers'}
              onClick={() => setNotifTab('offers')}
            >
              Ưu đãi & Quà tặng
            </NotificationTab>
          </NotificationTabs>

          <NotificationList>
            {filteredNotifications.length === 0 ? (
              <div
                style={{
                  padding: '24px 12px',
                  textAlign: 'center',
                  color: '#79767a',
                  fontSize: '12px',
                }}
              >
                Không có thông báo nào
              </div>
            ) : (
              filteredNotifications.map((item) => (
                <StyledNotificationItem
                  key={item.id}
                  $isUnread={item.unread}
                  onClick={() => handleItemClick(item)}
                >
                  <div className={`item-icon-box ${item.type}`}>
                    {TYPE_ICON[item.type]}
                  </div>
                  <div className="item-content">
                    <span className="item-title">{item.title}</span>
                    <span className="item-desc">{item.desc}</span>
                    <span className="item-time">{item.time}</span>
                  </div>
                  {item.unread && <span className="unread-dot" />}
                </StyledNotificationItem>
              ))
            )}
          </NotificationList>

          <NotificationDropdownFooter>
            <button
              type="button"
              className="view-all-link"
              onClick={() => {
                setIsOpen(false);
                onScrollOrNavigate('uu-dai');
              }}
            >
              Xem tất cả ưu đãi & sự kiện
            </button>
          </NotificationDropdownFooter>
        </NotificationDropdown>
      )}
    </NotificationWrapper>
  );
}
