import styled from 'styled-components';
import { Container } from '@/shared/components/layout';
import { media } from '@/styles/breakpoints';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary, #0d0c0f);
  background-image:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 83, 90, 0.08) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 40%,
      rgba(255, 185, 85, 0.05) 0%,
      transparent 50%
    );
  padding-top: var(--page-top-offset, calc(var(--header-public-height, 80px) + 20px));
  padding-bottom: 100px;
  color: var(--text-primary, #e5e2e3);
  font-family: 'Be Vietnam Pro', sans-serif;

  @media ${media.lg} {
    padding-bottom: 130px;
  }
`;

export const InnerWrapper = styled(Container)`
  /* Inherits unified 1280px max-width, centering, and responsive gutters */
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-secondary, #ae8786);
    min-width: 0;

    > span:not(.sep) {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .back-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--text-primary, #e5e2e3);
      cursor: pointer;
      font-weight: 600;

      &:hover {
        color: var(--secondary, #ffb955);
      }
    }

    .sep {
      color: rgba(255, 255, 255, 0.2);
    }

    .current {
      color: var(--secondary, #ffb955);
      font-weight: 700;
    }
  }

  .status-badges {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    .timer-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(255, 185, 85, 0.12);
      border: 1px solid rgba(255, 185, 85, 0.3);
      color: var(--secondary, #ffb955);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .live-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 600;
      color: var(--primary, #ff535a);

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--primary, #ff535a);
        box-shadow: 0 0 10px var(--primary, #ff535a);
        animation: pulse 1.8s infinite;
      }
    }
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 12px;

    .breadcrumbs {
      width: 100%;
      flex-wrap: wrap;
    }

    .status-badges {
      gap: 8px;

      .timer-badge {
        padding: 6px 10px;
        font-size: 11px;
      }

      .live-badge {
        display: none;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.15);
      opacity: 1;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.8;
    }
  }
`;

export const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: 32px;
  align-items: flex-start;

  /* The seat map owns its horizontal scroll. Without this, its intrinsic
     width becomes the grid track's minimum and widens the whole page. */
  > * {
    min-width: 0;
  }

  @media ${media.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SeatSelectionArea = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;

  @media ${media.sm} {
    padding: 20px 14px;
  }
`;
