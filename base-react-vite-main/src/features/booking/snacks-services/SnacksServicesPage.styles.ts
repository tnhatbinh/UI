import styled from 'styled-components';
import { Container } from '@/shared/components/layout';
import { media } from '@/styles/breakpoints';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #0d0c0f;
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
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;

  @media ${media.md} {
    padding-bottom: 80px;
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
`;

export const StepperRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 6px;
    font-size: 11.5px;
  }

  .step-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #7d6b6a;
    font-weight: 600;

    &.completed {
      color: #ae8786;
      cursor: pointer;
      &:hover {
        color: #ffb955;
      }
    }

    &.active {
      color: #ffffff;
      font-weight: 700;

      .step-num {
        background: #ff535a;
        color: #ffffff;
        border-color: #ff7b54;
      }
    }

    .step-num {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
    }
  }

  .step-arrow {
    color: rgba(255, 255, 255, 0.2);
    font-size: 11px;
  }
`;

export const TimerBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 83, 90, 0.12);
  border: 1px solid rgba(255, 83, 90, 0.3);
  color: #ff535a;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  align-items: flex-start;

  > * {
    min-width: 0;
  }

  @media ${media.lg} {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SnackCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media ${media.md} {
    grid-template-columns: 1fr;
  }
`;
