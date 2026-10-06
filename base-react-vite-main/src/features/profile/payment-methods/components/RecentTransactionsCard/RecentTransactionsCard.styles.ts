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

    .see-all-link {
      font-size: 11.5px;
      font-weight: 700;
      color: #ff535a;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const RecentTxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .tx-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);

    .info {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 12px;
        font-weight: 800;
        color: #ffffff;
      }
      .sub {
        font-size: 10.5px;
        color: #ae8786;
      }
    }

    .amt-status {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .amt {
        font-size: 12px;
        font-weight: 800;
        color: #ffffff;
      }
      .status {
        font-size: 10px;
        color: #4ade80;
      }
    }
  }
`;
