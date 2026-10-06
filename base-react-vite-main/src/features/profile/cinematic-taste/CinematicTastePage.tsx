import { useState } from 'react';
import { Sparkles } from 'lucide-react';
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

const INITIAL_GENRES: GenreItem[] = [
  { id: 'scifi', label: '🚀 Sci-Fi Viễn Tưởng', selected: true },
  { id: 'noir', label: '🕵️ Tâm Lý Tội Phạm Noir', selected: true },
  { id: 'action', label: '💥 Hành Động Bom Tấn', selected: true },
  { id: 'horror', label: '👻 Kinh Dị Siêu Nhiên', selected: false },
  { id: 'adventure', label: '🪐 Phiêu Lưu Giả Tưởng', selected: false },
  { id: 'anime', label: '🍥 Hoạt Hình Anime', selected: false },
  { id: 'oscar', label: '🏆 Chính Kịch Oscar', selected: true },
  { id: 'romance', label: '👩‍❤️‍👨 Lãng Mạn Tình Cảm', selected: false },
  { id: 'psycho', label: '🧠 Giật Gân Tâm Lý (Psychological)', selected: true },
];

export default function CinematicTastePage() {
  const [genres, setGenres] = useState<GenreItem[]>(INITIAL_GENRES);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const toggleGenre = (id: string) => {
    setGenres((prev) =>
      prev.map((g) => (g.id === id ? { ...g, selected: !g.selected } : g)),
    );
  };

  const handleReset = () => {
    setGenres(INITIAL_GENRES);
    showToast('Đã khôi phục cài đặt khẩu vị điện ảnh mặc định.');
  };

  const handleTrainAI = () => {
    showToast('Đã lưu khẩu vị điện ảnh và cập nhật thuật toán gợi ý CineAI!');
  };

  return (
    <CinemaNoirShell pageTitle="Khẩu vị điện ảnh">
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
