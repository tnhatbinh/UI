import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const BookingSummarySidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;

  @media ${media.lg} {
    display: none;
  }
`;

export const SummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;

  @media ${media.sm} {
    padding: 20px 16px;
    border-radius: 16px;
    gap: 16px;
  }

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
      min-width: 0;

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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sub {
        font-size: 11.5px;
        color: #ae8786;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
      gap: 12px;

      .label {
        color: #ae8786;
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }
      .val {
        color: #ffffff;
        font-weight: 600;
        min-width: 0;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

      .empty-hint {
        font-size: 12px;
        color: #7d6b6a;
      }
    }

    .seat-item-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      gap: 8px;

      .left {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;

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
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .price {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
        flex-shrink: 0;
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
      gap: 12px;

      .label {
        color: #ae8786;
        flex-shrink: 0;
      }
      .val {
        color: #ffffff;
        font-weight: 600;
        text-align: right;
      }
      .free-badge {
        color: #ffb955;
        font-weight: 700;
        text-align: right;
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

    @media ${media.xs} {
      padding: 12px 10px;
      font-size: 12px;
      gap: 6px;
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
  min-width: 0;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;

    .icon-box {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: rgba(255, 185, 85, 0.15);
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .text {
      display: flex;
      flex-direction: column;
      min-width: 0;

      .title {
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sub {
        font-size: 10.5px;
        color: #ae8786;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .price-tag {
    font-size: 14px;
    font-weight: 800;
    color: #ffb955;
    flex-shrink: 0;
  }
`;
