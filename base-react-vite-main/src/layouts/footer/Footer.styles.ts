import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--bg-primary, #0b0b0c);
  padding-top: 40px;
  padding-bottom: 24px;
  box-shadow: 0px -1px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: var(--content-max-width, 1280px);
  padding-left: var(--page-gutter, 24px);
  padding-right: var(--page-gutter, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.md} {
    padding-left: var(--page-gutter-compact, 16px);
    padding-right: var(--page-gutter-compact, 16px);
  }

  @media ${media.xs} {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 32px;
  width: 100%;
  padding-bottom: 48px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media ${media.lg} {
    grid-template-columns: 1.4fr 1fr;
    gap: 32px 24px;
  }

  @media ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: 28px 16px;
  }

  @media ${media.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 16px;

  @media ${media.md} {
    grid-column: span 2;
  }

  @media ${media.sm} {
    grid-column: span 1;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  cursor: pointer;
`;

export const LogoIconBadge = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: linear-gradient(to top right, var(--primary, #ff535a), var(--primary-hover, #ff7b54), var(--secondary, #ffb955));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a0008;
  box-shadow: 0px 0px 20px rgba(255, 83, 90, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const LogoTextCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoTitle = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  line-height: 22px;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const LogoPhim = styled.span`
  color: #ffffff;
  filter: drop-shadow(0 2px 8px rgba(255, 179, 176, 0.3));
`;

export const LogoBook = styled.span`
  color: var(--secondary, #ffb955);
  font-weight: 900;
  margin-left: 2px;
  filter: drop-shadow(0 2px 10px rgba(255, 185, 85, 0.4));
`;

export const LogoSub = styled.div`
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--text-secondary, #ae8786);
  line-height: 12px;
  text-transform: uppercase;
  white-space: nowrap;
  margin-top: 3px;
`;

export const BrandDescription = styled.p`
  width: 100%;
  max-width: 448px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: var(--text-secondary, #ae8786);
  margin: 0;
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 20px;
`;

export const ContactLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary, #e5e2e3);
  letter-spacing: 0.28px;
`;

export const ContactHotline = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: var(--secondary, #ffb955);
  letter-spacing: 0.28px;
`;

export const ContactEmail = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary, #ae8786);
  letter-spacing: 0.18px;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 8px;
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary, #e5e2e3);
  line-height: 26px;
  margin: 0 0 8px 0;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterLink = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary, #ae8786);
  line-height: 22px;
  letter-spacing: 0.14px;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: var(--text-primary, #ffffff);
  }
`;

export const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;

  ${ColumnTitle} {
    margin-bottom: 4px;
  }

  @media ${media.md} {
    grid-column: span 2;
  }

  @media ${media.sm} {
    grid-column: span 1;
  }
`;

export const AppDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary, #ae8786);
  line-height: 18px;
  letter-spacing: 0.18px;
  margin: 0;
  min-height: 36px;
`;

export const AppDownloadBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  width: 100%;
  height: 72px;
  background-color: rgba(42, 42, 43, 0.6);
  border-radius: 12px;
  margin-top: 8px;
`;

export const AppDownloadTextCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  justify-content: center;
  min-width: 0;
`;

export const AppDownloadSub = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--text-secondary, #ae8786);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  line-height: 16px;
`;

export const AppDownloadTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary, #e5e2e3);
  letter-spacing: 0.28px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  width: 100%;
  gap: 8px;
`;

export const PaymentTitle = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--text-secondary, #ae8786);
  text-transform: uppercase;
  letter-spacing: 0.55px;
  line-height: 16px;
`;

export const PaymentBadgesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const PaymentBadge = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  height: 28px;
  background-color: var(--bg-elevated, #201f20);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentBadgeText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--text-secondary, #ae8786);
  letter-spacing: 0.66px;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  min-height: 42px;
  padding-top: 24px;

  @media ${media.md} {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

export const CopyrightText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary, #ae8786);
  letter-spacing: 0.18px;
  text-align: left;

  @media ${media.md} {
    text-align: center;
  }
`;

export const BottomLinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${media.sm} {
    gap: 12px;
  }
`;

export const BottomLink = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary, #ae8786);
  letter-spacing: 0.18px;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: var(--text-primary, #e5e2e3);
  }
`;
