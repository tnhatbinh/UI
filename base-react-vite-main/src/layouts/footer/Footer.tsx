import type { FC } from 'react';
import { Film, Mail, Smartphone } from 'lucide-react';
import { BiPhone } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import * as S from './footer.styles';

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <S.FooterContainer>
      <S.FooterInner>
        {/* Top Section */}
        <S.TopSection>
          {/* Col 1 */}
          <S.BrandColumn>
            {/* Logo */}
            <S.LogoWrapper
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <S.LogoIconBadge>
                <Film size={20} strokeWidth={2.2} />
              </S.LogoIconBadge>
              <S.LogoTextCol>
                <S.LogoTitle>
                  <S.LogoPhim>PHIM</S.LogoPhim>
                  <S.LogoBook>BOOK</S.LogoBook>
                </S.LogoTitle>
                <S.LogoSub>CINEMATIC LOUNGE</S.LogoSub>
              </S.LogoTextCol>
            </S.LogoWrapper>

            {/* Description */}
            <S.BrandDescription>{t('footer:brand_desc')}</S.BrandDescription>

            {/* Contacts */}
            <S.ContactsList>
              <S.ContactItem>
                <BiPhone style={{ color: '#FFB955' }} size={14} />
                <S.ContactLabel>{t('footer:hotline_label')}</S.ContactLabel>
                <S.ContactHotline>1900 8888 99</S.ContactHotline>
              </S.ContactItem>
              <S.ContactItem>
                <Mail style={{ color: '#AE8786' }} size={12} />
                <S.ContactEmail>support@phimbook.vn</S.ContactEmail>
              </S.ContactItem>
            </S.ContactsList>
          </S.BrandColumn>

          {/* Col 2 */}
          <S.LinksColumn>
            <S.ColumnTitle>{t('footer:cinemas_title')}</S.ColumnTitle>
            <S.LinksList>
              {[
                'CGV Cinemas Vietnam',
                'Lotte Cinema',
                'BHD Star Cineplex',
                'Galaxy Studio',
                'Beta Cinemas',
                'Cinestar Cinema',
              ].map((item) => (
                <S.FooterLink key={item}>{item}</S.FooterLink>
              ))}
            </S.LinksList>
          </S.LinksColumn>

          {/* Col 3 */}
          <S.LinksColumn>
            <S.ColumnTitle>{t('footer:policies_title')}</S.ColumnTitle>
            <S.LinksList>
              {[
                { key: 'about_us', label: t('footer:about_us') },
                { key: 'regulations', label: t('footer:regulations') },
                { key: 'terms', label: t('footer:terms') },
                { key: 'privacy', label: t('footer:privacy') },
                { key: 'refund_policy', label: t('footer:refund_policy') },
                { key: 'faq', label: t('footer:faq') },
              ].map((item) => (
                <S.FooterLink key={item.key}>{item.label}</S.FooterLink>
              ))}
            </S.LinksList>
          </S.LinksColumn>

          {/* Col 4 */}
          <S.AppColumn>
            <S.ColumnTitle style={{ marginBottom: '4px' }}>
              {t('footer:app_title')}
            </S.ColumnTitle>
            <S.AppDescription>{t('footer:app_desc')}</S.AppDescription>

            {/* App download */}
            <S.AppDownloadBox>
              <Smartphone size={24} style={{ color: '#FFB955' }} />
              <S.AppDownloadTextCol>
                <S.AppDownloadSub>{t('footer:download_on')}</S.AppDownloadSub>
                <S.AppDownloadTitle>App Store & Google Play</S.AppDownloadTitle>
              </S.AppDownloadTextCol>
            </S.AppDownloadBox>

            {/* Payment security */}
            <S.PaymentSection>
              <S.PaymentTitle>{t('footer:secure_payment')}</S.PaymentTitle>
              <S.PaymentBadgesWrapper>
                {['VNPAY', 'MOMO', 'VISA', 'MASTERCARD'].map((badge) => (
                  <S.PaymentBadge key={badge}>
                    <S.PaymentBadgeText>{badge}</S.PaymentBadgeText>
                  </S.PaymentBadge>
                ))}
              </S.PaymentBadgesWrapper>
            </S.PaymentSection>
          </S.AppColumn>
        </S.TopSection>

        {/* Bottom Section */}
        <S.BottomSection>
          <S.CopyrightText>{t('footer:copyright')}</S.CopyrightText>
          <S.BottomLinksGroup>
            {[
              { key: 'privacy', label: t('footer:privacy') },
              { key: 'terms', label: t('footer:terms') },
              { key: 'contact_ads', label: t('footer:contact_ads') },
            ].map((link) => (
              <S.BottomLink key={link.key}>{link.label}</S.BottomLink>
            ))}
          </S.BottomLinksGroup>
        </S.BottomSection>
      </S.FooterInner>
    </S.FooterContainer>
  );
};
