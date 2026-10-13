import { useState } from 'react';
import { Fingerprint } from 'lucide-react';
import { message } from 'antd';
import * as S from './BiometricsCard.styles';

export function BiometricsCard() {
  const [isPasskeyEnabled, setIsPasskeyEnabled] = useState(true);

  const handleTogglePasskey = () => {
    setIsPasskeyEnabled((prev) => !prev);
  };

  const handleEditPin = () => {
    message.info('Vui lòng nhập mã OTP để cài đặt mã PIN 6 số mới.');
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Fingerprint size={16} color="#ff535a" />
            <span>Sinh trắc học & Khóa PIN</span>
          </h3>
          <span className="sub">Bảo vệ thanh toán và vé VIP tại rạp chiếu</span>
        </div>
      </div>

      <S.BiometricContent>
        <div className="setting-item">
          <div className="info">
            <span className="title">Passkey / Face ID & Touch ID</span>
            <span className="desc">
              Đăng nhập không cần mật khẩu qua chuẩn FIDO2/WebAuthn
            </span>
          </div>
          <S.ToggleSwitch
            $active={isPasskeyEnabled}
            onClick={handleTogglePasskey}
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>

        <div className="setting-item bordered">
          <div className="info">
            <span className="title">Mã PIN giao dịch rạp (6 số)</span>
            <span className="desc">
              Bắt buộc khi đặt combo phòng chiếu thượng lưu &gt; 2.000.000đ
            </span>
          </div>
          <div className="action-row">
            <div className="pin-dots">● ● ● ● ● ●</div>
            <span
              className="edit-pin-link"
              onClick={handleEditPin}
            >
              Đổi mã PIN
            </span>
          </div>
        </div>
      </S.BiometricContent>
    </S.Card>
  );
}
