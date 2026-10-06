import styled from 'styled-components';

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TicketConfirmationCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .card-top-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #ae8786;
      text-transform: uppercase;
    }

    .badge-format {
      font-size: 10px;
      font-weight: 800;
      color: #ffb955;
      padding: 2px 8px;
      border-radius: 6px;
      background: rgba(255, 185, 85, 0.15);
      border: 1px solid rgba(255, 185, 85, 0.35);
    }
  }

  .movie-preview-row {
    display: flex;
    gap: 14px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    img.poster {
      width: 58px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
    }

    .meta {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .age-runtime {
        font-size: 10px;
        font-weight: 700;
        color: #ff535a;
      }

      .name {
        font-size: 14.5px;
        font-weight: 800;
        color: #ffffff;
      }

      .sub {
        font-size: 11px;
        color: #ae8786;
      }

      .format {
        font-size: 11px;
        color: #c9c3c5;
      }
    }
  }

  .items-list-breakdown {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .item-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;

      .item-name {
        color: #e5e2e3;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .item-price {
        color: #ffffff;
        font-weight: 700;
      }

      &.free .item-price {
        color: #ffb955;
      }

      &.discount {
        color: #ff535a;
        .item-name {
          color: #ff535a;
        }
        .item-price {
          color: #ff535a;
        }
      }
    }
  }

  .total-block {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .label-group {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #ae8786;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      .tax-note {
        font-size: 10.5px;
        color: #7d6b6a;
      }

      .points-note {
        font-size: 11px;
        color: #ffb955;
        font-weight: 700;
        margin-top: 2px;
      }
    }

    .amount {
      font-size: 28px;
      font-weight: 900;
      color: #ffffff;
    }
  }

  .checkout-cta-btn {
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(255, 83, 90, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 26px rgba(255, 83, 90, 0.6);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }

  .pci-dss-note {
    font-size: 10.5px;
    color: #7d6b6a;
    line-height: 1.45;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;

export const SessionRecapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);

  .cinema-line {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #e5e2e3;
  }

  .address-line {
    font-size: 11px;
    color: #ae8786;
    padding-left: 19px;
  }

  .time-line {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #e5e2e3;
    margin-top: 4px;

    .room-badge {
      margin-left: auto;
      color: #ffb955;
      font-weight: 700;
    }
  }
`;

export const DigitalPassAssurance = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);

  .icon-wrap {
    color: #ffb955;
    flex-shrink: 0;
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
      line-height: 1.35;
    }
  }
`;
