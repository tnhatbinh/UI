import { useTranslation } from 'react-i18next';
import { Headphones, ChevronRight } from 'lucide-react';
import * as S from './ConciergeHelpCard.styles';

export function ConciergeHelpCard() {
  const { t } = useTranslation();
  const handleClick = () => {};

  return (
    <S.Container onClick={handleClick}>
      <div className="left">
        <div className="icon-box">
          <Headphones size={18} />
        </div>
        <div className="text">
          <span className="title">{t('profile:concierge_title')}</span>
          <span className="sub">
            {t('profile:concierge_hotline')}
          </span>
        </div>
      </div>
      <ChevronRight size={16} className="arrow" />
    </S.Container>
  );
}
