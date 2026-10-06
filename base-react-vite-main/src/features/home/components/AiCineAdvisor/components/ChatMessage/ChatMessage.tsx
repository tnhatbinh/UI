import type { FC } from 'react';
import { Bot } from 'lucide-react';
import * as S from '../../AiCineAdvisor.styles';

export const ChatMessage: FC = () => {
  return (
    <S.AICardTopGroup>
      {/* Bot Profile */}
      <S.BotProfileRow>
        <S.BotAvatar>
          <Bot color="#680010" size={18} fill="currentColor" />
        </S.BotAvatar>
        <S.BotNameCol>
          <S.BotName>Trợ Lý AI PhimBook</S.BotName>
          <S.BotStatus>Sẵn sàng phản hồi tức thì</S.BotStatus>
        </S.BotNameCol>
      </S.BotProfileRow>

      {/* Chat Bubbles */}
      <S.ChatBubblesCol>
        {/* User Message */}
        <S.UserMessageBubble>
          <S.UserMessageText>
            "Tôi muốn xem một phim hành động thể loại siêu anh hùng thì xem phim
            gì?"
          </S.UserMessageText>
        </S.UserMessageBubble>
        {/* Bot Message */}
        <S.BotMessageBubble>
          <S.BotMessageText>
            "Dạ bạn nên xem phim Spider-Man với suất chiếu sớm vào lúc 09:00 tại
            rạp CGV Xuân Thủy nhé!"
          </S.BotMessageText>
        </S.BotMessageBubble>
      </S.ChatBubblesCol>
    </S.AICardTopGroup>
  );
};
