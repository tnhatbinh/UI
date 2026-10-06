import styled from 'styled-components';

export const LocationWrapper = styled.div`
  position: relative;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const LocationBadge = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  gap: 4px;
  height: 28px;
  background: ${({ $isOpen }) => ($isOpen ? '#2a2a2b' : '#1c1b1c')};
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background: #2a2a2b;
  }

  span {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.66px;
    color: #e5e2e3;
    white-space: nowrap;
  }

  .loc-icon {
    color: #ffb955;
    font-size: 12px;
  }
  .chevron-icon {
    color: #ae8786;
    font-size: 10px;
    margin-left: auto;
    transition: transform 0.2s ease;
    ${({ $isOpen }) => $isOpen && 'transform: rotate(180deg);'}
  }
`;

export const LocationDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 140px;
  background: rgba(28, 27, 28, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.8);
  padding: 6px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LocationItem = styled.button<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 83, 90, 0.15)' : 'transparent'};
  cursor: pointer;
  transition: all 0.15s ease;

  span {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '500')};
    color: ${({ $isSelected }) => ($isSelected ? '#ffb955' : '#e5e2e3')};
    white-space: nowrap;
  }

  .check-icon {
    color: #ffb955;
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 83, 90, 0.12);
    span {
      color: #ffb955;
    }
  }
`;
