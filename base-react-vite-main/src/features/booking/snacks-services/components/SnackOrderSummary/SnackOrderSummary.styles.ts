import styled from 'styled-components';

export const OrderSummarySidebar = styled.div`
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
      width: 56px;
      height: 78px;
      object-fit: cover;
      border-radius: 8px;
    }

    .meta {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .title {
        font-size: 14px;
        font-weight: 800;
        color: #ffffff;
      }

      .sub {
        font-size: 11px;
        color: #ae8786;
      }
    }
  }

  .ticket-recap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .left {
      display: flex;
      flex-direction: column;
      .main {
        color: #ffffff;
        font-weight: 700;
      }
      .seats {
        color: #ae8786;
        font-size: 11px;
      }
    }

    .amount {
      color: #ffffff;
      font-weight: 700;
    }
  }

  .snacks-recap {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .label {
        font-size: 11px;
        font-weight: 800;
        color: #ae8786;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .edit-link {
        font-size: 11px;
        color: #ffb955;
        cursor: pointer;
      }
    }

    .snack-items {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .snack-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;

      .name {
        color: #e5e2e3;
      }
      .price {
        color: #ffffff;
        font-weight: 700;
      }
    }
  }

  .voucher-input-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .label {
      font-size: 11px;
      font-weight: 700;
      color: #ae8786;
      text-transform: uppercase;
    }

    .input-row {
      display: flex;
      gap: 8px;

      input {
        flex: 1;
        height: 38px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0 12px;
        color: #ffffff;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 12px;
        outline: none;

        &::placeholder {
          color: #7d6b6a;
        }
      }

      button.apply-btn {
        padding: 0 16px;
        border-radius: 8px;
        background: rgba(255, 185, 85, 0.15);
        border: 1px solid rgba(255, 185, 85, 0.4);
        color: #ffb955;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: rgba(255, 185, 85, 0.25);
        }
      }
    }

    .applied-tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      border-radius: 6px;
      background: rgba(255, 185, 85, 0.12);
      border: 1px solid rgba(255, 185, 85, 0.3);
      color: #ffb955;
      font-size: 11.5px;
      font-weight: 600;

      .remove-btn {
        background: none;
        border: none;
        color: #ae8786;
        cursor: pointer;
        padding: 0;

        &:hover {
          color: #ff535a;
        }
      }
    }
  }

  .price-breakdown {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .row {
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

      &.discount .val {
        color: #ff535a;
      }
    }

    .grand-total {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-top: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);

      .label-group {
        display: flex;
        flex-direction: column;

        .main {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
        }
        .sub {
          font-size: 10.5px;
          color: #7d6b6a;
        }
        .bonus {
          font-size: 11px;
          color: #ffb955;
          font-weight: 700;
          margin-top: 2px;
        }
      }

      .amount {
        font-size: 26px;
        font-weight: 900;
        color: #ffffff;
      }
    }
  }

  .continue-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(255, 83, 90, 0.4);
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(255, 83, 90, 0.6);
    }
  }

  .skip-link {
    background: none;
    border: none;
    color: #ae8786;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    margin-top: -6px;

    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }

  .assurance-line {
    font-size: 11px;
    color: #7d6b6a;
    text-align: center;
  }
`;

export const VipPrivilegeBanner = styled.div`
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
      font-size: 11.5px;
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
