import type { FC } from 'react';
import { useState } from 'react';
import * as S from './NotificationOptionsCard.styles';

export const NotificationOptionsCard: FC = () => {
  const [isNotify2hEnabled, setIsNotify2hEnabled] = useState(true);
  const [isNotifyEarlyEnabled, setIsNotifyEarlyEnabled] = useState(true);
  const [isNotifyVatEnabled, setIsNotifyVatEnabled] = useState(true);

  const handleToggleNotify2h = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotify2hEnabled(e.target.checked);
  };

  const handleToggleNotifyEarly = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyEarlyEnabled(e.target.checked);
  };

  const handleToggleNotifyVat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotifyVatEnabled(e.target.checked);
  };

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <span>Tùy chọn thông báo</span>
          </h3>
        </div>
      </div>

      <S.NotificationCheckGroup>
        <label className="check-item">
          <input
            type="checkbox"
            checked={isNotify2hEnabled}
            onChange={handleToggleNotify2h}
          />
          <div className="text">
            <span className="title">Nhắc lịch chiếu trước 2 giờ</span>
            <span className="sub">Gửi thông báo đẩy về mã QR vào rạp</span>
          </div>
        </label>

        <label className="check-item">
          <input
            type="checkbox"
            checked={isNotifyEarlyEnabled}
            onChange={handleToggleNotifyEarly}
          />
          <div className="text">
            <span className="title">Ưu đãi suất chiếu sớm & Bom tấn</span>
            <span className="sub">Mở bán vé IMAX / Sneak Show sớm 24h</span>
          </div>
        </label>

        <label className="check-item">
          <input
            type="checkbox"
            checked={isNotifyVatEnabled}
            onChange={handleToggleNotifyVat}
          />
          <div className="text">
            <span className="title">Email hóa đơn VAT điện tử</span>
            <span className="sub">
              Gửi tự động hóa đơn sau khi hoàn tất thanh toán
            </span>
          </div>
        </label>
      </S.NotificationCheckGroup>
    </S.Card>
  );
};

export default NotificationOptionsCard;
