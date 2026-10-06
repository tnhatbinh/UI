import styled from 'styled-components';

export const LangWrapper = styled.div`
  position: relative;
`;

export const LangBadge = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 8px;
  gap: 6px;
  height: 28px;
  background: ${({ $isOpen }) => ($isOpen ? '#2a2a2b' : '#1c1b1c')};
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background: #2a2a2b;
  }

  @media (max-width: 380px) {
    padding: 4px 6px;
    gap: 4px;
    height: 26px;

    .chevron-icon {
      display: none;
    }
  }

  .flag-img {
    width: 18px;
    height: 13px;
    border-radius: 2px;
    object-fit: cover;
  }

  .chevron-icon {
    color: #ae8786;
    font-size: 10px;
    transition: transform 0.2s ease;
    ${({ $isOpen }) => $isOpen && 'transform: rotate(180deg);'}
  }
`;

export const LangDropdown = styled.div`
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
`;

export const LangItem = styled.button<{ $isSelected?: boolean }>`
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

  span.lang-label {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '500')};
    color: ${({ $isSelected }) => ($isSelected ? '#ffb955' : '#e5e2e3')};
    white-space: nowrap;
  }

  .flag-img {
    width: 18px;
    height: 13px;
    border-radius: 2px;
    object-fit: cover;
  }

  &:hover {
    background: rgba(255, 83, 90, 0.12);
    span.lang-label {
      color: #ffb955;
    }
  }
`;
