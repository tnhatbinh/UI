import { useState } from 'react';
import type { FC } from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  SectionContainer,
  ContentWrapper,
  BannerContainer,
  LeftContent,
  Subtitle,
  Title,
  Description,
  RightContent,
  InputWrapper,
  EmailInput,
  SubmitButton,
  ButtonText,
} from './newsletter.styles';

export const Newsletter: FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: implement newsletter subscribe logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Banner Container */}
        <BannerContainer>
          {/* Left Content */}
          <LeftContent>
            <Subtitle>{t('home:newsletter.subtitle')}</Subtitle>
            <Title>{t('home:newsletter.title')}</Title>
            <Description>{t('home:newsletter.desc')}</Description>
          </LeftContent>

          {/* Right Content (Form) */}
          <RightContent onSubmit={handleSubmit}>
            {/* Input Wrapper */}
            <InputWrapper>
              <Mail size={16} />
              <EmailInput
                type="email"
                placeholder={t('home:newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Nhập email của bạn"
                required
              />
            </InputWrapper>

            {/* Submit Button */}
            <SubmitButton type="submit">
              <ButtonText>{t('home:newsletter.submit_btn')}</ButtonText>
            </SubmitButton>
          </RightContent>
        </BannerContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};
