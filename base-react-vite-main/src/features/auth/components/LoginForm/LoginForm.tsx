import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  QrCode,
  ShieldCheck,
  Smartphone,
  Ticket,
  User,
  ChevronRight,
} from 'lucide-react';
import tokenManager from '@shared/utils/tokenManager';
import * as S from './LoginForm.styles';

export const LoginForm: FC = () => {
  const navigate = useNavigate();

  // Tab: 'phone' hoặc 'email'
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone');
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [identifier, setIdentifier] = useState('');
  const [credential, setCredential] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Giả lập token đăng nhập thành công
    tokenManager.setAccessToken('session_token_phimbook_' + Date.now());

    // Lưu tên người dùng
    const displayName =
      identifier.trim() ||
      (activeTab === 'phone' ? '0988 123 456' : 'CinePass VIP Member');
    localStorage.setItem('user_name', displayName);

    // Chuyển hướng về trang chủ
    navigate('/', { replace: true });
    window.location.reload();
  };

  return (
    <S.RightPanel>
      <div>
        {/* Header Form */}
        <S.FormTopHeader>
          <S.GateBadge>
            <Ticket size={12} />
            <span>CỔNG VÉ VIP 24/7</span>
          </S.GateBadge>

          <S.FormTitle>Chào mừng trở lại</S.FormTitle>
          <S.FormSubtitle>
            Đăng nhập để nhận ngay ưu đãi vé 0đ & tích lũy điểm thưởng{' '}
            <span className="gold-highlight">CinePass VIP</span>.
          </S.FormSubtitle>
        </S.FormTopHeader>

        {/* Switch Tab: Phone vs Email */}
        <S.TabSwitchWrapper>
          <S.TabButton
            type="button"
            $isActive={activeTab === 'phone'}
            onClick={() => setActiveTab('phone')}
          >
            <Smartphone size={15} />
            <span>Số điện thoại</span>
          </S.TabButton>

          <S.TabButton
            type="button"
            $isActive={activeTab === 'email'}
            onClick={() => setActiveTab('email')}
          >
            <Mail size={15} />
            <span>Email / Mật khẩu</span>
          </S.TabButton>
        </S.TabSwitchWrapper>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Field 1: Phone hoặc Email */}
          <S.FieldGroup>
            <S.FieldLabel>
              {activeTab === 'phone'
                ? 'SỐ ĐIỆN THOẠI CỦA BẠN'
                : 'ĐỊA CHỈ EMAIL CỦA BẠN'}
            </S.FieldLabel>
            <S.InputBox>
              {activeTab === 'phone' ? (
                <Phone size={16} className="field-icon" />
              ) : (
                <User size={16} className="field-icon" />
              )}
              <input
                type={activeTab === 'phone' ? 'tel' : 'email'}
                placeholder={
                  activeTab === 'phone'
                    ? 'Ví dụ: 0988 123 456'
                    : 'Ví dụ: vipmember@phimbook.vn'
                }
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </S.InputBox>
          </S.FieldGroup>

          {/* Field 2: Password hoặc OTP */}
          <S.FieldGroup>
            <S.FieldLabelRow>
              <S.FieldLabel>
                {activeTab === 'phone'
                  ? 'MÃ XÁC THỰC OTP / MẬT KHẨU'
                  : 'MẬT KHẨU TÀI KHOẢN'}
              </S.FieldLabel>
              <S.ForgotPassLink
                type="button"
                onClick={() =>
                  alert(
                    'Tính năng quên mật khẩu đang được hỗ trợ qua Hotline 1900 8888 99',
                  )
                }
              >
                Quên mật khẩu?
              </S.ForgotPassLink>
            </S.FieldLabelRow>

            <S.InputBox>
              <Lock size={16} className="field-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={
                  activeTab === 'phone'
                    ? 'Nhập mã gồm 6 số hoặc mật khẩu'
                    : 'Nhập mật khẩu của bạn'
                }
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </S.InputBox>
          </S.FieldGroup>

          {/* Extra row: Ghi nhớ & Bảo mật SSL */}
          <S.ExtraOptionsRow>
            <S.CheckboxLabel>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Duy trì đăng nhập 30 ngày</span>
            </S.CheckboxLabel>

            <S.SecurityTag>
              <ShieldCheck size={14} className="lock-icon" />
              <span>Bảo mật SSL 256-bit</span>
            </S.SecurityTag>
          </S.ExtraOptionsRow>

          {/* Nút Submit */}
          <S.SubmitButton type="submit">
            <span>ĐĂNG NHẬP VIP</span>
            <ArrowRight size={16} />
          </S.SubmitButton>
        </form>

        {/* Hoặc tiếp tục với */}
        <S.OrDivider>
          <div className="line" />
          <span className="text">HOẶC TIẾP TỤC VỚI</span>
          <div className="line" />
        </S.OrDivider>

        {/* Social Logins */}
        <S.SocialButtonsRow>
          <S.SocialButton
            type="button"
            onClick={() => {
              localStorage.setItem('user_name', 'Google User');
              tokenManager.setAccessToken('token_google');
              navigate('/');
              window.location.reload();
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.8 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
              />
              <path
                fill="#FBBC05"
                d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.2C.6 9.2 0 11.5 0 14s.6 4.8 1.6 6.8l3.7-2.9z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.1-6.7-5.1L1.6 16.1C3.5 20.4 7.4 23 12 23z"
              />
            </svg>
            <span>Google</span>
          </S.SocialButton>

          <S.SocialButton
            type="button"
            onClick={() => {
              localStorage.setItem('user_name', 'Facebook User');
              tokenManager.setAccessToken('token_fb');
              navigate('/');
              window.location.reload();
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </S.SocialButton>

          <S.SocialButton
            type="button"
            onClick={() => {
              localStorage.setItem('user_name', 'Zalo User');
              tokenManager.setAccessToken('token_zalo');
              navigate('/');
              window.location.reload();
            }}
          >
            <span
              style={{
                color: '#0068FF',
                fontWeight: 800,
                fontSize: '13px',
              }}
            >
              Z
            </span>
            <span>Zalo</span>
          </S.SocialButton>
        </S.SocialButtonsRow>

        {/* Đăng nhập nhanh bằng QR */}
        <S.QrCodeBanner
          onClick={() =>
            alert('Mở app PhimBook và quét mã QR để đăng nhập tức thì!')
          }
        >
          <div className="left">
            <QrCode size={22} className="qr-icon" />
            <div className="text-col">
              <span className="title">Đăng nhập nhanh bằng QR</span>
              <span className="desc">Quét qua ứng dụng PhimBook Mobile</span>
            </div>
          </div>
          <ChevronRight size={16} className="chevron" />
        </S.QrCodeBanner>
      </div>

      {/* Footer form: Đăng ký & Voucher */}
      <S.FormFooter>
        <S.RegisterLinkText>
          Chưa có tài khoản PhimBook?
          <button
            type="button"
            onClick={() => alert('Chuyển đến màn đăng ký tài khoản PhimBook')}
          >
            Đăng ký ngay ↗
          </button>
        </S.RegisterLinkText>

        <S.VoucherBanner>
          <Ticket size={15} />
          <span>Tặng ngay E-Voucher Bắp Nước 50.000đ khi mở tài khoản</span>
        </S.VoucherBanner>
      </S.FormFooter>
    </S.RightPanel>
  );
};

export default LoginForm;
