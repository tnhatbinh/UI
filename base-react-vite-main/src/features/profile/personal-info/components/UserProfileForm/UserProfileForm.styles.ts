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

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-group {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 18px;
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
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
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

    span.req {
      color: #ff535a;
      font-size: 10px;
      font-weight: 600;
    }
  }

  .input-wrap {
    position: relative;
    display: flex;
    align-items: center;

    .icon {
      position: absolute;
      left: 12px;
      color: #7d6b6a;
    }

    input,
    select {
      width: 100%;
      height: 42px;
      padding: 0 12px 0 36px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.09);
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 13px;
      transition: all 0.2s;

      &:focus {
        outline: none;
        border-color: #ff535a;
        background: rgba(255, 255, 255, 0.06);
      }
    }

    select {
      cursor: pointer;
    }

    .status-badge {
      position: absolute;
      right: 12px;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 4px;

      &.verified {
        color: #ffb955;
        background: rgba(255, 185, 85, 0.15);
      }

      &.linked {
        color: #ff535a;
        background: rgba(255, 83, 90, 0.15);
      }
    }
  }

  .helper-text {
    font-size: 10.5px;
    color: #ffb955;
    margin-top: 2px;
  }
`;

export const GenderRow = styled.div`
  display: flex;
  gap: 10px;

  button.gender-btn {
    flex: 1;
    height: 42px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.09);
    color: #ae8786;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      background: rgba(255, 83, 90, 0.12);
      border-color: #ff535a;
      color: #ffffff;
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex-wrap: wrap;

  .sync-note {
    font-size: 11.5px;
    color: #ae8786;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  button.save-btn {
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
