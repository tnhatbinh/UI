import type { FC } from 'react';
import { Play, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './SlideCta.styles';

interface SlideCTAProps {
  movieId: number | string;
}

/**
 * Renders the "Đặt vé ngay" and "Xem Trailer 4K" action buttons for each slide.
 * Navigation target is derived directly from the movie's detailMovieId.
 */
export const SlideCTA: FC<SlideCTAProps> = ({ movieId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const targetMovieId = String(movieId);

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/phim/${targetMovieId}`);
  };

  const handleWatchTrailer = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/phim/${targetMovieId}`);
  };

  return (
    <S.ActionCtas className="no-drag">
      <S.BookButton type="button" onClick={handleBookNow}>
        <Ticket color="#680010" fill="#680010" size={16} />
        <S.BookButtonText>
          <span className="btn-full">
            {t('home:hero.book_now_btn', 'ĐẶT VÉ NGAY • GIỮ CHỖ ĐẸP')}
          </span>
          <span className="btn-short">
            {t('home:hero.book_now_short', 'ĐẶT VÉ NGAY')}
          </span>
        </S.BookButtonText>
      </S.BookButton>

      <S.TrailerButton type="button" onClick={handleWatchTrailer}>
        <S.PlayIconContainer>
          <Play color="#FFFFFF" fill="#FFFFFF" size={10} style={{ marginLeft: 2 }} />
        </S.PlayIconContainer>
        <S.TrailerButtonText>
          <span className="btn-full">
            {t('home:hero.trailer_btn', 'Xem Trailer 4K')}
          </span>
          <span className="btn-short">
            {t('home:hero.trailer_short', 'Trailer')}
          </span>
        </S.TrailerButtonText>
      </S.TrailerButton>
    </S.ActionCtas>
  );
};
