import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Smartphone, KeyRound, Fingerprint } from 'lucide-react';
import * as S from './QuickSecurityCard.styles';

export const QuickSecurityCard: FC = () => {
  const navigate = useNavigate();
  const [biometricLogin, setBiometricLogin] = useState(true);

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <Shield size={16} color="#ff535a" />
            <span>Bảo mật & Đăng nhập</span>
          </h3>
        </div>
        <span className="level-badge">CẤP ĐỘ CAO</span>
      </div>

      <S.SideItemList>
        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <Smartphone size={16} />
            </div>
            <div className="text">
              <span className="name">Xác thực 2 bước (2FA)</span>
              <span className="desc">Bảo vệ qua OTP Zalo/SMS khi đặt vé</span>
            </div>
          </div>
          <span className="badge-on">• Đang bật</span>
        </div>

        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <KeyRound size={16} />
            </div>
            <div className="text">
              <span className="name">Mật khẩu tài khoản</span>
              <span className="desc">Cập nhật 30 ngày trước</span>
            </div>
          </div>
          <button
            className="action-btn"
            onClick={() => navigate('/profile/security')}
          >
            Đổi mã
          </button>
        </div>

        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <Fingerprint size={16} />
            </div>
            <div className="text">
              <span className="name">Đăng nhập sinh trắc học</span>
              <span className="desc">Touch ID / Face ID trên trình duyệt</span>
            </div>
          </div>
          <S.ToggleSwitch
            $active={biometricLogin}
            onClick={() => setBiometricLogin(!biometricLogin)}
            title="Bật/Tắt đăng nhập sinh trắc học"
          >
            <div className="thumb" />
          </S.ToggleSwitch>
        </div>
      </S.SideItemList>
    </S.Card>
  );
};

export default QuickSecurityCard;
