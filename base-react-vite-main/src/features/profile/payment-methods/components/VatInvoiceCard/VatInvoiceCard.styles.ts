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
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;

export const VatConfigBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12px;

  p.desc {
    font-size: 11.5px;
    color: #ae8786;
    line-height: 1.4;
    margin: 0;
  }

  .vat-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 14px;
    border-radius: 10px;

    .detail-row {
      display: flex;
      flex-direction: column;
      gap: 1px;

      .label {
        font-size: 9.5px;
        font-weight: 700;
        color: #7d6b6a;
        text-transform: uppercase;
      }
      .val {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }
    }
  }

  button.edit-vat-btn {
    align-self: flex-start;
    padding: 7px 14px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e5e2e3;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }
  }
`;
