import styled from 'styled-components';

// ─── Layout tổng ─────────────────────────────────────────────────────────────

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
  padding-bottom: 120px;
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const InnerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// ─── Page Header & Tabs ───────────────────────────────────────────────────────

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  .title-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .sub-tag {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #ff535a;
      text-transform: uppercase;
    }

    .title-row {
      display: flex;
      align-items: baseline;
      gap: 12px;

      h1 {
        font-size: 32px;
        font-weight: 900;
        color: #ffffff;
        letter-spacing: -0.5px;
      }

      .eng-sub {
        font-size: 16px;
        font-weight: 500;
        color: #ae8786;
      }
    }
  }

  .tabs-group {
    display: flex;
    gap: 8px;
    background: rgba(255, 255, 255, 0.04);
    padding: 4px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);

    @media (max-width: 600px) {
      width: 100%;
      overflow-x: auto;
    }
  }
`;

export const TabPill = styled.button<{ $isActive: boolean }>`
  padding: 8px 18px;
  border-radius: 999px;
  border: none;
  background: ${({ $isActive }) => ($isActive ? '#ff535a' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#ae8786')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

// ─── Urgent Support (dùng chung toàn page) ───────────────────────────────────

export const UrgentSupportCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  .left-meta {
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 83, 90, 0.15);
      color: #ff535a;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .title-line {
        display: flex;
        align-items: center;
        gap: 8px;

        .title {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
        }

        .priority-badge {
          font-size: 9px;
          font-weight: 800;
          color: #ffb955;
          background: rgba(255, 185, 85, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
        }
      }

      .desc {
        font-size: 11.5px;
        color: #ae8786;
        max-width: 620px;
      }
    }
  }

  .cta-buttons {
    display: flex;
    align-items: center;
    gap: 10px;

    button.hotline-btn {
      padding: 10px 18px;
      border-radius: 10px;
      background: #ff535a;
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 14px rgba(255, 83, 90, 0.4);

      &:hover {
        background: #ff7b54;
      }
    }

    button.chat-btn {
      padding: 10px 18px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

// ─── Toast Notification ───────────────────────────────────────────────────────

export const ToastPill = styled.div`
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
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .toast-icon {
    color: #ffb955;
  }
`;
