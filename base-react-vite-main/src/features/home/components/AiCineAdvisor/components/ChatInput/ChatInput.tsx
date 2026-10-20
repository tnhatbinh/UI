import type { FC } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as S from '../../AiCineAdvisor.styles';

export const ChatInput: FC = () => {
  const { t } = useTranslation();

  return (
    <S.ChatInputArea>
      <S.ChatInput placeholder={t('home:advisor.input_placeholder')} />
      <S.SendButton type="button" aria-label={t('home:advisor.send_btn')}>
        <Send size={16} />
      </S.SendButton>
    </S.ChatInputArea>
  );
};
