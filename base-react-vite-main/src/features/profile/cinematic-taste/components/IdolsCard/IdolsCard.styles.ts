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

    button.add-idol-btn {
      padding: 5px 12px;
      border-radius: 6px;
      background: rgba(255, 185, 85, 0.12);
      border: 1px solid rgba(255, 185, 85, 0.3);
      color: #ffb955;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.2s;

      &:hover {
        background: #ffb955;
        color: #141317;
      }
    }
  }
`;

export const IdolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .idol-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .meta {
      display: flex;
      align-items: center;
      gap: 10px;

      img.avatar {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
      }

      .text {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 12px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .role {
          font-size: 10px;
          color: #ae8786;
        }
      }
    }

    button.del-btn {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #7d6b6a;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s;

      &:hover {
        color: #ff535a;
        border-color: #ff535a;
        background: rgba(255, 83, 90, 0.1);
      }
    }
  }
`;
