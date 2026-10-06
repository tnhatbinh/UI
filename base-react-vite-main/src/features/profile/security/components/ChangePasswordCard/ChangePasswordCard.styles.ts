import styled from 'styled-components';

export const Card = styled.div`
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

    .status-pill {
      font-size: 9.5px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 11.5px;
      font-weight: 700;
      color: #e5e2e3;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .forgot-link {
        font-size: 11px;
        color: #ffb955;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .input-box {
      position: relative;
      display: flex;
      align-items: center;

      .icon {
        position: absolute;
        left: 12px;
        color: #7d6b6a;
      }

      input {
        width: 100%;
        height: 42px;
        padding: 0 40px 0 36px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.09);
        color: #ffffff;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 13px;
        letter-spacing: 0.5px;

        &:focus {
          outline: none;
          border-color: #ff535a;
          background: rgba(255, 255, 255, 0.06);
        }
      }

      .toggle-eye {
        position: absolute;
        right: 12px;
        color: #7d6b6a;
        cursor: pointer;
        &:hover {
          color: #ffffff;
        }
      }

      .check-ok {
        position: absolute;
        right: 12px;
        color: #4ade80;
      }
    }
  }

  .strength-meter {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .bars {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;

      .seg {
        height: 4px;
        border-radius: 999px;
        background: #ff535a;
      }
    }

    .score-text {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      font-weight: 700;
      color: #ff535a;
    }
  }

  .remember-check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #e5e2e3;
    cursor: pointer;

    input[type='checkbox'] {
      accent-color: #ff535a;
      width: 15px;
      height: 15px;
    }
  }

  button.submit-btn {
    align-self: flex-start;
    padding: 10px 24px;
    border-radius: 10px;
    background: #ff535a;
    border: none;
    color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12.5px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(255, 83, 90, 0.4);
    transition: all 0.2s;

    &:hover {
      background: #ff7b54;
    }
  }
`;
