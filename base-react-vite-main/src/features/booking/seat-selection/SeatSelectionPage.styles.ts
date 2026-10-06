import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #0d0c0f;
  background-image:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 83, 90, 0.08) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 40%,
      rgba(255, 185, 85, 0.05) 0%,
      transparent 50%
    );
  padding-top: 100px;
  padding-bottom: 100px;
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;

  @media (max-width: 1080px) {
    padding-bottom: 130px;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #ae8786;

    .back-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #e5e2e3;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        color: #ffb955;
      }
    }

    .sep {
      color: rgba(255, 255, 255, 0.2);
    }

    .current {
      color: #ffb955;
      font-weight: 700;
    }
  }

  .status-badges {
    display: flex;
    align-items: center;
    gap: 12px;

    .timer-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(255, 185, 85, 0.12);
      border: 1px solid rgba(255, 185, 85, 0.3);
      color: #ffb955;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .live-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #ff535a;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff535a;
        box-shadow: 0 0 10px #ff535a;
        animation: pulse 1.8s infinite;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.15);
      opacity: 1;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.8;
    }
  }
`;

export const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const SeatSelectionArea = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 600px) {
    padding: 20px 14px;
  }
`;
