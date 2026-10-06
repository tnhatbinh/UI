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

export const CheckOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .check-card {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: rgba(255, 255, 255, 0.1);
    }

    input[type='checkbox'] {
      accent-color: #ff535a;
      width: 16px;
      height: 16px;
      margin-top: 3px;
      cursor: pointer;
      flex-shrink: 0;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .title-line {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;

        .title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
        }

        .pill {
          font-size: 8.5px;
          font-weight: 800;
          color: #ff535a;
          background: rgba(255, 83, 90, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
        }
      }

      .desc {
        font-size: 11px;
        color: #ae8786;
        line-height: 1.45;
      }
    }
  }
`;
