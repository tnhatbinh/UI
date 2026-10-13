import styled from 'styled-components';

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export const TicketConfirmationCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;

  @media (max-width: 600px) {
    padding: 20px 16px;
    border-radius: 16px;
  }

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
      flex-shrink: 0;
    }

    .meta {
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 0;

      .age-runtime {
        font-size: 10px;
        font-weight: 700;
        color: #ff535a;
      }

      .name {
        font-size: 14.5px;
        font-weight: 800;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sub {
        font-size: 11px;
        color: #ae8786;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
      gap: 12px;

      .item-name {
        color: #e5e2e3;
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .item-price {
        color: #ffffff;
        font-weight: 700;
        flex-shrink: 0;
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

      &.muted {
        opacity: 0.65;
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
      font-size: clamp(22px, 7vw, 28px);
      font-weight: 900;
      color: #ffffff;
      white-space: nowrap;
      flex-shrink: 0;
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

    svg {
      flex-shrink: 0;
    }
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
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .address-line {
    font-size: 11px;
    color: #ae8786;
    padding-left: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .time-line {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 8px;
    font-size: 12px;
    color: #e5e2e3;
    margin-top: 4px;
    min-width: 0;

    svg {
      flex-shrink: 0;
    }

    > span:not(.room-badge) {
      min-width: 0;
    }

    .room-badge {
      margin-left: auto;
      color: var(--secondary, #ffb955);
      font-weight: 700;
      white-space: nowrap;
    }

    @media (max-width: 480px) {
      .room-badge {
        margin-left: 0;
        width: 100%;
        padding-left: 19px;
        white-space: normal;
        word-break: break-word;
      }
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
