import styled from 'styled-components';

export const UserProfileCard = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  .user-header {
    display: flex;
    align-items: center;
    gap: 20px;

    .avatar-wrap {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 16px;
      padding: 3px;
      background: linear-gradient(135deg, #ffb955 0%, #ff535a 100%);
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 13px;
      }

      .star-badge {
        position: absolute;
        bottom: -4px;
        right: -4px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #141317;
        border: 2px solid #ffb955;
        color: #ffb955;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .badge-row {
        display: flex;
        align-items: center;
        gap: 8px;

        .vip-pill {
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(255, 185, 85, 0.15);
          border: 1px solid rgba(255, 185, 85, 0.4);
          color: #ffb955;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .active-dot {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #ae8786;

          &::before {
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #ff535a;
          }
        }
      }

      h2.name {
        font-size: 24px;
        font-weight: 900;
        color: #ffffff;
      }

      .meta-line {
        font-size: 11.5px;
        color: #ae8786;
      }
    }
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .stat-col {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .label {
        font-size: 10px;
        font-weight: 800;
        color: #7d6b6a;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      .value {
        font-size: 22px;
        font-weight: 900;
        color: #ffffff;
        display: flex;
        align-items: baseline;
        gap: 4px;

        span.unit {
          font-size: 13px;
          font-weight: 700;
          color: #ffb955;
        }
      }

      .sub {
        font-size: 10.5px;
        color: #ae8786;
      }
    }
  }

  .privilege-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;

    .desc {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #ae8786;

      .icon {
        color: #ffb955;
        flex-shrink: 0;
      }
    }

    .detail-link {
      color: #ffb955;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
