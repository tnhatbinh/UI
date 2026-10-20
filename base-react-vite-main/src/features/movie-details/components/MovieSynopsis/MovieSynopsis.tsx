import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Award } from 'lucide-react';
import type { MovieDetails } from '../../data/mock-movie-details';
import * as S from './MovieSynopsis.styles';

interface MovieSynopsisProps {
  movie: MovieDetails;
}

export const MovieSynopsis: FC<MovieSynopsisProps> = ({ movie }) => {
  const { t } = useTranslation();

  return (
    <S.DetailsGrid>
      {/* Left: Synopsis & Accolades */}
      <S.SynopsisCard>
        <div className="card-header">
          <span className="header-title">
            <Sparkles size={14} />
            {t('movie:synopsis_title')}
          </span>
          <span className="copyright">{t('movie:synopsis_copyright')}</span>
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
            <span className="label">{t('movie:critic_score_title')}</span>
            <div className="number">
              {movie.criticScore}
              <span className="max"> / 10</span>
            </div>
            <span className="based-on">
              {t('movie:based_on_reviews', {
                count: parseInt(movie.criticReviewCount, 10) || 0,
              })}
            </span>
          </div>
          <div className="score-gauge">
            <span className="percent">{movie.masterpieceRate}</span>
            <span className="badge-label">Masterpiece</span>
          </div>
        </div>

        <div className="quote-block">
          <span className="quote-label">❞ {t('movie:featured_review')}</span>
          <p className="quote-text">"{movie.featuredQuote}"</p>
          <div className="author-row">
            <span className="author">{movie.featuredAuthor}</span>
            <span className="rating-stars">{t('movie:five_stars')}</span>
          </div>
        </div>
      </S.CriticCard>
    </S.DetailsGrid>
  );
};
