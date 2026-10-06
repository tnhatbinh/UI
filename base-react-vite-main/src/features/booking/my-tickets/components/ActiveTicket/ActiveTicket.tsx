import {
  Ticket,
  Clock,
  CheckCircle2,
  Film,
  Popcorn,
  Wallet,
  Download,
  Share2,
} from 'lucide-react';
import type { ActiveTicketData } from '../../data/active-ticket.data';
import * as S from './ActiveTicket.styles';

interface ActiveTicketProps {
  ticket: ActiveTicketData;
  onToast: (msg: string) => void;
}

export function ActiveTicket({ ticket, onToast }: ActiveTicketProps) {
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    ticket.qrCodeValue || 'PBK-8849204',
  )}&color=0d0c0f&bgcolor=ffffff`;

  return (
    <S.UpcomingSection>
      <div className="section-top-bar">
        <div className="section-title">
          <Ticket size={20} className="icon" />
          <span>VÉ ĐIỆN TỬ SẮP XEM • XÁC NHẬN VÀO CỬA TRỰC TIẾP</span>
        </div>
        <div className="countdown-pill">
          <Clock size={13} />
          <span>Suất chiếu bắt đầu sau: 02 giờ 45 phút</span>
        </div>
      </div>

      {/* Perforated Ticket Stub Container */}
      <S.TicketStubContainer>
        {/* Left side: Ticket Details */}
        <S.TicketLeftInfo>
          <div className="status-order-row">
            <div className="paid-status">
              <span className="dot" />
              <span>{ticket.status}</span>
            </div>
            <span className="order-id">
              MÃ ĐƠN HÀNG: <strong>{ticket.orderId}</strong>
            </span>
          </div>

          <div className="movie-block">
            <div className="poster-wrap">
              <img src={ticket.posterUrl} alt={ticket.movieTitle} />
              <span className="badge">{ticket.format}</span>
            </div>

            <div className="details-wrap">
              <div className="highlight-tag">
                <Film size={12} />
                <span>SUẤT CHIẾU ĐẶC BIỆT VIP</span>
              </div>
              <h2 className="movie-title">{ticket.movieTitle}</h2>
              <div className="movie-meta-line">
                {ticket.movieOriginalTitle} • Phụ đề tiếng Việt • T16
              </div>

              <div className="facts-grid">
                <div className="fact-col">
                  <span className="label">THỜI GIAN</span>
                  <span className="val">{ticket.showtime}</span>
                  <span className="sub">{ticket.date}</span>
                </div>
                <div className="fact-col">
                  <span className="label">RẠP & PHÒNG</span>
                  <span className="val">{ticket.cinemaRoom}</span>
                  <span className="sub">{ticket.cinemaName}</span>
                </div>
                <div className="fact-col">
                  <span className="label">VỊ TRÍ GHẾ</span>
                  <span className="val">{ticket.seats}</span>
                  <span className="sub">{ticket.seatsType}</span>
                </div>
                <div className="fact-col">
                  <span className="label">ĐỊNH DẠNG</span>
                  <span className="val">{ticket.format}</span>
                  <span className="sub">Âm thanh Dolby Atmos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Concessions inclusion */}
          {ticket.combo && (
            <div className="concessions-inclusion-bar">
              <Popcorn size={20} className="icon" />
              <div className="text">
                <span className="title">{ticket.combo}</span>
                <span className="sub">
                  Nhận trực tiếp tại quầy Fast-Track riêng hoặc nhân viên phục
                  vụ tận ghế trước giờ chiếu 10 phút.
                </span>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="ticket-actions-bar">
            <button
              className="action-chip"
              onClick={() =>
                onToast('Đã thêm vé vào Apple / Google Wallet thành công!')
              }
            >
              <Wallet size={14} />
              <span>Thêm vào Apple / Google Wallet</span>
            </button>

            <button
              className="action-chip"
              onClick={() =>
                onToast(
                  'Đang tạo và tải file vé điện tử PDF độ phân giải cao...',
                )
              }
            >
              <Download size={14} />
              <span>Tải vé PDF / Ảnh QR</span>
            </button>

            <button
              className="action-chip"
              onClick={() =>
                onToast(
                  'Đã tạo liên kết vé quà tặng. Sẵn sàng chia sẻ qua Zalo/SMS!',
                )
              }
            >
              <Share2 size={14} />
              <span>Tặng vé bạn bè</span>
            </button>

            <span
              className="refund-link"
              onClick={() =>
                onToast(
                  'Hệ thống đã ghi nhận yêu cầu đổi/hoàn vé. Hotline sẽ liên hệ trong 5 phút.',
                )
              }
            >
              Đổi / Hoàn vé (Còn 1h 45p)
            </span>
          </div>
        </S.TicketLeftInfo>

        {/* Right side: Perforated Fast-Track QR */}
        <S.TicketRightQR>
          <div className="qr-header">
            <span className="label">MÃ SOÁT VÉ NHANH FAST-TRACK</span>
            <span className="code-str">{ticket.qrCodeValue}</span>
          </div>

          <div className="qr-box">
            <img src={qrImageUrl} alt="QR Code Soát Vé" />
          </div>

          <div className="qr-note">
            <span className="direct-tag">
              <CheckCircle2 size={13} />
              <span>Quét trực tiếp tại cửa</span>
            </span>
            <span className="instructions">
              Đưa mã QR này cho nhân viên soát vé tại cửa phòng chiếu để vào rạp
              ngay mà không cần in vé giấy.
            </span>
          </div>
        </S.TicketRightQR>
      </S.TicketStubContainer>
    </S.UpcomingSection>
  );
}
