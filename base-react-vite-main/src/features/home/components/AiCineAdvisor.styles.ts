import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: var(--bg-primary);
`;

export const OuterContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: center;
`;

export const MainCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 1232px;
  min-height: 612px;
  height: auto;
  border-radius: 24px;
  padding: 40px;
  background-image: linear-gradient(
    to bottom right,
    var(--bg-disabled),
    var(--bg-elevated),
    var(--bg-primary)
  );
  box-shadow: 0px 24px 50px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    padding: 32px 20px;
  }
  @media (max-width: 640px) {
    padding: 24px 16px;
  }
`;

export const TopRightGlow = styled.div`
  position: absolute;
  width: 384px;
  height: 384px;
  right: -80px;
  top: -80px;
  background-color: rgba(255, 83, 90, 0.2);
  filter: blur(32px);
  border-radius: 9999px;
  z-index: 0;
  pointer-events: none;
`;

export const BottomCenterGlow = styled.div`
  position: absolute;
  height: 320px;
  width: 400px;
  left: 33%;
  bottom: 0;
  background-color: rgba(255, 185, 85, 0.15);
  filter: blur(32px);
  border-radius: 9999px;
  z-index: 0;
  pointer-events: none;
`;

export const HeaderRow = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 24px;
  z-index: 10;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const LeftHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 665px;
`;

export const EngineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
`;

export const EngineBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 24px;
  background-image: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 9999px;
  box-shadow:
    0px 2px 4px -2px rgba(0, 0, 0, 0.1),
    0px 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const EngineText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--on-primary-darker);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const Subtext = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-subtitle);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const MainHeading = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: var(--primary-text);
  line-height: 48px;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;

  @media (max-width: 960px) {
    margin-top: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

export const TasteBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 56px;
  background-color: rgba(14, 14, 15, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 12px;
`;

export const TasteIndicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--secondary);
  border-radius: 9999px;
`;

export const TasteTextCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TasteText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 20px;
`;

export const TasteHighlight = styled.span`
  font-weight: 900;
  color: var(--secondary);
`;

export const RefreshButton = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(14, 14, 15, 0.8);
  border-radius: 12px;
  transition: background-color 0.15s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-primary);
  }
`;

export const GridContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  z-index: 10;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 380px;
  height: auto;
  padding: 24px;
  background-color: rgba(14, 14, 15, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
`;

export const CardTopGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
`;

export const MatchBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 24px;
  background-color: rgba(255, 83, 90, 0.2);
  border-radius: 8px;
`;

export const MatchText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-tint);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const SourceText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-subtitle);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Liberation Mono", monospace;
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-text);
  line-height: 30px;
  letter-spacing: -0.22px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
  margin-top: 4px;
`;

export const MovieDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary-alt);
  line-height: 22px;
  letter-spacing: 0.14px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
  margin-top: 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  width: 100%;
  height: 72px;
  background-color: rgba(42, 42, 43, 0.6);
  border-radius: 12px;
  margin-top: 8px;
`;

export const IconContainer = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: var(--primary-subtitle);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 20px;
`;

export const CardBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
`;

export const PriceGroup = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

export const PriceValue = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 20px;
`;

export const PriceUnit = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--primary-subtitle);
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 18px;
`;

export const PrimaryButton = styled.button`
  height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 12px;
  transition: opacity 0.15s;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PrimaryButtonText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--on-primary-darker);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const SoonBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 24px;
  background-color: rgba(255, 185, 85, 0.2);
  border-radius: 8px;
`;

export const SoonText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const SecondaryButton = styled.button`
  height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-border-lighter);
  border-radius: 12px;
  transition: background-color 0.15s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-border-lightest);
  }
`;

export const SecondaryButtonText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const AICard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 380px;
  height: auto;
  padding: 24px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 83, 90, 0.15),
    rgba(14, 14, 15, 0.8),
    rgba(14, 14, 15, 0.9)
  );
  backdrop-filter: blur(12px);
  border-radius: 16px;
`;

export const AICardTopGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const BotProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const BotAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--primary-tint);
  border-radius: 9999px;
`;

export const BotNameCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BotName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 20px;
`;

export const BotStatus = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 16px;
`;

export const ChatBubblesCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const UserMessageBubble = styled.div`
  align-self: flex-end;
  max-width: 288px;
  padding: 10px;
  background-color: var(--bg-elevated);
  border-radius: 12px;
  border-top-right-radius: 2px;
`;

export const UserMessageText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary-alt);
  line-height: 18px;
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
`;

export const BotMessageBubble = styled.div`
  align-self: flex-start;
  max-width: 304px;
  padding: 10px;
  background-color: rgba(255, 83, 90, 0.2);
  border-radius: 12px;
  border-top-left-radius: 2px;
`;

export const BotMessageText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--primary-tint);
  line-height: 18px;
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
`;

export const ChatInputArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: var(--bg-disabled);
  border-radius: 9999px;
  padding-left: 16px;
  padding-right: 6px;
`;

export const ChatInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 400;
  color: var(--primary-text);
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;

  &::placeholder {
    color: var(--primary-subtitle);
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 9999px;
  transition: background-color 0.15s;
  flex-shrink: 0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 83, 90, 0.9);
  }
`;
