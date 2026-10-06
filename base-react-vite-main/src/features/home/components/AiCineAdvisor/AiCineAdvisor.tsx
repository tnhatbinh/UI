import type { FC } from 'react';
import { Bot, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChatSuggestions } from './components/ChatSuggestions/ChatSuggestions';
import { ChatMessage } from './components/ChatMessage/ChatMessage';
import { ChatInput } from './components/ChatInput/ChatInput';
import * as S from './AiCineAdvisor.styles';

export const AiCineAdvisor: FC = () => {
  const { t } = useTranslation();

  return (
    <S.SectionWrapper>
      <S.OuterContainer>
        {/* Section Container with Gradient & Ambient Glow */}
        <S.MainCard>
          {/* Ambient Glows */}
          <S.TopRightGlow />
          <S.BottomCenterGlow />

          {/* Section Header */}
          <S.HeaderRow>
            {/* Left Header */}
            <S.LeftHeaderGroup>
              <S.EngineRow>
                <S.EngineBadge>
                  <Bot color="#5B000D" size={18} fill="currentColor" />
                  <S.EngineText>{t('home:advisor.engine_name')}</S.EngineText>
                </S.EngineBadge>
                <S.Subtext>{t('home:advisor.subtext')}</S.Subtext>
              </S.EngineRow>
              <S.MainHeading>{t('home:advisor.heading')}</S.MainHeading>
            </S.LeftHeaderGroup>

            {/* Right Header Controls */}
            <S.RightControls>
              <S.TasteBadge>
                <S.TasteIndicator />
                <S.TasteTextCol>
                  <S.TasteText>
                    {t('home:advisor.taste_label')}{' '}
                    <S.TasteHighlight>
                      {t('home:advisor.taste_highlight')}
                    </S.TasteHighlight>
                  </S.TasteText>
                </S.TasteTextCol>
              </S.TasteBadge>
              <S.RefreshButton aria-label="Làm mới đề xuất">
                <RefreshCw color="#E7BCBA" size={20} />
              </S.RefreshButton>
            </S.RightControls>
          </S.HeaderRow>

          {/* Bento Grid */}
          <S.GridContainer>
            <ChatSuggestions />

            {/* Card 3: AI Chat */}
            <S.AICard>
              <ChatMessage />
              <ChatInput />
            </S.AICard>
          </S.GridContainer>
        </S.MainCard>
      </S.OuterContainer>
    </S.SectionWrapper>
  );
};
