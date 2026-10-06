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
  }
`;

export const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  .text {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .title {
      font-size: 12.5px;
      font-weight: 800;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .sub {
      font-size: 11px;
      color: #ae8786;
    }
  }

  .switch {
    width: 38px;
    height: 22px;
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
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ffffff;
      transition: transform 0.2s;
    }

    &.off {
      background: rgba(255, 255, 255, 0.15);
      &::after {
        right: auto;
        left: 3px;
      }
    }
  }
`;

export const QuickPayItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);

  .left {
    display: flex;
    align-items: center;
    gap: 10px;

    .brand-icon {
      width: 32px;
      height: 22px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      font-weight: 900;
      color: #ffffff;
    }

    .info {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }
      .sub {
        font-size: 10.5px;
        color: #ae8786;
      }
    }
  }

  .badge {
    font-size: 9px;
    font-weight: 800;
    color: #ffb955;
    background: rgba(255, 185, 85, 0.12);
    padding: 2px 6px;
    border-radius: 4px;
  }
`;
