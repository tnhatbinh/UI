import { useTranslation } from 'react-i18next';
import { RefreshCw, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCineMatchAiApi } from '@features/auth/api/auth.api';
import * as S from './AiTasteSection.styles';

interface AiTasteSectionProps {
  onRefresh: () => void;
}

export function AiTasteSection({ onRefresh }: AiTasteSectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: tasteData, refetch } = useQuery({
    queryKey: ['cine-match-ai'],
    queryFn: getCineMatchAiApi,
    staleTime: 60000,
  });

  const handleRefresh = () => {
    refetch();
    onRefresh();
  };

  const handleNavigateMovieDetails = () => {
    navigate('/phim/dune-phan-hai');
  };

  const handleNavigateTaste = () => {
    navigate('/profile/cinematic-taste');
  };

  const matchRate = tasteData?.tasteMatchRate
    ? Math.round(tasteData.tasteMatchRate)
    : 95;
  const genres =
    tasteData?.favoriteGenres && tasteData.favoriteGenres.length > 0
      ? tasteData.favoriteGenres
      : ['Khoa học viễn tưởng (Sci-fi)', 'Hành động bom tấn', 'Tâm lý giật gân', 'Phim tài liệu IMAX'];

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Sparkles size={18} />
          </div>
          <h3>{t('profile:ai_taste_title')}</h3>
          <span className="tag-pill">{t('profile:tag_personalized')}</span>
        </div>
        <RefreshCw size={15} className="refresh-btn" onClick={handleRefresh} />
      </div>

      <S.AiInsightBox>
        <div className="gauge-circle">
          <span className="percent">{matchRate}%</span>
          <span className="sub">{t('profile:taste_match_rate')}</span>
        </div>
        <div className="text-content">
          <span className="ai-badge">{t('profile:ai_brain_insight')}</span>
          <p className="desc">
            {t('profile:ai_brain_desc')}
            {tasteData?.favoriteDirectors && tasteData.favoriteDirectors.length > 0 && (
              <span> {t('profile:favorite_directors_label')} {tasteData.favoriteDirectors.join(', ')}.</span>
            )}
            {tasteData?.favoriteActors && tasteData.favoriteActors.length > 0 && (
              <span> {t('profile:favorite_actors_label')} {tasteData.favoriteActors.join(', ')}.</span>
            )}
          </p>
          <span className="recommend">
            {t('profile:recommend_weekly_hot')}{' '}
            <strong onClick={handleNavigateMovieDetails}>
              Dune: Part Two (IMAX Re-run) ↗
            </strong>
          </span>
        </div>
      </S.AiInsightBox>

      <S.TasteSubGrid>
        {/* Passion Genres */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">{t('profile:passion_genres_title')}</span>
            <span className="badge">{t('profile:main_genres_badge', { count: genres.length })}</span>
          </div>
          <div className="tags-wrap">
            {genres.map((g, idx) => (
              <span key={g} className={`tag ${idx % 2 === 0 ? 'highlight' : ''}`}>
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Priority Format */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">{t('profile:priority_format_title')}</span>
            <span className="badge">{t('profile:auto_select_auditorium')}</span>
          </div>
          <div className="tags-wrap">
            <span className="tag highlight">🎟 IMAX with Laser</span>
            <span className="tag">📽 Dolby Atmos • 4DX</span>
          </div>
        </div>
      </S.TasteSubGrid>

      {/* Cinema & Favorite Seats Sub-Grid */}
      <S.TasteSubGrid>
        {/* Frequently visited cinemas */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">{t('profile:familiar_cinemas_title')}</span>
            <span className="badge action" onClick={handleNavigateTaste}>
              {t('profile:add_cinema_link')}
            </span>
          </div>
          <S.CinemaFavsList>
            <div className="item">
              <span className="name">
                <span className="dot" />
                PhimBook Lounge Landmark 81
              </span>
              <span className="tag">{t('profile:favorite_cinema_1')}</span>
            </div>
            <div className="item">
              <span className="name">CGV Vincom Đồng Khởi</span>
              <span className="dist">{t('profile:distance_km', { dist: '3.2' })}</span>
            </div>
            <div className="item">
              <span className="name">Galaxy Sala Thủ Thiêm</span>
              <span className="dist">{t('profile:distance_km', { dist: '4.8' })}</span>
            </div>
          </S.CinemaFavsList>
        </div>

        {/* Preferred Seating Area */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">{t('profile:perfect_seating_title')}</span>
            <span className="badge gold">{t('profile:center_seats_badge')}</span>
          </div>

          <S.SeatVisualizerBox>
            <div className="screen-arc" />
            <div className="grid-mini">
              <div className="row">
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
              </div>
              <div className="row">
                <span className="seat-dot" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot" />
              </div>
              <div className="row">
                <span className="seat-dot" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot" />
              </div>
            </div>
            <span className="SeatLegend">
              {t('profile:seat_visualizer_legend')}
            </span>
          </S.SeatVisualizerBox>
        </div>
      </S.TasteSubGrid>
    </S.SectionCard>
  );
}
