import { Sparkles } from 'lucide-react';
import * as S from './AiMatchBanner.styles';

export function AiMatchBanner() {
  return (
    <S.Container>
      <div className="left-meta">
        <div className="icon-box">
          <Sparkles size={20} />
        </div>
        <div className="text">
          <div className="title-line">
            <h3>Hồ Sơ Gu Điện Ảnh Cá Nhân Hóa (AI Cinematic Match)</h3>
            <span className="match-badge">Độ chuẩn 98.4%</span>
          </div>
          <p className="quote">
            "Tín đồ Khoa Học Viễn Tưởng & Bom Tấn Hành Động đỉnh cao, chuộng
            phòng chiếu công nghệ cao IMAX Laser & âm thanh Dolby Atmos 360."
          </p>
        </div>
      </div>
      <div className="model-pill">
        <span style={{ color: '#ffb955' }}>●</span>
        <span>Mô hình AI: Noir-Omni 4.2</span>
      </div>
    </S.Container>
  );
}
