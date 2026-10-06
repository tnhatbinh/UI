import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Bot, Zap, MapPin, Car, Send, RefreshCw } from "lucide-react";
import * as S from "./ai-cine-advisor.styles";

export const AiCineAdvisor: FC = () => {
  const navigate = useNavigate();
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
                  <S.EngineText>AI CineMatch Engine</S.EngineText>
                </S.EngineBadge>
                <S.Subtext>Phân tích theo dữ liệu xem phim của bạn</S.Subtext>
              </S.EngineRow>
              <S.MainHeading>GỢI Ý ĐIỆN ẢNH DÀNH RIÊNG CHO BẠN</S.MainHeading>
            </S.LeftHeaderGroup>

            {/* Right Header Controls */}
            <S.RightControls>
              <S.TasteBadge>
                <S.TasteIndicator />
                <S.TasteTextCol>
                  <S.TasteText>
                    Gu của bạn:{" "}
                    <S.TasteHighlight>Tâm Lý & IMAX</S.TasteHighlight>
                  </S.TasteText>
                </S.TasteTextCol>
              </S.TasteBadge>
              <S.RefreshButton>
                <RefreshCw color="#E7BCBA" size={20} />
              </S.RefreshButton>
            </S.RightControls>
          </S.HeaderRow>

          {/* Bento Grid */}
          <S.GridContainer>
            {/* Card 1: Oppenheimer */}
            <S.MovieCard>
              <S.CardTopGroup>
                <S.CardHeaderRow>
                  <S.MatchBadge>
                    <Sparkles color="#FFB3B0" size={12} fill="currentColor" />
                    <S.MatchText>Phù Hợp 98%</S.MatchText>
                  </S.MatchBadge>
                  <S.SourceText>Dựa trên 18 phim đã xem</S.SourceText>
                </S.CardHeaderRow>
                <S.MovieTitle>Oppenheimer: Bản Chiếu Đặc Biệt</S.MovieTitle>
                <S.MovieDescription>
                  "Nếu bạn mê hoặc quy mô hoành tráng của Dune và nhịp độ căng
                  thẳng trí tuệ của Christopher Nolan, đây là trải nghiệm màn
                  ảnh IMAX không thể bỏ qua tối thứ Bảy."
                </S.MovieDescription>
                <S.InfoBox>
                  <S.IconContainer>
                    <MapPin color="#FFB955" size={16} />
                  </S.IconContainer>
                  <S.InfoCol>
                    <S.InfoLabel>
                      Rạp gần bạn nhất còn 4 ghế VIP trung tâm
                    </S.InfoLabel>
                    <S.InfoValue>
                      CGV Vincom Center Landmark 81 • 20:15
                    </S.InfoValue>
                  </S.InfoCol>
                </S.InfoBox>
              </S.CardTopGroup>
              <S.CardBottomRow>
                <S.PriceGroup>
                  <S.PriceValue>140.000đ</S.PriceValue>
                  <S.PriceUnit>/vé VIP</S.PriceUnit>
                </S.PriceGroup>
                <S.PrimaryButton onClick={() => navigate("/dat-ve")}>
                  <S.PrimaryButtonText>Chọn Ghế Này</S.PrimaryButtonText>
                </S.PrimaryButton>
              </S.CardBottomRow>
            </S.MovieCard>

            {/* Card 2: Mai */}
            <S.MovieCard>
              <S.CardTopGroup>
                <S.CardHeaderRow>
                  <S.SoonBadge>
                    <Zap color="#FFB955" size={12} fill="currentColor" />
                    <S.SoonText>Suất Gần Bạn: 45 Phút Nữa</S.SoonText>
                  </S.SoonBadge>
                  <S.SourceText>Cách 1.8 km</S.SourceText>
                </S.CardHeaderRow>
                <S.MovieTitle>Mai (Phiên Bản Rạp Tiêu Chuẩn)</S.MovieTitle>
                <S.MovieDescription>
                  "Khung giờ hoàng kim tại Lotte Cantavil Quận 2. Phòng chiếu
                  Premium Ghế da ngả lưng Recliner, phòng chỉ còn 6 cặp ghế đôi
                  Sweetbox."
                </S.MovieDescription>
                <S.InfoBox>
                  <S.IconContainer>
                    <Car color="#FFB3B0" size={16} />
                  </S.IconContainer>
                  <S.InfoCol>
                    <S.InfoLabel>Phòng CineComfort • Suất 18:30</S.InfoLabel>
                    <S.InfoValue>
                      Ưu đãi giảm 30k khi đặt đồ qua App
                    </S.InfoValue>
                  </S.InfoCol>
                </S.InfoBox>
              </S.CardTopGroup>
              <S.CardBottomRow>
                <S.PriceGroup>
                  <S.PriceValue>220.000đ</S.PriceValue>
                  <S.PriceUnit>/cặp ghế</S.PriceUnit>
                </S.PriceGroup>
                <S.SecondaryButton onClick={() => navigate("/dat-ve")}>
                  <S.SecondaryButtonText>Đặt Ngay Kẻo Lỡ</S.SecondaryButtonText>
                </S.SecondaryButton>
              </S.CardBottomRow>
            </S.MovieCard>

            {/* Card 3: AI Chat */}
            <S.AICard>
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
                      "Tôi muốn xem một phim hành động thể loại siêu anh hùng
                      thì xem phim gì?"
                    </S.UserMessageText>
                  </S.UserMessageBubble>
                  {/* Bot Message */}
                  <S.BotMessageBubble>
                    <S.BotMessageText>
                      "Dạ bạn nên xem phim Spider-Man với suất chiếu sớm vào lúc
                      09:00 tại rạp CGV Xuân Thủy nhé!"
                    </S.BotMessageText>
                  </S.BotMessageBubble>
                </S.ChatBubblesCol>
              </S.AICardTopGroup>

              {/* Input Area */}
              <S.ChatInputArea>
                <S.ChatInput
                  type="text"
                  placeholder="Hỏi AI bất kỳ điều gì về phim..."
                />
                <S.SendButton>
                  <Send color="#680010" size={12} fill="currentColor" />
                </S.SendButton>
              </S.ChatInputArea>
            </S.AICard>
          </S.GridContainer>
        </S.MainCard>
      </S.OuterContainer>
    </S.SectionWrapper>
  );
};
