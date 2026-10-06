import styled from 'styled-components';

export const SectionCard = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .card-title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-wrap {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 83, 90, 0.12);
        color: #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h3 {
        font-size: 16px;
        font-weight: 800;
        color: #ffffff;
      }
    }

    .link-all {
      font-size: 12px;
      font-weight: 700;
      color: #ae8786;
      cursor: pointer;

      &:hover {
        color: #ff535a;
      }
    }
  }
`;

export const VoucherMiniCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;

    .discount-box {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: rgba(255, 83, 90, 0.12);
      color: #ff535a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12.5px;
      font-weight: 900;
      flex-shrink: 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .title {
        font-size: 13px;
        font-weight: 800;
        color: #ffffff;
      }

      .desc {
        font-size: 11px;
        color: #ae8786;
      }

      .hsd {
        font-size: 10px;
        color: #ffb955;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    .badge {
      font-size: 8.5px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      padding: 1px 5px;
      border-radius: 3px;
    }

    .badge.urgent {
      color: #ff535a;
      background: rgba(255, 83, 90, 0.15);
    }

    .use-link {
      font-size: 11px;
      font-weight: 700;
      color: #ff535a;
      display: flex;
      align-items: center;
      gap: 2px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
