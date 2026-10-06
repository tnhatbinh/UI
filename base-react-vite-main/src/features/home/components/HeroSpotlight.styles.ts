import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 868px;
  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 960px;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -80px;
  height: 948px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 920px;
  max-width: 1920px;
  margin-top: -64px;
  isolation: isolate;
`;

export const BackgroundImage = styled.div<{ $bgImage: string }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: -10;
  background-image: url(${(props) => props.$bgImage});
`;

export const GradientOverlayRight = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    to right,
    var(--bg-primary),
    rgba(14, 14, 15, 0.8),
    transparent
  );
  z-index: 1;
`;

export const GradientOverlayTop = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    to top,
    var(--bg-primary),
    rgba(14, 14, 15, 0.4),
    transparent
  );
  z-index: 2;
`;

export const GradientOverlayRadial = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  background: radial-gradient(
    141.42% 141.42% at 100% 0%,
    rgba(255, 83, 90, 0.1) 0%,
    rgba(255, 83, 90, 0) 50%,
    var(--bg-primary) 100%
  );
`;

export const ContentContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ContentInner = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 112px;
  padding-bottom: 128px;

  @media (max-width: 1024px) {
    padding-top: 90px;
    padding-bottom: 240px;
  }

  @media (max-width: 640px) {
    padding-bottom: 340px;
  }
`;

export const HeroDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 768px;
`;

export const FormatsBadgesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  height: 60px;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`;

export const ImaxBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  height: 24px;
  background-color: var(--secondary-hover);
  border-radius: 9999px;
  box-shadow:
    0px 10px 15px -3px rgba(220, 145, 0, 0.2),
    0px 4px 6px -4px rgba(220, 145, 0, 0.2);
`;

export const ImaxText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--on-secondary-dark);
  letter-spacing: 0.55px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const AgeBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 24px;
  background-color: rgba(42, 42, 43, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 9999px;
`;

export const AgeText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-tint);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  height: 28px;
  background-color: rgba(42, 42, 43, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 9999px;
`;

export const RatingScore = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const RatingCount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const GenreBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 24px;
  background-color: rgba(42, 42, 43, 0.6);
  backdrop-filter: blur(6px);
  border-radius: 9999px;
  margin-top: 4px;
`;

export const GenreText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--text-secondary-alt);
  letter-spacing: 0.66px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 132.5px;
`;

export const TitleLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--primary-subtitle);
  letter-spacing: 2.75px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  gap: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: var(--primary-text);
  line-height: 56px;
  letter-spacing: -1.4px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 42px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 36.4px;
  font-weight: 300;
  color: var(--text-ternary-alt);
  line-height: 36px;
  letter-spacing: -1.4px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Synopsis = styled.p`
  width: 100%;
  max-width: 672px;
  height: 78px;
  font-size: 16px;
  font-weight: 400;
  color: var(--text-secondary-alt);
  line-height: 26px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
`;

export const KeyMetas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 20px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MetaText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const ActionCtas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 64px;
  padding-top: 8px;
`;

export const BookButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 333.12px;
  height: 48px;
  padding: 14px 40px;
  background-image: linear-gradient(
    to right,
    var(--primary),
    var(--primary-sub)
  );
  box-shadow: 0px 0px 32px rgba(255, 83, 90, 0.5);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const BookButtonText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--on-primary-dark);
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const TrailerButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 194.88px;
  height: 56px;
  padding: 14px 24px;
  background-color: rgba(42, 42, 43, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(42, 42, 43, 0.9);
  }
`;

export const PlayIconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: rgba(255, 83, 90, 0.2);
`;

export const TrailerButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const CarouselTracker = styled.div`
  position: absolute;
  right: 24px;
  top: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 160.83px;
  height: 32px;
`;

export const CarouselTrackerInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  height: 32px;
  background-color: rgba(28, 27, 28, 0.6);
  backdrop-filter: blur(6px);
  border-radius: 9999px;
`;

export const TrackerText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 0.66px;
  font-family: "Liberation Mono", monospace;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
  height: 4px;
`;

export const ActiveDot = styled.div`
  width: 24px;
  height: 4px;
  background-color: var(--primary);
  border-radius: 9999px;
`;

export const InactiveDot = styled.div`
  width: 8px;
  height: 4px;
  background-color: var(--bg-border-light);
  border-radius: 9999px;
`;

export const QuickBookingBar = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  width: 1232px;
  max-width: calc(100% - 32px);
  height: 92px;
  background-color: rgba(28, 27, 28, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0px 24px 60px -12px rgba(0, 0, 0, 0.9);
  gap: 12px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    padding: 16px;
    bottom: 20px;
    gap: 10px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    bottom: 16px;
  }
`;

export const StepItem = styled.div<{ $isOpen?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  width: 100%;
  height: 60px;
  background-color: ${({ $isOpen }) =>
    $isOpen ? "rgba(42, 42, 43, 0.75)" : "rgba(42, 42, 43, 0.4)"};
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? "rgba(255, 83, 90, 0.5)" : "transparent")};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;

  &:hover {
    background-color: rgba(42, 42, 43, 0.65);
  }
`;

export const IconBox1 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 83, 90, 0.15);
  border-radius: 8px;
`;

export const IconBox2 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 185, 85, 0.15);
  border-radius: 8px;
`;

export const IconBox3 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(140, 144, 164, 0.2);
  border-radius: 8px;
`;

export const IconBox4 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-border-light);
  border-radius: 8px;
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 36px;
  flex: 1;
`;

export const StepLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--primary-subtitle);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const StepValueRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20px;
`;

export const StepValue1 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 190px;
`;

export const StepValue2 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

export const StepValue3 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StepValue4 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DropdownChevron = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const BookingDropdown = styled.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  min-width: 100%;
  width: max-content;
  max-width: 320px;
  max-height: 280px;
  overflow-y: auto;
  background: rgba(24, 23, 24, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.9);
  padding: 6px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 3px;
  animation: slideUpFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

export const BookingDropdownItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  background: ${({ $isSelected }) =>
    $isSelected ? "rgba(255, 83, 90, 0.15)" : "transparent"};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: ${({ $isSelected }) =>
      $isSelected ? "rgba(255, 83, 90, 0.25)" : "rgba(255, 255, 255, 0.08)"};
  }

  span {
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 13px;
    font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 500)};
    color: ${({ $isSelected }) => ($isSelected ? "#FFFFFF" : "#E7BCBA")};
    white-space: nowrap;
  }

  .check-icon {
    color: var(--primary);
    flex-shrink: 0;
  }
`;

