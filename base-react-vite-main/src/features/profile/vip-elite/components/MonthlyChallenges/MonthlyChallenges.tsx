import { Award, CheckCircle, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from './MonthlyChallenges.styles';

interface MonthlyChallengesProps {
  claimedReward: boolean;
  onClaimMission: () => void;
}

export function MonthlyChallenges({
  claimedReward,
  onClaimMission,
}: MonthlyChallengesProps) {
  const navigate = useNavigate();

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Award size={18} />
          </div>
          <div>
            <h3>Thử Thách Điện Ảnh Săn Vé Tháng 11</h3>
            <p
              style={{
                fontSize: '11.5px',
                color: '#ae8786',
                margin: '2px 0 0',
              }}
            >
              Hoàn thành nhiệm vụ nhận vé xem phim & combo bắp nước thượng hạng
              hoàn toàn miễn phí
            </p>
          </div>
        </div>
        <span className="tag-pill" style={{ color: '#ff535a' }}>
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
                <div className="fill" style={{ width: '66.6%' }} />
              </div>
              <span className="txt">2 / 3 phim (Còn 1 suất chiếu)</span>
            </div>
          </div>
        </div>

        <div className="right-action">
          <span className="reward-tag">🎟 1 Vé 2D Miễn Phí</span>
          <button
            className="book-btn"
            onClick={() => navigate('/movie-details')}
          >
            Đặt phim còn lại
          </button>
        </div>
      </S.ChallengeItem>

      {/* Challenge 2 */}
      <S.ChallengeItem>
        <div className="left-meta">
          <div
            className="icon-box"
            style={{ background: 'rgba(74, 222, 128, 0.12)', color: '#4ade80' }}
          >
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
                <div
                  className="fill"
                  style={{ width: '100%', background: '#4ade80' }}
                />
              </div>
              <span className="txt" style={{ color: '#4ade80' }}>
                5 / 5 review (100%)
              </span>
            </div>
          </div>
        </div>

        <div className="right-action">
          <span className="reward-tag">🍿 Combo Bắp Nước 0đ</span>
          <button
            className="claim-btn"
            style={{
              background: claimedReward
                ? 'rgba(255, 255, 255, 0.1)'
                : '#ff535a',
              cursor: claimedReward ? 'default' : 'pointer',
            }}
            onClick={claimedReward ? undefined : onClaimMission}
          >
            {claimedReward ? 'Đã nhận thưởng ✓' : 'Nhận thưởng ngay'}
          </button>
        </div>
      </S.ChallengeItem>
    </S.SectionCard>
  );
}
