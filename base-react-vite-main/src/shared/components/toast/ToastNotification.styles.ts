import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const ToastNotification = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  background: #1f1d24;
  border: 1px solid var(--primary, #ff535a);
  color: var(--text-primary, #ffffff);
  padding: 12px 20px;
  border-radius: 999px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 83, 90, 0.25);

  @media ${media.xs} {
    bottom: 20px;
    right: 16px;
    left: 16px;
    justify-content: center;
  }
`;

