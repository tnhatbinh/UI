import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCineMatchAiApi } from '@features/auth/api/auth.api';
import * as S from './AiMatchBanner.styles';

export function AiMatchBanner() {
  const { t } = useTranslation();
  const { data: taste } = useQuery({
    queryKey: ['cine-match-ai'],
    queryFn: getCineMatchAiApi,
    staleTime: 60000,
  });

  const matchRate = taste?.tasteMatchRate ?? 98.4;
  const genresStr =
    taste?.favoriteGenres && taste.favoriteGenres.length > 0
      ? taste.favoriteGenres.join(' & ')
      : t('profile:default_genres_str');
  const directorsStr =
    taste?.favoriteDirectors && taste.favoriteDirectors.length > 0
      ? t('profile:favorite_directors_quote', { names: taste.favoriteDirectors.join(', ') })
      : '';

  return (
    <S.Container>
      <div className="left-meta">
        <div className="icon-box">
          <Sparkles size={20} />
        </div>
        <div className="text">
          <div className="title-line">
            <h3>{t('profile:ai_match_banner_title')}</h3>
            <span className="match-badge">
              {t('profile:ai_match_badge', { rate: matchRate })}
            </span>
          </div>
          <p className="quote">
            {t('profile:ai_match_quote', { genres: genresStr, directors: directorsStr })}
          </p>
        </div>
      </div>
      <div className="model-pill">
        <span className="dot">●</span>
        <span>{t('profile:ai_model_name')}</span>
      </div>
    </S.Container>
  );
}

