import styled from 'styled-components';

export const BottomActionStrip = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  .left-sec {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      color: #ffb955;
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
      }
    }
  }

  .right-buttons {
    display: flex;
    align-items: center;
    gap: 12px;

    button.reset-btn {
      padding: 10px 18px;
      border-radius: 10px;
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

    button.train-btn {
      padding: 10px 22px;
      border-radius: 10px;
      background: linear-gradient(135deg, #ff535a 0%, #e02830 100%);
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 16px rgba(255, 83, 90, 0.4);
      transition: all 0.2s;

      &:hover {
        transform: translateY(-1px);
      }
    }
  }
`;
