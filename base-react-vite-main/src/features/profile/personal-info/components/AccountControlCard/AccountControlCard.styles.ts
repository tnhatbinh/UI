import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid rgba(255, 83, 90, 0.2);
  border-radius: 16px;
  background: rgba(255, 83, 90, 0.03);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .card-title {
    font-size: 12px;
    font-weight: 800;
    color: #ff535a;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .btn-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    button.device-logout {
      padding: 9px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e5e2e3;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11.5px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    button.lock-acc {
      padding: 9px;
      border-radius: 8px;
      background: rgba(255, 83, 90, 0.12);
      border: 1px solid rgba(255, 83, 90, 0.3);
      color: #ff535a;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11.5px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      transition: all 0.2s ease;

      &:hover {
        background: #ff535a;
        color: #ffffff;
      }
    }
  }
`;
