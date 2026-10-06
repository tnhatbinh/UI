import styled from 'styled-components';

export const MainCard = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px 16px;
  }

  .card-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;

    .title-left {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 17px;
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }

      .sub {
        font-size: 11.5px;
        color: #ae8786;
      }
    }

    button.add-btn {
      padding: 8px 16px;
      border-radius: 999px;
      background: #ff535a;
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;

      &:hover {
        background: #ff7b54;
      }
    }
  }
`;

export const BigCreditCard = styled.div`
  background: linear-gradient(135deg, #222026 0%, #151419 100%);
  border: 1px solid rgba(255, 185, 85, 0.4);
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  position: relative;
  overflow: hidden;

  .card-header-line {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .card-title-group {
      display: flex;
      align-items: center;
      gap: 10px;

      .chip-icon {
        width: 34px;
        height: 24px;
        border-radius: 4px;
        background: linear-gradient(135deg, #d4af37 0%, #aa7c11 100%);
        border: 1px solid #ffb955;
      }

      .text {
        display: flex;
        flex-direction: column;

        .name-row {
          display: flex;
          align-items: center;
          gap: 6px;

          .name {
            font-size: 14px;
            font-weight: 800;
            color: #ffffff;
          }

          .default-badge {
            font-size: 8.5px;
            font-weight: 800;
            color: #ffffff;
            background: #ff535a;
            padding: 2px 6px;
            border-radius: 3px;
          }
        }

        .type-sub {
          font-size: 10.5px;
          color: #ae8786;
        }
      }
    }

    .bank-brand {
      font-size: 12px;
      font-weight: 900;
      color: #ff535a;
      letter-spacing: 1px;
    }
  }

  .card-digits {
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 3px;
    color: #ffffff;
    font-family: monospace;
    margin: 4px 0;
  }

  .card-footer-line {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .holder-expiry {
      display: flex;
      align-items: center;
      gap: 24px;

      .col {
        display: flex;
        flex-direction: column;

        .lbl {
          font-size: 9px;
          color: #7d6b6a;
          font-weight: 700;
        }
        .val {
          font-size: 12px;
          font-weight: 800;
          color: #ffffff;
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 8px;

      button.edit-btn {
        padding: 5px 12px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #ffffff;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }
`;

export const WalletItemCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
  }

  .item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-brand {
      display: flex;
      align-items: center;
      gap: 12px;

      .brand-box {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 11px;
        font-weight: 900;
        flex-shrink: 0;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .name-row {
          display: flex;
          align-items: center;
          gap: 6px;

          .name {
            font-size: 13.5px;
            font-weight: 800;
            color: #ffffff;
          }

          .badge {
            font-size: 9px;
            font-weight: 800;
            color: #ff535a;
            background: rgba(255, 83, 90, 0.12);
            padding: 1px 6px;
            border-radius: 3px;
          }
        }

        .meta {
          font-size: 11px;
          color: #ae8786;
        }
      }
    }

    .check-icon {
      color: #4ade80;
    }
  }

  .item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    font-size: 11px;

    .note {
      color: #ae8786;
    }

    .links {
      display: flex;
      align-items: center;
      gap: 12px;

      span.link {
        cursor: pointer;
        color: #ffb955;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }

      span.unlink {
        color: #7d6b6a;
        cursor: pointer;
        &:hover {
          color: #ff535a;
        }
      }
    }
  }
`;

export const QuickPayCard = styled.div`
  background: rgba(255, 83, 90, 0.04);
  border: 1px solid rgba(255, 83, 90, 0.2);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-box {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: rgba(255, 83, 90, 0.15);
        color: #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .text {
        display: flex;
        flex-direction: column;

        .title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
        }
        .sub {
          font-size: 11px;
          color: #ae8786;
        }
      }
    }
  }

  .bottom-limit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .txt {
      font-size: 11px;
      color: #ae8786;
    }

    .limit-val {
      display: flex;
      align-items: center;
      gap: 10px;

      span.amount {
        font-size: 12px;
        font-weight: 800;
        color: #ffffff;
      }

      span.change-link {
        font-size: 11px;
        font-weight: 700;
        color: #ff535a;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const ToggleSwitch = styled.div<{ $active: boolean }>`
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#ff535a' : 'rgba(255, 255, 255, 0.2)')};
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  .thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? '19px' : '3px')};
    transition: left 0.2s ease;
  }
`;
