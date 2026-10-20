import type { FC } from 'react';
import { Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as S from '../../AiCineAdvisor.styles';

export const ChatMessage: FC = () => {
  const { t } = useTranslation();

  return (
    <S.AICardTopGroup>
      {/* Bot Profile */}
      <S.BotProfileRow>
        <S.BotAvatar>
          <Bot color="#680010" size={18} fill="currentColor" />
        </S.BotAvatar>
        <S.BotNameCol>
          <S.BotName>{t('home:advisor.bot_name')}</S.BotName>
          <S.BotStatus>{t('home:advisor.bot_status')}</S.BotStatus>
        </S.BotNameCol>
      </S.BotProfileRow>

      {/* Chat Bubbles */}
      <S.ChatBubblesCol>
        {/* User Message */}
        <S.UserMessageBubble>
          <S.UserMessageText>
            {t('home:advisor.user_message')}
          </S.UserMessageText>
        </S.UserMessageBubble>
        {/* Bot Message */}
        <S.BotMessageBubble>
          <S.BotMessageText>
            {t('home:advisor.bot_message')}
          </S.BotMessageText>
        </S.BotMessageBubble>
      </S.ChatBubblesCol>
    </S.AICardTopGroup>
  );
};
