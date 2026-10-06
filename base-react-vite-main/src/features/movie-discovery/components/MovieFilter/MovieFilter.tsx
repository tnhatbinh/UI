import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Calendar,
  Check,
  ChevronDown,
  Flame,
  Grid,
  List,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react';
import * as S from './MoviesFilter.styles';

export interface FilterState {
  statusTab: string;
  genre: string;
  cinema: string;
  format: string;
  timeSlot: string;
  sortBy: string;
  viewMode: 'grid' | 'list';
  activeBadges: Array<{ id: string; label: string }>;
}

interface MoviesFilterProps {
  onFilterChange?: (filters: FilterState) => void;
  totalCount?: number;
  displayingCount?: number;
}

const GENRE_OPTIONS = [
  'Tất cả thể loại',
  'Hành Động',
  'Khoa Học Viễn Tưởng',
  'Kinh Dị',
  'Hoạt Hình',
  'Tâm Lý / Hài Hước',
  'Gia Đình',
];

const CINEMA_OPTIONS = [
  'Tất cả hệ thống rạp',
  'CGV Cinemas',
  'Lotte Cinema',
  'BHD Star',
  'Galaxy Studio',
  'Beta Cinemas',
];

const FORMAT_OPTIONS = [
  'Tất cả định dạng',
  'IMAX Laser',
  '4DX Motion',
  'ScreenX 270°',
  'Dolby Atmos',
  'Standard 2D/3D',
];

const TIME_OPTIONS = [
  'Mọi khung giờ',
  'Buổi sáng (Trước 12:00)',
  'Buổi chiều (12:00 - 18:00)',
  'Buổi tối (18:00 - 22:00)',
  'Suất đêm (Sau 22:00)',
];

const SORT_OPTIONS = [
  'Được đánh giá cao nhất',
  'Mới nhất',
  'Phổ biến nhất',
  'Tên phim A-Z',
];

