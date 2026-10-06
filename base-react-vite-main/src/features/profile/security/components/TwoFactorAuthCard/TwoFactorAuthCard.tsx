import { useState } from 'react';
import { Shield, Smartphone, Key, Copy, RefreshCw } from 'lucide-react';
import * as S from './TwoFactorAuthCard.styles';

interface TwoFactorAuthCardProps {
  onToast?: (msg: string) => void;
}

export function TwoFactorAuthCard({ onToast }: TwoFactorAuthCardProps) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handleCopyCodes = () => {
    const codes =
      '4920-8192, 7718-0244, 9104-3821, 6201-5589, 3319-4402, 8821-9015, 5012-7634, 1498-6620';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codes);
    }
    onToast?.('Đã sao chép 8 mã khôi phục khẩn cấp vào clipboard!');
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Shield size={16} color="#ff535a" />
            <span>Xác thực 2 bước (2FA)</span>
          </h3>
        </div>
        <S.ToggleSwitch
          $active={twoFactorEnabled}
          onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
        >
          <div className="thumb" />
        </S.ToggleSwitch>
      </div>

      <S.TwoFactorContent>
        <p className="desc">
          Mỗi lần đăng nhập từ trình duyệt lạ hoặc thanh toán giao dịch VIP, hệ
          thống sẽ yêu cầu thêm mã xác thực dùng một lần (OTP).
        </p>

        <div className="method-box">
          <div className="left">
            <Smartphone size={16} className="icon" />
            <div className="text">
              <span className="name">Google Authenticator / Authy</span>
              <span className="sub">
                Khuyên dùng • Mã tức thì không cần mạng
              </span>
            </div>
          </div>
          <span className="badge-primary">Mặc định</span>
        </div>

        <div className="method-box">
          <div className="left">
            <Shield size={16} className="icon" />
            <div className="text">
              <span className="name">Zalo OTP / SMS Điện Thoại</span>
              <span className="sub">Gửi về số: +84 *** *** 456</span>
            </div>
          </div>
          <span
            className="change-link"
            onClick={() => alert('Chức năng đổi số điện thoại nhận OTP.')}
          >
            Thay đổi
          </span>
        </div>

        {/* Emergency Backup Codes */}
        <div className="backup-codes-block">
          <div className="top-meta">
            <span className="title">
              <Key size={12} />
              <span>Mã khôi phục khẩn cấp</span>
            </span>
            <span className="count">Còn 8 mã chưa dùng</span>
          </div>

          <div className="codes-grid">
            <div>4920 - 8192</div>
            <div>7718 - 0244</div>
            <div>9104 - 3821</div>
            <div>6201 - 5589</div>
            <div>3319 - 4402</div>
            <div>8821 - 9015</div>
            <div>5012 - 7634</div>
            <div>1498 - 6620</div>
          </div>

          <div className="actions-row">
            <span className="copy-link" onClick={handleCopyCodes}>
              <Copy size={12} />
              <span>Sao chép tất cả</span>
            </span>
            <span
              className="regen-link"
              onClick={() => onToast?.('Đã tạo mới 8 mã khôi phục khẩn cấp!')}
            >
              <RefreshCw size={12} />
              <span>Tạo mã mới</span>
            </span>
          </div>
        </div>
      </S.TwoFactorContent>
    </S.Card>
  );
}
