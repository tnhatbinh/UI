import styled from 'styled-components';

export const TastePageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const MainTwoCol = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 24px;

  > * {
    min-width: 0;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || '24px'};
  min-width: 0;
`;

export { ToastNotification } from '@shared/components/toast/ToastNotification.styles';
