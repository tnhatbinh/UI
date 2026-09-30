import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: var(--bg-primary);
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1680px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RedDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--primary);
  border-radius: 9999px;
`;

export const SubtitleText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 1.1px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const MainTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: var(--primary-text);
  line-height: 48px;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-family: "Be Vietnam Pro", sans-serif;
  max-width: 430px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const MainTitleHighlight = styled.span`
  color: var(--primary);
`;

export const CategoryPillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
  max-width: 100%;
  padding-bottom: 4px;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 9999px;
  white-space: nowrap;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ${({ $active }) =>
    $active
      ? `
    background-color: var(--primary);
    color: var(--on-primary-darker);
    box-shadow: 0px 4px 12px rgba(255,83,90,0.3);
  `
      : `
    background-color: rgba(42, 42, 43, 0.8);
    color: var(--text-secondary-alt);
    
    &:hover {
      background-color: var(--bg-disabled);
    }
  `}
`;

export const TabText = styled.span<{ $active: boolean }>`
  font-size: 14px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  letter-spacing: 0.28px;
`;

export const MoviesGrid = styled.div`
  width: 100%;
  max-width: 1232px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 428.8px;
  background-color: var(--bg-card);
  border-radius: 16px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 680px) {
    height: auto;
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 340.8px;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 680px) {
    height: 280px;
  }
`;

export const PosterImage = styled.div<{ $bgImage: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  z-index: -10;
  background-image: url(${({ $bgImage }) => $bgImage});

  ${MovieCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PosterGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    var(--bg-primary),
    rgba(14, 14, 15, 0.3),
    transparent
  );
  z-index: 1;
`;

export const TopLeftBadges = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 10;
`;

export const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background-color: rgba(14, 14, 15, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 6px;
`;

export const RatingText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 0.66px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const AgeBadge = styled.div<{ $bgColor: string }>`
  padding: 2px 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const AgeText = styled.span<{ $color: string }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.66px;
  font-family: "Be Vietnam Pro", sans-serif;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
`;

export const FormatBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding-left: 8px;
  padding-right: 8px;
  height: 16px;
  background-color: rgba(42, 42, 43, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 6px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

export const FormatText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-text);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Liberation Mono", monospace;
`;

export const BottomMetaContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const MetaText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 0.66px;
  font-family: "Liberation Mono", monospace;
`;

export const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-text);
  line-height: 25px;
  font-family: "Be Vietnam Pro", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BottomInfoArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 88px;
  background-color: var(--bg-elevated);
  position: relative;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InfoLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-subtitle);
  letter-spacing: 0.66px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const InfoValue = styled.span<{ $color?: string }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  white-space: pre-line;
  color: ${({ $color }) => $color || "var(--primary-text)"};
`;

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  height: 48px;
  background-color: var(--primary);
  border-radius: 12px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    opacity: 0.9;
  }
`;

export const TicketIconContainer = styled.div`
  width: 13.33px;
  height: 10.67px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BuyButtonText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--on-primary-darker);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;
