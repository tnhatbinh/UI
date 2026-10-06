import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0e0e0f;
  padding-top: 40px;
  padding-bottom: 24px;
  box-shadow: 0px -1px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  max-width: 1232px;
  padding-bottom: 48px;
  position: relative;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  gap: 16px;

  @media (min-width: 1024px) {
    width: 420px;
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
  background: linear-gradient(to top right, #ff535a, #ff7b54, #ffb955);
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
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const LogoPhim = styled.span`
  color: #ffffff;
  filter: drop-shadow(0 2px 8px rgba(255, 179, 176, 0.3));
`;

export const LogoBook = styled.span`
  color: #ffb955;
  font-weight: 900;
  margin-left: 2px;
  filter: drop-shadow(0 2px 10px rgba(255, 185, 85, 0.4));
`;

export const LogoSub = styled.div`
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #ae8786;
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
  color: #e7bcba;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5px;
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
  color: #e5e2e3;
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const ContactHotline = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: #ffb3b0;
  letter-spacing: 0.28px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const ContactEmail = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #e7bcba;
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
  gap: 8px;

  @media (min-width: 640px) {
    width: auto;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #e5e2e3;
  line-height: 26px;
  margin: 0 0 8px 0;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterLink = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #e7bcba;
  line-height: 22px;
  letter-spacing: 0.14px;
  cursor: pointer;
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }

  @media (min-width: 1024px) {
    width: 240px;
  }
`;

export const AppDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #e7bcba;
  line-height: 18px;
  letter-spacing: 0.18px;
  margin: 0;
  min-height: 36px;
  font-family: "Be Vietnam Pro", sans-serif;
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
`;

export const AppDownloadSub = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #e7bcba;
  letter-spacing: 0.66px;
  text-transform: uppercase;
  line-height: 16px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const AppDownloadTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #e5e2e3;
  letter-spacing: 0.28px;
  line-height: 20px;
  font-family: "Be Vietnam Pro", sans-serif;
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
  color: #ae8786;
  text-transform: uppercase;
  letter-spacing: 0.55px;
  line-height: 16px;
  font-family: "Be Vietnam Pro", sans-serif;
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
  background-color: #201f20;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentBadgeText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #e7bcba;
  letter-spacing: 0.66px;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: 1232px;
  min-height: 42px;
  padding-top: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CopyrightText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #ae8786;
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const BottomLinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BottomLink = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #ae8786;
  letter-spacing: 0.18px;
  cursor: pointer;
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.15s ease;

  &:hover {
    color: #e5e2e3;
  }
`;
