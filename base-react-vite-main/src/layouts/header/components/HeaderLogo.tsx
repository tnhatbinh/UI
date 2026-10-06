import type { FC } from 'react';
import { Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LogoWrapper } from './HeaderLogo.styles';

export const HeaderLogo: FC = () => {
  const navigate = useNavigate();

  return (
    <LogoWrapper onClick={() => navigate('/')}>
      <div className="logo-icon">
        <Film size={20} strokeWidth={2.2} />
      </div>
      <div className="logo-text">
        <div className="brand-name">
          <span className="brand-phim">PHIM</span>
          <span className="brand-book">BOOK</span>
        </div>
        <span className="brand-tag">CINEMATIC LOUNGE</span>
      </div>
    </LogoWrapper>
  );
};
