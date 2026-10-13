import { useState } from 'react';
import * as S from './TicketShowtimesNotifCard.styles';

export function TicketShowtimesNotifCard() {
  const [isNotify2hEnabled, setIsNotify2hEnabled] = useState(true);
  const [isNotify24hEnabled, setIsNotify24hEnabled] = useState(true);
  const [isNotifyEmergencyEnabled, setIsNotifyEmergencyEnabled] = useState(true);
  const [isNotifyReviewEnabled, setIsNotifyReviewEnabled] = useState(true);

  const handleToggleNotify2h = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotify2hEnabled(e.target.checked);
  };

  const handleToggleNotify24h = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotify24hEnabled(e.target.checked);
  };

  const handleToggleNotifyEmergency = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyEmergencyEnabled(e.target.checked);
  };

  const handleToggleNotifyReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyReviewEnabled(e.target.checked);
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <span>Lịch chiếu & Vé đã đặt</span>
          </h3>
          <span className="sub">
            Đảm bảo trải nghiệm tới rạp trọn vẹn, không lỡ khung giờ vàng mở
            màn.
          </span>
        </div>
      </div>

      <S.CheckOptionList>
        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotify2hEnabled}
            onChange={handleToggleNotify2h}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">Nhắc lịch chiếu trước 2 giờ</span>
              <span className="pill">KHUYÊN DÙNG</span>
            </div>
            <span className="desc">
              Tự động đẩy thông báo kèm mã QR quét vé nhanh tại cổng và bản đồ
              định vị chỉ đường tới sảnh rạp tương ứng.
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotify24hEnabled}
            onChange={handleToggleNotify24h}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">Nhắc lịch chiếu trước 24 giờ</span>
            </div>
            <span className="desc">
              Lời nhắc chuẩn bị lịch trình và thời gian đổi vé linh hoạt (nếu
              cần đổi suất chiếu theo chính sách VIP).
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotifyEmergencyEnabled}
            onChange={handleToggleNotifyEmergency}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                Cảnh báo khẩn cấp thay đổi phòng chiếu hoặc lịch rạp ⚠️
              </span>
            </div>
            <span className="desc">
              Cập nhật ngay lập tức nếu cụm rạp điều chỉnh phòng chiếu kỹ thuật
              số, bảo trì máy chiếu IMAX hoặc đổi giờ đột xuất.
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={isNotifyReviewEnabled}
            onChange={handleToggleNotifyReview}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                Đánh giá phim & nhận điểm PhimPoints sau suất chiếu
              </span>
            </div>
            <span className="desc">
              Gửi biểu mẫu chấm điểm nhanh sau khi phim kết thúc; cộng ngay 50
              PhimPoints trực tiếp vào thẻ hội viên.
            </span>
          </div>
        </label>
      </S.CheckOptionList>
    </S.Card>
  );
}
