import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import * as S from './IdolsCard.styles';

interface IdolItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

const INITIAL_IDOLS: IdolItem[] = [
  {
    id: '1',
    name: 'Christopher Nolan',
    role: 'Đạo diễn',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Denis Villeneuve',
    role: 'Đạo diễn',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Cillian Murphy',
    role: 'Diễn viên chính',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Zendaya',
    role: 'Diễn viên',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    name: 'Leonardo DiCaprio',
    role: 'Diễn viên chính',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    name: 'Keanu Reeves',
    role: 'Diễn viên hành động',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
  },
];

interface IdolsCardProps {
  onToast?: (msg: string) => void;
}

export function IdolsCard({ onToast }: IdolsCardProps) {
  const [idols, setIdols] = useState<IdolItem[]>(INITIAL_IDOLS);

  const removeIdol = (id: string) => {
    setIdols((prev) => prev.filter((item) => item.id !== id));
    onToast?.('Đã cập nhật danh sách nghệ sĩ quan tâm.');
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <span>ĐẠO DIỄN & DIỄN VIÊN THẦN TƯỢNG</span>
          </h3>
          <span className="sub">
            Nhận thông báo đặc quyền tức thì khi dự án của thần tượng mở bán vé
            sớm tại cụm rạp.
          </span>
        </div>
        <button
          className="add-idol-btn"
          onClick={() =>
            alert('Nhập tên diễn viên hoặc đạo diễn bạn muốn theo dõi...')
          }
        >
          <Plus size={12} />
          <span>Thêm thần tượng</span>
        </button>
      </div>

      <S.IdolsGrid>
        {idols.map((idol) => (
          <div key={idol.id} className="idol-card">
            <div className="meta">
              <img src={idol.avatar} alt={idol.name} className="avatar" />
              <div className="text">
                <span className="name">{idol.name}</span>
                <span className="role">{idol.role}</span>
              </div>
            </div>
            <button
              className="del-btn"
              onClick={() => removeIdol(idol.id)}
              title="Xóa khỏi danh sách"
            >
              <X size={13} />
            </button>
          </div>
        ))}
      </S.IdolsGrid>
    </S.Card>
  );
}
