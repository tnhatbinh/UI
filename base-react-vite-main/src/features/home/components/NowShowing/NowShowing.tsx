import { useState, useMemo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Ticket } from "lucide-react";
import * as S from "./NowShowing.styles";

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
  categoryIndices: number[];
}

const movies: Movie[] = [
  {
    id: 101,
    title: "Năm Bước Để Yêu",
    image:
      "https://arena.fpt.edu.vn/wp-content/uploads/2021/04/5-yeu-to-tao-nen-mot-poster-phim-an-tuong.jpeg",
    rating: "9.2",
    age: "T18",
    ageBg: "#93000A",
    ageText: "#FFDAD6",
    format: "2D PHỤ ĐỀ",
    meta: "131 Phút • Tâm Lý",
    infoLabel: "Mới",
    infoValue: "Ra mắt",
    categoryIndices: [0, 4],
  },
  {
    id: 102,
    title: "Hàm Cá Mập",
    image: "https://i.imgur.com/ZF2xgWi.jpg",
    rating: "8.9",
    age: "T16",
    ageBg: "#DC9100",
    ageText: "#4F3100",
    format: "4DX HFR",
    meta: "192 Phút • Viễn Tưởng",
    infoLabel: "Khởi chiếu từ",
    infoValue: "Chiều tối\nIMAX",
    categoryIndices: [0, 1, 3],
  },
  {
    id: 103,
    title: "7 Thi Thể",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/b/b4/Poster_phim_7_thi_th%E1%BB%83.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original",
    rating: "8.6",
    age: "T18",
    ageBg: "#93000A",
    ageText: "#FFDAD6",
    format: "2D PHỤ ĐỀ",
    meta: "134 Phút • Kinh Dị",
    infoLabel: "Trạng thái",
    infoValue: "Cháy vé cuối\ntuần",
    infoValueColor: "#FFB3B0",
    categoryIndices: [0, 3],
  },
  {
    id: 104,
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
    categoryIndices: [0, 2, 4],
  },
  {
    id: 105,
    title: "Thor: The Dark World",
    image:
      "https://www.thietkeposter.com.vn/wp-content/uploads/2017/06/23-poster-phim-dep-nhat-2013.jpg",
    rating: "8.4",
    age: "T13",
    ageBg: "#FF535A",
    ageText: "#5B000D",
    format: "SCREENX 4DX",
    meta: "115 Phút • Quái Vật",
    infoLabel: "Ưu đãi",
    infoValue: "Tặng Ly Độc\nQuyền",
    infoValueColor: "#FFB955",
    categoryIndices: [0, 1, 2],
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
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectTab = (index: number) => () => {
    setActiveTab(index);
  };

  const handleMovieCardClick = (id: number) => () => {
    navigate(`/phim/${id}`);
  };

  const handleMovieDetailClick = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/phim/${id}`);
  };

  const handleMovieBuyClick = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/phim/${id}?booking=true`);
  };

  const filteredMovies = useMemo(() => {
    if (activeTab === 0) return movies;
    return movies.filter((m) => m.categoryIndices.includes(activeTab));
  }, [activeTab]);

  return (
    <S.Section>
      <S.InnerContainer>
        {/* Header with tabs */}
        <S.Header>
          {/* Title Area */}
          <S.TitleArea>
            <S.SubtitleContainer>
              <S.RedDot />
              <S.SubtitleText>ĐANG PHỔ BIẾN RỘNG RÃI</S.SubtitleText>
            </S.SubtitleContainer>
            <S.MainTitle>
              PHIM ĐANG CHIẾU <S.MainTitleHighlight>TẠI RẠP</S.MainTitleHighlight>
            </S.MainTitle>
          </S.TitleArea>

          {/* Quick Category Pills */}
          <S.CategoryPillsContainer>
            {tabs.map((tab, index) => (
              <S.TabButton
                key={index}
                type="button"
                $active={activeTab === index}
                onClick={handleSelectTab(index)}
              >
                <S.TabText $active={activeTab === index}>{tab}</S.TabText>
              </S.TabButton>
            ))}
          </S.CategoryPillsContainer>
        </S.Header>

        {/* Movies Grid */}
        <S.MoviesGrid>
          {filteredMovies.map((movie) => (
            <S.MovieCard
              key={movie.id}
              onClick={handleMovieCardClick(movie.id)}
            >
              {/* Poster Container */}
              <S.PosterContainer>
                {/* Image */}
                <S.PosterImage src={movie.image} alt={movie.title} />
                {/* Gradient */}
                <S.PosterGradient />

                {/* Top Left Badges */}
                <S.TopLeftBadges>
                  <S.RatingBadge>
                    <Star color="#FFB955" fill="#FFB955" size={10} />
                    <S.RatingText>{movie.rating}</S.RatingText>
                  </S.RatingBadge>
                  <S.AgeBadge $bgColor={movie.ageBg}>
                    <S.AgeText $color={movie.ageText}>{movie.age}</S.AgeText>
                  </S.AgeBadge>
                </S.TopLeftBadges>

                {/* Top Right Format Badge */}
                <S.FormatBadge>
                  <S.FormatText>{movie.format}</S.FormatText>
                </S.FormatBadge>

                {/* Bottom Meta Inside Poster */}
                <S.BottomMetaContainer>
                  <S.MetaText>{movie.meta}</S.MetaText>
                  <S.MovieTitle>{movie.title}</S.MovieTitle>
                </S.BottomMetaContainer>
              </S.PosterContainer>

              {/* Bottom Info & Button */}
              <S.BottomInfoArea>
                {/* Nút Chi Tiết */}
                <S.DetailButton
                  type="button"
                  onClick={handleMovieDetailClick(movie.id)}
                >
                  <S.DetailButtonText>Chi tiết</S.DetailButtonText>
                </S.DetailButton>

                {/* Nút Mua Vé */}
                <S.BuyButton
                  type="button"
                  onClick={handleMovieBuyClick(movie.id)}
                >
                  <S.TicketIconContainer>
                    <Ticket color="#5B000D" size={14} />
                  </S.TicketIconContainer>
                  <S.BuyButtonText>MUA VÉ</S.BuyButtonText>
                </S.BuyButton>
              </S.BottomInfoArea>
            </S.MovieCard>
          ))}
        </S.MoviesGrid>
      </S.InnerContainer>
    </S.Section>
  );
};
