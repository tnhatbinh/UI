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
  }
`;

export const NotificationCheckGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .check-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;

    input[type='checkbox'] {
      accent-color: #ff535a;
      width: 16px;
      height: 16px;
      margin-top: 2px;
      cursor: pointer;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 1px;

      .title {
        font-size: 12.5px;
        font-weight: 700;
        color: #ffffff;
      }

      .sub {
        font-size: 11px;
        color: #ae8786;
      }
    }
  }
`;
