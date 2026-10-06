import styled from 'styled-components';

export const ActionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  height: 37px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const TicketPassBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 6px;
  height: 28px;
  background: #ff535a;
  box-shadow: 0px 4px 20px rgba(255, 83, 90, 0.35);
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 1140px) {
    display: none;
  }

  span {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.66px;
    color: #5b000d;
    white-space: nowrap;
  }

  .ticket-icon {
    color: #5b000d;
    font-size: 12px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 6px 24px rgba(255, 83, 90, 0.45);
  }
`;
