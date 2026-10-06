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

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-group {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }
    }

    .level-badge {
      font-size: 9.5px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;

export const SideItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .side-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);

    .left-info {
      display: flex;
      align-items: center;
      gap: 12px;

      .icon-box {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: #ae8786;
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
          font-size: 12.5px;
          font-weight: 800;
          color: #ffffff;
        }

        .desc {
          font-size: 10.5px;
          color: #ae8786;
        }
      }
    }

    button.action-btn {
      padding: 5px 12px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.12);
      }
    }

    .badge-on {
      font-size: 10px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.15);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;

export const ToggleSwitch = styled.div<{ $active: boolean }>`
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#ff535a' : 'rgba(255, 255, 255, 0.2)')};
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  .thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? '19px' : '3px')};
    transition: left 0.2s ease;
  }
`;
