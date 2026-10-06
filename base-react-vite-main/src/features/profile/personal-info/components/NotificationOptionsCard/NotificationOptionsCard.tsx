import type { FC } from 'react';
import { useState } from 'react';
import * as S from './NotificationOptionsCard.styles';

export const NotificationOptionsCard: FC = () => {
  const [notify2h, setNotify2h] = useState(true);
  const [notifyEarly, setNotifyEarly] = useState(true);
  const [notifyVat, setNotifyVat] = useState(true);

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
            checked={notify2h}
            onChange={(e) => setNotify2h(e.target.checked)}
          />
          <div className="text">
            <span className="title">Nhắc lịch chiếu trước 2 giờ</span>
            <span className="sub">Gửi thông báo đẩy về mã QR vào rạp</span>
          </div>
        </label>

        <label className="check-item">
          <input
            type="checkbox"
            checked={notifyEarly}
            onChange={(e) => setNotifyEarly(e.target.checked)}
          />
          <div className="text">
            <span className="title">Ưu đãi suất chiếu sớm & Bom tấn</span>
            <span className="sub">Mở bán vé IMAX / Sneak Show sớm 24h</span>
          </div>
        </label>

        <label className="check-item">
          <input
            type="checkbox"
            checked={notifyVat}
            onChange={(e) => setNotifyVat(e.target.checked)}
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
