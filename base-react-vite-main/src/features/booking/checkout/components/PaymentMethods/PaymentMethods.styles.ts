import styled from 'styled-components';

export const SectionCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .card-header-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;

    .header-left {
      display: flex;
      gap: 12px;
      align-items: flex-start;

      .icon-box {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 185, 85, 0.12);
        color: #ffb955;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .text-meta {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .title {
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
        }
        .sub {
          font-size: 11px;
          color: #ae8786;
        }
      }
    }

    .badge-tag {
      font-size: 10.5px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(255, 185, 85, 0.15);
      border: 1px solid rgba(255, 185, 85, 0.35);
      color: #ffb955;
      white-space: nowrap;
    }
  }
`;

export const PaymentMethodsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PaymentMethodItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? '#ff535a' : 'rgba(255, 255, 255, 0.08)'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 83, 90, 0.1)' : 'rgba(255, 255, 255, 0.02)'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 83, 90, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }

  .left-meta {
    display: flex;
    align-items: center;
    gap: 14px;

    .radio-circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid
        ${({ $isSelected }) => ($isSelected ? '#ff535a' : '#7d6b6a')};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff535a;
        display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
      }
    }

    .brand-icon-wrap {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 11px;
      flex-shrink: 0;

      &.momo {
        background: #a50064;
        color: #ffffff;
      }
      &.vnpay {
        background: #005baa;
        color: #ffffff;
      }
      &.card {
        background: rgba(255, 255, 255, 0.1);
        color: #ffb955;
      }
      &.bank {
        background: rgba(255, 255, 255, 0.1);
        color: #e5e2e3;
      }
      &.points {
        background: rgba(255, 185, 85, 0.2);
        color: #ffb955;
      }
    }

    .title-details {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .title-row {
        display: flex;
        align-items: center;
        gap: 8px;

        .name {
          font-size: 13.5px;
          font-weight: 700;
          color: #ffffff;
        }

        .promo-badge {
          font-size: 9.5px;
          font-weight: 800;
          color: #ffffff;
          background: #ff535a;
          padding: 1px 6px;
          border-radius: 4px;
        }

        .vip-balance {
          font-size: 9.5px;
          font-weight: 800;
          color: #ffb955;
          background: rgba(255, 185, 85, 0.15);
          padding: 1px 6px;
          border-radius: 4px;
        }
      }

      .desc {
        font-size: 11px;
        color: #ae8786;
      }
    }
  }

  .right-tag {
    font-size: 11px;
    font-weight: 700;
    color: #ffb955;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const VouchersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .input-row {
    display: flex;
    gap: 10px;

    input {
      flex: 1;
      height: 42px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.09);
      padding: 0 14px;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      outline: none;

      &::placeholder {
        color: #7d6b6a;
      }
    }

    button.apply-btn {
      padding: 0 20px;
      border-radius: 10px;
      background: rgba(255, 185, 85, 0.15);
      border: 1px solid rgba(255, 185, 85, 0.4);
      color: #ffb955;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 185, 85, 0.25);
      }
    }
  }

  .voucher-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const VoucherCard = styled.div<{ $isSelected: boolean }>`
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? '#ff535a' : 'rgba(255, 255, 255, 0.08)'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 83, 90, 0.1)' : 'rgba(255, 255, 255, 0.03)'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.15s;

  .left {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon-percent {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: rgba(255, 185, 85, 0.15);
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 900;
    }

    .meta {
      display: flex;
      flex-direction: column;

      .code {
        font-size: 12.5px;
        font-weight: 800;
        color: #ffffff;
      }
      .desc {
        font-size: 10.5px;
        color: #ae8786;
      }
    }
  }

  .status-text {
    font-size: 11px;
    font-weight: 700;
    color: ${({ $isSelected }) => ($isSelected ? '#ff535a' : '#ae8786')};
  }
`;

export const ConsentCheckbox = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 11.5px;
  line-height: 1.5;
  color: #c9c3c5;
  cursor: pointer;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;

  input[type='checkbox'] {
    accent-color: #ff535a;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    cursor: pointer;
    flex-shrink: 0;
  }
`;
