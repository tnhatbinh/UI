import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, X } from 'lucide-react';
import * as S from './IdolsCard.styles';

interface IdolItem {
  id: string;
  name: string;
  roleKey: string;
  avatar: string;
}

const INITIAL_IDOLS: IdolItem[] = [
  {
    id: '1',
    name: 'Christopher Nolan',
    roleKey: 'profile:role_director',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Denis Villeneuve',
    roleKey: 'profile:role_director',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Cillian Murphy',
    roleKey: 'profile:role_lead_actor',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Zendaya',
    roleKey: 'profile:role_actor',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    name: 'Leonardo DiCaprio',
    roleKey: 'profile:role_lead_actor',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    name: 'Keanu Reeves',
    roleKey: 'profile:role_action_actor',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
  },
];

interface IdolsCardProps {
  onToast?: (msg: string) => void;
}

export function IdolsCard({ onToast }: IdolsCardProps) {
  const { t } = useTranslation();
  const [idols, setIdols] = useState<IdolItem[]>(INITIAL_IDOLS);

  const handleRemoveIdol = (id: string) => () => {
    setIdols((prev) => prev.filter((item) => item.id !== id));
    onToast?.(t('profile:toast_idols_updated'));
  };

  const handleAddIdol = () => {
    onToast?.(t('profile:toast_add_idol_expanding'));
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <span>{t('profile:idols_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:idols_desc')}
          </span>
        </div>
        <button
          className="add-idol-btn"
          onClick={handleAddIdol}
        >
          <Plus size={12} />
          <span>{t('profile:add_idol_btn')}</span>
        </button>
      </div>

      <S.IdolsGrid>
        {idols.map((idol) => (
          <div key={idol.id} className="idol-card">
            <div className="meta">
              <img src={idol.avatar} alt={idol.name} className="avatar" />
              <div className="text">
                <span className="name">{idol.name}</span>
                <span className="role">{t(idol.roleKey)}</span>
              </div>
            </div>
            <button
              className="del-btn"
              onClick={handleRemoveIdol(idol.id)}
              title={t('profile:delete_idol_tooltip')}
            >
              <X size={13} />
            </button>
          </div>
        ))}
      </S.IdolsGrid>
    </S.Card>
  );
}
