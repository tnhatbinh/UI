import type { FC } from 'react';
import { Play, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './SlideCta.styles';

interface SlideCTAProps {
  movieId: number;
}

/**
 * Renders the "Đặt vé ngay" and "Xem Trailer 4K" action buttons for each slide.
 * Navigation target is derived from the movie id with the same mapping as before.
 */
export const SlideCTA: FC<SlideCTAProps> = ({ movieId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const targetMovieId = movieId === 1 ? '15' : movieId === 2 ? '5' : '1';

  return (
    <S.ActionCtas className="no-drag">
      <S.BookButton
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/phim/${targetMovieId}?booking=true`);
        }}
      >
        <Ticket className="text-[#680010] fill-current" size={16} />
        <S.BookButtonText>
          {t('home:hero.book_now_btn', 'ĐẶT VÉ NGAY • GIỮ CHỖ ĐẸP')}
        </S.BookButtonText>
      </S.BookButton>

      <S.TrailerButton
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/phim/${targetMovieId}`);
        }}
      >
        <S.PlayIconContainer>
          <Play className="text-[#FFB3B0] ml-[2px] fill-current" size={10} />
        </S.PlayIconContainer>
        <S.TrailerButtonText>
          {t('home:hero.trailer_btn', 'Xem Trailer 4K')}
        </S.TrailerButtonText>
      </S.TrailerButton>
    </S.ActionCtas>
  );
};
