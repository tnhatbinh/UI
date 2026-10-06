import type { FC } from 'react';
import { Send } from 'lucide-react';
import * as S from '../../AiCineAdvisor.styles';

export const ChatInput: FC = () => {
  return (
    <S.ChatInputArea>
      <S.ChatInput placeholder="Nhập thể loại, tâm trạng hoặc diễn viên bạn thích..." />
      <S.SendButton type="button">
        <Send size={16} />
      </S.SendButton>
    </S.ChatInputArea>
  );
};
