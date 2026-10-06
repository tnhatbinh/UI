import type { FC } from 'react';
import { AuthShowcase } from './components/AuthShowcase';
import { LoginForm } from './components/LoginForm';
import * as S from './LoginPage.styles';

export const LoginPage: FC = () => {
  return (
    <S.PageWrapper>
      <S.MainContainer>
        {/* ================= CỘT TRÁI (SHOWCASE ĐẶC QUYỀN ĐIỆN ẢNH) ================= */}
        <AuthShowcase />

        {/* ================= CỘT PHẢI (FORM ĐĂNG NHẬP) ================= */}
        <LoginForm />
      </S.MainContainer>
    </S.PageWrapper>
  );
};

export default LoginPage;
