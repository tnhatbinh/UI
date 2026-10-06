import type { FC } from 'react';
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
  if (!isOpen) return null;

  return (
    <S.TrailerModal onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="close-btn" onClick={onClose}>
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
