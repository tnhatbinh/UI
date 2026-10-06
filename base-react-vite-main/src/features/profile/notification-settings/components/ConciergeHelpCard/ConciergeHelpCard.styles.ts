import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 185, 85, 0.3);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon-box {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: rgba(255, 185, 85, 0.12);
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 12.5px;
        font-weight: 800;
        color: #ffffff;
      }
      .sub {
        font-size: 11px;
        color: #ae8786;
        strong {
          color: #ffb955;
        }
      }
    }
  }

  .arrow {
    color: #7d6b6a;
  }
`;
