import { useTranslation } from 'react-i18next';
import { Award, CheckCircle, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from './MonthlyChallenges.styles';

interface MonthlyChallengesProps {
  hasClaimedReward: boolean;
  onClaimMission: () => void;
}

export function MonthlyChallenges({
  hasClaimedReward,
  onClaimMission,
}: MonthlyChallengesProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateMovieDetails = () => {
    navigate('/movie-details');
  };

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Award size={18} />
          </div>
          <div>
            <h3>{t('profile:monthly_challenges_title')}</h3>
            <p className="sub-desc">
              {t('profile:monthly_challenges_desc')}
            </p>
          </div>
        </div>
        <span className="tag-pill urgent">
          {t('profile:days_remaining', { count: 18 })}
        </span>
      </div>

      {/* Challenge 1 */}
      <S.ChallengeItem>
        <div className="left-meta">
          <div className="icon-box">
            <Film size={20} />
          </div>
          <div className="info">
            <div className="title-row">
              <span className="name">{t('profile:challenge_imax_title')}</span>
              <span className="badge">{t('profile:challenge_month_badge')}</span>
            </div>
            <span className="desc">
              {t('profile:challenge_imax_desc')}
            </span>
            <div className="progress-line">
              <div className="bar">
                <div className="fill fill-two-thirds" />
              </div>
              <span className="txt">{t('profile:challenge_imax_progress')}</span>
            </div>
          </div>
        </div>

        <div className="right-action">
          <span className="reward-tag">{t('profile:reward_free_2d')}</span>
          <button
            className="book-btn"
            onClick={handleNavigateMovieDetails}
          >
            {t('profile:book_remaining_movie')}
          </button>
        </div>
      </S.ChallengeItem>

      {/* Challenge 2 */}
      <S.ChallengeItem>
        <div className="left-meta">
          <div className="icon-box success">
            <CheckCircle size={20} />
          </div>
          <div className="info">
            <div className="title-row">
              <span className="name">{t('profile:challenge_review_title')}</span>
              <span className="badge done">{t('profile:challenge_completed_badge')}</span>
            </div>
            <span className="desc">
              {t('profile:challenge_review_desc')}
            </span>
            <div className="progress-line">
              <div className="bar">
                <div className="fill success" />
              </div>
              <span className="txt success">
                {t('profile:challenge_review_progress')}
              </span>
            </div>
          </div>
        </div>

        <div className="right-action">
          <span className="reward-tag">{t('profile:reward_popcorn_combo')}</span>
          <button
            className={`claim-btn ${hasClaimedReward ? 'claimed' : ''}`}
            onClick={hasClaimedReward ? undefined : onClaimMission}
          >
            {hasClaimedReward ? t('profile:claimed_reward_btn') : t('profile:claim_reward_now')}
          </button>
        </div>
      </S.ChallengeItem>
    </S.SectionCard>
  );
}
