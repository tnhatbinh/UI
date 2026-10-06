import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  position: relative;
`;

export const NotificationBtn = styled.button<{ $isOpen?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background: ${({ $isOpen }) =>
    $isOpen ? 'rgba(255, 83, 90, 0.18)' : '#1c1b1c'};
  border-radius: 9999px;
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? 'rgba(255, 83, 90, 0.4)' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 520px) {
    display: none;
  }

  .bell-icon {
    color: ${({ $isOpen }) => ($isOpen ? '#ffffff' : '#e7bcba')};
    font-size: 15px;
    transition: color 0.15s ease;
  }

  .badge-dot {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 8px;
    height: 8px;
    background: #ff535a;
    border-radius: 9999px;
    box-shadow: 0px 0px 0px 2px #0e0e0f;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    .bell-icon {
      color: #ffffff;
    }
  }
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 360px;
  max-width: calc(100vw - 32px);
  background: rgba(22, 21, 24, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.95);
  padding: 14px;
  z-index: 120;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: notifFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes notifFadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 480px) {
    right: 0;
    width: min(340px, calc(100vw - 24px));
  }
`;

export const NotificationDropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  .header-left {
    display: flex;
    align-items: center;
    gap: 8px;

    .title {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.3px;
    }

    .count-badge {
      padding: 2px 7px;
      background: rgba(255, 83, 90, 0.2);
      border: 1px solid rgba(255, 83, 90, 0.4);
      color: #ffb3b0;
      border-radius: 9999px;
      font-size: 10px;
      font-weight: 700;
    }
  }

  .mark-read-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    color: #ffb955;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 6px;
    transition: all 0.15s ease;

    &:hover {
      background: rgba(255, 185, 85, 0.1);
      color: #ffd08a;
    }
  }
`;

export const NotificationTabs = styled.div`
  display: flex;
  gap: 6px;
  padding: 2px 0;
`;

export const NotificationTab = styled.button<{ $isActive?: boolean }>`
  padding: 4px 10px;
  border-radius: 9999px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? 'rgba(255, 83, 90, 0.4)' : 'transparent')};
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 83, 90, 0.15)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${({ $isActive }) => ($isActive ? '#ffb3b0' : '#ae8786')};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 290px;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
  }
`;

export const NotificationItem = styled.div<{ $isUnread?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ $isUnread }) =>
    $isUnread ? 'rgba(255, 83, 90, 0.06)' : 'rgba(255, 255, 255, 0.02)'};
  border: 1px solid
    ${({ $isUnread }) =>
      $isUnread ? 'rgba(255, 83, 90, 0.18)' : 'rgba(255, 255, 255, 0.04)'};
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateX(2px);
  }

  .item-icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    flex-shrink: 0;
    margin-top: 2px;

    &.ticket {
      background: rgba(255, 83, 90, 0.18);
      color: #ff535a;
    }
    &.voucher {
      background: rgba(255, 185, 85, 0.18);
      color: #ffb955;
    }
    &.release {
      background: rgba(168, 85, 247, 0.18);
      color: #c084fc;
    }
    &.points {
      background: rgba(34, 197, 94, 0.18);
      color: #4ade80;
    }
  }

  .item-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex: 1;

    .item-title {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: #ffffff;
      line-height: 16px;
    }

    .item-desc {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 400;
      color: #ae8786;
      line-height: 15px;
    }

    .item-time {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 10px;
      color: #79767a;
      margin-top: 2px;
    }
  }

  .unread-dot {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background: #ff535a;
    margin-top: 6px;
    flex-shrink: 0;
  }
`;

export const NotificationDropdownFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .view-all-link {
    display: flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #ae8786;
    cursor: pointer;
    transition: color 0.15s ease;

    &:hover {
      color: #ffffff;
    }
  }

  .view-all-link {
    color: #ffb955;
    font-weight: 600;

    &:hover {
      color: #ffd08a;
    }
  }
`;
