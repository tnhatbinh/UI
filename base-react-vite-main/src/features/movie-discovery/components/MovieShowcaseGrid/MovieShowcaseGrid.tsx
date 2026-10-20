import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Film, RotateCcw, Star, Ticket } from 'lucide-react';
import type { DiscoveryMovie } from '../../data/mock-movies';
import {
  MOCK_DISCOVERY_MOVIES,
  getAgeBadgeStyle,
  getFormatBadgeStyle,
} from '../../data/mock-movies';
import * as S from './MovieShowcaseGrid.styles';

interface MovieShowcaseGridProps {
  movies?: DiscoveryMovie[];
  viewMode?: 'grid' | 'list';
  onResetFilters?: () => void;
  onMovieClick?: (movie: DiscoveryMovie) => void;
  onBookClick?: (movie: DiscoveryMovie) => void;
}

export const MovieShowcaseGrid: FC<MovieShowcaseGridProps> = ({
  movies = MOCK_DISCOVERY_MOVIES,
  viewMode = 'grid',
  onResetFilters,
  onMovieClick,
  onBookClick,
}) => {
  const { t } = useTranslation();
  const handleMovieClick = (movie: DiscoveryMovie) => () => {
    onMovieClick?.(movie);
  };

  const handleBookClick = (movie: DiscoveryMovie) => () => {
    onBookClick?.(movie);
  };

  // ─── Empty State ─────────────────────────────────────────────────────────────
  if (movies.length === 0) {
    return (
      <S.SectionContainer>
        <S.EmptyStateWrapper>
          <S.EmptyIconContainer>
            <Film size={40} color="#FF535A" />
          </S.EmptyIconContainer>
          <S.EmptyTitle>{t('discovery:empty_title')}</S.EmptyTitle>
          <S.EmptyDescription>
            {t('discovery:empty_desc')}
          </S.EmptyDescription>
          {onResetFilters && (
            <S.EmptyResetButton type="button" onClick={onResetFilters}>
              <RotateCcw size={15} />
              <span>{t('discovery:filter_reset')}</span>
            </S.EmptyResetButton>
          )}
        </S.EmptyStateWrapper>
      </S.SectionContainer>
    );
  }

  // ─── Movie Cards List / Grid ─────────────────────────────────────────────────
  return (
    <S.SectionContainer>
      <S.GridContainer $viewMode={viewMode}>
        {movies.map((movie) => {
          const ageStyle = getAgeBadgeStyle(movie.age);
          const formatStyle = getFormatBadgeStyle(movie.formatTag);

          return (
            <S.CardWrapper key={movie.id} $viewMode={viewMode}>
              {/* Poster & Badges Area */}
              <S.PosterArea $viewMode={viewMode}>
                {/* Poster Image */}
                <S.PosterImage
                  src={movie.poster}
                  alt={movie.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop';
                  }}
                />

                {/* Bottom Gradient Overlay */}
                <S.PosterGradientOverlay $viewMode={viewMode} />

                {/* Top Left Badges: Rating & Age */}
                <S.TopLeftBadges>
                  <S.RatingBadge>
                    <Star size={11.7} color="#FFB955" fill="#FFB955" />
                    <S.RatingText>{movie.rating}</S.RatingText>
                  </S.RatingBadge>

                  <S.AgeBadge $bg={ageStyle.bg}>
                    <S.AgeText $color={ageStyle.color}>{movie.age}</S.AgeText>
                  </S.AgeBadge>
                </S.TopLeftBadges>

                {/* Top Right Format Badge */}
                <S.FormatBadge $bg={formatStyle.bg} $border={formatStyle.border}>
                  <S.FormatText $color={formatStyle.color}>
                    {movie.formatTag}
                  </S.FormatText>
                </S.FormatBadge>

                {/* Grid Mode: Bottom Card Content Inside Poster */}
                {viewMode !== 'list' && (
                  <S.BottomCardContent>
                    <S.MetaRow>
                      <S.MetaItem>
                        <Clock size={11.7} color="#AE8786" />
                        <S.MetaText>{movie.duration}</S.MetaText>
                      </S.MetaItem>
                      <S.MetaDivider>•</S.MetaDivider>
                      <S.MetaText>{movie.genre}</S.MetaText>
                    </S.MetaRow>

                    <S.MovieTitle title={movie.title}>{movie.title}</S.MovieTitle>
                    <S.MovieDescription>{movie.description}</S.MovieDescription>
                  </S.BottomCardContent>
                )}
              </S.PosterArea>

              {/* Content & Actions */}
              {viewMode === 'list' ? (
                <S.ListInfoArea>
                  <S.ListInfoContent>
                    <S.MetaRow>
                      <Clock size={12} color="#AE8786" />
                      <S.MetaText>{movie.duration}</S.MetaText>
                      <S.MetaDivider>•</S.MetaDivider>
                      <S.MetaText>{movie.genre}</S.MetaText>
                    </S.MetaRow>

                    <S.MovieTitle title={movie.title}>{movie.title}</S.MovieTitle>
                    <S.ListDescription>{movie.description}</S.ListDescription>
                  </S.ListInfoContent>

                  <S.ListActionPanel>
                    <S.DetailButton
                      type="button"
                      onClick={handleMovieClick(movie)}
                    >
                      <S.DetailButtonText>{t('discovery:details_btn')}</S.DetailButtonText>
                    </S.DetailButton>

                    <S.BookButton
                      type="button"
                      onClick={handleBookClick(movie)}
                    >
                      <Ticket size={14} color="#5b000d" />
                      <S.BookButtonText>{t('discovery:book_btn')}</S.BookButtonText>
                    </S.BookButton>
                  </S.ListActionPanel>
                </S.ListInfoArea>
              ) : (
                <S.ActionPanel>
                  <S.DetailButton
                    type="button"
                    onClick={handleMovieClick(movie)}
                  >
                    <S.DetailButtonText>{t('discovery:details_btn')}</S.DetailButtonText>
                  </S.DetailButton>

                  <S.BookButton
                    type="button"
                    onClick={handleBookClick(movie)}
                  >
                    <Ticket size={14} color="#5b000d" />
                    <S.BookButtonText>{t('discovery:book_btn')}</S.BookButtonText>
                  </S.BookButton>
                </S.ActionPanel>
              )}
            </S.CardWrapper>
          );
        })}
      </S.GridContainer>
    </S.SectionContainer>
  );
};

export default MovieShowcaseGrid;
