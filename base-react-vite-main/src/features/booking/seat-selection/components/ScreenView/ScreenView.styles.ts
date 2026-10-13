import styled from 'styled-components';

export const ScreenHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  min-width: 0;

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;

    .cinema-title-row {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;

      .badge {
        padding: 3px 8px;
        border-radius: 6px;
        background: rgba(255, 83, 90, 0.18);
        border: 1px solid rgba(255, 83, 90, 0.4);
        color: #ff535a;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.5px;
      }

      h2.cinema-name {
        font-size: 20px;
        font-weight: 800;
        color: #ffffff;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .sub-meta {
      font-size: 12px;
      color: #ae8786;
      display: flex;
      align-items: center;
      gap: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .sound-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.09);
    color: #dedede;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

export const ScreenGraphicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;

  .curve-screen {
    width: 80%;
    max-width: 540px;
    height: 14px;
    border-top: 4px solid rgba(255, 255, 255, 0.7);
    border-radius: 50% 50% 0 0;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
  }

  .screen-glow {
    width: 75%;
    max-width: 500px;
    height: 35px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      transparent 100%
    );
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }

  .screen-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #ae8786;
    text-transform: uppercase;
    margin-top: -12px;
  }
`;
