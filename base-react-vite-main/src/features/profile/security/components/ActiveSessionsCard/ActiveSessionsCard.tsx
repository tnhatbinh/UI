import type { FC } from 'react';
import { Laptop, Power, Smartphone, Monitor } from 'lucide-react';
import * as S from './ActiveSessionsCard.styles';

interface ActiveSessionsCardProps {
  onToast: (msg: string) => void;
}

export const ActiveSessionsCard: FC<ActiveSessionsCardProps> = ({
  onToast,
}) => {
  const handleLogoutAllOther = () => {
    onToast('Đã ngắt kết nối an toàn với 2 thiết bị khác!');
  };

  const handleLogoutDevice = (deviceName: string) => () => {
    onToast(`Đã đăng xuất ${deviceName}!`);
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Laptop size={17} color="#ff535a" />
            <span>Phiên đăng nhập & Thiết bị</span>
          </h3>
          <span className="sub">
            3 thiết bị được nhận diện an toàn đang truy cập tài khoản
          </span>
        </div>
        <button
          type="button"
          className="logout-all-btn"
          onClick={handleLogoutAllOther}
        >
          <Power size={11} />
          <span>Đăng xuất tất cả thiết bị khác</span>
        </button>
      </div>

      <S.DevicesList>
        {/* Device 1 */}
        <div className="device-item">
          <div className="left-side">
            <div className="icon-box">
              <Laptop size={18} />
            </div>
            <div className="info">
              <div className="name-row">
                <span className="name">MacBook Pro 16" (macOS Sonoma)</span>
                <span className="badge">Thiết bị này</span>
              </div>
              <span className="meta">
                Trình duyệt Chrome 124.0 • TP. Hồ Chí Minh, VN • IP:
                115.79.208.***
              </span>
            </div>
          </div>
          <div className="right-side">
            <span className="online-badge">((•)) Online</span>
          </div>
        </div>

        {/* Device 2 */}
        <div className="device-item">
          <div className="left-side">
            <div className="icon-box">
              <Smartphone size={18} />
            </div>
            <div className="info">
              <div className="name-row">
                <span className="name">iPhone 15 Pro Max</span>
                <span className="badge">PhimBook App iOS</span>
              </div>
              <span className="meta">
                PhimBook Mobile App v4.2 • Quận 1, TP. HCM • Hoạt động 32 phút
                trước
              </span>
            </div>
          </div>
          <div className="right-side">
            <button
              type="button"
              className="kill-btn"
              title="Đăng xuất thiết bị này"
              onClick={handleLogoutDevice('iPhone 15 Pro Max')}
            >
              <Power size={13} />
            </button>
          </div>
        </div>

        {/* Device 3 */}
        <div className="device-item">
          <div className="left-side">
            <div className="icon-box">
              <Monitor size={18} />
            </div>
            <div className="info">
              <div className="name-row">
                <span className="name">Workstation Windows 11</span>
              </div>
              <span className="meta">
                Cốc Cốc Browser • Wi-Fi Rạp Landmark 81 • Hôm qua, 19:42
              </span>
            </div>
          </div>
          <div className="right-side">
            <button
              type="button"
              className="kill-btn"
              title="Đăng xuất thiết bị này"
              onClick={handleLogoutDevice('Workstation Windows 11')}
            >
              <Power size={13} />
            </button>
          </div>
        </div>
      </S.DevicesList>
    </S.Card>
  );
};

export default ActiveSessionsCard;
