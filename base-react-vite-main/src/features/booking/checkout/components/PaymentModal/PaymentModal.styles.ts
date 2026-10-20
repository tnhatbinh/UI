import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  animation: fadeIn 0.25s ease-out;

  @media (max-width: 480px), (max-height: 720px) {
    padding: 12px 10px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: auto;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #141318;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 30px 24px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 83, 90, 0.1);
  color: #e5e2e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px) scale(0.96);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ae8786;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;

    &:hover {
      background: rgba(255, 83, 90, 0.2);
      color: #ff535a;
      border-color: #ff535a;
    }
  }

  .header-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(255, 83, 90, 0.2), rgba(255, 185, 85, 0.1));
    border: 1px solid rgba(255, 83, 90, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff535a;
    margin-bottom: 14px;
    flex-shrink: 0;
  }

  .title {
    font-size: 19px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 6px;
  }

  .order-code-badge {
    font-size: 12px;
    font-weight: 700;
    color: #ffb955;
    background: rgba(255, 185, 85, 0.12);
    border: 1px solid rgba(255, 185, 85, 0.25);
    padding: 3px 10px;
    border-radius: 6px;
    margin-bottom: 16px;
    letter-spacing: 0.5px;
  }

  .qr-wrapper {
    background: #ffffff;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    margin-bottom: 14px;
    flex-shrink: 0;

    img {
      width: 190px;
      height: 190px;
      display: block;
      border-radius: 8px;
      object-fit: contain;
    }
  }

  .amount-box {
    margin-bottom: 14px;
    .label {
      font-size: 12px;
      color: #8c8994;
      margin-bottom: 2px;
    }
    .amount {
      font-size: 22px;
      font-weight: 800;
      color: #ff535a;
    }
  }

  .instruction {
    font-size: 12.5px;
    color: #a09da8;
    line-height: 1.45;
    margin-bottom: 18px;
    max-width: 340px;
  }

  .actions-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 9px;

    button {
      width: 100%;
      min-height: 42px;
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 13.5px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s;
      text-align: center;
      line-height: 1.3;
    }

    .btn-pay-url {
      background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
      color: #ffffff;
      border: none;
      box-shadow: 0 6px 18px rgba(255, 83, 90, 0.35);

      &:hover {
        opacity: 0.95;
        transform: translateY(-1px);
      }
    }

    .btn-confirm-done {
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.4);
      color: #4ade80;

      &:hover {
        background: rgba(34, 197, 94, 0.25);
      }
    }

    .btn-cancel {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #8c8994;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: #ffffff;
      }
    }
  }

  @media (max-width: 480px), (max-height: 720px) {
    padding: 16px 14px;
    border-radius: 16px;
    max-height: calc(100vh - 20px);

    .close-btn {
      top: 10px;
      right: 10px;
      width: 28px;
      height: 28px;
    }

    .header-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      margin-bottom: 8px;
      svg {
        width: 18px;
        height: 18px;
      }
    }

    .title {
      font-size: 15.5px;
      margin-bottom: 3px;
    }

    .order-code-badge {
      font-size: 11px;
      padding: 2px 8px;
      margin-bottom: 8px;
    }

    .qr-wrapper {
      padding: 8px;
      margin-bottom: 8px;
      border-radius: 10px;

      img {
        width: 130px;
        height: 130px;
      }
    }

    .amount-box {
      margin-bottom: 8px;
      .label {
        font-size: 10.5px;
        margin-bottom: 1px;
      }
      .amount {
        font-size: 18px;
      }
    }

    .instruction {
      font-size: 11px;
      line-height: 1.35;
      margin-bottom: 12px;
      max-width: 290px;
    }

    .actions-row {
      gap: 7px;

      button {
        min-height: 36px;
        padding: 7px 10px;
        font-size: 12px;
        border-radius: 8px;
      }
    }
  }
`;
