import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { Key, Lock, Eye, EyeOff, Shield, CheckCircle2 } from 'lucide-react';
import { message } from 'antd';
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
  const [isShowCurrentPassword, setIsShowCurrentPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isReloginRequired, setIsReloginRequired] = useState(true);

  const handleForgotPassword = () => {
    onSuccess('Hệ thống đã gửi liên kết khôi phục mật khẩu vào email của bạn.');
  };

  const handleCurrentPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCurrentPass(e.target.value);
  };

  const handleToggleCurrentPasswordVisibility = () => {
    setIsShowCurrentPassword((prev) => !prev);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPass(e.target.value);
  };

  const handleToggleNewPasswordVisibility = () => {
    setIsShowNewPassword((prev) => !prev);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPass(e.target.value);
  };

  const handleReloginRequiredChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsReloginRequired(e.target.checked);
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      message.error('Mật khẩu xác nhận không khớp!');
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
              onClick={handleForgotPassword}
            >
              Quên mật khẩu?
            </span>
          </label>
          <div className="input-box">
            <Lock size={14} className="icon" />
            <input
              type={isShowCurrentPassword ? 'text' : 'password'}
              value={currentPass}
              onChange={handleCurrentPasswordChange}
              required
            />
            <span
              className="toggle-eye"
              onClick={handleToggleCurrentPasswordVisibility}
            >
              {isShowCurrentPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </span>
          </div>
        </div>

        <div className="field-group">
          <label>Mật khẩu mới</label>
          <div className="input-box">
            <Lock size={14} className="icon" />
            <input
              type={isShowNewPassword ? 'text' : 'password'}
              value={newPass}
              onChange={handleNewPasswordChange}
              required
            />
            <span
              className="toggle-eye"
              onClick={handleToggleNewPasswordVisibility}
            >
              {isShowNewPassword ? <EyeOff size={14} /> : <Eye size={14} />}
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
              onChange={handleConfirmPasswordChange}
              required
            />
            <CheckCircle2 size={15} className="check-ok" />
          </div>
        </div>

        <label className="remember-check">
          <input
            type="checkbox"
            checked={isReloginRequired}
            onChange={handleReloginRequiredChange}
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
