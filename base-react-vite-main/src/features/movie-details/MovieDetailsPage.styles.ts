import styled from 'styled-components';
import { Container } from '@/shared/components/layout';
import { media } from '@/styles/breakpoints';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
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
  padding-bottom: 120px;
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;

  @media ${media.md} {
    padding-bottom: 100px;
  }
`;

export const InnerWrapper = styled(Container)`
  /* Inherits 1280px max-width, auto margins, and responsive gutters */
`;

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #ae8786;
  margin-bottom: 28px;
  min-width: 0;

  .back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #e5e2e3;
    cursor: pointer;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #ffb955;
    }
  }

  .separator {
    color: rgba(255, 255, 255, 0.2);
  }

  .current {
    color: #ffffff;
    font-weight: 600;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 6px;

    .back-btn span {
      display: none;
    }
  }
`;
