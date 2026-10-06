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
  }
`;

export const FrequencyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .radio-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.2s;

    &.selected {
      border-color: rgba(255, 83, 90, 0.4);
      background: rgba(255, 83, 90, 0.05);
    }

    .left-txt {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .title-row {
        display: flex;
        align-items: center;
        gap: 6px;

        .title {
          font-size: 12.5px;
          font-weight: 800;
          color: #ffffff;
        }

        .gold-pill {
          font-size: 8.5px;
          font-weight: 800;
          color: #ffb955;
          background: rgba(255, 185, 85, 0.15);
          padding: 1px 5px;
          border-radius: 3px;
        }
      }

      .title {
        font-size: 12.5px;
        font-weight: 800;
        color: #ffffff;
      }

      .sub {
        font-size: 11px;
        color: #ae8786;
      }
    }

    input[type='radio'] {
      accent-color: #ff535a;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }

  .btn-row {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 8px;

    button.cancel-btn {
      padding: 9px 18px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e5e2e3;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    button.save-btn {
      padding: 9px 20px;
      border-radius: 8px;
      background: #ff535a;
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 14px rgba(255, 83, 90, 0.4);

      &:hover {
        background: #ff7b54;
      }
    }
  }
`;
