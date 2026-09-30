import styled from 'styled-components';

export const ExclusiveOffersSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: var(--bg-primary);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
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

export const HeaderTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 687px;
`;

export const HeaderSubtitle = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--secondary);
  letter-spacing: 1.1px;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const HeaderTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: var(--primary-text);
  line-height: 48px;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-family: 'Be Vietnam Pro', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;

  &:hover span {
    text-decoration: underline;
  }
`;

export const HeaderButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-tint);
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const CardsGrid = styled.div`
  width: 100%;
  max-width: 1232px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 368.5px;
  height: auto;
  background-color: var(--bg-card);
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  isolation: isolate;
`;

export const GradientCardWrapper = styled(CardWrapper)`
  background: linear-gradient(to bottom, var(--bg-disabled), var(--bg-elevated));
`;

export const Card1Blur = styled.div`
  position: absolute;
  width: 192px;
  height: 192px;
  right: -48px;
  bottom: -48px;
  background-color: rgba(255, 83, 90, 0.1);
  filter: blur(20px);
  border-radius: 9999px;
  z-index: 0;
`;

export const Card2Blur = styled.div`
  position: absolute;
  width: 192px;
  height: 192px;
  right: -48px;
  bottom: -48px;
  background-color: rgba(255, 185, 85, 0.15);
  filter: blur(20px);
  border-radius: 9999px;
  z-index: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
`;

export const Badge = styled.div<{ $bg: string }>`
  padding: 4px 8px;
  background-color: ${props => props.$bg};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.span<{ $color: string }>`
  font-size: 11px;
  font-weight: 700;
  color: ${props => props.$color};
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const CardStatus = styled.span<{ $color: string; $fontFamily?: string; $uppercase?: boolean }>`
  font-size: 11px;
  font-weight: 700;
  color: ${props => props.$color};
  letter-spacing: 0.66px;
  font-family: ${props => props.$fontFamily || "'Be Vietnam Pro', sans-serif"};
  ${props => props.$uppercase && 'text-transform: uppercase;'}
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-text);
  line-height: 30px;
  letter-spacing: -0.22px;
  font-family: 'Be Vietnam Pro', sans-serif;
  margin: 8px 0 0 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary-alt);
  line-height: 23px;
  letter-spacing: 0.14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  margin: 8px 0 0 0;
`;

export const BankIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const BankIcon = styled.div`
  padding: 4px 10px;
  background-color: var(--bg-border-light);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BankIconText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-text);
  letter-spacing: 0.66px;
  font-family: 'Liberation Mono', monospace;
`;

export const CheckmarkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`;

export const CheckmarkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5px;
  margin-top: 4px;
`;

export const CheckmarkListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckmarkListText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary-alt);
  letter-spacing: 0.18px;
  font-family: 'Be Vietnam Pro', sans-serif;
  line-height: 18px;
`;

export const CardButton = styled.button<{ $variant: 'dark' | 'gradient' | 'black' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  z-index: 10;
  margin-top: 24px;
  cursor: pointer;
  border: none;
  
  ${props => props.$variant === 'dark' && `
    background-color: var(--bg-disabled);
    transition: background-color 0.2s;
    &:hover {
      background-color: var(--bg-border-light);
    }
  `}

  ${props => props.$variant === 'gradient' && `
    background: linear-gradient(to right, var(--primary), var(--secondary));
    box-shadow: 0px 10px 15px -3px rgba(255, 83, 90, 0.2);
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.9;
    }
  `}

  ${props => props.$variant === 'black' && `
    background-color: var(--bg-primary);
    transition: background-color 0.2s;
    &:hover {
      background-color: var(--bg-card-alt);
    }
  `}
`;

export const CardButtonText = styled.span<{ $color: string; $weight?: number }>`
  font-size: 14px;
  font-weight: ${props => props.$weight || 700};
  color: ${props => props.$color};
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
`;
