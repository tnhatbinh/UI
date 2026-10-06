import type { FC } from 'react';
import { Sparkles, Award } from 'lucide-react';
import type { MovieDetails } from '../../data/mock-movie-details';
import * as S from './MovieSynopsis.styles';

interface MovieSynopsisProps {
  movie: MovieDetails;
}

export const MovieSynopsis: FC<MovieSynopsisProps> = ({ movie }) => {
  return (
    <S.DetailsGrid>
      {/* Left: Synopsis & Accolades */}
      <S.SynopsisCard>
        <div className="card-header">
          <span className="header-title">
            <Sparkles size={14} />
            Nội dung phim kịch tính
          </span>
          <span className="copyright">Bản quyền rạp chiếu quốc tế</span>
        </div>
        <div className="synopsis-body">
          <p>{movie.synopsisP1}</p>
          <p>{movie.synopsisP2}</p>
        </div>
        <div className="accolades-row">
          {movie.awards.map((award) => (
            <div key={award.title} className="accolade-item">
              <Award className="icon" size={20} />
              <div className="text">
                <span className="main">{award.title}</span>
                <span className="sub">{award.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </S.SynopsisCard>

      {/* Right: Critic Scores & Quote */}
      <S.CriticCard>
        <div className="score-row">
          <div className="score-left">
            <span className="label">Điểm chuyên môn phê bình</span>
            <div className="number">
              {movie.criticScore}
              <span className="max"> / 10</span>
            </div>
            <span className="based-on">Dựa trên {movie.criticReviewCount}</span>
          </div>
          <div className="score-gauge">
            <span className="percent">{movie.masterpieceRate}</span>
            <span className="badge-label">Masterpiece</span>
          </div>
        </div>

        <div className="quote-block">
          <span className="quote-label">❞ Đánh giá tiêu biểu</span>
          <p className="quote-text">"{movie.featuredQuote}"</p>
          <div className="author-row">
            <span className="author">{movie.featuredAuthor}</span>
            <span className="rating-stars">★★★★★ 5/5 Sao</span>
          </div>
        </div>
      </S.CriticCard>
    </S.DetailsGrid>
  );
};
