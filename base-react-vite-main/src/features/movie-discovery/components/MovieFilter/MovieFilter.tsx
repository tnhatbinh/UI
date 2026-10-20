import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import * as S from './MovieFilter.styles';

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
  const { t } = useTranslation();
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

  const getGenreLabel = (value: string) => {
    switch (value) {
      case 'Tất cả thể loại': return t('discovery:genre_all');
      case 'Hành Động': return t('discovery:genre_action');
      case 'Khoa Học Viễn Tưởng': return t('discovery:genre_scifi');
      case 'Kinh Dị': return t('discovery:genre_horror');
      case 'Hoạt Hình': return t('discovery:genre_animation');
      case 'Tâm Lý / Hài Hước': return t('discovery:genre_drama');
      case 'Gia Đình': return t('discovery:genre_family');
      default: return value;
    }
  };

  const getCinemaLabel = (value: string) => {
    if (value === 'Tất cả hệ thống rạp') return t('discovery:cinema_all');
    return value;
  };

  const getFormatLabel = (value: string) => {
    if (value === 'Tất cả định dạng') return t('discovery:format_all');
    return value;
  };

  const getTimeLabel = (value: string) => {
    switch (value) {
      case 'Mọi khung giờ': return t('discovery:time_all');
      case 'Buổi sáng (Trước 12:00)': return t('discovery:time_morning');
      case 'Buổi chiều (12:00 - 18:00)': return t('discovery:time_afternoon');
      case 'Buổi tối (18:00 - 22:00)': return t('discovery:time_evening');
      case 'Suất đêm (Sau 22:00)': return t('discovery:time_late');
      default: return value;
    }
  };

  const getSortLabel = (value: string) => {
    switch (value) {
      case 'Được đánh giá cao nhất': return t('discovery:sort_highest');
      case 'Mới nhất': return t('discovery:sort_newest');
      case 'Phổ biến nhất': return t('discovery:sort_popular_opt');
      case 'Tên phim A-Z': return t('discovery:sort_az');
      default: return value;
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

  const handleToggleDropdown =
    (type: 'genre' | 'cinema' | 'format' | 'time' | 'sort') => () => {
      setActiveDropdown((prev) => (prev === type ? null : type));
    };

  const handleSelectDropdownOption =
    (
      type: 'genre' | 'cinema' | 'format' | 'timeSlot' | 'sortBy',
      value: string,
    ) =>
    () => {
      handleDropdownSelect(type, value);
    };

  const handleSelectStatusTab = (tab: string) => () => {
    handleStatusTab(tab);
  };

  const handleSelectViewMode = (mode: 'grid' | 'list') => () => {
    handleViewMode(mode);
  };

  const handleRemoveBadge = (id: string) => () => {
    removeBadge(id);
  };

  const handleClearAllBadges = () => {
    clearAllBadges();
  };

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
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
              onClick={handleSelectStatusTab('now-showing')}
            >
              <S.TabIconBox $isActive={statusTab === 'now-showing'}>
                <Flame size={15} />
              </S.TabIconBox>
              <S.TabText $isActive={statusTab === 'now-showing'}>
                {t('discovery:tab_now_showing')}
              </S.TabText>
            </S.TabButton>

            <S.TabButton
              type="button"
              $isActive={statusTab === 'coming-soon'}
              onClick={handleSelectStatusTab('coming-soon')}
            >
              <S.TabIconBox $isActive={statusTab === 'coming-soon'}>
                <Calendar size={14} />
              </S.TabIconBox>
              <S.TabText $isActive={statusTab === 'coming-soon'}>
                {t('discovery:tab_coming_soon')}
              </S.TabText>
            </S.TabButton>

            <S.TabButton
              type="button"
              $isActive={statusTab === 'sneak-show'}
              onClick={handleSelectStatusTab('sneak-show')}
            >
              <S.TabIconBox $isActive={statusTab === 'sneak-show'}>
                <Sparkles size={15} />
              </S.TabIconBox>
              <S.TabText $isActive={statusTab === 'sneak-show'}>
                {t('discovery:tab_sneak_show')}
              </S.TabText>
            </S.TabButton>
          </S.TabsWrapper>

          <S.QuickViewToggleGroup>
            <S.CounterText>
              {t('discovery:counter_text', {
                displaying: displayingCount,
                total: totalCount,
              })}
            </S.CounterText>

            <S.ViewModeWrapper>
              <S.ViewModeButton
                type="button"
                $isActive={viewMode === 'grid'}
                onClick={handleSelectViewMode('grid')}
                title={t('discovery:view_grid')}
              >
                <Grid size={14} />
              </S.ViewModeButton>
              <S.ViewModeButton
                type="button"
                $isActive={viewMode === 'list'}
                onClick={handleSelectViewMode('list')}
                title={t('discovery:view_list')}
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
            <S.FilterItem $isOpen={activeDropdown === 'genre'}>
              <S.FilterLabel>{t('discovery:filter_genre_label')}</S.FilterLabel>
              <S.FilterSelectWrapper $isOpen={activeDropdown === 'genre'}>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'genre'}
                  onClick={handleToggleDropdown('genre')}
                >
                  <S.FilterSelectText>{getGenreLabel(genre)}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'genre'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'genre' && (
                  <S.CustomDropdownMenu onClick={handleStopPropagation}>
                    {GENRE_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={genre === opt}
                        onClick={handleSelectDropdownOption('genre', opt)}
                      >
                        <span>{getGenreLabel(opt)}</span>
                        {genre === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Cụm rạp */}
            <S.FilterItem $isOpen={activeDropdown === 'cinema'}>
              <S.FilterLabel>{t('discovery:filter_cinema_label')}</S.FilterLabel>
              <S.FilterSelectWrapper $isOpen={activeDropdown === 'cinema'}>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'cinema'}
                  onClick={handleToggleDropdown('cinema')}
                >
                  <S.FilterSelectText>{getCinemaLabel(cinema)}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'cinema'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'cinema' && (
                  <S.CustomDropdownMenu onClick={handleStopPropagation}>
                    {CINEMA_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={cinema === opt}
                        onClick={handleSelectDropdownOption('cinema', opt)}
                      >
                        <span>{getCinemaLabel(opt)}</span>
                        {cinema === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Định dạng */}
            <S.FilterItem $isOpen={activeDropdown === 'format'}>
              <S.FilterLabel>{t('discovery:filter_format_label')}</S.FilterLabel>
              <S.FilterSelectWrapper $isOpen={activeDropdown === 'format'}>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'format'}
                  onClick={handleToggleDropdown('format')}
                >
                  <S.FilterSelectText>{getFormatLabel(format)}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'format'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'format' && (
                  <S.CustomDropdownMenu onClick={handleStopPropagation}>
                    {FORMAT_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={format === opt}
                        onClick={handleSelectDropdownOption('format', opt)}
                      >
                        <span>{getFormatLabel(opt)}</span>
                        {format === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>

            {/* Filter: Khung giờ */}
            <S.FilterItem $isOpen={activeDropdown === 'time'}>
              <S.FilterLabel>{t('discovery:filter_time_label')}</S.FilterLabel>
              <S.FilterSelectWrapper $isOpen={activeDropdown === 'time'}>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'time'}
                  onClick={handleToggleDropdown('time')}
                >
                  <S.FilterSelectText>{getTimeLabel(timeSlot)}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'time'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'time' && (
                  <S.CustomDropdownMenu onClick={handleStopPropagation}>
                    {TIME_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={timeSlot === opt}
                        onClick={handleSelectDropdownOption('timeSlot', opt)}
                      >
                        <span>{getTimeLabel(opt)}</span>
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
            <S.FilterItem $isOpen={activeDropdown === 'sort'}>
              <S.FilterLabel>{t('discovery:filter_sort_label')}</S.FilterLabel>
              <S.FilterSelectWrapper $isOpen={activeDropdown === 'sort'}>
                <S.FilterSelectBox
                  type="button"
                  $isOpen={activeDropdown === 'sort'}
                  onClick={handleToggleDropdown('sort')}
                >
                  <S.FilterSelectText>{getSortLabel(sortBy)}</S.FilterSelectText>
                  <S.FilterChevron $isOpen={activeDropdown === 'sort'}>
                    <ChevronDown size={14} />
                  </S.FilterChevron>
                </S.FilterSelectBox>

                {activeDropdown === 'sort' && (
                  <S.CustomDropdownMenu $alignRight onClick={handleStopPropagation}>
                    {SORT_OPTIONS.map((opt) => (
                      <S.CustomDropdownItem
                        key={opt}
                        $isSelected={sortBy === opt}
                        onClick={handleSelectDropdownOption('sortBy', opt)}
                      >
                        <span>{getSortLabel(opt)}</span>
                        {sortBy === opt && <Check size={14} color="#FF535A" />}
                      </S.CustomDropdownItem>
                    ))}
                  </S.CustomDropdownMenu>
                )}
              </S.FilterSelectWrapper>
            </S.FilterItem>
          </S.FilterItemsContainer>

          <S.ResetButton type="button" onClick={handleClearAllBadges}>
            <RotateCcw size={14} color="#E7BCBA" />
            <S.ResetText>{t('discovery:filter_reset')}</S.ResetText>
          </S.ResetButton>
        </S.GlassFilterBar>

        {/* TẦNG 3: Active Filter Badges */}
        {activeBadges.length > 0 && (
          <S.ActiveBadgesRow>
            <S.ActiveLabel>{t('discovery:filter_active_label')}</S.ActiveLabel>

            {activeBadges.map((badge) => (
              <S.ActiveBadgePill key={badge.id}>
                <S.ActiveBadgeText>{badge.label}</S.ActiveBadgeText>
                <S.RemoveBadgeBtn
                  type="button"
                  onClick={handleRemoveBadge(badge.id)}
                  title={t('discovery:remove_filter')}
                >
                  <X size={12} />
                </S.RemoveBadgeBtn>
              </S.ActiveBadgePill>
            ))}

            <S.ClearAllBtn type="button" onClick={handleClearAllBadges}>
              {t('discovery:filter_clear_all')}
            </S.ClearAllBtn>
          </S.ActiveBadgesRow>
        )}
      </S.InnerContainer>
    </S.SectionContainer>
  );
};

export default MoviesFilter;