export const MoviesFilter: FC<MoviesFilterProps> = ({
  onFilterChange,
  displayingCount = 8,
  totalCount = 24,
}) => {
  const [statusTab, setStatusTab] = useState<string>('now-showing');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [genre, setGenre] = useState<string>('Tất cả thể loại');
  const [cinema, setCinema] = useState<string>('Tất cả hệ thống rạp');
  const [format, setFormat] = useState<string>('Tất cả định dạng');
  const [timeSlot, setTimeSlot] = useState<string>('Mọi khung giờ');
  const [sortBy, setSortBy] = useState<string>('Được đánh giá cao nhất');

  const [activeDropdown, setActiveDropdown] = useState<
    'genre' | 'cinema' | 'format' | 'time' | 'sort' | null
  >(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [activeBadges, setActiveBadges] = useState<
    Array<{ id: string; label: string }>
  >([]);

  const notifyChange = (updates: Partial<FilterState>) => {
    if (onFilterChange) {
      onFilterChange({
        statusTab,
        genre,
        cinema,
        format,
        timeSlot,
        sortBy,
        viewMode,
        activeBadges,
        ...updates,
      });
    }
  };

  const handleStatusTab = (tab: string) => {
    setStatusTab(tab);
    notifyChange({ statusTab: tab });
  };

  const handleViewMode = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    notifyChange({ viewMode: mode });
  };

  const handleDropdownSelect = (
    type: 'genre' | 'cinema' | 'format' | 'timeSlot' | 'sortBy',
    value: string
  ) => {
    const nextState: Partial<FilterState> = {};
    if (type === 'genre') {
      setGenre(value);
      nextState.genre = value;
    } else if (type === 'cinema') {
      setCinema(value);
      nextState.cinema = value;
    } else if (type === 'format') {
      setFormat(value);
      nextState.format = value;
    } else if (type === 'timeSlot') {
      setTimeSlot(value);
      nextState.timeSlot = value;
    } else if (type === 'sortBy') {
      setSortBy(value);
      nextState.sortBy = value;
    }

    setActiveDropdown(null);
    notifyChange(nextState);
  };

  const removeBadge = (id: string) => {
    const updated = activeBadges.filter((b) => b.id !== id);
    setActiveBadges(updated);
    notifyChange({ activeBadges: updated });
  };

  const clearAllBadges = () => {
    setActiveBadges([]);
    setGenre('Tất cả thể loại');
    setCinema('Tất cả hệ thống rạp');
    setFormat('Tất cả định dạng');
    setTimeSlot('Mọi khung giờ');
    setSortBy('Được đánh giá cao nhất');
    setActiveDropdown(null);
    notifyChange({
      genre: 'Tất cả thể loại',
      cinema: 'Tất cả hệ thống rạp',
      format: 'Tất cả định dạng',
      timeSlot: 'Mọi khung giờ',
      sortBy: 'Được đánh giá cao nhất',
      activeBadges: [],
    });
  };

  return (
    <S.SectionContainer ref={containerRef}>
      <S.InnerContainer>
        {/* TẦNG 1: State Tabs (Segmented Control) + Quick View & Counter */}
        <S.StateTabsRow>
          <S.TabsWrapper>
            <S.TabButton
              type="button"
              $isActive={statusTab === 'now-showing'}
              onClick={() => handleStatusTab('now-showing')}
            >
              <S.TabIconBox $isActive={statusTab === 'now-showing'}>
                <Flame size={15} />
              </S.TabIconBox>
              <S.TabText $isActive={statusTab === 'now-showing'}>
                Đang Chiếu Tại Rạp (28)
              </S.TabText>
            </S.TabButton>

            <S.TabButton
              type="button"
              $isActive={statusTab === 'coming-soon'}
              onClick={() => handleStatusTab('coming-soon')}
            >
              <S.TabIconBox $isActive={statusTab === 'coming-soon'}>
                <Calendar size={14} />
              </S.TabIconBox>
              <S.TabText $isActive={statusTab === 'coming-soon'}>
                Sắp Chiếu / Mở Bán Sớm (14)
              </S.TabText>
            </S.TabButton>

            <S.TabButton
              type="button"
              $isActive={statusTab === 'sneak-show'}
              onClick={() => handleStatusTab('sneak-show')}
            >
              <S.TabIconBox $isActive={statusTab === 'sneak-show'}>
                <Sparkles size={15} />
              </S.TabIconBox>
              <S.TabText $isActive={statusTab === 'sneak-show'}>
                Suất Chiếu Đặc Biệt (Sneak-show)
              </S.TabText>
            </S.TabButton>
          </S.TabsWrapper>

          <S.QuickViewToggleGroup>
            <S.CounterText>
              Hiển thị <strong>{displayingCount}</strong> trong tổng số{' '}
              {totalCount} phim
            </S.CounterText>

            <S.ViewModeWrapper>
              <S.ViewModeButton
                type="button"
                $isActive={viewMode === 'grid'}
                onClick={() => handleViewMode('grid')}
                title="Chế độ lưới"
              >
                <Grid size={14} />
              </S.ViewModeButton>
              <S.ViewModeButton
                type="button"
                $isActive={viewMode === 'list'}
                onClick={() => handleViewMode('list')}
                title="Chế độ danh sách"
              >
                <List size={14} />
              </S.ViewModeButton>
            </S.ViewModeWrapper>
          </S.QuickViewToggleGroup>
        </S.StateTabsRow>

        {/* TẦNG 2: Multi-criteria Horizontal Glass Filter Bar */}
        <S.GlassFilterBar>
          <S.FilterItemsContainer>
            {/* Filter: Thể loại */}
            <S.FilterItem>
              <S.FilterLabel>THỂ LOẠI</S.FilterLabel>
              <S.FilterSelectWrapper>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'genre'}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === 'genre' ? null : 'genre',
                    )
                  }
                >
                  <S.FilterSelectText>{genre}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'genre'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'genre' && (
                  <S.CustomDropdownMenu onClick={(e) => e.stopPropagation()}>
                    {GENRE_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={genre === opt}
                        onClick={() => handleDropdownSelect('genre', opt)}
                      >
                        <span>{opt}</span>
                        {genre === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Cụm rạp */}
            <S.FilterItem>
              <S.FilterLabel>CỤM RẠP ĐỐI TÁC</S.FilterLabel>
              <S.FilterSelectWrapper>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'cinema'}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === 'cinema' ? null : 'cinema',
                    )
                  }
                >
                  <S.FilterSelectText>{cinema}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'cinema'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'cinema' && (
                  <S.CustomDropdownMenu onClick={(e) => e.stopPropagation()}>
                    {CINEMA_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={cinema === opt}
                        onClick={() => handleDropdownSelect('cinema', opt)}
                      >
                        <span>{opt}</span>
                        {cinema === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Định dạng */}
            <S.FilterItem>
              <S.FilterLabel>CÔNG NGHỆ CHIẾU</S.FilterLabel>
              <S.FilterSelectWrapper>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'format'}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === 'format' ? null : 'format',
                    )
                  }
                >
                  <S.FilterSelectText>{format}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'format'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'format' && (
                  <S.CustomDropdownMenu onClick={(e) => e.stopPropagation()}>
                    {FORMAT_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={format === opt}
                        onClick={() => handleDropdownSelect('format', opt)}
                      >
                        <span>{opt}</span>
                        {format === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Khung giờ */}
            <S.FilterItem>
              <S.FilterLabel>KHUNG GIỜ CHIẾU</S.FilterLabel>
              <S.FilterSelectWrapper>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'time'}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'time' ? null : 'time')
                  }
                >
                  <S.FilterSelectText>{timeSlot}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'time'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'time' && (
                  <S.CustomDropdownMenu onClick={(e) => e.stopPropagation()}>
                    {TIME_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={timeSlot === opt}
                        onClick={() => handleDropdownSelect('timeSlot', opt)}
                      >
                        <span>{opt}</span>
                        {timeSlot === opt && (
                          <Check size={14} color="#FF535A" />
                        )}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Sắp xếp */}
            <S.FilterItem>
              <S.FilterLabel>SẮP XẾP THEO</S.FilterLabel>
              <S.FilterSelectWrapper>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'sort'}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'sort' ? null : 'sort')
                  }
                >
                  <S.FilterSelectText>{sortBy}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'sort'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'sort' && (
                  <S.CustomDropdownMenu onClick={(e) => e.stopPropagation()}>
                    {SORT_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={sortBy === opt}
                        onClick={() => handleDropdownSelect('sortBy', opt)}
                      >
                        <span>{opt}</span>
                        {sortBy === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>
          </S.FilterItemsContainer>

          <S.ResetButton type="button" onClick={clearAllBadges}>
            <RotateCcw size={14} color="#E7BCBA" />
            <S.ResetText>Đặt lại</S.ResetText>
          </S.ResetButton>
        </S.GlassFilterBar>

        {/* TẦNG 3: Active Filter Badges */}
        {activeBadges.length > 0 && (
          <S.ActiveBadgesRow>
            <S.ActiveLabel>Đang áp dụng:</S.ActiveLabel>

            {activeBadges.map((badge) => (
              <S.ActiveBadgePill key={badge.id}>
                <S.ActiveBadgeText>{badge.label}</S.ActiveBadgeText>
                <S.RemoveBadgeBtn
                  type="button"
                  onClick={() => removeBadge(badge.id)}
                  title="Xóa bộ lọc"
                >
                  <X size={12} />
                </S.RemoveBadgeBtn>
              </S.ActiveBadgePill>
            ))}

            <S.ClearAllBtn type="button" onClick={clearAllBadges}>
              Xóa tất cả bộ lọc
            </S.ClearAllBtn>
          </S.ActiveBadgesRow>
        )}
      </S.InnerContainer>
    </S.SectionContainer>
  );
};

export default MoviesFilter;
