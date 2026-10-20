import type { FC } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Sparkles } from 'lucide-react';
import { getCineMatchAiApi } from '@features/auth/api/auth.api';
import * as S from './TasteSummaryCard.styles';

const DEFAULT_TASTE_TAGS = [
  '🚀 Sci-Fi Khoa Học Viễn Tưởng',
  '🕵️ Tâm Lý Tội Phạm Noir',
  '💥 Hành Động Bom Tấn',
  '🎧 Chuẩn âm thanh Dolby Atmos',
  '🎟 Phòng chiếu IMAX Laser',
];

export const TasteSummaryCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: taste } = useQuery({
    queryKey: ['cine-match-ai'],
    queryFn: getCineMatchAiApi,
    staleTime: 60000,
  });

  const displayTags = useMemo(() => {
    if (taste?.favoriteGenres && taste.favoriteGenres.length > 0) {
      const genreTags = taste.favoriteGenres.map((g) => `✨ ${g}`);
      return [...genreTags, '🎧 Chuẩn âm thanh Dolby Atmos', '🎟 Phòng chiếu IMAX Laser'];
    }
    return DEFAULT_TASTE_TAGS;
  }, [taste]);

  const handleNavigateTaste = () => {
    navigate('/profile/cinematic-taste');
  };

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <Sparkles size={18} color="#ffb955" />
            <span>{t('profile:taste_summary_title')}</span>
            {taste?.tasteMatchRate && (
              <span style={{ fontSize: 11, color: '#ffb955', marginLeft: 8, background: 'rgba(255, 185, 85, 0.15)', padding: '2px 6px', borderRadius: 4 }}>
                AI Match {taste.tasteMatchRate}%
              </span>
            )}
          </h3>
        </div>
        <span
          className="edit-link"
          onClick={handleNavigateTaste}
        >
          {t('profile:edit_taste_link')}
        </span>
      </div>

      <S.TasteTagsGrid>
        {displayTags.map((tag) => (
          <span key={tag} className="taste-tag">
            {tag}
          </span>
        ))}
      </S.TasteTagsGrid>
    </S.Card>
  );
};

export default TasteSummaryCard;
