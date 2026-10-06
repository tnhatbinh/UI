import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { Key, Lock, Eye, EyeOff, Shield, CheckCircle2 } from 'lucide-react';
import * as S from './ChangePasswordCard.styles';

interface ChangePasswordCardProps {
  onSuccess: (message: string) => void;
}

export const ChangePasswordCard: FC<ChangePasswordCardProps> = ({
  onSuccess,
}) => {
  const [currentPass, setCurrentPass] = useState('PasswordVIP2024!');
  const [newPass, setNewPass] = useState('CinemaNoir_Elite99#');
  const [confirmPass, setConfirmPass] = useState('CinemaNoir_Elite99#');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [reloginRequired, setReloginRequired] = useState(true);

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    onSuccess('Mật khẩu tài khoản đã được cập nhật thành công!');
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Key size={17} color="#ff535a" />
            <span>Đổi mật khẩu tài khoản</span>
          </h3>
          <span className="sub">
            Đảm bảo mật khẩu có tối thiểu 8 ký tự kèm chữ số và biểu tượng đặc
            biệt
          </span>
        </div>
        <span className="status-pill">Cập nhật 45 ngày trước</span>
      </div>

      <S.PasswordForm onSubmit={handlePasswordSubmit}>
        <div className="field-group">
          <label>
            <span>Mật khẩu hiện tại</span>
            <span
              className="forgot-link"
              onClick={() =>
                alert(
                  'Hệ thống đã gửi liên kết khôi phục mật khẩu vào email của bạn.',
                )
              }
            >
              Quên mật khẩu?
            </span>
          </label>
          <div className="input-box">
            <Lock size={14} className="icon" />
            <input
              type={showCurrent ? 'text' : 'password'}
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
              required
            />
            <span
              className="toggle-eye"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <EyeOff size={14} /> : <Eye size={14} />}
            </span>
          </div>
        </div>

        <div className="field-group">
          <label>Mật khẩu mới</label>
          <div className="input-box">
            <Lock size={14} className="icon" />
            <input
              type={showNew ? 'text' : 'password'}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              required
            />
            <span className="toggle-eye" onClick={() => setShowNew(!showNew)}>
              {showNew ? <EyeOff size={14} /> : <Eye size={14} />}
            </span>
          </div>
        </div>

        <div className="strength-meter">
          <div className="bars">
            <span className="seg" />
            <span className="seg" />
            <span className="seg" />
            <span className="seg" />
          </div>
          <span className="score-text">
            <Shield size={12} />
            <span>Rất mạnh (Tối ưu chuẩn PCI DSS)</span>
          </span>
        </div>

        <div className="field-group">
          <label>Xác nhận mật khẩu mới</label>
          <div className="input-box">
            <Lock size={14} className="icon" />
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
            <CheckCircle2 size={15} className="check-ok" />
          </div>
        </div>

        <label className="remember-check">
          <input
            type="checkbox"
            checked={reloginRequired}
            onChange={(e) => setReloginRequired(e.target.checked)}
          />
          <span>Yêu cầu đăng nhập lại sau khi đổi</span>
        </label>

        <button type="submit" className="submit-btn">
          Cập nhật mật khẩu
        </button>
      </S.PasswordForm>
    </S.Card>
  );
};

export default ChangePasswordCard;
