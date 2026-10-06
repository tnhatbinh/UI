import type { FC } from 'react';
import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DiscoveryHero } from './components/DiscoveryHero/DiscoveryHero';
import { MoviesFilter } from './components/MovieFilter/MovieFilter';
import type { FilterState } from './components/MovieFilter/MovieFilter';
import { MovieShowcaseGrid } from './components/MovieShowcaseGrid/MovieShowcaseGrid';
import { PaginationAndVipTeaser } from './components/PaginationAndVipTeaser/PaginationAndVipTeaser';
import type { DiscoveryMovie } from './data/mock-movies';
import { MOCK_DISCOVERY_MOVIES } from './data/mock-movies';
import * as S from './MovieDiscoveryPage.styles';

const ITEMS_PER_PAGE = 8;

export const MovieDiscoveryPage: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // State tìm kiếm và lọc
  const urlQuery = searchParams.get('search') || searchParams.get('q') || '';
  const [userQuery, setUserQuery] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<FilterState | null>(null);

  const searchQuery = userQuery !== null ? userQuery : urlQuery;

  // State phân trang thực tế
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayedLimit, setDisplayedLimit] = useState<number>(ITEMS_PER_PAGE);

  // Xử lý tìm kiếm và tag nhanh
  const handleSearch = (query: string) => {
    setUserQuery(query);
    setCurrentPage(1);
    setDisplayedLimit(ITEMS_PER_PAGE);
  };

  const handleTagClick = (tag: string) => {
    setUserQuery(tag);
    setCurrentPage(1);
    setDisplayedLimit(ITEMS_PER_PAGE);
  };

  // Lọc danh sách phim dựa trên tìm kiếm và tiêu chí
  const filteredMovies = useMemo(() => {
    let result = [...MOCK_DISCOVERY_MOVIES];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.genre.toLowerCase().includes(q) ||
          m.formatTag.toLowerCase().includes(q),
      );
    }

    if (filterState) {
      // 1. Lọc theo tab trạng thái
      if (filterState.statusTab === 'coming-soon') {
        result = result.filter((m) => m.id > 16);
      } else if (filterState.statusTab === 'sneak-show') {
        result = result.filter(
          (m) =>
            m.formatTag.includes('IMAX') ||
            m.formatTag.includes('GHIBLI') ||
            m.formatTag.includes('TOP') ||
            m.formatTag.includes('OSCAR'),
        );
      }
      // 'NowShowing' hiển thị tất cả các phim trong danh mục khám phá

      // 2. Lọc theo thể loại
      if (filterState.genre !== 'Tất cả thể loại') {
        result = result.filter((m) =>
          m.genre.toLowerCase().includes(filterState.genre.toLowerCase()),
        );
      }

      // 3. Lọc theo định dạng
      if (filterState.format !== 'Tất cả định dạng') {
        const fmt = filterState.format.split(' ')[0].toLowerCase();
        result = result.filter((m) => m.formatTag.toLowerCase().includes(fmt));
      }

      // 4. Sắp xếp danh sách
      if (filterState.sortBy === 'Được đánh giá cao nhất') {
        result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      } else if (filterState.sortBy === 'Mới nhất') {
        result.sort((a, b) => b.id - a.id);
      } else if (filterState.sortBy === 'Phổ biến nhất') {
        result.sort((a, b) => parseFloat(b.rating) * 10 - a.id);
      } else if (filterState.sortBy === 'Tên phim A-Z') {
        result.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
      }
    }

    return result;
  }, [searchQuery, filterState]);

  // Tính toán số trang thực tế
  const totalPages = Math.max(
    1,
    Math.ceil(filteredMovies.length / ITEMS_PER_PAGE),
  );

  // Đảm bảo currentPage không vượt quá totalPages khi tìm kiếm/lọc
  if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  // Phim hiển thị trên trang hiện tại
  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMovies.slice(startIndex, startIndex + displayedLimit);
  }, [filteredMovies, currentPage, displayedLimit]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setDisplayedLimit(ITEMS_PER_PAGE);
    // Cuộn mượt lên vị trí lưới phim
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setDisplayedLimit((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleMovieDetail = (movie: DiscoveryMovie) => {
    navigate(`/phim/${movie.id}`);
  };

  const handleBookMovie = (movie: DiscoveryMovie) => {
    navigate(`/phim/${movie.id}?booking=true`);
  };

  const handleVipBooking = () => {
    navigate('/profile/vip-elite');
  };

  return (
    <S.PageWrapper>
      {/* Ambient Atmospheric Backdrop */}
      <S.AmbientBackdrop />

      <S.MainContainer>
        {/* SECTION 1: Dynamic Discovery Banner & Quick Query Filter */}
        <DiscoveryHero onSearch={handleSearch} onTagClick={handleTagClick} />

        {/* SECTION 2: Master Filter Console & Release Status Tabs */}
        <MoviesFilter
          displayingCount={paginatedMovies.length}
          totalCount={filteredMovies.length}
          onFilterChange={(filters) => {
            setFilterState(filters);
            setCurrentPage(1);
          }}
        />

        {/* SECTION 3: Movie Showcase Grid (Cinematic Cards) */}
        <MovieShowcaseGrid
          movies={paginatedMovies}
          onMovieClick={handleMovieDetail}
          onBookClick={handleBookMovie}
        />

        {/* SECTION 4: Pagination & VIP Concierge Teaser */}
        <PaginationAndVipTeaser
          currentPage={currentPage}
          totalPages={totalPages}
          totalMovies={filteredMovies.length}
          currentShowingCount={paginatedMovies.length}
          onLoadMore={handleLoadMore}
          onPageChange={handlePageChange}
          onVipBookingClick={handleVipBooking}
        />
      </S.MainContainer>
    </S.PageWrapper>
  );
};

export default MovieDiscoveryPage;
