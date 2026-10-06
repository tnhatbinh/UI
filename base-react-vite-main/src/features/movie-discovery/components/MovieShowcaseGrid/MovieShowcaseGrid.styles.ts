import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 24px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  min-height: 1094px;
  z-index: 4;
  position: relative;

  @media (max-width: 1280px) {
    padding: 32px 16px;
    height: auto;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  max-width: 290px;
  min-height: 495px;
  background: #1c1b1c;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 8px 10px -6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0px 24px 36px -8px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(255, 83, 90, 0.15);
  }
`;

export const PosterArea = styled.div`
  position: relative;
  width: 100%;
  height: 435px;
  background: #201f20;
  overflow: hidden;
  isolation: isolate;
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

export const PosterGradientOverlay = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: linear-gradient(
    0deg,
    #0e0e0f 0%,
    rgba(14, 14, 15, 0) 50%,
    rgba(14, 14, 15, 0) 100%
  );
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
  padding: 4px 8px;
  gap: 4px;
  height: 24px;
  background: rgba(14, 14, 15, 0.8);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 4px;
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
  padding: 4px 8px;
  height: 24px;
  background: ${({ $bg }) => $bg || '#93000A'};
  border-radius: 4px;
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

export const FormatBadge = styled.div<{ $bg?: string }>`
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 3px 8px;
  height: 22px;
  background: ${({ $bg }) => $bg || '#FF535A'};
  border-radius: 4px;
  box-shadow:
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -4px rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormatText = styled.span<{ $color?: string }>`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: ${({ $color }) => $color || '#5B000D'};
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
`;

export const ActionPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  width: 100%;
  height: 60px;
  background: #1c1b1c;
`;

export const DetailButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  height: 36px;
  flex: 1;
  background: #201f20;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #282729;
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const DetailButtonText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  color: #e5e2e3;
  white-space: nowrap;
`;

export const BookButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  height: 36px;
  flex: 1;
  background: #ff535a;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow:
    0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: #ff3b43;
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
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  color: #5b000d;
  white-space: nowrap;
`;
