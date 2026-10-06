import type { FC } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import * as S from './PaginationAndVipTeaser.styles';

interface PaginationAndVipTeaserProps {
  onLoadMore?: () => void;
  onPageChange?: (page: number) => void;
  onVipBookingClick?: () => void;
  currentPage?: number;
  totalPages?: number;
  totalMovies?: number;
  currentShowingCount?: number;
}

const getPageNumbers = (current: number, total: number): (number | '...')[] => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, 4, '...', total];
  }

  if (current >= total - 2) {
    return [1, '...', total - 3, total - 2, total - 1, total];
  }

  return [1, '...', current - 1, current, current + 1, '...', total];
};

export const PaginationAndVipTeaser: FC<PaginationAndVipTeaserProps> = ({
  onLoadMore,
  onPageChange,
  onVipBookingClick,
  currentPage = 1,
  totalPages = 1,
  totalMovies = 0,
  currentShowingCount = 0,
}) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const remainingCount = Math.max(0, totalMovies - currentShowingCount);

  const handlePageClick = (page: number) => {
    if (page === currentPage) return;
    onPageChange?.(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <S.SectionContainer>
      <S.InnerContainer>
        {/* PHẦN 1: Load More & Pagination Numbers */}
        <S.PaginationGroupRow>
          {/* Nút Xem thêm (chỉ hiển thị khi còn phim chưa hiển thị) */}
          {remainingCount > 0 && onLoadMore && (
            <S.LoadMoreButton
              type="button"
              onClick={onLoadMore}
              title="Tải thêm phim"
            >
              <S.LoadMoreIconContainer>
                <RotateCcw size={14} />
              </S.LoadMoreIconContainer>
              <S.LoadMoreText>
                Xem Thêm {remainingCount} Phim Khác
              </S.LoadMoreText>
            </S.LoadMoreButton>
          )}

          {/* Dãy số trang */}
          {totalPages >= 1 && (
            <S.PaginationNumbersWrapper>
              {/* Trang trước */}
              <S.PageArrowButton
                type="button"
                onClick={handlePrev}
                disabled={currentPage <= 1}
                $disabled={currentPage <= 1}
                title="Trang trước"
              >
                <ChevronLeft size={16} />
              </S.PageArrowButton>

              {/* Dãy nút số trang động */}
              {pageNumbers.map((p, index) => {
                if (p === '...') {
                  return (
                    <S.PageEllipsis key={`ellipsis-${index}`}>…</S.PageEllipsis>
                  );
                }
                const pageNum = Number(p);
                return (
                  <S.PageNumberButton
                    key={`page-${pageNum}`}
                    type="button"
                    $isActive={currentPage === pageNum}
                    onClick={() => handlePageClick(pageNum)}
                    title={`Trang ${pageNum}`}
                  >
                    <span>{pageNum}</span>
                  </S.PageNumberButton>
                );
              })}

              {/* Trang sau */}
              <S.PageArrowButton
                type="button"
                onClick={handleNext}
                disabled={currentPage >= totalPages}
                $disabled={currentPage >= totalPages}
                title="Trang sau"
              >
                <ChevronRight size={16} />
              </S.PageArrowButton>
            </S.PaginationNumbersWrapper>
          )}
        </S.PaginationGroupRow>

        {/* PHẦN 2: Exclusive Lounge Banner (Gold Class & Suite) */}
        <S.ExclusiveLoungeBanner>
          <S.LoungeInfoGroup>
            <S.LoungeIconBox>
              <Crown size={22} color="#FFB955" />
            </S.LoungeIconBox>

            <S.LoungeTextCol>
              <S.LoungeTitle>
                PhimBook Gold Class & Suite Screening
              </S.LoungeTitle>
              <S.LoungeSubtitle>
                Trải nghiệm sảnh chờ phục vụ rượu vang, ghế ngả nệm lông vũ và
                tai nghe chống ồn riêng biệt.
              </S.LoungeSubtitle>
            </S.LoungeTextCol>
          </S.LoungeInfoGroup>

          <S.BookingLoungeButton
            type="button"
            onClick={onVipBookingClick}
            title="Đặt phòng chiếu VIP"
          >
            <S.BookingLoungeText>Đặt Phòng Chiếu Riêng</S.BookingLoungeText>
            <ExternalLink size={14} color="#FFB955" strokeWidth={2.2} />
          </S.BookingLoungeButton>
        </S.ExclusiveLoungeBanner>
      </S.InnerContainer>
    </S.SectionContainer>
  );
};
export default PaginationAndVipTeaser;
