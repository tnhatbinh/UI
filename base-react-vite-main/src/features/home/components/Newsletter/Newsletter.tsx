import { useState } from 'react';
import type { FC } from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as S from './Newsletter.styles';

export const Newsletter: FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: implement newsletter subscribe logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <S.SectionContainer>
      <S.ContentWrapper>
        {/* Banner Container */}
        <S.BannerContainer>
          {/* Left Content */}
          <S.LeftContent>
            <S.Subtitle>{t('home:newsletter.subtitle')}</S.Subtitle>
            <S.Title>{t('home:newsletter.title')}</S.Title>
            <S.Description>{t('home:newsletter.desc')}</S.Description>
          </S.LeftContent>

          {/* Right Content (Form) */}
          <S.RightContent onSubmit={handleSubmit}>
            {/* Input Wrapper */}
            <S.InputWrapper>
              <Mail size={16} />
              <S.EmailInput
                type="email"
                placeholder={t('home:newsletter.placeholder')}
                value={email}
                onChange={handleEmailChange}
                aria-label="Nhập email của bạn"
                required
              />
            </S.InputWrapper>

            {/* Submit Button */}
            <S.SubmitButton type="submit">
              <S.ButtonText>{t('home:newsletter.submit_btn')}</S.ButtonText>
            </S.SubmitButton>
          </S.RightContent>
        </S.BannerContainer>
      </S.ContentWrapper>
    </S.SectionContainer>
  );
};
