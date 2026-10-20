import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Sparkles } from 'lucide-react';
import { getCineMatchAiApi } from '@features/auth/api/auth.api';
import CinemaNoirShell from '../components/CinemaNoirShell';
import { AiMatchBanner } from './components/AiMatchBanner';
import {
  PreferredGenresCard,
  type GenreItem,
} from './components/PreferredGenresCard';
import { IdolsCard } from './components/IdolsCard';
import { CinemaTechCard } from './components/CinemaTechCard';
import { GoldenHoursCard } from './components/GoldenHoursCard';
import { SeatVisualizerCard } from './components/SeatVisualizerCard';
import { TasteBottomActionStrip } from './components/TasteBottomActionStrip';
import * as S from './CinematicTastePage.styles';

const INITIAL_GENRES = [
  { id: 'scifi', labelKey: 'profile:genre_scifi', defaultLabel: '🚀 Sci-Fi Viễn Tưởng', isSelected: true },
  { id: 'noir', labelKey: 'profile:genre_noir', defaultLabel: '🕵️ Tâm Lý Tội Phạm Noir', isSelected: true },
  { id: 'action', labelKey: 'profile:genre_action', defaultLabel: '💥 Hành Động Bom Tấn', isSelected: true },
  { id: 'horror', labelKey: 'profile:genre_horror', defaultLabel: '👻 Kinh Dị Siêu Nhiên', isSelected: false },
  { id: 'adventure', labelKey: 'profile:genre_adventure', defaultLabel: '🪐 Phiêu Lưu Giả Tưởng', isSelected: false },
  { id: 'anime', labelKey: 'profile:genre_anime', defaultLabel: '🍥 Hoạt Hình Anime', isSelected: false },
  { id: 'oscar', labelKey: 'profile:genre_oscar', defaultLabel: '🏆 Chính Kịch Oscar', isSelected: true },
  { id: 'romance', labelKey: 'profile:genre_romance', defaultLabel: '👩‍❤️‍👨 Lãng Mạn Tình Cảm', isSelected: false },
  { id: 'psycho', labelKey: 'profile:genre_psycho', defaultLabel: '🧠 Giật Gân Tâm Lý (Psychological)', isSelected: true },
];

export default function CinematicTastePage() {
  const { t } = useTranslation();
  const [userSelectedIds, setUserSelectedIds] = useState<string[] | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { data: tasteData } = useQuery({
    queryKey: ['cine-match-ai'],
    queryFn: getCineMatchAiApi,
    staleTime: 60000,
  });

  const genres: GenreItem[] = useMemo(() => {
    const lowerAiGenres =
      tasteData?.favoriteGenres?.map((g) => g.toLowerCase()) || [];

    return INITIAL_GENRES.map((g) => {
      let isSelected = g.isSelected;
      if (lowerAiGenres.length > 0) {
        const isMatch = lowerAiGenres.some(
          (aiG) => g.defaultLabel.toLowerCase().includes(aiG) || aiG.includes(g.id),
        );
        if (isMatch) isSelected = true;
      }
      if (userSelectedIds !== null) {
        isSelected = userSelectedIds.includes(g.id);
      }
      return { id: g.id, label: t(g.labelKey), isSelected };
    });
  }, [tasteData?.favoriteGenres, userSelectedIds, t]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const toggleGenre = (id: string) => {
    const currentSelectedIds =
      userSelectedIds !== null
        ? userSelectedIds
        : genres.filter((g) => g.isSelected).map((g) => g.id);

    const next = currentSelectedIds.includes(id)
      ? currentSelectedIds.filter((item) => item !== id)
      : [...currentSelectedIds, id];

    setUserSelectedIds(next);
  };

  const handleReset = () => {
    setUserSelectedIds(
      INITIAL_GENRES.filter((g) => g.isSelected).map((g) => g.id),
    );
    showToast(t('profile:toast_taste_reset'));
  };

  const handleTrainAI = () => {
    const selectedCount = genres.filter((g) => g.isSelected).length;
    showToast(t('profile:toast_taste_trained', { count: selectedCount }));
  };

  return (
    <CinemaNoirShell pageTitle={t('profile:taste_page_title')}>
      <S.TastePageGrid>
        {/* Top AI Match Header Banner */}
        <AiMatchBanner />

        {/* 2-Column Main Section */}
        <S.MainTwoCol>
          {/* Left Column: Genres & Idols */}
          <S.Column $gap="24px">
            <PreferredGenresCard genres={genres} onToggleGenre={toggleGenre} />
            <IdolsCard onToast={showToast} />
          </S.Column>

          {/* Right Column: Cinema Tech, Golden Hours & Seat preference */}
          <S.Column $gap="20px">
            <CinemaTechCard />
            <GoldenHoursCard />
            <SeatVisualizerCard />
          </S.Column>
        </S.MainTwoCol>

        {/* Bottom Save & Train AI Strip */}
        <TasteBottomActionStrip
          onReset={handleReset}
          onTrainAI={handleTrainAI}
        />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastNotification>
            <Sparkles size={16} color="#ffb955" />
            <span>{toastMessage}</span>
          </S.ToastNotification>
        )}
      </S.TastePageGrid>
    </CinemaNoirShell>
  );
}
