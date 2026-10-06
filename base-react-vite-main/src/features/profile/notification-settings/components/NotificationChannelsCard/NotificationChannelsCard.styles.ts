import styled from 'styled-components';

export const Card = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 600px) {
    padding: 20px 16px;
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .title-left {
      display: flex;
      flex-direction: column;
      gap: 2px;

      h3 {
        font-size: 16px;
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

    .badge {
      font-size: 10px;
      font-weight: 800;
      color: #ff535a;
      background: rgba(255, 83, 90, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;

export const ChannelRowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .channel-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);

    .left {
      display: flex;
      align-items: center;
      gap: 12px;

      .icon-box {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 83, 90, 0.1);
        color: #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .name {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
        }

        .desc {
          font-size: 11px;
          color: #ae8786;
        }
      }
    }

    .switch {
      width: 36px;
      height: 20px;
      border-radius: 999px;
      background: #ff535a;
      position: relative;
      cursor: pointer;
      flex-shrink: 0;

      &::after {
        content: '';
        position: absolute;
        top: 3px;
        right: 3px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #ffffff;
        transition: all 0.2s;
      }

      &.off {
        background: rgba(255, 255, 255, 0.15);
        &::after {
          right: auto;
          left: 3px;
        }
      }
    }
  }
`;
