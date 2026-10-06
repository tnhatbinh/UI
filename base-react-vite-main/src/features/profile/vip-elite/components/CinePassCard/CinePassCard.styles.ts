import styled from 'styled-components';

export const CinePassCard = styled.div`
  background: linear-gradient(135deg, #1b1a20 0%, #0d0c0f 100%);
  border: 1px solid rgba(255, 185, 85, 0.35);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 185, 85, 0.15) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;

      .logo-box {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #ff535a;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .brand-text {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 13px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 1px;
        }
        .edition {
          font-size: 9px;
          font-weight: 800;
          color: #ffb955;
          letter-spacing: 0.8px;
        }
      }
    }

    .vip-badge {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 9.5px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.15);
      padding: 3px 8px;
      border-radius: 999px;
      border: 1px solid rgba(255, 185, 85, 0.3);
    }
  }

  .chip-nfc-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0 10px;

    .chip {
      width: 38px;
      height: 28px;
      border-radius: 6px;
      background: linear-gradient(135deg, #d4af37 0%, #aa7c11 100%);
      border: 1px solid #ffb955;
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.4);
    }

    .nfc-icon {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  .card-number {
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 3px;
    color: #ffffff;
    font-family: monospace;
    margin-bottom: 12px;
  }

  .holder-points-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .holder {
      display: flex;
      flex-direction: column;

      .label {
        font-size: 9px;
        color: #7d6b6a;
        font-weight: 700;
      }
      .name {
        font-size: 13px;
        font-weight: 800;
        color: #ffffff;
      }
    }

    .points {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .label {
        font-size: 9px;
        color: #7d6b6a;
        font-weight: 700;
      }
      .pts {
        font-size: 14px;
        font-weight: 900;
        color: #ffb955;
      }
    }
  }

  .progress-wrap {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .labels {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 700;
      color: #ae8786;

      .target {
        color: #ffb955;
      }
    }

    .bar-bg {
      height: 5px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;

      .fill {
        height: 100%;
        width: 62.5%;
        border-radius: 999px;
        background: linear-gradient(90deg, #ff535a 0%, #ffb955 100%);
      }
    }
  }
`;
