import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SPOTLIGHT_MOVIES } from '../../data/spotlight-data';
import * as S from './SlidePagination.styles';

interface SlidePaginationProps {
  selectedIndex: number;
  onDotClick: (index: number) => void;
}

/**
 * Renders the dot indicators + "01 / 04" counter below each slide's content.
 */
export const SlidePagination: FC<SlidePaginationProps> = ({
  selectedIndex,
  onDotClick,
}) => {
  const { t } = useTranslation();

  const handleDotClick = (dotIdx: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    onDotClick(dotIdx);
  };

  return (
    <S.SliderPagination className="no-drag">
      {SPOTLIGHT_MOVIES.map((movie, dotIdx) => (
        <S.PaginationDot
          key={movie.id}
          type="button"
          $active={dotIdx === selectedIndex}
          onClick={handleDotClick(dotIdx)}
          title={movie.mainTitle}
          aria-label={t('home:hero.go_to_movie', {
            defaultValue: `Chuyển tới phim ${movie.mainTitle}`,
            title: movie.mainTitle,
          })}
        />
      ))}

      <S.SlideCounterText>
        {String(selectedIndex + 1).padStart(2, '0')}
        <span>
          {' '}
          / {String(SPOTLIGHT_MOVIES.length).padStart(2, '0')}
        </span>
      </S.SlideCounterText>
    </S.SliderPagination>
  );
};
