import type { FC } from "react";
import { Film, Mail, Smartphone } from "lucide-react";
import { BiPhone } from "react-icons/bi";
import * as S from "./footer.styles";

export const Footer: FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterInner>
        {/* Top Section */}
        <S.TopSection>
          {/* Col 1 */}
          <S.BrandColumn>
            {/* Logo */}
            <S.LogoWrapper onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
            <S.BrandDescription>
              Nền tảng đặt vé xem phim điện ảnh tiêu chuẩn quốc tế số 1 Việt Nam. Trải nghiệm không gian rạp sang trọng, phòng chiếu IMAX, 4DX, ScreenX với công nghệ thanh toán tức thì và ưu đãi thành viên thượng lưu độc quyền.
            </S.BrandDescription>

            {/* Contacts */}
            <S.ContactsList>
              <S.ContactItem>
                <BiPhone style={{ color: "#FFB955" }} size={14} />
                <S.ContactLabel>Hotline Hỗ Trợ 24/7:</S.ContactLabel>
                <S.ContactHotline>1900 8888 99</S.ContactHotline>
              </S.ContactItem>
              <S.ContactItem>
                <Mail style={{ color: "#AE8786" }} size={12} />
                <S.ContactEmail>support@phimbook.vn</S.ContactEmail>
              </S.ContactItem>
            </S.ContactsList>
          </S.BrandColumn>

          {/* Col 2 */}
          <S.LinksColumn>
            <S.ColumnTitle>Hệ Thống Rạp Đối Tác</S.ColumnTitle>
            <S.LinksList>
              {[
                "CGV Cinemas Vietnam",
                "Lotte Cinema",
                "BHD Star Cineplex",
                "Galaxy Studio",
                "Beta Cinemas",
                "Cinestar Cinema",
              ].map((item) => (
                <S.FooterLink key={item}>{item}</S.FooterLink>
              ))}
            </S.LinksList>
          </S.LinksColumn>

          {/* Col 3 */}
          <S.LinksColumn>
            <S.ColumnTitle>Thông Tin & Chính Sách</S.ColumnTitle>
            <S.LinksList>
              {[
                "Về chúng tôi",
                "Quy chế hoạt động",
                "Điều khoản dịch vụ",
                "Chính sách bảo mật",
                "Chính sách hoàn & đổi vé",
                "Hỏi đáp (FAQ)",
              ].map((item) => (
                <S.FooterLink key={item}>{item}</S.FooterLink>
              ))}
            </S.LinksList>
          </S.LinksColumn>

          {/* Col 4 */}
          <S.AppColumn>
            <S.ColumnTitle style={{ marginBottom: "4px" }}>
              Tải Ứng Dụng & Kết Nối
            </S.ColumnTitle>
            <S.AppDescription>
              Tải app PhimBook nhận ngay voucher bắp nước miễn phí
            </S.AppDescription>

            {/* App download */}
            <S.AppDownloadBox>
              <Smartphone size={24} style={{ color: "#FFB955" }} />
              <S.AppDownloadTextCol>
                <S.AppDownloadSub>Tải trên</S.AppDownloadSub>
                <S.AppDownloadTitle>App Store & Google Play</S.AppDownloadTitle>
              </S.AppDownloadTextCol>
            </S.AppDownloadBox>

            {/* Payment security */}
            <S.PaymentSection>
              <S.PaymentTitle>THANH TOÁN BẢO MẬT</S.PaymentTitle>
              <S.PaymentBadgesWrapper>
                {["VNPAY", "MOMO", "VISA", "MASTERCARD"].map((badge) => (
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
          <S.CopyrightText>
            © 2024 PhimBook Entertainment Joint Stock Co, Giấy phép MXH số 188/GP-BTTTT cấp bởi Bộ TT&TT.
          </S.CopyrightText>
          <S.BottomLinksGroup>
            {["Bảo mật", "Điều khoản", "Liên hệ quảng cáo"].map((link) => (
              <S.BottomLink key={link}>{link}</S.BottomLink>
            ))}
          </S.BottomLinksGroup>
        </S.BottomSection>
      </S.FooterInner>
    </S.FooterContainer>
  );
};
