import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import * as S from './TrailerModal.styles';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl: string;
  title: string;
}

export const TrailerModal: FC<TrailerModalProps> = ({
  isOpen,
  onClose,
  trailerUrl,
  title,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <S.TrailerModal onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label={t('movie:close_trailer', 'Đóng trailer')}
        >
          <X size={18} />
        </button>
        <iframe
          src={trailerUrl}
          title={`${title} Trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </S.TrailerModal>
  );
};
