import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Ticket } from "lucide-react";
import {
  Section,
  InnerContainer,
  Header,
  TitleArea,
  SubtitleContainer,
  RedDot,
  SubtitleText,
  MainTitle,
  MainTitleHighlight,
  CategoryPillsContainer,
  TabButton,
  TabText,
  MoviesGrid,
  MovieCard,
  PosterContainer,
  PosterImage,
  PosterGradient,
  TopLeftBadges,
  RatingBadge,
  RatingText,
  AgeBadge,
  AgeText,
  FormatBadge,
  FormatText,
  BottomMetaContainer,
  MetaText,
  MovieTitle,
  BottomInfoArea,
  InfoColumn,
  InfoLabel,
  InfoValue,
  BuyButton,
  TicketIconContainer,
  BuyButtonText,
} from "./now-showing.styles";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  age: string;
  ageBg: string;
  ageText: string;
  format: string;
  meta: string;
  infoLabel: string;
  infoValue: string;
  infoValueColor?: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Năm Bước Để Yêu",
    image:
      "https://arena.fpt.edu.vn/wp-content/uploads/2021/04/5-yeu-to-tao-nen-mot-poster-phim-an-tuong.jpeg",
    rating: "9.2",
    age: "C18",
    ageBg: "#93000A",
    ageText: "#FFDAD6",
    format: "2D PHỤ ĐỀ",
    meta: "131 Phút • Tâm Lý",
    infoLabel: "Mới",
    infoValue: "Ra mắt",
  },
  {
    id: 2,
    title: "Hàm Cá Mập",
    image: "https://i.imgur.com/ZF2xgWi.jpg",
    rating: "8.9",
    age: "IMAX 3D",
    ageBg: "#DC9100",
    ageText: "#4F3100",
    format: "4DX HFR",
    meta: "192 Phút • Viễn Tưởng",
    infoLabel: "Khởi chiếu từ",
    infoValue: "Chiều tối\nIMAX",
  },
  {
    id: 3,
    title: "7 Thi Thể",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/b/b4/Poster_phim_7_thi_th%E1%BB%83.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original",
    rating: "8.6",
    age: "C18",
    ageBg: "#93000A",
    ageText: "#FFDAD6",
    format: "2D PHỤ ĐỀ",
    meta: "134 Phút • Kinh Dị",
    infoLabel: "Trạng thái",
    infoValue: "Cháy vé cuối\ntuần",
    infoValueColor: "#FFB3B0",
  },
  {
    id: 4,
    title: "Spider-Man",
    image: "https://genk.mediacdn.vn/2017/photo-1-1496042071517.jpg",
    rating: "8.1",
    age: "P",
    ageBg: "#8C90A4",
    ageText: "#252939",
    format: "2D LỒNG TIẾNG",
    meta: "94 Phút • Hài Hước",
    infoLabel: "Phòng chiếu",
    infoValue: "Tất cả định\ndạng",
  },
  {
    id: 5,
    title: "Thor: The Dark World",
    image:
      "https://www.thietkeposter.com.vn/wp-content/uploads/2017/06/23-poster-phim-dep-nhat-2013.jpg",
    rating: "8.4",
    age: "C13",
    ageBg: "#FF535A",
    ageText: "#5B000D",
    format: "SCREENX 4DX",
    meta: "115 Phút • Quái Vật",
    infoLabel: "Ưu đãi",
    infoValue: "Tặng Ly Độc\nQuyền",
    infoValueColor: "#FFB955",
  },
];

const tabs = [
  "Tất Cả",
  "IMAX / 3D",
  "Hành Động • Bom Tấn",
  "Kinh Dị • Hồi Hộp",
  "Hoạt Hình Gia Đình",
];

export const NowShowing: FC = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <InnerContainer>
        {/* Header with tabs */}
        <Header>
          {/* Title Area */}
          <TitleArea>
            <SubtitleContainer>
              <RedDot />
              <SubtitleText>ĐANG PHỔ BIẾN RỘNG RÃI</SubtitleText>
            </SubtitleContainer>
            <MainTitle>
              PHIM ĐANG CHIẾU <MainTitleHighlight>TẠI RẠP</MainTitleHighlight>
            </MainTitle>
          </TitleArea>

          {/* Quick Category Pills */}
          <CategoryPillsContainer>
            {tabs.map((tab, index) => (
              <TabButton key={index} $active={index === 0}>
                <TabText $active={index === 0}>{tab}</TabText>
              </TabButton>
            ))}
          </CategoryPillsContainer>
        </Header>

        {/* Movies Grid */}
        <MoviesGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id}>
              {/* Poster Container */}
              <PosterContainer>
                {/* Image */}
                <PosterImage $bgImage={movie.image} />
                {/* Gradient */}
                <PosterGradient />

                {/* Top Left Badges */}
                <TopLeftBadges>
                  <RatingBadge>
                    <Star color="#FFB955" fill="#FFB955" size={10} />
                    <RatingText>{movie.rating}</RatingText>
                  </RatingBadge>
                  <AgeBadge $bgColor={movie.ageBg}>
                    <AgeText $color={movie.ageText}>{movie.age}</AgeText>
                  </AgeBadge>
                </TopLeftBadges>

                {/* Top Right Format Badge */}
                <FormatBadge>
                  <FormatText>{movie.format}</FormatText>
                </FormatBadge>

                {/* Bottom Meta Inside Poster */}
                <BottomMetaContainer>
                  <MetaText>{movie.meta}</MetaText>
                  <MovieTitle>{movie.title}</MovieTitle>
                </BottomMetaContainer>
              </PosterContainer>

              {/* Bottom Info & Button */}
              <BottomInfoArea>
                {/* Info */}
                <InfoColumn>
                  <InfoLabel>{movie.infoLabel}</InfoLabel>
                  <InfoValue $color={movie.infoValueColor}>
                    {movie.infoValue}
                  </InfoValue>
                </InfoColumn>

                {/* Button */}
                <BuyButton onClick={() => navigate("/mua-ve")}>
                  <TicketIconContainer>
                    <Ticket color="#5B000D" size={14} />
                  </TicketIconContainer>
                  <BuyButtonText>MUA VÉ</BuyButtonText>
                </BuyButton>
              </BottomInfoArea>
            </MovieCard>
          ))}
        </MoviesGrid>
      </InnerContainer>
    </Section>
  );
};
