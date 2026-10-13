import styled from 'styled-components';
import { Container } from '@/shared/components/layout';
import { media } from '@/styles/breakpoints';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #0d0c0f;
  background-image:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 185, 85, 0.07) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 30%,
      rgba(255, 83, 90, 0.05) 0%,
      transparent 50%
    );
  padding-top: var(--page-top-offset, calc(var(--header-public-height, 80px) + 20px));
  padding-bottom: 120px;
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;

  @media ${media.md} {
    padding-bottom: 96px;
  }
`;

export const InnerWrapper = styled(Container)`
  /* Inherits unified 1280px max-width, centering, and responsive gutters */
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.2px;
  color: #ff535a;
  text-transform: uppercase;
  margin-bottom: 12px;

  span.separator {
    color: #554443;
  }

  span.current {
    color: #ae8786;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;

  .title-area {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-size: 32px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.5px;

      @media (max-width: 480px) {
        font-size: 24px;
      }
    }

    .badge-icon {
      color: #ffb955;
    }
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 480px) {
      width: 100%;
      button.edit-btn,
      button.reward-btn {
        flex: 1;
        justify-content: center;
        padding: 9px 12px;
        font-size: 11.5px;
      }
    }

    button.edit-btn {
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.12);
      }
    }

    button.reward-btn {
      padding: 10px 20px;
      border-radius: 999px;
      background: linear-gradient(135deg, #ff535a 0%, #e02830 100%);
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12.5px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 15px rgba(255, 83, 90, 0.35);
      transition: all 0.2s;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(255, 83, 90, 0.5);
      }
    }
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  gap: 20px;
  margin-bottom: 24px;

  > * {
    min-width: 0;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const MainTwoColGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  gap: 20px;
  margin-bottom: 32px;

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
  gap: ${(props) => props.$gap || '20px'};
  min-width: 0;
`;

export { ToastNotification } from '@shared/components/toast/ToastNotification.styles';
