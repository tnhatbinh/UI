import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px;
  gap: 16px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  min-height: 190px;
  z-index: 3;
  position: relative;

  @media (max-width: 1280px) {
    padding: 0 16px;
    height: auto;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
`;

/* ================== TẦNG 1: TABS TRẠNG THÁI + QUICK VIEW ================== */
export const StateTabsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
  min-height: 48px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    height: auto;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px;
  min-height: 48px;
  background: #1c1b1c;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  gap: 4px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TabButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  height: 36px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ $isActive }) => ($isActive ? '#FF535A' : 'transparent')};
  box-shadow: ${({ $isActive }) =>
    $isActive
      ? '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)'
      : 'none'};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? '#ff3b43' : 'rgba(255, 255, 255, 0.05)'};
  }

  @media (max-width: 640px) {
    padding: 8px 12px;
    flex: 1;
    justify-content: center;
  }
`;

export const TabIconBox = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  color: ${({ $isActive }) => ($isActive ? '#5B000D' : '#E7BCBA')};
`;

export const TabText = styled.span<{ $isActive?: boolean }>`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  color: ${({ $isActive }) => ($isActive ? '#5B000D' : '#E7BCBA')};

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const QuickViewToggleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const CounterText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.18px;
  color: #ae8786;

  strong {
    color: #e5e2e3;
    font-weight: 600;
  }
`;

export const ViewModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  background: #1c1b1c;
  border-radius: 8px;
  gap: 4px;
`;

export const ViewModeButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background: ${({ $isActive }) => ($isActive ? '#201F20' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#FFB3B0' : '#AE8786')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffb3b0;
  }
`;

/* ================== TẦNG 2: HORIZONTAL GLASS FILTER BAR ================== */
export const GlassFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 100%;
  min-height: 86px;
  background: rgba(28, 27, 28, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 8px 10px -6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    height: auto;
  }
`;

export const FilterItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-start;
  gap: 8px;
  flex: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

export const FilterLabel = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: #ae8786;
  white-space: nowrap;
`;

export const FilterSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FilterSelectBox = styled.button<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  width: 100%;
  height: 34px;
  background: #201f20;
  border-radius: 8px;
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? 'rgba(255, 83, 90, 0.5)' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.15);
    background: #262526;
  }
`;

export const FilterSelectText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.18px;
  color: #e5e2e3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FilterChevron = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ae8786;
  flex-shrink: 0;
  margin-left: 6px;
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const CustomDropdownMenu = styled.div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 0;
  width: 100%;
  min-width: 160px;
  max-height: 240px;
  overflow-y: auto;
  background: rgba(28, 27, 28, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.6);
  padding: 4px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: dropdownSlideUp 0.18s ease-out;

  @keyframes dropdownSlideUp {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

export const CustomDropdownItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: 6px;
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 83, 90, 0.15)' : 'transparent'};
  cursor: pointer;
  transition: all 0.15s ease;

  span {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 500)};
    color: ${({ $isSelected }) => ($isSelected ? '#FF535A' : '#E5E2E3')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: ${({ $isSelected }) =>
      $isSelected ? 'rgba(255, 83, 90, 0.25)' : 'rgba(255, 255, 255, 0.08)'};
  }
`;

export const ResetButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 6px;
  height: 40px;
  background: #201f20;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  flex-shrink: 0;
  align-self: flex-end;
  transition: all 0.2s ease;

  &:hover {
    background: #2a2a2b;
    border-color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 1024px) {
    align-self: flex-start;
  }
`;

export const ResetText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  color: #e7bcba;
`;

/* ================== TẦNG 3: ACTIVE FILTER BADGES ================== */
export const ActiveBadgesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
`;

export const ActiveLabel = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.18px;
  color: #ae8786;
  margin-right: 4px;
  flex-shrink: 0;
`;

export const ActiveBadgePill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  gap: 6px;
  height: 24px;
  background: #2a2a2b;
  border-radius: 9999px;
  transition: all 0.2s ease;

  &:hover {
    background: #353436;
  }
`;

export const ActiveBadgeText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: #e5e2e3;
  white-space: nowrap;
`;

export const RemoveBadgeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #e5e2e3;
  transition: color 0.15s ease;

  &:hover {
    color: #ff535a;
  }
`;

export const ClearAllBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0 0 0 8px;
  cursor: pointer;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: #ffb3b0;
  transition: opacity 0.2s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;
