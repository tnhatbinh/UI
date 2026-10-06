import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  min-height: 418px;
  z-index: 2;
  position: relative;

  @media (max-width: 1280px) {
    padding: 32px 16px;
    height: auto;
  }
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  isolation: isolate;
  width: 100%;
  max-width: 1232px;
  min-height: 338px;
  background: #1c1b1c;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 24px;
    gap: 20px;
    height: auto;
  }

  @media (max-width: 640px) {
    padding: 20px 16px;
  }
`;

export const GradientAccent = styled.div`
  position: absolute;
  left: 33.33%;
  right: 0%;
  top: 0px;
  bottom: 0px;
  background: linear-gradient(
    270deg,
    rgba(255, 83, 90, 0.3) 0%,
    rgba(255, 83, 90, 0) 100%
  );
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  gap: 54.39px;
  width: 100%;
  min-height: 132px;
  z-index: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 100%;
  max-width: 672px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  gap: 8px;
  height: 24px;
  background: #2a2a2b;
  border-radius: 9999px;
  width: fit-content;
`;

export const BadgeDot = styled.div`
  width: 8px;
  height: 8px;
  background: #ff535a;
  border-radius: 9999px;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(255, 83, 90, 0.6);
`;

export const BadgeText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: #ffb3b0;
  white-space: nowrap;
`;

export const HeadingTitle = styled.h1`
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  color: #e5e2e3;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const SubtitleText = styled.p`
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #e7bcba;
  max-width: 664px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const MetricSparklineCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 24px;
  width: 425.61px;
  height: 74px;
  background: rgba(32, 31, 32, 0.8);
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 12px;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 100%;
    gap: 16px;
    justify-content: space-between;
    height: auto;
    padding: 12px;
  }
`;

export const MetricColLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  min-width: 136px;
`;

export const MetricNumberGold = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffb955;
`;

export const MetricLabel = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  text-transform: uppercase;
  color: #e7bcba;
  white-space: nowrap;
`;

export const SparklineBars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4px;
  width: 96px;
  height: 40px;
  flex-shrink: 0;
`;

export const SparkBar = styled.div`
  width: 8px;
  height: 20px;
  background: #fff;
  border-radius: 9999px;
  transition: height 0.3s ease;
`;

export const MetricColRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  min-width: 113px;
`;

export const MetricNumberPink = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffb3b0;
  text-align: right;
`;

export const SearchAndTagsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  z-index: 2;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  width: 100%;
  min-height: 58px;
  background: rgba(42, 42, 43, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  gap: 8px;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 12px;
    height: auto;
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  color: #ffb955;
  flex-shrink: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 42px;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #e5e2e3;
  padding: 0 8px;

  &::placeholder {
    color: #ae8786;
  }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 14px;
    padding: 0;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  gap: 8px;
  width: 157px;
  height: 42px;
  background: #ff535a;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow:
    0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: #ff3b43;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 83, 90, 0.35);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SearchButtonText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.28px;
  color: #5b000d;
`;

export const FastTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
`;

export const FastTagsLabel = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: #ae8786;
  padding-right: 4px;
  flex-shrink: 0;
`;

export const TagPill = styled.button<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 6px;
  height: 28px;
  background: #201f20;
  border-radius: 9999px;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? 'rgba(255, 83, 90, 0.5)' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #2a2a2b;
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

export const TagPillText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.66px;
  color: #e7bcba;
`;

export const SearchForm = styled.form``;
