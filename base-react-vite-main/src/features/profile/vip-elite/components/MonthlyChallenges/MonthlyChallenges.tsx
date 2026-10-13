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
            <h3>Thử Thách Điện Ảnh Săn Vé Tháng 11</h3>
            <p className="sub-desc">
              Hoàn thành nhiệm vụ nhận vé xem phim & combo bắp nước thượng hạng
              hoàn toàn miễn phí
            </p>
          </div>
        </div>
        <span className="tag-pill urgent">
          Còn 18 ngày
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
              <span className="name">Mọt phim IMAX Laser</span>
              <span className="badge">Tháng 11</span>
            </div>
            <span className="desc">
              Xem 3 suất chiếu định dạng IMAX trong tháng để kích hoạt vé 2D
              miễn phí.
            </span>
            <div className="progress-line">
              <div className="bar">
                <div className="fill fill-two-thirds" />
              </div>
              <span className="txt">2 / 3 phim (Còn 1 suất chiếu)</span>
            </div>
          </div>
        </div>

        <div className="right-action">
          <span className="reward-tag">🎟 1 Vé 2D Miễn Phí</span>
          <button
            className="book-btn"
            onClick={handleNavigateMovieDetails}
          >
            Đặt phim còn lại
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
              <span className="name">Đánh giá chân thực (CineCritic)</span>
              <span className="badge done">Đã hoàn thành!</span>
            </div>
            <span className="desc">
              Viết 5 review có tâm sau khi xem phim tại rạp có đính kèm ảnh vé
              xem.
            </span>
            <div className="progress-line">
              <div className="bar">
                <div className="fill success" />
              </div>
              <span className="txt success">
                5 / 5 review (100%)
              </span>
            </div>
          </div>
        </div>

        <div className="right-action">
          <span className="reward-tag">🍿 Combo Bắp Nước 0đ</span>
          <button
            className={`claim-btn ${hasClaimedReward ? 'claimed' : ''}`}
            onClick={hasClaimedReward ? undefined : onClaimMission}
          >
            {hasClaimedReward ? 'Đã nhận thưởng ✓' : 'Nhận thưởng ngay'}
          </button>
        </div>
      </S.ChallengeItem>
    </S.SectionCard>
  );
}
