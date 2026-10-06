import styled from 'styled-components';

export const Card = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px 16px;
  }

  .card-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .title-left {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 17px;
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }

      .sub {
        font-size: 11.5px;
        color: #ae8786;
      }
    }

    button.logout-all-btn {
      padding: 6px 14px;
      border-radius: 8px;
      background: rgba(255, 83, 90, 0.1);
      border: 1px solid rgba(255, 83, 90, 0.3);
      color: #ff535a;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: all 0.2s;

      &:hover {
        background: #ff535a;
        color: #ffffff;
      }
    }
  }
`;

export const DevicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .device-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);

    .left-side {
      display: flex;
      align-items: center;
      gap: 14px;

      .icon-box {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        color: #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 3px;

        .name-row {
          display: flex;
          align-items: center;
          gap: 8px;

          .name {
            font-size: 13.5px;
            font-weight: 800;
            color: #ffffff;
          }

          .badge {
            font-size: 9px;
            font-weight: 800;
            color: #ae8786;
            background: rgba(255, 255, 255, 0.08);
            padding: 1px 6px;
            border-radius: 4px;
          }
        }

        .meta {
          font-size: 11px;
          color: #7d6b6a;
        }
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      gap: 10px;

      .online-badge {
        font-size: 10px;
        font-weight: 800;
        color: #4ade80;
        background: rgba(74, 222, 128, 0.12);
        padding: 3px 8px;
        border-radius: 999px;
      }

      button.kill-btn {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #7d6b6a;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          color: #ff535a;
          border-color: #ff535a;
        }
      }
    }
  }
`;
