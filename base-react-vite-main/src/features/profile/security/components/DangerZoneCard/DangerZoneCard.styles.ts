import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(255, 83, 90, 0.2);
  border-radius: 20px;
  background: rgba(255, 83, 90, 0.03);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .header-line {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13.5px;
    font-weight: 800;
    color: #ff535a;
  }

  .sub {
    font-size: 11px;
    color: #ae8786;
  }

  .action-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .txt {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }
      .desc {
        font-size: 10.5px;
        color: #7d6b6a;
      }
    }

    button.btn {
      padding: 6px 14px;
      border-radius: 8px;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.2s;

      &.gray {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }

      &.red {
        background: #ff535a;
        color: #ffffff;
        &:hover {
          background: #ff7b54;
        }
      }
    }
  }
`;
