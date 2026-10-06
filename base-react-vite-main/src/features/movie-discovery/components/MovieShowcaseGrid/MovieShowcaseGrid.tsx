import type { FC } from 'react';
import { Clock, Star } from 'lucide-react';
import type { DiscoveryMovie } from '../../data/mock-movies';
import { MOCK_DISCOVERY_MOVIES } from '../../data/mock-movies';
import * as S from './MovieShowcaseGrid.styles';

interface MovieShowcaseGridProps {
  movies?: DiscoveryMovie[];
  onMovieClick?: (movie: DiscoveryMovie) => void;
  onBookClick?: (movie: DiscoveryMovie) => void;
}

export const MovieShowcaseGrid: FC<MovieShowcaseGridProps> = ({
  movies = MOCK_DISCOVERY_MOVIES,
  onMovieClick,
  onBookClick,
}) => {
  return (
    <S.SectionContainer>
      <S.GridContainer>
        {movies.map((movie) => (
          <S.CardWrapper key={movie.id}>
            {/* Poster & Badges Area (Height: 435px) */}
            <S.PosterArea>
              {/* Poster Image */}
              <S.PosterImage
                src={movie.poster}
                alt={movie.title}
                loading="lazy"
              />

              {/* Bottom Gradient Overlay */}
              <S.PosterGradientOverlay />

              {/* Top Left Badges: Rating & Age */}
              <S.TopLeftBadges>
                <S.RatingBadge>
                  <Star size={11.7} color="#FFB955" fill="#FFB955" />
                  <S.RatingText>{movie.rating}</S.RatingText>
                </S.RatingBadge>

                <S.AgeBadge $bg={movie.ageBg}>
                  <S.AgeText $color={movie.ageColor}>{movie.age}</S.AgeText>
                </S.AgeBadge>
              </S.TopLeftBadges>

              {/* Top Right Format Badge */}
              <S.FormatBadge $bg={movie.formatBg}>
                <S.FormatText $color={movie.formatColor}>
                  {movie.formatTag}
                </S.FormatText>
              </S.FormatBadge>

              {/* Bottom Card Content Overlay */}
              <S.BottomCardContent>
                {/* Meta Row: Duration + Genre */}
                <S.MetaRow>
                  <S.MetaItem>
                    <Clock size={11.7} color="#AE8786" />
                    <S.MetaText>{movie.duration}</S.MetaText>
                  </S.MetaItem>
                  <S.MetaDivider>•</S.MetaDivider>
                  <S.MetaText>{movie.genre}</S.MetaText>
                </S.MetaRow>

                {/* Movie Title */}
                <S.MovieTitle title={movie.title}>{movie.title}</S.MovieTitle>

                {/* Short Synopsis */}
                <S.MovieDescription>{movie.description}</S.MovieDescription>
              </S.BottomCardContent>
            </S.PosterArea>

            {/* Bottom Action Panel (Height: 60px) */}
            <S.ActionPanel>
              <S.DetailButton
                type="button"
                onClick={() => onMovieClick && onMovieClick(movie)}
              >
                <S.DetailButtonText>Chi tiết</S.DetailButtonText>
              </S.DetailButton>

              <S.BookButton
                type="button"
                onClick={() => onBookClick && onBookClick(movie)}
              >
                <S.BookButtonText>Đặt vé ngay</S.BookButtonText>
              </S.BookButton>
            </S.ActionPanel>
          </S.CardWrapper>
        ))}
      </S.GridContainer>
    </S.SectionContainer>
  );
};
export default MovieShowcaseGrid;
