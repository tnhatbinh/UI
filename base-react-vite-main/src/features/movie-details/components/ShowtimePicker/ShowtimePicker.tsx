import { forwardRef } from 'react';
import { Search, MapPin, ExternalLink } from 'lucide-react';
import {
  DAY_OPTIONS,
  FORMAT_FILTERS,
  type DayOption,
  type CinemaSchedule,
  type ScreenFormatGroup,
  type ShowtimeSlot,
} from '../../data/mock-movie-details';
import * as S from './ShowtimePicker.styles';

interface ShowtimePickerProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  searchCinema: string;
  onSearchCinema: (text: string) => void;
  selectedDate: DayOption;
  onSelectDate: (day: DayOption) => void;
  selectedFormat: string;
  onSelectFormat: (format: string) => void;
  cinemas: CinemaSchedule[];
  selectedSlot: {
    cinema: CinemaSchedule;
    format: ScreenFormatGroup;
    slot: ShowtimeSlot;
  } | null;
  onSelectSlot: (
    cinema: CinemaSchedule,
    format: ScreenFormatGroup,
    slot: ShowtimeSlot,
  ) => void;
}

export const ShowtimePicker = forwardRef<HTMLDivElement, ShowtimePickerProps>(
  (
    {
      selectedCity,
      onSelectCity,
      searchCinema,
      onSearchCinema,
      selectedDate,
      onSelectDate,
      selectedFormat,
      onSelectFormat,
      cinemas,
      selectedSlot,
      onSelectSlot,
    },
    ref,
  ) => {
    return (
      <S.ShowtimesSection ref={ref} id="showtimes-section">
        <S.ShowtimesHeader>
          <div className="title-group">
            <span className="sub">🎫 ĐẶT VÉ TRỰC TUYẾN</span>
            <h2>Lịch Chiếu & Cụm Rạp</h2>
          </div>

          <div className="filters-right">
            <S.CitySelect
              value={selectedCity}
              onChange={(e) => onSelectCity(e.target.value)}
            >
              <option value="TP. Hồ Chí Minh">🏙 TP. Hồ Chí Minh</option>
              <option value="Hà Nội">🏙 Hà Nội</option>
              <option value="Đà Nẵng">🏙 Đà Nẵng</option>
            </S.CitySelect>

            <S.SearchInput>
              <Search size={14} />
              <input
                type="text"
                placeholder="Tìm rạp theo quận..."
                value={searchCinema}
                onChange={(e) => onSearchCinema(e.target.value)}
              />
            </S.SearchInput>
          </div>
        </S.ShowtimesHeader>

        <S.StepsContainer>
          {/* 1. Chọn ngày xem chiếu */}
          <div>
            <S.StepLabel>01 • CHỌN NGÀY XEM CHIẾU</S.StepLabel>
            <S.DayTabsRow>
              {DAY_OPTIONS.map((day) => {
                const isSelected = selectedDate.dateStr === day.dateStr;
                return (
                  <S.DayTab
                    key={day.dateStr}
                    $isActive={isSelected}
                    onClick={() => onSelectDate(day)}
                  >
                    <span className="tag">{day.dayLabel}</span>
                    <span className="date">{day.dateStr}</span>
                    <span className="day">{day.dayOfWeek}</span>
                  </S.DayTab>
                );
              })}
            </S.DayTabsRow>
          </div>

          {/* 2. Bộ lọc định dạng phòng */}
          <div>
            <S.StepLabel>02 • LỌC ĐỊNH DẠNG & CÔNG NGHỆ CHIẾU</S.StepLabel>
            <S.FormatChipsRow>
              {FORMAT_FILTERS.map((fmt) => (
                <S.FormatChip
                  key={fmt.id}
                  $isActive={selectedFormat === fmt.id}
                  onClick={() => onSelectFormat(fmt.id)}
                >
                  {fmt.label} ({fmt.count})
                </S.FormatChip>
              ))}
            </S.FormatChipsRow>
          </div>
        </S.StepsContainer>

        {/* Danh sách các cụm rạp và suất chiếu */}
        <S.CinemaScheduleList>
          {cinemas.map((cinema) => (
            <S.CinemaCard key={cinema.id}>
              <div className="cinema-header">
                <div className="cinema-meta">
                  <div className="name-row">
                    <span className="name">{cinema.name}</span>
                    <span className="badge">{cinema.badge}</span>
                  </div>
                  <div className="address-row">
                    <MapPin size={12} />
                    <span>{cinema.address}</span>
                    <span className="dist">• {cinema.distance}</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    cinema.name + ' ' + cinema.address,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="map-link"
                >
                  <span>Xem bản đồ</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {cinema.formats.map((fmtGroup) => (
                <div className="format-block" key={fmtGroup.formatName}>
                  <div className="format-label-row">
                    <span className="format-title">{fmtGroup.formatName}</span>
                    <span className="room-sub">({fmtGroup.roomDetails})</span>
                  </div>

                  <div className="showtime-pills">
                    {fmtGroup.slots.map((slot) => {
                      const isSlotSelected =
                        selectedSlot?.cinema.id === cinema.id &&
                        selectedSlot?.format.formatName ===
                          fmtGroup.formatName &&
                        selectedSlot?.slot.id === slot.id;

                      return (
                        <S.ShowtimePill
                          key={slot.id}
                          $isSelected={isSlotSelected}
                          $isAlmostFull={slot.isAlmostFull}
                          onClick={() => onSelectSlot(cinema, fmtGroup, slot)}
                        >
                          <span className="pill-time">{slot.time}</span>
                          <span className="pill-sub">
                            {slot.statusText} • {slot.priceText}
                          </span>
                        </S.ShowtimePill>
                      );
                    })}
                  </div>
                </div>
              ))}
            </S.CinemaCard>
          ))}
        </S.CinemaScheduleList>
      </S.ShowtimesSection>
    );
  },
);

ShowtimePicker.displayName = 'ShowtimePicker';
