import { Headphones, PhoneCall, MessageSquare } from 'lucide-react';
import * as S from '../../MyTicketsPage.styles';

interface UrgentSupportProps {
  onToast: (msg: string) => void;
}

export function UrgentSupport({ onToast }: UrgentSupportProps) {
  return (
    <S.UrgentSupportCard>
      <div className="left-meta">
        <div className="icon-box">
          <Headphones size={22} />
        </div>
        <div className="text">
          <div className="title-line">
            <span className="title">Cần hỗ trợ khẩn cấp tại rạp chiếu?</span>
            <span className="priority-badge">HOTLINE ƯU TIÊN 24/7</span>
          </div>
          <span className="desc">
            Đội ngũ PhimBook Concierge luôn túc trực tại tất cả cụm rạp để hỗ
            trợ đổi ghế, in lại vé hoặc hoàn tiền sự cố kỹ thuật trong vòng 3
            phút.
          </span>
        </div>
      </div>

      <div className="cta-buttons">
        <button
          className="hotline-btn"
          onClick={() =>
            alert('Đang kết nối đến Tổng Đài Ưu Tiên PhimBook: 1900 8888...')
          }
        >
          <PhoneCall size={15} />
          <span>1900 8888 (Phím 1)</span>
        </button>

        <button
          className="chat-btn"
          onClick={() =>
            onToast(
              'Trợ lý AI PhimBook Cine Concierge đã sẵn sàng kết nối hỗ trợ bạn!',
            )
          }
        >
          <MessageSquare size={15} />
          <span>Chat Trực Tiếp Với AI</span>
        </button>
      </div>
    </S.UrgentSupportCard>
  );
}
