import type { FC } from 'react';
import { useState } from 'react';
import { ArrowRight, Film, Flame, Search, Sparkles, Tv } from 'lucide-react';
import * as S from './DiscoveryHero.styles';

interface DiscoveryHeroProps {
  onSearch?: (query: string) => void;
  onTagClick?: (tag: string) => void;
}

export const DiscoveryHero: FC<DiscoveryHeroProps> = ({
  onSearch,
  onTagClick,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleTagSelect = (tagId: string, label: string) => {
    const nextTag = activeTag === tagId ? null : tagId;
    setActiveTag(nextTag);
    if (onTagClick) {
      onTagClick(nextTag ? label : '');
    }
  };

  return (
    <S.SectionContainer>
      <S.MainCard>
        {/* Subtle Right-side Gradient Accent */}
        <S.GradientAccent />

        {/* Top Header Row: Titles & Sparkline Card */}
        <S.HeaderRow>
          <S.TitleContainer>
            {/* Badge pill */}
            <S.BadgeWrapper>
              <S.BadgeDot />
              <S.BadgeText>HỆ THỐNG ĐẶT VÉ PHIMBOOK</S.BadgeText>
            </S.BadgeWrapper>

            {/* Main title */}
            <S.HeadingTitle>Khám Phá Vũ Trụ Điện Ảnh</S.HeadingTitle>

            {/* Description */}
            <S.SubtitleText>
              Tuyển chọn hơn 45+ tác phẩm kinh điển và bom tấn phòng vé đang
              trình chiếu tại các rạp tiêu chuẩn quốc tế IMAX Laser, 4DX và
              ScreenX trên toàn quốc.
            </S.SubtitleText>
          </S.TitleContainer>

          {/* Metric Sparkline Card */}
          <S.MetricSparklineCard>
            {/* Showtimes Metric */}
            <S.MetricColLeft>
              <S.MetricNumberGold>99+</S.MetricNumberGold>
              <S.MetricLabel>SUẤT CHIẾU HÔM NAY</S.MetricLabel>
            </S.MetricColLeft>

            {/* Mini Visual Bar Chart (Styled 100% trong styles.ts qua nth-child) */}
            <S.SparklineBars>
              <S.SparkBar />
              <S.SparkBar />
              <S.SparkBar />
              <S.SparkBar />
              <S.SparkBar />
              <S.SparkBar />
            </S.SparklineBars>

            {/* VIP Occupancy Metric */}
            <S.MetricColRight>
              <S.MetricNumberPink>88%</S.MetricNumberPink>
              <S.MetricLabel>TỈ LỆ LẤP ĐẦY VIP</S.MetricLabel>
            </S.MetricColRight>
          </S.MetricSparklineCard>
        </S.HeaderRow>

        {/* Bottom Search & Fast Tags Section */}
        <S.SearchAndTagsSection>
          {/* Multifunctional Search Box */}
          <S.SearchForm onSubmit={handleSearchSubmit}>
            <S.SearchBarWrapper>
              <S.SearchIconContainer>
                <Search size={19.5} />
              </S.SearchIconContainer>

              <S.SearchInput
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Tìm theo tên phim, đạo diễn, diễn viên chính hoặc cụm rạp yêu thích..."
              />

              <S.SearchButton type="submit">
                <S.SearchButtonText>Tìm kiếm</S.SearchButtonText>
                <ArrowRight size={14} color="#5B000D" strokeWidth={2.5} />
              </S.SearchButton>
            </S.SearchBarWrapper>
          </S.SearchForm>

          {/* Fast Tags */}
          <S.FastTagsWrapper>
            <S.FastTagsLabel>GỢI Ý NHANH:</S.FastTagsLabel>

            {/* Tag 1: Phim hot phòng vé */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'hot'}
              onClick={() => handleTagSelect('hot', 'Phim hot phòng vé')}
            >
              <Flame size={12} className="tag-icon" />
              <S.TagPillText>Phim hot phòng vé</S.TagPillText>
            </S.TagPill>

            {/* Tag 2: Phim 4D chiếu rạp */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'vn'}
              onClick={() => handleTagSelect('vn', 'Phim 4D chiếu rạp')}
            >
              <Film size={12} className="tag-icon" />
              <S.TagPillText>Phim 4D chiếu rạp</S.TagPillText>
            </S.TagPill>

            {/* Tag 3: Anime & Cartoon */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'anime'}
              onClick={() => handleTagSelect('anime', 'Anime & Cartoon')}
            >
              <Sparkles size={12} className="tag-icon" />
              <S.TagPillText>Anime & Cartoon</S.TagPillText>
            </S.TagPill>

            {/* Tag 4: Bom tấn Hollywood IMAX */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'imax'}
              onClick={() => handleTagSelect('imax', 'Bom tấn Hollywood IMAX')}
            >
              <Tv size={12} className="tag-icon" />
              <S.TagPillText>Bom tấn Hollywood IMAX</S.TagPillText>
            </S.TagPill>
          </S.FastTagsWrapper>
        </S.SearchAndTagsSection>
      </S.MainCard>
    </S.SectionContainer>
  );
};

export default DiscoveryHero;
