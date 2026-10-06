import { useState } from 'react';
import { Fingerprint } from 'lucide-react';
import * as S from './BiometricsCard.styles';

export function BiometricsCard() {
  const [passkeyEnabled, setPasskeyEnabled] = useState(true);

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
            $active={passkeyEnabled}
            onClick={() => setPasskeyEnabled(!passkeyEnabled)}
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>

        <div
          className="setting-item"
          style={{
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="info">
            <span className="title">Mã PIN giao dịch rạp (6 số)</span>
            <span className="desc">
              Bắt buộc khi đặt combo phòng chiếu thượng lưu &gt; 2.000.000đ
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="pin-dots">● ● ● ● ● ●</div>
            <span
              className="edit-pin-link"
              onClick={() => alert('Nhập mã OTP để cài đặt mã PIN 6 số mới.')}
            >
              Đổi mã PIN
            </span>
          </div>
        </div>
      </S.BiometricContent>
    </S.Card>
  );
}
