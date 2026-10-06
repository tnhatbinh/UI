import styled from 'styled-components';

export const MainCard = styled.div`
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
    }

    .badge-count {
      font-size: 10px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }

  .vouchers-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const VoucherInputRow = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
    height: 40px;
    padding: 0 14px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &::placeholder {
      text-transform: none;
      color: #7d6b6a;
    }

    &:focus {
      outline: none;
      border-color: #ff535a;
    }
  }

  button.apply-btn {
    padding: 0 18px;
    height: 40px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #ff535a;
      border-color: #ff535a;
    }
  }
`;

export const VoucherMiniItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);

  .left {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon-box {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: rgba(255, 83, 90, 0.12);
      color: #ff535a;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #ffffff;
      }
      .hsd {
        font-size: 10.5px;
        color: #ae8786;
      }
    }
  }

  button.use-btn {
    padding: 5px 12px;
    border-radius: 6px;
    background: #ff535a;
    border: none;
    color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #ff7b54;
    }
  }
`;
