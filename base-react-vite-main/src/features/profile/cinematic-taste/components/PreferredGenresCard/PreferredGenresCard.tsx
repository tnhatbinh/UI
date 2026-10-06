import { Film } from 'lucide-react';
import * as S from './PreferredGenresCard.styles';

export interface GenreItem {
  id: string;
  label: string;
  selected: boolean;
}

interface PreferredGenresCardProps {
  genres: GenreItem[];
  onToggleGenre: (id: string) => void;
}

export function PreferredGenresCard({
  genres,
  onToggleGenre,
}: PreferredGenresCardProps) {
  const selectedCount = genres.filter((g) => g.selected).length;

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Film size={17} color="#ff535a" />
            <span>THỂ LOẠI PHIM YÊU THÍCH</span>
          </h3>
          <span className="sub">
            Chạm để chọn hoặc bỏ chọn. Trợ lý AI sẽ ưu tiên hiển thị suất chiếu
            và gửi thông báo độc quyền cho các thể loại này.
          </span>
        </div>
        <span className="badge">Đã chọn {selectedCount} thể loại</span>
      </div>

      <S.GenreGrid>
        {genres.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`genre-chip ${g.selected ? 'selected' : ''}`}
            onClick={() => onToggleGenre(g.id)}
          >
            <span>{g.label}</span>
          </button>
        ))}
      </S.GenreGrid>
    </S.Card>
  );
}
