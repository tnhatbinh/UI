import type { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  $noPadding?: boolean;
}

/**
 * Standard Layout Container for PhimBook Cinema.
 * - Desktop: Max-width 1280px, auto centered, 24px horizontal gutters.
 * - Tablet: Auto responsive 16px horizontal gutters.
 * - Mobile: 16px (down to 12px on ultra-compact screens).
 */
export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: var(--content-max-width, 1280px);
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ $noPadding }) =>
    $noPadding ? '0' : 'var(--page-gutter, 24px)'};
  padding-right: ${({ $noPadding }) =>
    $noPadding ? '0' : 'var(--page-gutter, 24px)'};

  @media ${media.md} {
    padding-left: ${({ $noPadding }) =>
      $noPadding ? '0' : 'var(--page-gutter-compact, 16px)'};
    padding-right: ${({ $noPadding }) =>
      $noPadding ? '0' : 'var(--page-gutter-compact, 16px)'};
  }

  @media ${media.xs} {
    padding-left: ${({ $noPadding }) => ($noPadding ? '0' : '12px')};
    padding-right: ${({ $noPadding }) => ($noPadding ? '0' : '12px')};
  }
`;

export default Container;

