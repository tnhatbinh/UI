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

export const MiniTheaterCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .screen-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 80%;

    .arc {
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, transparent, #ff535a, transparent);
      box-shadow: 0 0 10px #ff535a;
      border-radius: 50%;
    }

    span {
      font-size: 9px;
      font-weight: 800;
      color: #7d6b6a;
      letter-spacing: 1px;
    }
  }

  .seat-grid-mini {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .row {
      display: flex;
      gap: 4px;

      .dot {
        width: 14px;
        height: 12px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.15);
      }

      .dot.vip {
        background: #ff535a;
        box-shadow: 0 0 6px rgba(255, 83, 90, 0.7);
      }
    }
  }

  .caption {
    font-size: 10.5px;
    color: #ae8786;
    text-align: center;
  }
`;
