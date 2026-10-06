import { useNavigate } from 'react-router-dom';
import { Film, Download, MapPin, Star, ArrowRight } from 'lucide-react';
import type { PastTicketData } from '../../data/past-tickets.data';
import * as S from './TicketHistory.styles';

interface TicketHistoryProps {
  tickets: PastTicketData[];
  /** Tiêu đề hiển thị trong header */
  title: string;
  /** Mô tả nhỏ dưới tiêu đề */
  subtitle: string;
  historyFilter: string;
  onFilterChange: (val: string) => void;
  onToast: (msg: string) => void;
  /** Nếu có → hiển thị nút "Xem toàn bộ lịch sử" */
  onViewAll?: () => void;
  /** Label cho nút export (mặc định "Xuất Báo Cáo") */
  exportLabel?: string;
  /** Toast message khi nhấn export */
  exportToast?: string;
}

export function TicketHistory({
  tickets,
  title,
  subtitle,
  historyFilter,
  onFilterChange,
  onToast,
  onViewAll,
  exportLabel = 'Xuất Báo Cáo',
  exportToast = 'Đang xuất báo cáo lịch sử chi tiêu xem phim...',
}: TicketHistoryProps) {
  const navigate = useNavigate();

  return (
    <S.HistorySection>
      <div className="history-header">
        <div className="left-title">
          <h2>
            <Film size={20} className="icon" />
            <span>{title}</span>
          </h2>
          <span className="sub">{subtitle}</span>
        </div>

        <div className="right-tools">
          <select
            value={historyFilter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">Tất cả thời gian</option>
            <option value="30days">30 ngày gần đây</option>
            <option value="2024">Năm 2024</option>
          </select>

          <button className="export-btn" onClick={() => onToast(exportToast)}>
            <Download size={14} />
            <span>{exportLabel}</span>
          </button>
        </div>
      </div>

      <div className="history-cards-grid">
        {tickets.map((ticket) => (
          <S.PastTicketCard key={ticket.id}>
            <div className="top-meta">
              <img
                src={ticket.poster}
                alt={ticket.movieName}
                className="poster"
              />
              <div className="info">
                <div className="badge-row">
                  <span className="watched-badge">ĐÃ XEM</span>
                  <span className="date">{ticket.date}</span>
                </div>
                <h3 className="movie-name">{ticket.movieName}</h3>
                <span className="genre">{ticket.genre}</span>
                <div className="cinema-line">
                  <MapPin size={11} />
                  <span>{ticket.cinema}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="cost">
                Tổng: <strong>{ticket.cost}</strong> ({ticket.seats})
              </div>
              <div className="actions">
                <button
                  className="rate-btn"
                  onClick={() =>
                    onToast(
                      `Cảm ơn bạn đã đánh giá 5 sao cho phim ${ticket.movieName}!`,
                    )
                  }
                >
                  <Star size={11} fill="#ffb955" />
                  <span>Đánh giá</span>
                </button>
                <button
                  className="rebook-btn"
                  onClick={() => navigate('/movie-details')}
                >
                  Đặt lại vé
                </button>
              </div>
            </div>
          </S.PastTicketCard>
        ))}
      </div>

      {onViewAll && (
        <S.ViewAllHistoryBtn onClick={onViewAll}>
          <span>Xem toàn bộ lịch sử (8 vé)</span>
          <ArrowRight size={14} />
        </S.ViewAllHistoryBtn>
      )}
    </S.HistorySection>
  );
}
