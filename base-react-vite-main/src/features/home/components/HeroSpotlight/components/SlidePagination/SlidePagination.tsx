import type { FC } from 'react';
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
  return (
    <S.SliderPagination className="no-drag">
      {SPOTLIGHT_MOVIES.map((movie, dotIdx) => (
        <S.PaginationDot
          key={movie.id}
          type="button"
          $active={dotIdx === selectedIndex}
          onClick={(e) => {
            e.stopPropagation();
            onDotClick(dotIdx);
          }}
          title={movie.mainTitle}
          aria-label={`Chuyển tới phim ${movie.mainTitle}`}
        />
      ))}

      <S.SlideCounterText>
        {String(selectedIndex + 1).padStart(2, '0')}
        <span style={{ opacity: 0.4 }}>
          {' '}
          / {String(SPOTLIGHT_MOVIES.length).padStart(2, '0')}
        </span>
      </S.SlideCounterText>
    </S.SliderPagination>
  );
};
