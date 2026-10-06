import styled from 'styled-components';

export const NotifGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToastNotification = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  background: #1f1d24;
  border: 1px solid #ff535a;
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
    0 0 20px rgba(255, 83, 90, 0.25);
`;
