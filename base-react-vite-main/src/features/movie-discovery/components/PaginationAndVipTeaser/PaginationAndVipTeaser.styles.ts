import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px 40px;
  gap: 24px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  min-height: 220px;
  z-index: 5;
  position: relative;

  @media (max-width: 1280px) {
    padding: 0 16px 32px;
    height: auto;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
`;

/* ================== PHẦN 1: LOAD MORE & PAGINATION ================== */
export const PaginationGroupRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
  max-width: 800px;
  min-height: 44px;
  height: auto;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 12px;
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  gap: 12px;
  height: 44px;
  background: #201f20;
  border-radius: 9999px;
  border: 1px solid transparent;
  cursor: pointer;
  box-shadow:
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #282729;
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LoadMoreIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  color: #ffb955;
`;

export const LoadMoreText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  color: #e5e2e3;
`;

export const PaginationNumbersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 6px;
  height: 44px;
  background: #1c1b1c;
  border-radius: 9999px;
`;

export const PageArrowButton = styled.button<{ $disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: none;
  background: transparent;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ $disabled }) => ($disabled ? '#555' : '#AE8786')};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #262526;
    color: #e5e2e3;
  }
`;

export const PageNumberButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: none;
  background: ${({ $isActive }) => ($isActive ? '#FF535A' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;

  span {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-style: normal;
    font-weight: ${({ $isActive }) => ($isActive ? 700 : 600)};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
    color: ${({ $isActive }) => ($isActive ? '#5B000D' : '#E5E2E3')};
  }

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? '#ff3b43' : 'rgba(255, 255, 255, 0.08)'};
  }
`;

export const PageEllipsis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  height: 24px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 16px;
  color: #ae8786;
`;

/* ================== PHẦN 2: VIP CONCIERGE BANNER ================== */
export const ExclusiveLoungeBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 100%;
  max-width: 1232px;
  min-height: 96px;
  background: linear-gradient(90deg, #1c1b1c 0%, #201f20 50%, #1c1b1c 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 185, 85, 0.15);
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.3);
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 20px;
    gap: 16px;
  }
`;

export const LoungeInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

export const LoungeIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 185, 85, 0.2);
  border-radius: 12px;
  flex-shrink: 0;
  color: #ffb955;
`;

export const LoungeTextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const LoungeTitle = styled.h4`
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #e5e2e3;

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const LoungeSubtitle = styled.p`
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.14px;
  color: #e7bcba;

  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const BookingLoungeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  gap: 8px;
  height: 40px;
  background: #2a2a2b;
  border-radius: 8px;
  border: 1px solid rgba(255, 185, 85, 0.2);
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #353436;
    border-color: rgba(255, 185, 85, 0.5);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    align-self: flex-start;
  }
`;

export const BookingLoungeText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  color: #ffb955;
`;
