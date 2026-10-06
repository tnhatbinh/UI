import type { FC } from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useBooking } from '@features/booking/context/use-booking';
import {
  getMovieDetails,
  DAY_OPTIONS,
  CINEMAS_DATA,
  type ShowtimeSlot,
  type CinemaSchedule,
  type ScreenFormatGroup,
  type MovieDetails,
} from './data/mock-movie-details';
import { MovieHero } from './components/MovieHero/MovieHero';
import { MovieSynopsis } from './components/MovieSynopsis/MovieSynopsis';
import { ShowtimePicker } from './components/ShowtimePicker/ShowtimePicker';
import { StickyBookingBar } from './components/StickyBookingBar/StickyBookingBar';
import { TrailerModal } from './components/TrailerModal/TrailerModal';
import * as S from './MovieDetailsPage.styles';

export const MovieDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { id: paramId } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { setMovieAndSession } = useBooking();

  // Resolve dynamic movie based on URL param (/phim/:id) or query param (?movieId=... / ?id=...)
  const effectiveId =
    paramId || searchParams.get('movieId') || searchParams.get('id') || '1';
  const movie: MovieDetails = useMemo(
    () => getMovieDetails(effectiveId),
    [effectiveId],
  );

  const [selectedCity, setSelectedCity] = useState('TP. Hồ Chí Minh');
  const [searchCinema, setSearchCinema] = useState('');
  const [selectedDate, setSelectedDate] = useState(DAY_OPTIONS[0]);
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Selected session state for booking
  const [selectedSlot, setSelectedSlot] = useState<{
    cinema: CinemaSchedule;
    format: ScreenFormatGroup;
    slot: ShowtimeSlot;
  } | null>({
    cinema: CINEMAS_DATA[0],
    format: CINEMAS_DATA[0].formats[0],
    slot: CINEMAS_DATA[0].formats[0].slots[1], // default 17:15
  });

  const showtimesRef = useRef<HTMLDivElement>(null);

  // Tự động cuộn xuống lịch chiếu nếu bấm "Đặt vé ngay" hoặc URL có hash/query đặt vé
  useEffect(() => {
    const shouldScroll =
      searchParams.get('booking') === 'true' ||
      searchParams.get('dat-ve') === 'true' ||
      location.hash === '#showtimes' ||
      location.hash === '#dat-ve' ||
      Boolean(location.state?.scrollToBooking);

    if (shouldScroll) {
      const timer = setTimeout(() => {
        showtimesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchParams, location.hash, location.state]);

  const scrollToBooking = () => {
    showtimesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectSlot = (
    cinema: CinemaSchedule,
    format: ScreenFormatGroup,
    slot: ShowtimeSlot,
  ) => {
    setSelectedSlot({ cinema, format, slot });
  };

  const handleProceedToSeatSelection = () => {
    if (!selectedSlot) return;

    setMovieAndSession(
      {
        id: movie.id.toString(),
        title: movie.title,
        originalTitle: movie.originalTitle,
        posterUrl: movie.posterUrl,
        backdropUrl: movie.backdropUrl,
        rating:
          typeof movie.rating === 'number'
            ? movie.rating
            : parseFloat(movie.rating) || 8.8,
        ageRating: movie.ageRating,
        duration: movie.runtime,
        format: selectedSlot.format.formatName,
      },
      {
        cinemaId: selectedSlot.cinema.id,
        cinemaName: selectedSlot.cinema.name,
        cinemaAddress: selectedSlot.cinema.address,
        room: selectedSlot.format.roomDetails,
        date: selectedDate.fullDate,
        time: selectedSlot.slot.time,
        format: selectedSlot.format.formatName,
        soundSystem: 'DOLBY ATMOS • 64 LOA',
      },
    );

    navigate('/booking/seat-selection');
  };

  // Filter cinemas
  const filteredCinemas = CINEMAS_DATA.filter((cinema: CinemaSchedule) => {
    const matchesSearch =
      cinema.name.toLowerCase().includes(searchCinema.toLowerCase()) ||
      cinema.address.toLowerCase().includes(searchCinema.toLowerCase());
    return matchesSearch;
  });

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* 1. Breadcrumbs */}
        <S.BreadcrumbNav>
          <div className="back-btn" onClick={() => navigate('/kham-pha')}>
            <ChevronLeft size={16} />
            <span>Khám phá phim</span>
          </div>
          <span className="separator">/</span>
          <span>Chi tiết siêu phẩm</span>
          <span className="separator">/</span>
          <span className="current">{movie.title}</span>
        </S.BreadcrumbNav>

        {/* 2. Hero Section */}
        <MovieHero
          movie={movie}
          onOpenTrailer={() => setIsTrailerOpen(true)}
          onBookNow={scrollToBooking}
          isBookmarked={isBookmarked}
          onToggleBookmark={() => setIsBookmarked(!isBookmarked)}
        />

        {/* 3. Details Block (Synopsis + Critical Acclaim) */}
        <MovieSynopsis movie={movie} />

        {/* 4. Showtimes Section */}
        <ShowtimePicker
          ref={showtimesRef}
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          searchCinema={searchCinema}
          onSearchCinema={setSearchCinema}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          selectedFormat={selectedFormat}
          onSelectFormat={setSelectedFormat}
          cinemas={filteredCinemas}
          selectedSlot={selectedSlot}
          onSelectSlot={handleSelectSlot}
        />
      </S.InnerWrapper>

      {/* 5. Sticky Bottom Bar */}
      <StickyBookingBar
        selectedSlot={selectedSlot}
        selectedDate={selectedDate}
        onProceed={handleProceedToSeatSelection}
      />

      {/* 6. Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        trailerUrl={movie.trailerUrl}
        title={movie.title}
      />
    </S.PageContainer>
  );
};

export default MovieDetailsPage;
