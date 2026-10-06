import type { FC } from 'react';
import { Sparkles, Zap, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../AiCineAdvisor.styles';

export const ChatSuggestions: FC = () => {
  const navigate = useNavigate();

  return (
    <>
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
            "Nếu bạn mê hoặc quy mô hoành tráng của Dune và nhịp độ căng thẳng
            trí tuệ của Christopher Nolan, đây là trải nghiệm màn ảnh IMAX không
            thể bỏ qua tối thứ Bảy."
          </S.MovieDescription>
          <S.InfoBox>
            <S.IconContainer>
              <MapPin color="#FFB955" size={16} />
            </S.IconContainer>
            <S.InfoCol>
              <S.InfoLabel>
                Rạp gần bạn nhất còn 4 ghế VIP trung tâm
              </S.InfoLabel>
              <S.InfoValue>CGV Vincom Center Landmark 81 • 20:15</S.InfoValue>
            </S.InfoCol>
          </S.InfoBox>
        </S.CardTopGroup>
        <S.CardBottomRow>
          <S.PriceGroup>
            <S.PriceValue>140.000đ</S.PriceValue>
            <S.PriceUnit>/vé VIP</S.PriceUnit>
          </S.PriceGroup>
          <S.PrimaryButton onClick={() => navigate('/dat-ve')}>
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
            "Khung giờ hoàng kim tại Lotte Cantavil Quận 2. Phòng chiếu Premium
            Ghế da ngả lưng Recliner, phòng chỉ còn 6 cặp ghế đôi Sweetbox."
          </S.MovieDescription>
          <S.InfoBox>
            <S.IconContainer>
              <Car color="#FFB3B0" size={16} />
            </S.IconContainer>
            <S.InfoCol>
              <S.InfoLabel>Phòng CineComfort • Suất 18:30</S.InfoLabel>
              <S.InfoValue>Ưu đãi giảm 30k khi đặt đồ qua App</S.InfoValue>
            </S.InfoCol>
          </S.InfoBox>
        </S.CardTopGroup>
        <S.CardBottomRow>
          <S.PriceGroup>
            <S.PriceValue>220.000đ</S.PriceValue>
            <S.PriceUnit>/cặp ghế</S.PriceUnit>
          </S.PriceGroup>
          <S.SecondaryButton onClick={() => navigate('/dat-ve')}>
            <S.SecondaryButtonText>Đặt Ngay Kẻo Lỡ</S.SecondaryButtonText>
          </S.SecondaryButton>
        </S.CardBottomRow>
      </S.MovieCard>
    </>
  );
};
