import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  Ticket,
  Clock,
  MapPin,
  Calendar,
  Star,
  Globe,
  ChevronDown,
  Clapperboard,
  Check,
} from "lucide-react";
import * as S from "./hero-spotlight.styles";

const MOVIES = [
  "Minions & Monsters",
  "Inside Out 2",
  "Deadpool & Wolverine",
  "Dune: Part Two",
  "Kẻ Trộm Mặt Trăng 4",
];

const CINEMAS = [
  "CGV Landmark 81 (IMAX Laser)",
  "CGV Vincom Đồng Khởi",
  "BHD Star Cineplex Thảo Điền",
  "Lotte Cinema Cantavil",
  "Galaxy Cinema Nguyễn Du",
];

const DATES = [
  "Hôm nay, 24 Tháng 10",
  "Ngày mai, 25 Tháng 10",
  "Thứ Bảy, 26 Tháng 10",
  "Chủ Nhật, 27 Tháng 10",
  "Thứ Hai, 28 Tháng 10",
];

const SHOWTIMES = [
  "10:15 • 2D Phụ đề",
  "14:30 • 3D Lồng tiếng",
  "17:00 • 2D Phụ đề",
  "19:45 • Phòng IMAX",
  "22:15 • IMAX Laser",
];

export const HeroSpotlight: FC = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState("Minions & Monsters");
  const [selectedCinema, setSelectedCinema] = useState(
    "CGV Landmark 81 (IMAX Laser)",
  );
  const [selectedDate, setSelectedDate] = useState("Hôm nay, 24 Tháng 10");
  const [selectedShowtime, setSelectedShowtime] =
    useState("19:45 • Phòng IMAX");
  const [activeDropdown, setActiveDropdown] = useState<
    "movie" | "cinema" | "date" | "showtime" | null
  >(null);

  const bookingBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bookingBarRef.current &&
        !bookingBarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.SectionContainer>
      {/* Background Section (Spans fully including under header) */}
      <S.BackgroundWrapper>
        <S.ImageContainer>
          {/* Image */}
          <S.BackgroundImage $bgImage="https://cdn.elle.vn/5s9UWYADPiC9UOvpVkQTeE_e_xULAkuGDnpsBfRJAbU/rs:fit:1280:0/sharpen:0.5/quality:82/2026/06/30/769840/elle-thumb-review-minions-and-monsters-minions-va-quai-vat-2026.jpg@webp" />

          {/* Gradients */}
          <S.GradientOverlayRight />
          <S.GradientOverlayTop />
          <S.GradientOverlayRadial />

          {/* Hero Content Container */}
          <S.ContentContainer>
            <S.ContentInner>
              <S.HeroDetails>
                {/* Formats & Badges Row */}
                <S.FormatsBadgesRow>
                  <S.ImaxBadge>
                    <S.ImaxText>IMAX 3D LASER</S.ImaxText>
                  </S.ImaxBadge>
                  <S.AgeBadge>
                    <S.AgeText>C13 - PHỔ BIẾN TỪ 13 TUỔI</S.AgeText>
                  </S.AgeBadge>
                  <S.RatingBadge>
                    <Star className="text-[#FFB955] fill-[#FFB955]" size={12} />
                    <S.RatingScore>8.8</S.RatingScore>
                    <S.RatingCount>/10 (12.4k đánh giá)</S.RatingCount>
                  </S.RatingBadge>
                  <S.GenreBadge>
                    <S.GenreText>Khoa Học Viễn Tưởng • Hành Động</S.GenreText>
                  </S.GenreBadge>
                </S.FormatsBadgesRow>

                {/* Master Title */}
                <S.TitleContainer>
                  <S.TitleLabel>SIÊU PHẨM ĐIỆN ẢNH ĐỘC QUYỀN</S.TitleLabel>
                  <S.TitleGroup>
                    <S.MainTitle>Minions & Monsters </S.MainTitle>
                    <S.SubTitle>Những rắc rối tí hon (2026)</S.SubTitle>
                  </S.TitleGroup>
                </S.TitleContainer>

                {/* Synopsis */}
                <S.Synopsis>
                  Nắm trong tay cuốn sách triệu hồi lấy được từ chú cũ là một
                  phù thủy, James, Ed và Henry bắt đầu hành trình tìm kiếm quái
                  vật thực thụ để hiện thực hóa tham vọng, với sự tiếp tay của
                  Goomi – chú quái vật Cthulhu bản mini đáng yêu hơn là đáng sợ.
                </S.Synopsis>

                {/* Key Metas */}
                <S.KeyMetas>
                  <S.MetaItem>
                    <Clock className="text-[#FFB955]" size={15} />
                    <S.MetaText>166 Phút</S.MetaText>
                  </S.MetaItem>
                  <S.MetaItem>
                    <Globe className="text-[#FFB955]" size={15} />
                    <S.MetaText>Tiếng Anh • Phụ đề Tiếng Việt</S.MetaText>
                  </S.MetaItem>
                  <S.MetaItem>
                    <Clapperboard className="text-[#FFB955]" size={15} />
                    <S.MetaText>Đạo diễn: Pierre Coffin</S.MetaText>
                  </S.MetaItem>
                </S.KeyMetas>

                {/* Action CTAs */}
                <S.ActionCtas>
                  <S.BookButton onClick={() => navigate("/dat-ve")}>
                    <Ticket className="text-[#680010] fill-current" size={16} />
                    <S.BookButtonText>
                      ĐẶT VÉ NGAY • GIỮ CHỖ ĐẸP
                    </S.BookButtonText>
                  </S.BookButton>
                  <S.TrailerButton>
                    <S.PlayIconContainer>
                      <Play
                        className="text-[#FFB3B0] ml-[2px] fill-current"
                        size={10}
                      />
                    </S.PlayIconContainer>
                    <S.TrailerButtonText>Xem Trailer 4K</S.TrailerButtonText>
                  </S.TrailerButton>
                </S.ActionCtas>
              </S.HeroDetails>

              {/* QUICK BOOKING BAR (Floating Glass Component) */}
              <S.QuickBookingBar ref={bookingBarRef}>
                {/* Step 1 */}
                <S.StepItem
                  $isOpen={activeDropdown === "movie"}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "movie" ? null : "movie",
                    )
                  }
                >
                  <S.IconBox1>
                    <Ticket className="text-[#FFB3B0]" size={16} />
                  </S.IconBox1>
                  <S.StepContent>
                    <S.StepLabel>1. Chọn Phim</S.StepLabel>
                    <S.StepValueRow>
                      <S.StepValue1>{selectedMovie}</S.StepValue1>
                      <S.DropdownChevron $isOpen={activeDropdown === "movie"}>
                        <ChevronDown className="text-[#AE8786]" size={14} />
                      </S.DropdownChevron>
                    </S.StepValueRow>
                  </S.StepContent>

                  {activeDropdown === "movie" && (
                    <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
                      {MOVIES.map((movie) => (
                        <S.BookingDropdownItem
                          key={movie}
                          $isSelected={selectedMovie === movie}
                          onClick={() => {
                            setSelectedMovie(movie);
                            setActiveDropdown(null);
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

                {/* Step 2 */}
                <S.StepItem
                  $isOpen={activeDropdown === "cinema"}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "cinema" ? null : "cinema",
                    )
                  }
                >
                  <S.IconBox2>
                    <MapPin className="text-[#FFB955]" size={16} />
                  </S.IconBox2>
                  <S.StepContent>
                    <S.StepLabel>2. Cụm Rạp</S.StepLabel>
                    <S.StepValueRow>
                      <S.StepValue2>{selectedCinema}</S.StepValue2>
                      <S.DropdownChevron $isOpen={activeDropdown === "cinema"}>
                        <ChevronDown className="text-[#AE8786]" size={14} />
                      </S.DropdownChevron>
                    </S.StepValueRow>
                  </S.StepContent>

                  {activeDropdown === "cinema" && (
                    <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
                      {CINEMAS.map((cinema) => (
                        <S.BookingDropdownItem
                          key={cinema}
                          $isSelected={selectedCinema === cinema}
                          onClick={() => {
                            setSelectedCinema(cinema);
                            setActiveDropdown(null);
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

                {/* Step 3 */}
                <S.StepItem
                  $isOpen={activeDropdown === "date"}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "date" ? null : "date")
                  }
                >
                  <S.IconBox3>
                    <Calendar className="text-[#C2C5DB]" size={16} />
                  </S.IconBox3>
                  <S.StepContent>
                    <S.StepLabel>3. Ngày Chiếu</S.StepLabel>
                    <S.StepValueRow>
                      <S.StepValue3>{selectedDate}</S.StepValue3>
                      <S.DropdownChevron $isOpen={activeDropdown === "date"}>
                        <ChevronDown className="text-[#AE8786]" size={14} />
                      </S.DropdownChevron>
                    </S.StepValueRow>
                  </S.StepContent>

                  {activeDropdown === "date" && (
                    <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
                      {DATES.map((date) => (
                        <S.BookingDropdownItem
                          key={date}
                          $isSelected={selectedDate === date}
                          onClick={() => {
                            setSelectedDate(date);
                            setActiveDropdown(null);
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

                {/* Step 4 */}
                <S.StepItem
                  $isOpen={activeDropdown === "showtime"}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "showtime" ? null : "showtime",
                    )
                  }
                >
                  <S.IconBox4>
                    <Clock className="text-[#E7BCBA]" size={16} />
                  </S.IconBox4>
                  <S.StepContent>
                    <S.StepLabel>4. Suất Chiếu</S.StepLabel>
                    <S.StepValueRow>
                      <S.StepValue4>{selectedShowtime}</S.StepValue4>
                      <S.DropdownChevron
                        $isOpen={activeDropdown === "showtime"}
                      >
                        <ChevronDown className="text-[#AE8786]" size={14} />
                      </S.DropdownChevron>
                    </S.StepValueRow>
                  </S.StepContent>

                  {activeDropdown === "showtime" && (
                    <S.BookingDropdown onClick={(e) => e.stopPropagation()}>
                      {SHOWTIMES.map((time) => (
                        <S.BookingDropdownItem
                          key={time}
                          $isSelected={selectedShowtime === time}
                          onClick={() => {
                            setSelectedShowtime(time);
                            setActiveDropdown(null);
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
              </S.QuickBookingBar>
            </S.ContentInner>
          </S.ContentContainer>
        </S.ImageContainer>
      </S.BackgroundWrapper>
    </S.SectionContainer>
  );
};
