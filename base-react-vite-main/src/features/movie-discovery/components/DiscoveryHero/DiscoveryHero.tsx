import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleTagSelect = (tagId: string, label: string) => () => {
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
              <S.BadgeText>{t('discovery:hero_badge')}</S.BadgeText>
            </S.BadgeWrapper>

            {/* Main title */}
            <S.HeadingTitle>{t('discovery:hero_title')}</S.HeadingTitle>

            {/* Description */}
            <S.SubtitleText>{t('discovery:hero_desc')}</S.SubtitleText>
          </S.TitleContainer>

          {/* Metric Sparkline Card */}
          <S.MetricSparklineCard>
            {/* Showtimes Metric */}
            <S.MetricColLeft>
              <S.MetricNumberGold>99+</S.MetricNumberGold>
              <S.MetricLabel>{t('discovery:hero_metric_showtimes')}</S.MetricLabel>
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
              <S.MetricLabel>{t('discovery:hero_metric_vip')}</S.MetricLabel>
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
                onChange={handleSearchInputChange}
                placeholder={t('discovery:search_placeholder')}
              />

              <S.SearchButton type="submit">
                <S.SearchButtonText>{t('discovery:search_btn')}</S.SearchButtonText>
                <ArrowRight size={14} color="#5B000D" strokeWidth={2.5} />
              </S.SearchButton>
            </S.SearchBarWrapper>
          </S.SearchForm>

          {/* Fast Tags */}
          <S.FastTagsWrapper>
            <S.FastTagsLabel>{t('discovery:quick_tags_label')}</S.FastTagsLabel>

            {/* Tag 1: Phim hot phòng vé */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'hot'}
              onClick={handleTagSelect('hot', t('discovery:tag_box_office'))}
            >
              <Flame size={12} className="tag-icon" />
              <S.TagPillText>{t('discovery:tag_box_office')}</S.TagPillText>
            </S.TagPill>

            {/* Tag 2: Phim 4D chiếu rạp */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'vn'}
              onClick={handleTagSelect('vn', t('discovery:tag_4d'))}
            >
              <Film size={12} className="tag-icon" />
              <S.TagPillText>{t('discovery:tag_4d')}</S.TagPillText>
            </S.TagPill>

            {/* Tag 3: Anime & Cartoon */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'anime'}
              onClick={handleTagSelect('anime', t('discovery:tag_anime'))}
            >
              <Sparkles size={12} className="tag-icon" />
              <S.TagPillText>{t('discovery:tag_anime')}</S.TagPillText>
            </S.TagPill>

            {/* Tag 4: Bom tấn Hollywood IMAX */}
            <S.TagPill
              type="button"
              $isActive={activeTag === 'imax'}
              onClick={handleTagSelect('imax', t('discovery:tag_hollywood'))}
            >
              <Tv size={12} className="tag-icon" />
              <S.TagPillText>{t('discovery:tag_hollywood')}</S.TagPillText>
            </S.TagPill>
          </S.FastTagsWrapper>
        </S.SearchAndTagsSection>
      </S.MainCard>
    </S.SectionContainer>
  );
};

export default DiscoveryHero;
