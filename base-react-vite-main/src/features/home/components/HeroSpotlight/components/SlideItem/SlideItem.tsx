import type { FC } from 'react';
import { Clock, Globe, Clapperboard, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SpotlightMovie } from '../../data/spotlight-data';
import { SlideCTA } from '../SlideCta/SlideCta';
import { SlidePagination } from '../SlidePagination/SlidePagination';
import * as S from './SlideItem.styles';

interface SlideItemProps {
  movie: SpotlightMovie;
  selectedIndex: number;
  onDotClick: (index: number) => void;
}

/**
 * A single carousel slide: backdrop image, gradient overlays, movie details,
 * CTA buttons, and the shared pagination dots.
 */
export const SlideItem: FC<SlideItemProps> = ({
  movie,
  selectedIndex,
  onDotClick,
}) => {
  const { t } = useTranslation();

  return (
    <S.SlideItem key={movie.id}>
      {/* Backdrop Image */}
      <S.SlideBackdrop
        role="img"
        aria-label={`Poster phim ${movie.mainTitle}`}
        $bgImage={movie.bgImage}
      />

      {/* Cinematic Gradients */}
      <S.GradientOverlayRight />
      <S.GradientOverlayTop />
      <S.GradientOverlayRadial />

      {/* Movie Content */}
      <S.SlideContentContainer>
        <S.SlideContentInner>
          <S.HeroDetails>
            {/* Formats & Badges Row */}
            <S.FormatsBadgesRow>
              <S.ImaxBadge>
                <S.ImaxText>{movie.imaxBadge}</S.ImaxText>
              </S.ImaxBadge>
              <S.AgeBadge>
                <S.AgeText>{movie.ageBadge}</S.AgeText>
              </S.AgeBadge>
              <S.RatingBadge>
                <Star className="text-[#FFB955] fill-[#FFB955]" size={12} />
                <S.RatingScore>{movie.ratingScore}</S.RatingScore>
                <S.RatingCount>{movie.ratingCount}</S.RatingCount>
              </S.RatingBadge>
              <S.GenreBadge>
                <S.GenreText>{movie.genre}</S.GenreText>
              </S.GenreBadge>
            </S.FormatsBadgesRow>

            {/* Master Title */}
            <S.TitleContainer>
              <S.TitleLabel>{movie.exclusiveTitle}</S.TitleLabel>
              <S.TitleGroup>
                <S.MainTitle>{movie.mainTitle} </S.MainTitle>
                <S.SubTitle>{movie.subTitle}</S.SubTitle>
              </S.TitleGroup>
            </S.TitleContainer>

            {/* Synopsis */}
            <S.Synopsis>{movie.synopsis}</S.Synopsis>

            {/* Key Metas */}
            <S.KeyMetas>
              <S.MetaItem>
                <Clock className="text-[#FFB955]" size={15} />
                <S.MetaText>{movie.duration}</S.MetaText>
              </S.MetaItem>
              <S.MetaItem>
                <Globe className="text-[#FFB955]" size={15} />
                <S.MetaText>{movie.audioSub}</S.MetaText>
              </S.MetaItem>
              <S.MetaItem>
                <Clapperboard className="text-[#FFB955]" size={15} />
                <S.MetaText>
                  {t('home:hero.director_prefix', 'Đạo diễn:')} {movie.director}
                </S.MetaText>
              </S.MetaItem>
            </S.KeyMetas>

            {/* Action CTAs */}
            <SlideCTA movieId={movie.id} />

            {/* Slide Pagination Indicators */}
            <SlidePagination
              selectedIndex={selectedIndex}
              onDotClick={onDotClick}
            />
          </S.HeroDetails>
        </S.SlideContentInner>
      </S.SlideContentContainer>
    </S.SlideItem>
  );
};
