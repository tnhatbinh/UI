import styled from 'styled-components';

export const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 90;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition:
    opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const SidebarWrapper = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  max-width: 88vw;
  height: 100vh;
  height: 100dvh;
  z-index: 100;
  background: linear-gradient(180deg, #161517 0%, #100f11 100%);
  border-left: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: -16px 0px 50px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition:
    transform 0.32s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;

  @media (max-width: 480px) {
    width: 310px;
    max-width: 86vw;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 16px 18px;
  }
`;

export const SidebarHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1.2px;
  color: #ffffff;
  text-transform: uppercase;

  .header-icon {
    color: #ffb955;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e5e2e3;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 83, 90, 0.2);
    border-color: rgba(255, 83, 90, 0.4);
    color: #ffb955;
    transform: scale(1.05);
  }
`;

export const ScrollContent = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 16px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 12px 14px 20px;
    gap: 16px;
  }

  /* Custom Slim Scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 185, 85, 0.3);
  }
`;

export const QuickLangBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);

  .lang-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11.5px;
      font-weight: 600;
      color: #e5e2e3;

      .icon {
        color: #ffb955;
      }
    }
  }

  .lang-chips-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
`;

export const LangChip = styled.button<{ $isSelected?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 8px;
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? 'rgba(255, 185, 85, 0.55)' : 'rgba(255, 255, 255, 0.07)'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 185, 85, 0.16)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${({ $isSelected }) => ($isSelected ? '#ffb955' : '#c5b8b8')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 11px;
  font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '500')};
  cursor: pointer;
  transition: all 0.15s ease;

  .flag-img {
    width: 16px;
    height: 12px;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 185, 85, 0.35);
  }
`;

export const QuickLocationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);

  .loc-title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11.5px;
    font-weight: 600;
    color: #e5e2e3;

    .icon {
      color: #ffb955;
    }
  }

  .city-chips {
    display: flex;
    gap: 4px;
  }
`;

export const CityChip = styled.button<{ $isSelected?: boolean }>`
  padding: 4px 7px;
  border-radius: 6px;
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? 'rgba(255, 185, 85, 0.45)' : 'transparent'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 185, 85, 0.15)' : 'rgba(255, 255, 255, 0.04)'};
  color: ${({ $isSelected }) => ($isSelected ? '#ffb955' : '#ae8786')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 10.5px;
  font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '500')};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SectionHeader = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ae8786;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavItemBtn = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? 'rgba(255, 185, 85, 0.35)' : 'transparent'};
  background: ${({ $isActive }) =>
    $isActive
      ? 'linear-gradient(90deg, rgba(255, 83, 90, 0.16) 0%, rgba(255, 185, 85, 0.08) 100%)'
      : 'transparent'};
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;

  .item-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .item-icon {
    width: 18px;
    height: 18px;
    color: ${({ $isActive }) => ($isActive ? '#ffb955' : '#ae8786')};
    transition:
      color 0.2s ease,
      transform 0.2s ease;
    flex-shrink: 0;
  }

  .item-title {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 13.5px;
    font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
    color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#e5e2e3')};
    transition: color 0.2s ease;
  }

  .item-arrow {
    color: ${({ $isActive }) =>
      $isActive ? '#ffb955' : 'rgba(255, 255, 255, 0.2)'};
    font-size: 14px;
    transition:
      transform 0.2s ease,
      color 0.2s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.12);

    .item-icon {
      color: #ffb955;
      transform: scale(1.1);
    }
    .item-title {
      color: #ffffff;
    }
    .item-arrow {
      color: #ffb955;
      transform: translateX(2px);
    }
  }
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 6px 10px;
`;

export const SidebarFooter = styled.div`
  padding: 16px 20px;
  padding-bottom: max(16px, env(safe-area-inset-bottom, 16px));
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(14, 13, 15, 0.7);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    padding: 12px 16px;
    padding-bottom: max(14px, env(safe-area-inset-bottom, 14px));
    gap: 10px;
  }
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);

  .user-meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #ffb3b0;
    color: #680010;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }

  .user-details {
    display: flex;
    flex-direction: column;

    .name {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.2;
    }

    .status {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 500;
      color: #ffb955;
      margin-top: 2px;
    }
  }
`;

export const ActionBtn = styled.button<{ $isLogout?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid
    ${({ $isLogout }) => ($isLogout ? 'rgba(255, 83, 90, 0.3)' : 'transparent')};
  background: ${({ $isLogout }) =>
    $isLogout ? 'rgba(255, 83, 90, 0.12)' : 'var(--primary)'};
  color: ${({ $isLogout }) => ($isLogout ? '#ff535a' : '#ffffff')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $isLogout }) =>
      $isLogout ? 'rgba(255, 83, 90, 0.22)' : '#e0353c'};
    color: ${({ $isLogout }) => ($isLogout ? '#ffb3b0' : '#ffffff')};
    transform: translateY(-1px);
  }
`;
