import styled from 'styled-components';

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
  margin-bottom: 50px;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const SynopsisCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-title {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #ffb955;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .copyright {
      font-size: 11px;
      color: #7d6b6a;
    }
  }

  .synopsis-body {
    font-size: 13.5px;
    line-height: 1.65;
    color: #c9c3c5;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .accolades-row {
    display: flex;
    gap: 16px;
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    @media (max-width: 600px) {
      flex-direction: column;
    }

    .accolade-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;

      .icon {
        color: #ffb955;
        font-size: 18px;
        margin-top: 2px;
      }

      .text {
        display: flex;
        flex-direction: column;
        .main {
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
  }
`;

export const CriticCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  .score-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .score-left {
      display: flex;
      flex-direction: column;

      .label {
        font-size: 11px;
        font-weight: 700;
        color: #ae8786;
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }

      .number {
        font-size: 32px;
        font-weight: 900;
        color: #ffffff;
        span.max {
          font-size: 16px;
          color: #7d6b6a;
          font-weight: 500;
        }
      }

      .based-on {
        font-size: 11px;
        color: #ae8786;
      }
    }

    .score-gauge {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: 4px solid #ffb955;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 16px rgba(255, 185, 85, 0.25);

      .percent {
        font-size: 15px;
        font-weight: 900;
        color: #ffb955;
        line-height: 1;
      }
      .badge-label {
        font-size: 8px;
        font-weight: 800;
        letter-spacing: 0.5px;
        color: #ffffff;
        text-transform: uppercase;
        margin-top: 2px;
      }
    }
  }

  .quote-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    .quote-label {
      font-size: 11px;
      font-weight: 800;
      color: #ffb955;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    p.quote-text {
      font-size: 12.5px;
      font-style: italic;
      line-height: 1.55;
      color: #dedede;
    }

    .author-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11.5px;
      color: #ae8786;

      .author {
        font-weight: 600;
      }
      .rating-stars {
        color: #ffb955;
        font-weight: 700;
      }
    }
  }
`;
