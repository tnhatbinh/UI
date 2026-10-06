import styled from 'styled-components';

export const Container = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 185, 85, 0.3);
  border-radius: 20px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  .left-meta {
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 83, 90, 0.15);
      color: #ff535a;
      display: flex;
      align-items: center;
      justify-content: center;
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

        h3 {
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .match-badge {
          font-size: 9.5px;
          font-weight: 800;
          color: #ffb955;
          background: rgba(255, 185, 85, 0.15);
          padding: 2px 7px;
          border-radius: 4px;
        }
      }

      .quote {
        font-size: 12px;
        color: #ae8786;
        font-style: italic;
        margin: 0;
      }
    }
  }

  .model-pill {
    font-size: 11px;
    font-weight: 700;
    color: #ffb955;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 14px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
