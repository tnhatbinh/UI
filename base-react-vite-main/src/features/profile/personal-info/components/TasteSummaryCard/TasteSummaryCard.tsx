import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import * as S from './TasteSummaryCard.styles';

const TASTE_TAGS = [
  '🚀 Sci-Fi Khoa Học Viễn Tưởng',
  '🕵️ Tâm Lý Tội Phạm Noir',
  '💥 Hành Động Bom Tấn',
  '🎧 Chuẩn âm thanh Dolby Atmos',
  '🎟 Phòng chiếu IMAX Laser',
];

export const TasteSummaryCard: FC = () => {
  const navigate = useNavigate();

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <Sparkles size={18} color="#ffb955" />
            <span>Khẩu vị điện ảnh ưa thích</span>
          </h3>
        </div>
        <span
          className="edit-link"
          onClick={() => navigate('/profile/cinematic-taste')}
        >
          Chỉnh sửa sở thích
        </span>
      </div>

      <S.TasteTagsGrid>
        {TASTE_TAGS.map((tag) => (
          <span key={tag} className="taste-tag">
            {tag}
          </span>
        ))}
      </S.TasteTagsGrid>
    </S.Card>
  );
};

export default TasteSummaryCard;
