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

export const FormRowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 10.5px;
    font-weight: 800;
    color: #ae8786;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 42px;
    padding: 0 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.09);
    color: #7d6b6a;
    transition: all 0.2s;

    &:focus-within {
      border-color: #ffb955;
      background: rgba(255, 255, 255, 0.07);
      color: #ffb955;
    }

    input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      font-weight: 600;

      &::placeholder {
        color: #7d6b6a;
      }
    }
  }
`;

export const CheckboxLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 11.5px;
  color: #ae8786;
  flex-wrap: wrap;
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #c9c3c5;

    input[type='checkbox'] {
      accent-color: #ff535a;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }

  .secure-tag {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #7d6b6a;
  }
`;
