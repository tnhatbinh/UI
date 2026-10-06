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

export const TechCheckList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .tech-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: rgba(255, 255, 255, 0.12);
    }

    .left {
      display: flex;
      align-items: center;
      gap: 12px;

      .icon-box {
        width: 32px;
        height: 32px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.05);
        color: #ffb955;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .text {
        display: flex;
        flex-direction: column;

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

    input[type='checkbox'] {
      accent-color: #ff535a;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;
