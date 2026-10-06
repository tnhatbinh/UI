import styled from 'styled-components';

export const TastePageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const MainTwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || '24px'};
`;

export const ToastNotification = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  background: #1f1d24;
  border: 1px solid #ffb955;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 185, 85, 0.25);
`;
