import { useTranslation } from 'react-i18next';
import { Film } from 'lucide-react';
import * as S from './PreferredGenresCard.styles';

export interface GenreItem {
  id: string;
  label: string;
  isSelected: boolean;
}

interface PreferredGenresCardProps {
  genres: GenreItem[];
  onToggleGenre: (id: string) => void;
}

export function PreferredGenresCard({
  genres,
  onToggleGenre,
}: PreferredGenresCardProps) {
  const { t } = useTranslation();
  const selectedCount = genres.filter((g) => g.isSelected).length;

  const handleToggleGenre = (id: string) => () => {
    onToggleGenre(id);
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Film size={17} color="#ff535a" />
            <span>{t('profile:favorite_genres_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:favorite_genres_desc')}
          </span>
        </div>
        <span className="badge">
          {t('profile:selected_genres_count', { count: selectedCount })}
        </span>
      </div>

      <S.GenreGrid>
        {genres.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`genre-chip ${g.isSelected ? 'selected' : ''}`}
            onClick={handleToggleGenre(g.id)}
          >
            <span>{g.label}</span>
          </button>
        ))}
      </S.GenreGrid>
    </S.Card>
  );
}
