import styled from 'styled-components';

export const BookingSummarySidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .movie-header {
    display: flex;
    gap: 14px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    img.poster {
      width: 64px;
      height: 90px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .meta {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .format-badge {
        font-size: 9px;
        font-weight: 800;
        color: #ffb955;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .title {
        font-size: 15px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.2;
      }

      .sub {
        font-size: 11.5px;
        color: #ae8786;
      }

      .rating-line {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: #ffb955;
        font-weight: 700;
        margin-top: 4px;
      }
    }
  }

  .session-info-table {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;

      .label {
        color: #ae8786;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .val {
        color: #ffffff;
        font-weight: 600;
      }
    }
  }

  .selected-seats-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .block-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }

      .clear-btn {
        background: none;
        border: none;
        color: #ff535a;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        padding: 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .seat-items-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .seat-item-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;

      .left {
        display: flex;
        align-items: center;
        gap: 8px;

        .seat-badge {
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 185, 85, 0.15);
          color: #ffb955;
          font-size: 11px;
          font-weight: 800;
        }

        .name {
          font-size: 11.5px;
          color: #e5e2e3;
        }
      }

      .price {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }
    }
  }

  .pricing-calculation {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .calc-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;

      .label {
        color: #ae8786;
      }
      .val {
        color: #ffffff;
        font-weight: 600;
      }
      .free-badge {
        color: #ffb955;
        font-weight: 700;
      }
    }

    .grand-total-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-top: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);

      .label-group {
        display: flex;
        flex-direction: column;
        .label {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.5px;
        }
        .bonus {
          font-size: 10.5px;
          color: #ffb955;
          font-weight: 600;
        }
      }

      .total-amount {
        font-size: 24px;
        font-weight: 900;
        color: #ffffff;
      }
    }
  }

  .continue-cta-btn {
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
    color: #ffffff;
    font-size: 13.5px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(255, 83, 90, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(255, 83, 90, 0.6);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }

  .assurance-note {
    font-size: 11px;
    color: #7d6b6a;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;

export const UpsellCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon-box {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: rgba(255, 185, 85, 0.15);
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }
      .sub {
        font-size: 10.5px;
        color: #ae8786;
      }
    }
  }

  .price-tag {
    font-size: 14px;
    font-weight: 800;
    color: #ffb955;
  }
`;
