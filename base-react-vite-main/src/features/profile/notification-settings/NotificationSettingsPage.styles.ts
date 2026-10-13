import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const NotifGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 24px;
  margin-bottom: 40px;

  > * {
    min-width: 0;
  }

  @media ${media.lg} {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export { ToastNotification } from '@shared/components/toast/ToastNotification.styles';
