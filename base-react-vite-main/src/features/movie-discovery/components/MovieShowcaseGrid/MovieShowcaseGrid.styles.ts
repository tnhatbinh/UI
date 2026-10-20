import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px var(--page-gutter, 24px);
  width: 100%;
  max-width: var(--content-max-width, 1280px);
  margin: 0 auto;
  min-height: 600px;
  z-index: 2;
  position: relative;

  @media ${media.md} {
    padding: 32px var(--page-gutter-compact, 16px);
    height: auto;
  }

  @media ${media.xs} {
    padding: 24px 12px;
  }
`;

export const GridContainer = styled.div<{ $viewMode?: 'grid' | 'list' }>`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ $viewMode }) =>
    $viewMode === 'list' ? '1fr' : 'repeat(4, 1fr)'};
  gap: ${({ $viewMode }) => ($viewMode === 'list' ? '16px' : '24px')};
  min-width: 0;

  @media ${media.xl} {
    grid-template-columns: ${({ $viewMode }) =>
      $viewMode === 'list' ? '1fr' : 'repeat(3, 1fr)'};
  }

  @media ${media.lg} {
    grid-template-columns: ${({ $viewMode }) =>
      $viewMode === 'list' ? '1fr' : 'repeat(2, 1fr)'};
    gap: 16px;
  }

  @media ${media.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const CardWrapper = styled.div<{ $viewMode?: 'grid' | 'list' }>`
  display: flex;
  flex-direction: ${({ $viewMode }) => ($viewMode === 'list' ? 'row' : 'column')};
  align-items: ${({ $viewMode }) => ($viewMode === 'list' ? 'stretch' : 'flex-start')};
  padding: 0px;
  width: 100%;
  max-width: 100%;
  min-height: ${({ $viewMode }) => ($viewMode === 'list' ? '210px' : '495px')};
  background: #1c1b1c;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  margin: 0 auto;
  min-width: 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  @media ${media.md} {
    flex-direction: column;
    max-width: 100%;
    min-height: 480px;
  }

  @media ${media.xs} {
    max-width: 100%;
    min-height: 440px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0px 24px 36px -8px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(255, 83, 90, 0.15);
    border-color: rgba(255, 83, 90, 0.3);
  }
`;

export const PosterArea = styled.div<{ $viewMode?: 'grid' | 'list' }>`
  position: relative;
  width: ${({ $viewMode }) => ($viewMode === 'list' ? '170px' : '100%')};
  min-width: ${({ $viewMode }) => ($viewMode === 'list' ? '170px' : 'auto')};
  height: ${({ $viewMode }) => ($viewMode === 'list' ? 'auto' : '435px')};
  min-height: ${({ $viewMode }) => ($viewMode === 'list' ? '210px' : '435px')};
  background: #201f20;
  overflow: hidden;
  isolation: isolate;
  flex-shrink: 0;

  @media ${media.md} {
    width: 100%;
    min-width: 100%;
    height: 400px;
  }

  @media (max-width: 400px) {
    height: 380px;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.04);
  }
`;

export const PosterGradientOverlay = styled.div<{ $viewMode?: 'grid' | 'list' }>`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: ${({ $viewMode }) =>
    $viewMode === 'list'
      ? 'linear-gradient(90deg, rgba(14, 14, 15, 0) 60%, rgba(14, 14, 15, 0.6) 100%)'
      : 'linear-gradient(0deg, #0e0e0f 0%, rgba(14, 14, 15, 0) 50%, rgba(14, 14, 15, 0) 100%)'};
  opacity: 0.95;
  pointer-events: none;
  z-index: 1;
`;

export const TopLeftBadges = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 2;
`;

export const RatingBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px;
  gap: 4px;
  height: 22px;
  background: rgba(14, 14, 15, 0.85);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 185, 85, 0.2);
  border-radius: 6px;
`;

export const RatingText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: #ffb955;
`;

export const AgeBadge = styled.div<{ $bg?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  height: 22px;
  background: ${({ $bg }) => $bg || '#93000A'};
  border-radius: 6px;
`;

export const AgeText = styled.span<{ $color?: string }>`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: ${({ $color }) => $color || '#FFDAD6'};
  white-space: nowrap;
`;

export const FormatBadge = styled.div<{ $bg?: string; $border?: string }>`
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 2px 8px;
  height: 22px;
  background: ${({ $bg }) => $bg || 'rgba(28, 27, 28, 0.85)'};
  border: 1px solid ${({ $border }) => $border || 'rgba(255, 255, 255, 0.15)'};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 6px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormatText = styled.span<{ $color?: string }>`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: ${({ $color }) => $color || '#E5E2E3'};
  white-space: nowrap;
`;

export const BottomCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  z-index: 4;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 16px;
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: #ae8786;
`;

export const MetaText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: #ae8786;
  white-space: nowrap;
`;

export const MetaDivider = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  color: #ae8786;
`;

export const MovieTitle = styled.h3`
  margin: 0;
  width: 100%;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.55px;
  color: #e5e2e3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 56px;

  @media ${media.xs} {
    font-size: 18px;
    line-height: 24px;
    min-height: 48px;
  }
`;

export const MovieDescription = styled.p`
  margin: 0;
  width: 100%;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.18px;
  color: #e7bcba;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const ActionPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  gap: 8px;
  width: 100%;
  height: 60px;
  background: #1c1b1c;
`;

export const DetailButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  height: 38px;
  flex: 1;
  min-width: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

export const DetailButtonText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--primary-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  height: 38px;
  flex: 1;
  min-width: 0;
  background: var(--primary);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 83, 90, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BookButtonText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--on-primary-darker, #5b000d);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* ─── List Mode Styled Components ─── */

export const ListInfoArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  gap: 24px;
  flex: 1;
  min-width: 0;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
  }
`;

export const ListInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const ListDescription = styled.p`
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13px;
  line-height: 20px;
  color: #ae8786;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListActionPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 140px;
  flex-shrink: 0;

  @media (max-width: 860px) {
    flex-direction: row;
    width: 100%;
    min-width: 0;
  }
`;

/* ─── Empty State Styled Components ─── */

export const EmptyStateWrapper = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 60px auto;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(28, 27, 28, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
`;

export const EmptyIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 83, 90, 0.12);
  border: 1px solid rgba(255, 83, 90, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 0 24px rgba(255, 83, 90, 0.2);
`;

export const EmptyTitle = styled.h3`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #e5e2e3;
  margin: 0 0 10px 0;
`;

export const EmptyDescription = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #ae8786;
  margin: 0 0 24px 0;
  max-width: 440px;
`;

export const EmptyResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  background: #ff535a;
  color: #5b000d;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 16px rgba(255, 83, 90, 0.35);
  transition: all 0.2s ease;

  &:hover {
    background: #ff6b71;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(255, 83, 90, 0.45);
  }

  &:active {
    transform: translateY(0);
  }
`;
