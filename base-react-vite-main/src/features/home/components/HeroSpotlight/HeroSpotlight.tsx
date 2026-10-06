import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Ticket,
  MapPin,
  Calendar,
  Clock,
  Check,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as S from './HeroSpotlight.styles';
import {
  SPOTLIGHT_MOVIES,
  BOOKING_MOVIES,
  BOOKING_CINEMAS,
  BOOKING_DATES,
  BOOKING_SHOWTIMES,
} from './data/spotlight-data';
import { useSpotlightCarousel } from './hooks/use-spotlight-carousel';
import { SlideItem } from './components/SlideItem/SlideItem';

export const HeroSpotlight: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // ── Carousel ──────────────────────────────────────────────────────────────
  const { emblaRef, selectedIndex, handlePrev, handleNext, handleDotClick } =
    useSpotlightCarousel();

  // ── Quick Booking Bar State ───────────────────────────────────────────────
  const [selectedMovie, setSelectedMovie] = useState('Minions & Monsters');
  const [selectedCinema, setSelectedCinema] = useState(
    'CGV Landmark 81 (IMAX Laser)',
  );
  const [selectedDate, setSelectedDate] = useState('Hôm nay, 24 Tháng 10');
  const [selectedShowtime, setSelectedShowtime] =
    useState('19:45 • Phòng IMAX');
  const [activeDropdown, setActiveDropdown] = useState<
    'movie' | 'cinema' | 'date' | 'showtime' | null
  >(null);

  const bookingBarRef = useRef<HTMLDivElement>(null);

  // Sync quick booking bar movie with active slide during render
  const [prevIndex, setPrevIndex] = useState(selectedIndex);
  if (selectedIndex !== prevIndex) {
    setPrevIndex(selectedIndex);
    if (SPOTLIGHT_MOVIES[selectedIndex]) {
      setSelectedMovie(SPOTLIGHT_MOVIES[selectedIndex].mainTitle);
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bookingBarRef.current &&
        !bookingBarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.SectionContainer
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }}
    >
      {/* ── Background / Carousel ── */}
      <S.BackgroundWrapper>
        <S.ImageContainer>
          <S.SliderViewport ref={emblaRef}>
            <S.SliderTrack>
              {SPOTLIGHT_MOVIES.map((movie) => (
                <SlideItem
                  key={movie.id}
                  movie={movie}
                  selectedIndex={selectedIndex}
                  onDotClick={handleDotClick}
                />
              ))}
            </S.SliderTrack>
          </S.SliderViewport>

          {/* Navigation Arrows */}
          <S.SliderArrowButton
            type="button"
            $direction="prev"
            onClick={handlePrev}
            aria-label="Phim trước"
            className="no-drag"
          >
            <ChevronLeft size={24} />
          </S.SliderArrowButton>

          <S.SliderArrowButton
            type="button"
            $direction="next"
            onClick={handleNext}
            aria-label="Phim kế tiếp"
            className="no-drag"
          >
            <ChevronRight size={24} />
          </S.SliderArrowButton>
        </S.ImageContainer>
      </S.BackgroundWrapper>

      {/* ── Quick Booking Bar ── */}
      <S.QuickBookingBar ref={bookingBarRef} className="no-drag">
        {/* Step 1 – Movie */}
        <S.StepItem
          role="button"
          tabIndex={0}
          $isOpen={activeDropdown === 'movie'}
          onClick={() =>
            setActiveDropdown(activeDropdown === 'movie' ? null : 'movie')
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveDropdown(activeDropdown === 'movie' ? null : 'movie');
            }
          }}
        >
          <S.IconBox1>
            <Ticket className="text-[#FFB3B0]" size={16} />
          </S.IconBox1>
          <S.StepContent>
            <S.StepLabel>{t('home:hero.step_movie')}</S.StepLabel>
            <S.StepValueRow>
              <S.StepValue1>{selectedMovie}</S.StepValue1>
              <S.DropdownChevron $isOpen={activeDropdown === 'movie'}>
                <ChevronDown className="text-[#AE8786]" size={14} />
              </S.DropdownChevron>
            </S.StepValueRow>
          </S.StepContent>

          {activeDropdown === 'movie' && (
            <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
              {BOOKING_MOVIES.map((movie) => (
                <S.BookingDropdownItem
                  key={movie}
                  role="button"
                  tabIndex={0}
                  $isSelected={selectedMovie === movie}
                  onClick={() => {
                    setSelectedMovie(movie);
                    const movieIdx = SPOTLIGHT_MOVIES.findIndex(
                      (m) => m.mainTitle === movie,
                    );
                    if (movieIdx !== -1) handleDotClick(movieIdx);
                    setActiveDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedMovie(movie);
                      const movieIdx = SPOTLIGHT_MOVIES.findIndex(
                        (m) => m.mainTitle === movie,
                      );
                      if (movieIdx !== -1) handleDotClick(movieIdx);
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <span>{movie}</span>
                  {selectedMovie === movie && (
                    <Check className="check-icon" size={14} />
                  )}
                </S.BookingDropdownItem>
              ))}
            </S.BookingDropdown>
          )}
        </S.StepItem>

        {/* Step 2 – Cinema */}
        <S.StepItem
          role="button"
          tabIndex={0}
          $isOpen={activeDropdown === 'cinema'}
          onClick={() =>
            setActiveDropdown(activeDropdown === 'cinema' ? null : 'cinema')
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveDropdown(activeDropdown === 'cinema' ? null : 'cinema');
            }
          }}
        >
          <S.IconBox2>
            <MapPin className="text-[#FFB955]" size={16} />
          </S.IconBox2>
          <S.StepContent>
            <S.StepLabel>{t('home:hero.step_cinema')}</S.StepLabel>
            <S.StepValueRow>
              <S.StepValue2>{selectedCinema}</S.StepValue2>
              <S.DropdownChevron $isOpen={activeDropdown === 'cinema'}>
                <ChevronDown className="text-[#AE8786]" size={14} />
              </S.DropdownChevron>
            </S.StepValueRow>
          </S.StepContent>

          {activeDropdown === 'cinema' && (
            <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
              {BOOKING_CINEMAS.map((cinema) => (
                <S.BookingDropdownItem
                  key={cinema}
                  role="button"
                  tabIndex={0}
                  $isSelected={selectedCinema === cinema}
                  onClick={() => {
                    setSelectedCinema(cinema);
                    setActiveDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCinema(cinema);
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <span>{cinema}</span>
                  {selectedCinema === cinema && (
                    <Check className="check-icon" size={14} />
                  )}
                </S.BookingDropdownItem>
              ))}
            </S.BookingDropdown>
          )}
        </S.StepItem>

        {/* Step 3 – Date */}
        <S.StepItem
          role="button"
          tabIndex={0}
          $isOpen={activeDropdown === 'date'}
          onClick={() =>
            setActiveDropdown(activeDropdown === 'date' ? null : 'date')
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveDropdown(activeDropdown === 'date' ? null : 'date');
            }
          }}
        >
          <S.IconBox3>
            <Calendar className="text-[#C2C5DB]" size={16} />
          </S.IconBox3>
          <S.StepContent>
            <S.StepLabel>{t('home:hero.step_date')}</S.StepLabel>
            <S.StepValueRow>
              <S.StepValue3>{selectedDate}</S.StepValue3>
              <S.DropdownChevron $isOpen={activeDropdown === 'date'}>
                <ChevronDown className="text-[#AE8786]" size={14} />
              </S.DropdownChevron>
            </S.StepValueRow>
          </S.StepContent>

          {activeDropdown === 'date' && (
            <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
              {BOOKING_DATES.map((date) => (
                <S.BookingDropdownItem
                  key={date}
                  role="button"
                  tabIndex={0}
                  $isSelected={selectedDate === date}
                  onClick={() => {
                    setSelectedDate(date);
                    setActiveDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedDate(date);
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <span>{date}</span>
                  {selectedDate === date && (
                    <Check className="check-icon" size={14} />
                  )}
                </S.BookingDropdownItem>
              ))}
            </S.BookingDropdown>
          )}
        </S.StepItem>

        {/* Step 4 – Showtime */}
        <S.StepItem
          role="button"
          tabIndex={0}
          $isOpen={activeDropdown === 'showtime'}
          onClick={() =>
            setActiveDropdown(activeDropdown === 'showtime' ? null : 'showtime')
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveDropdown(
                activeDropdown === 'showtime' ? null : 'showtime',
              );
            }
          }}
        >
          <S.IconBox4>
            <Clock className="text-[#E7BCBA]" size={16} />
          </S.IconBox4>
          <S.StepContent>
            <S.StepLabel>{t('home:hero.step_showtime')}</S.StepLabel>
            <S.StepValueRow>
              <S.StepValue4>{selectedShowtime}</S.StepValue4>
              <S.DropdownChevron $isOpen={activeDropdown === 'showtime'}>
                <ChevronDown className="text-[#AE8786]" size={14} />
              </S.DropdownChevron>
            </S.StepValueRow>
          </S.StepContent>

          {activeDropdown === 'showtime' && (
            <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
              {BOOKING_SHOWTIMES.map((time) => (
                <S.BookingDropdownItem
                  key={time}
                  role="button"
                  tabIndex={0}
                  $isSelected={selectedShowtime === time}
                  onClick={() => {
                    setSelectedShowtime(time);
                    setActiveDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedShowtime(time);
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <span>{time}</span>
                  {selectedShowtime === time && (
                    <Check className="check-icon" size={14} />
                  )}
                </S.BookingDropdownItem>
              ))}
            </S.BookingDropdown>
          )}
        </S.StepItem>

        {/* Step 5 – Submit Button */}
        <S.QuickBookSubmitButton
          type="button"
          onClick={() => {
            const movieIdx = SPOTLIGHT_MOVIES.findIndex(
              (m) => m.mainTitle === selectedMovie,
            );
            const targetId =
              movieIdx === 0 ? '15' : movieIdx === 1 ? '5' : '1';
            navigate(`/phim/${targetId}?booking=true`);
          }}
        >
          <Ticket size={18} />
          <span>{t('home:hero.book_now_btn_short', 'ĐẶT VÉ')}</span>
        </S.QuickBookSubmitButton>
      </S.QuickBookingBar>
    </S.SectionContainer>
  );
};
