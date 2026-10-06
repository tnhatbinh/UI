import { Film, Smartphone, Star } from 'lucide-react';
import * as S from './CinePassCard.styles';

export function CinePassCard() {
  return (
    <S.CinePassCard>
      <div className="card-top">
        <div className="brand">
          <div className="logo-box">
            <Film size={18} />
          </div>
          <div className="brand-text">
            <span className="name">CINEPASS</span>
            <span className="edition">BLACK EDITION</span>
          </div>
        </div>

        <span className="vip-badge">
          <Star size={10} fill="#ffb955" />
          <span>VIP ELITE</span>
        </span>
      </div>

      <div className="chip-nfc-row">
        <div className="chip" />
        <Smartphone size={18} className="nfc-icon" />
      </div>

      <div className="card-number">ELITE • 9928 • 8831</div>

      <div className="holder-points-row">
        <div className="holder">
          <span className="label">CHỦ THẺ</span>
          <span className="name">NGUYEN THANH TUNG</span>
        </div>
        <div className="points">
          <span className="label">ĐIỂM TÍCH LŨY</span>
          <span className="pts">1,250 PhimPoints</span>
        </div>
      </div>

      <div className="progress-wrap">
        <div className="labels">
          <span>Tiến trình lên VIP Diamond</span>
          <span className="target">1,250 / 2,000 pts (62.5%)</span>
        </div>
        <div className="bar-bg">
          <div className="fill" />
        </div>
      </div>
    </S.CinePassCard>
  );
}
