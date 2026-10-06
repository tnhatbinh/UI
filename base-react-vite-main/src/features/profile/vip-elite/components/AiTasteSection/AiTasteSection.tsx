import { RefreshCw, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from './AiTasteSection.styles';

interface AiTasteSectionProps {
  onRefresh: () => void;
}

export function AiTasteSection({ onRefresh }: AiTasteSectionProps) {
  const navigate = useNavigate();

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Sparkles size={18} />
          </div>
          <h3>AI Trợ Lý & Gu Điện Ảnh Của Bạn</h3>
          <span className="tag-pill">CÁ NHÂN HÓA</span>
        </div>
        <RefreshCw size={15} className="refresh-btn" onClick={onRefresh} />
      </div>

      <S.AiInsightBox>
        <div className="gauge-circle">
          <span className="percent">94%</span>
          <span className="sub">ĐỘ HỢP GU</span>
        </div>
        <div className="text-content">
          <span className="ai-badge">✨ Nhận định từ CineAI Brain:</span>
          <p className="desc">
            Bạn là tín đồ cuồng nhiệt của các thước phim kỹ xảo vĩ mô và chiều
            sâu tâm lý đa tầng. 82% vé đặt trong 6 tháng qua thuộc các suất
            chiếu màn chiếu khổng lồ đêm muộn.
          </p>
          <span className="recommend">
            Gợi ý tác phẩm hot tuần này:{' '}
            <strong onClick={() => navigate('/movie-details')}>
              Dune: Part Two (IMAX Re-run) ↗
            </strong>
          </span>
        </div>
      </S.AiInsightBox>

      <S.TasteSubGrid>
        {/* Passion Genres */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">THỂ LOẠI SAY MÊ</span>
            <span className="badge">4 thể loại chính</span>
          </div>
          <div className="tags-wrap">
            <span className="tag highlight">Khoa học viễn tưởng (Sci-fi)</span>
            <span className="tag">Tâm lý giật gân</span>
            <span className="tag highlight">Hành động bom tấn</span>
            <span className="tag">Phim tài liệu IMAX</span>
          </div>
        </div>

        {/* Priority Format */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">ĐỊNH DẠNG RẠP ƯU TIÊN</span>
            <span className="badge">Tự động chọn phòng</span>
          </div>
          <div className="tags-wrap">
            <span className="tag highlight">🎟 IMAX with Laser</span>
            <span className="tag">📽 Dolby Atmos • 4DX</span>
          </div>
        </div>
      </S.TasteSubGrid>

      {/* Cinema & Favorite Seats Sub-Grid */}
      <S.TasteSubGrid>
        {/* Frequently visited cinemas */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">RẠP QUEN THUỘC (ƯU TIÊN LỊCH)</span>
            <span
              className="badge"
              style={{ color: '#ff535a', cursor: 'pointer' }}
              onClick={() => navigate('/profile/cinematic-taste')}
            >
              Thêm rạp
            </span>
          </div>
          <S.CinemaFavsList>
            <div className="item">
              <span className="name">
                <span className="dot" />
                PhimBook Lounge Landmark 81
              </span>
              <span className="tag">Rạp thân quen #1</span>
            </div>
            <div className="item">
              <span className="name">CGV Vincom Đồng Khởi</span>
              <span className="dist">Cách 3.2 km</span>
            </div>
            <div className="item">
              <span className="name">Galaxy Sala Thủ Thiêm</span>
              <span className="dist">Cách 4.8 km</span>
            </div>
          </S.CinemaFavsList>
        </div>

        {/* Preferred Seating Area */}
        <div className="sub-block">
          <div className="block-header">
            <span className="title">KHU VỰC GHẾ HOÀN HẢO</span>
            <span className="badge" style={{ color: '#ffb955' }}>
              Hàng F, G, H (7 - 10)
            </span>
          </div>

          <S.SeatVisualizerBox>
            <div className="screen-arc" />
            <div className="grid-mini">
              <div className="row">
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
                <span className="seat-dot" />
              </div>
              <div className="row">
                <span className="seat-dot" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot" />
              </div>
              <div className="row">
                <span className="seat-dot" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot fav" />
                <span className="seat-dot" />
              </div>
            </div>
            <span className="SeatLegend">
              Hệ thống tự động khóa giữ ghế trung tâm tối ưu tầm nhìn mắt khi
              bạn mở trang đặt vé.
            </span>
          </S.SeatVisualizerBox>
        </div>
      </S.TasteSubGrid>
    </S.SectionCard>
  );
}
