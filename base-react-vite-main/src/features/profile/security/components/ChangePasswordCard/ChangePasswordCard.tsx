import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Key, Lock, Eye, EyeOff, Shield, CheckCircle2 } from 'lucide-react';
import * as S from './ChangePasswordCard.styles';

interface ChangePasswordCardProps {
  onSuccess: (message: string) => void;
}

export const ChangePasswordCard: FC<ChangePasswordCardProps> = ({
  onSuccess,
}) => {
  const { t } = useTranslation();
  const [currentPass, setCurrentPass] = useState('PasswordVIP2024!');
  const [newPass, setNewPass] = useState('CinemaNoir_Elite99#');
  const [confirmPass, setConfirmPass] = useState('CinemaNoir_Elite99#');
  const [isShowCurrentPassword, setIsShowCurrentPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isReloginRequired, setIsReloginRequired] = useState(true);

  const handleForgotPassword = () => {
    onSuccess(t('profile:toast_forgot_pass'));
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
      return;
    }
    onSuccess(t('profile:toast_pass_updated'));
  };

  return (
    <S.Card>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Key size={17} color="#ff535a" />
            <span>{t('profile:change_pass_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:change_pass_sub')}
          </span>
        </div>
        <span className="status-pill">{t('profile:pass_updated_ago')}</span>
      </div>

      <S.PasswordForm onSubmit={handlePasswordSubmit}>
        <div className="field-group">
          <label>
            <span>{t('profile:current_pass_lbl')}</span>
            <span
              className="forgot-link"
              onClick={handleForgotPassword}
            >
              {t('profile:forgot_pass_link')}
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
          <label>{t('profile:new_pass_lbl')}</label>
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
            <span>{t('profile:pass_strength_optimal')}</span>
          </span>
        </div>

        <div className="field-group">
          <label>{t('profile:confirm_new_pass_lbl')}</label>
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
          <span>{t('profile:relogin_required_chk')}</span>
        </label>

        <button type="submit" className="submit-btn">
          {t('profile:update_pass_btn')}
        </button>
      </S.PasswordForm>
    </S.Card>
  );
};

export default ChangePasswordCard;
