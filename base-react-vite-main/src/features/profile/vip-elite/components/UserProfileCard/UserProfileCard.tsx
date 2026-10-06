import { Award, ChevronRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from './UserProfileCard.styles';

export function UserProfileCard() {
  const navigate = useNavigate();

  return (
    <S.UserProfileCard>
      <div className="user-header">
        <div className="avatar-wrap">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
            alt="Nguyễn Thanh Tùng"
          />
          <div className="star-badge">
            <Star size={12} fill="#ffb955" />
          </div>
        </div>

        <div className="info">
          <div className="badge-row">
            <span className="vip-pill">VIP ELITE MEMBER</span>
            <span className="active-dot">Hội viên tích cực</span>
          </div>
          <h2 className="name">Nguyễn Thanh Tùng</h2>
          <div className="meta-line">
            Thành viên thân thiết từ 04/2021 • Mã: PB-VN-094182
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-col">
          <span className="label">PHIM ĐÃ XEM</span>
          <span className="value">
            48 <span className="unit">tác phẩm</span>
          </span>
          <span className="sub">📈 +6 tháng này</span>
        </div>

        <div className="stat-col">
          <span className="label">RẠP ĐÃ GHÉ THĂM</span>
          <span className="value">
            12 <span className="unit">cụm rạp</span>
          </span>
          <span className="sub">📍 3 cụm thường xuyên</span>
        </div>

        <div className="stat-col">
          <span className="label">TIẾT KIỆM NĂM NAY</span>
          <span className="value">
            1.45M <span className="unit">VND</span>
          </span>
          <span className="sub">🏷️ Từ voucher VIP</span>
        </div>
      </div>

      <div className="privilege-strip">
        <div className="desc">
          <Award size={16} className="icon" />
          <span>
            Đặc quyền hạng hiện tại: Giảm 15% bắp nước, ưu tiên giữ chỗ ghế
            trung tâm trước 24h.
          </span>
        </div>
        <div
          className="detail-link"
          onClick={() => navigate('/profile/cinematic-taste')}
        >
          <span>Chi tiết hạng</span>
          <ChevronRight size={13} />
        </div>
      </div>
    </S.UserProfileCard>
  );
}
