import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Save } from 'lucide-react';
import * as S from './EmailFrequencyCard.styles';

interface EmailFrequencyCardProps {
  onToast?: (msg: string) => void;
}

export function EmailFrequencyCard({ onToast }: EmailFrequencyCardProps) {
  const { t } = useTranslation();
  const [emailFreq, setEmailFreq] = useState<
    'instant' | 'friday' | 'tickets_only'
  >('friday');

  const handleSelectFrequency =
    (freq: 'instant' | 'friday' | 'tickets_only') => () => {
      setEmailFreq(freq);
    };

  const handleSave = () => {
    onToast?.(t('profile:toast_save_notif_settings'));
  };

  const handleCancel = () => {
    setEmailFreq('friday');
    onToast?.(t('profile:toast_cancel_notif_settings'));
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <span>{t('profile:email_freq_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:email_freq_sub')}
          </span>
        </div>
      </div>

      <S.FrequencyList>
        <div
          className={`radio-item ${emailFreq === 'instant' ? 'selected' : ''}`}
          onClick={handleSelectFrequency('instant')}
        >
          <div className="left-txt">
            <span className="title">{t('profile:freq_instant_title')}</span>
            <span className="sub">
              {t('profile:freq_instant_sub')}
            </span>
          </div>
          <input
            type="radio"
            name="freq"
            checked={emailFreq === 'instant'}
            onChange={handleSelectFrequency('instant')}
          />
        </div>

        <div
          className={`radio-item ${emailFreq === 'friday' ? 'selected' : ''}`}
          onClick={handleSelectFrequency('friday')}
        >
          <div className="left-txt">
            <div className="title-row">
              <span className="title">{t('profile:freq_friday_title')}</span>
              <span className="gold-pill">{t('profile:freq_friday_badge')}</span>
            </div>
            <span className="sub">
              {t('profile:freq_friday_sub')}
            </span>
          </div>
          <input
            type="radio"
            name="freq"
            checked={emailFreq === 'friday'}
            onChange={handleSelectFrequency('friday')}
          />
        </div>

        <div
          className={`radio-item ${emailFreq === 'tickets_only' ? 'selected' : ''}`}
          onClick={handleSelectFrequency('tickets_only')}
        >
          <div className="left-txt">
            <span className="title">{t('profile:freq_tickets_only_title')}</span>
            <span className="sub">
              {t('profile:freq_tickets_only_sub')}
            </span>
          </div>
          <input
            type="radio"
            name="freq"
            checked={emailFreq === 'tickets_only'}
            onChange={handleSelectFrequency('tickets_only')}
          />
        </div>

        <div className="btn-row">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            {t('profile:cancel_changes_btn')}
          </button>

          <button type="button" className="save-btn" onClick={handleSave}>
            <Save size={13} />
            <span>{t('profile:save_notif_settings_btn')}</span>
          </button>
        </div>
      </S.FrequencyList>
    </S.Card>
  );
}
