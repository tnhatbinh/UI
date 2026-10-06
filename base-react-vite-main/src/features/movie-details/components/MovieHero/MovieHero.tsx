import type { FC } from 'react';
import {
  Star,
  Clock,
  Calendar,
  Film,
  Heart,
  Play,
  Ticket,
  Bookmark,
} from 'lucide-react';
import type { MovieDetails } from '../../data/mock-movie-details';
import * as S from './MovieHero.styles';

interface MovieHeroProps {
  movie: MovieDetails;
  onOpenTrailer: () => void;
  onBookNow: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const MovieHero: FC<MovieHeroProps> = ({
  movie,
  onOpenTrailer,
  onBookNow,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <S.HeroSection>
      {/* Left Column: Poster & Key Facts */}
      <S.PosterColumn>
        <S.PosterWrapper>
          <img src={movie.posterUrl} alt={movie.title} />
          <div className="badge-imdb">
            <Star size={12} fill="#ffb955" />
            <span>{movie.rating} IMDb</span>
          </div>
          <div className="badge-age">{movie.ageRating}</div>
        </S.PosterWrapper>

        <S.KeyFactsStrip>
          <div className="fact-item">
            <span className="fact-label">Thời lượng</span>
            <span className="fact-value">
              <Clock size={12} className="gold" />
              {movie.runtime}
            </span>
          </div>
          <div className="fact-divider" />
          <div className="fact-item">
            <span className="fact-label">Khởi chiếu</span>
            <span className="fact-value">
              <Calendar size={12} className="gold" />
              {movie.releaseDate}
            </span>
          </div>
          <div className="fact-divider" />
          <div className="fact-item">
            <span className="fact-label">Định dạng</span>
            <span className="fact-value">
              <Film size={12} className="gold" />
              {movie.formatBadge}
            </span>
          </div>
        </S.KeyFactsStrip>
      </S.PosterColumn>

      {/* Right Column: Movie Info & Actions */}
      <S.MovieInfoColumn>
        <S.BadgesRow>
          {movie.badges.map((badge, idx) => (
            <span
              key={badge}
              className={`tag-badge ${
                idx === 0 ? 'gold' : idx === 1 ? 'red' : ''
              }`}
            >
              {badge}
            </span>
          ))}
        </S.BadgesRow>

        <S.TitleGroup>
          <h1 className="movie-title">{movie.title}</h1>
          <span className="movie-original-title">{movie.originalTitle}</span>
        </S.TitleGroup>

        <S.GenresAndRatings>
          <div className="genre-chips">
            {movie.genres.map((g) => (
              <span key={g} className="genre-chip">
                {g}
              </span>
            ))}
          </div>

          <div className="ratings-group">
            <div className="rating-item">
              <Star size={15} fill="#ffb955" className="icon-star" />
              <span>{movie.rating}</span>
              <span className="sub">/10 ({movie.ratingCount})</span>
            </div>
            <div className="rating-item">
              <Heart size={15} fill="#ff535a" className="icon-heart" />
              <span>{movie.rottenTomatoes}</span>
              <span className="sub">Rotten Tomatoes</span>
            </div>
          </div>
        </S.GenresAndRatings>

        {/* People (Director & Cast) */}
        <S.PeopleRow>
          <div className="person-card">
            <img
              src={movie.director.avatar}
              alt={movie.director.name}
              className="avatar"
            />
            <div className="person-info">
              <span className="person-role">{movie.director.role}</span>
              <span className="person-name">{movie.director.name}</span>
              <span className="person-sub">{movie.director.works}</span>
            </div>
          </div>

          <div className="cast-group">
            <span className="cast-title">Dàn diễn viên chủ chốt</span>
            <div className="cast-members">
              {movie.cast.map((c) => (
                <div key={c.name} className="cast-member">
                  <img src={c.avatar} alt={c.name} className="avatar" />
                  <div className="member-info">
                    <span className="name">{c.name}</span>
                    <span className="character">{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </S.PeopleRow>

        {/* CTA Buttons */}
        <S.ActionsCtaRow>
          <button type="button" className="trailer-btn" onClick={onOpenTrailer}>
            <div className="play-circle">
              <Play size={16} fill="#ffffff" />
            </div>
            <div className="trailer-text">
              <span className="main">Xem Trailer Full HD</span>
              <span className="sub">Thời lượng 02:45 • Âm thanh 7.1</span>
            </div>
          </button>

          <button type="button" className="book-now-btn" onClick={onBookNow}>
            <Ticket size={18} />
            <span>Đặt Vé Ngay</span>
          </button>

          <button
            type="button"
            className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={onToggleBookmark}
            title="Lưu vào danh sách yêu thích"
          >
            <Bookmark size={18} fill={isBookmarked ? '#ffb955' : 'none'} />
          </button>
        </S.ActionsCtaRow>
      </S.MovieInfoColumn>
    </S.HeroSection>
  );
};
