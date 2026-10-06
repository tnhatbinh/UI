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

    .badge {
      font-size: 10px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;

export const GenreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  button.genre-chip {
    padding: 8px 16px;
    border-radius: 10px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #e5e2e3;

    &.selected {
      background: #ff535a;
      border-color: #ff535a;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(255, 83, 90, 0.3);
    }

    &:hover:not(.selected) {
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.07);
    }
  }
`;
