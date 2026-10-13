import { useState } from 'react';
import { Bell, MessageSquare, Mail } from 'lucide-react';
import * as S from './NotificationChannelsCard.styles';

export function NotificationChannelsCard() {
  const [isAppPushEnabled, setIsAppPushEnabled] = useState(true);
  const [isSmsZaloEnabled, setIsSmsZaloEnabled] = useState(true);
  const [isEmailNewsEnabled, setIsEmailNewsEnabled] = useState(true);

  const handleToggleAppPush = () => {
    setIsAppPushEnabled((prev) => !prev);
  };

  const handleToggleSmsZalo = () => {
    setIsSmsZaloEnabled((prev) => !prev);
  };

  const handleToggleEmailNews = () => {
    setIsEmailNewsEnabled((prev) => !prev);
  };

  const activeCount = [isAppPushEnabled, isSmsZaloEnabled, isEmailNewsEnabled].filter(Boolean).length;

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Bell size={17} color="#ff535a" />
            <span>Kênh nhận thông báo</span>
          </h3>
          <span className="sub">
            Chọn các phương thức bạn muốn PhimBook kết nối và gửi thông tin vé
            tức thì.
          </span>
        </div>
        <span className="badge">{activeCount} ĐANG BẬT</span>
      </div>

      <S.ChannelRowList>
        <div className="channel-item">
          <div className="left">
            <div className="icon-box">
              <Bell size={18} />
            </div>
            <div className="text">
              <span className="name">Ứng dụng & Trình duyệt</span>
              <span className="desc">
                Push notifications trực tiếp qua Chrome, Safari và PhimBook
                Mobile
              </span>
            </div>
          </div>
          <div
            className={`switch ${isAppPushEnabled ? '' : 'off'}`}
            onClick={handleToggleAppPush}
          />
        </div>

        <div className="channel-item">
          <div className="left">
            <div className="icon-box">
              <MessageSquare size={18} />
            </div>
            <div className="text">
              <span className="name">Tin nhắn Zalo ZNS / SMS</span>
              <span className="desc">
                Gửi tin thông báo mở vé đến SĐT đăng ký (+84 *** *** 88)
              </span>
            </div>
          </div>
          <div
            className={`switch ${isSmsZaloEnabled ? '' : 'off'}`}
            onClick={handleToggleSmsZalo}
          />
        </div>

        <div className="channel-item">
          <div className="left">
            <div className="icon-box">
              <Mail size={18} />
            </div>
            <div className="text">
              <span className="name">Email nhận tin tức</span>
              <span className="desc">
                Gửi hóa đơn VAT, vé điện tử và thư mời tới tung.nguyen@gmail.com
              </span>
            </div>
          </div>
          <div
            className={`switch ${isEmailNewsEnabled ? '' : 'off'}`}
            onClick={handleToggleEmailNews}
          />
        </div>
      </S.ChannelRowList>
    </S.Card>
  );
}
