import { useTranslation } from 'react-i18next';
import { Shield, Sparkles } from 'lucide-react';
import * as S from './TasteBottomActionStrip.styles';

interface TasteBottomActionStripProps {
  onReset: () => void;
  onTrainAI: () => void;
}

export function TasteBottomActionStrip({
  onReset,
  onTrainAI,
}: TasteBottomActionStripProps) {
  const { t } = useTranslation();

  return (
    <S.BottomActionStrip>
      <div className="left-sec">
        <Shield size={20} className="icon" />
        <div className="text">
          <span className="title">{t('profile:privacy_title')}</span>
          <span className="sub">
            {t('profile:privacy_sub')}
          </span>
        </div>
      </div>

      <div className="right-buttons">
        <button className="reset-btn" onClick={onReset}>
          {t('profile:reset_default_btn')}
        </button>

        <button className="train-btn" onClick={onTrainAI}>
          <Sparkles size={15} />
          <span>{t('profile:save_train_ai_btn')}</span>
        </button>
      </div>
    </S.BottomActionStrip>
  );
}
