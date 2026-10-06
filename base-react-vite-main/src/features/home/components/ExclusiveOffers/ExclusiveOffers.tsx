import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Gift,
  ShoppingCart,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  ExclusiveOffersSection,
  Container,
  HeaderWrapper,
  HeaderTextGroup,
  HeaderSubtitle,
  HeaderTitle,
  HeaderButton,
  HeaderButtonText,
  CardsGrid,
  CardWrapper,
  GradientCardWrapper,
  Card1Blur,
  Card2Blur,
  CardContent,
  CardHeader,
  Badge,
  BadgeText,
  CardStatus,
  CardTitle,
  CardDescription,
  BankIconsWrapper,
  BankIcon,
  BankIconText,
  CheckmarkItem,
  CheckmarkList,
  CheckmarkListItem,
  CheckmarkListText,
  CardButton,
  CardButtonText,
} from './ExclusiveOffers.styles';

export const ExclusiveOffers: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ExclusiveOffersSection>
      <Container>
        {/* Header Section */}
        <HeaderWrapper>
          <HeaderTextGroup>
            <HeaderSubtitle>{t('home:offers.subtitle')}</HeaderSubtitle>
            <HeaderTitle>{t('home:offers.title')}</HeaderTitle>
          </HeaderTextGroup>
          <HeaderButton className="group" onClick={() => navigate('/kham-pha')}>
            <HeaderButtonText>{t('home:offers.view_all_btn')}</HeaderButtonText>
            <ChevronRight color="#FFB3B0" size={14} />
          </HeaderButton>
        </HeaderWrapper>

        {/* Promotional Cards Triplet */}
        <CardsGrid>
          {/* Card 1: Bank Partners */}
          <CardWrapper>
            <Card1Blur />

            <CardContent>
              <CardHeader>
                <Badge $bg="#2A2A2B">
                  <BadgeText $color="#FFB955">THẺ TÍN DỤNG VIP</BadgeText>
                </Badge>
                <CardStatus $color="#AE8786">Hết hạn: 31/12</CardStatus>
              </CardHeader>
              <CardTitle>Mua 1 Tặng 1 Suất Chiếu IMAX Cuối Tuần</CardTitle>
              <CardDescription>
                Dành riêng cho chủ thẻ Visa Signature, Mastercard World Elite
                của Techcombank, VPBank và Vietcombank khi đặt vé qua PhimBook.
              </CardDescription>

              {/* Bank Icons */}
              <BankIconsWrapper>
                <BankIcon>
                  <BankIconText>VISA</BankIconText>
                </BankIcon>
                <BankIcon>
                  <BankIconText>Mastercard</BankIconText>
                </BankIcon>
                <BankIcon>
                  <BankIconText>JCB Elite</BankIconText>
                </BankIcon>
              </BankIconsWrapper>
            </CardContent>

            <CardButton $variant="dark" onClick={() => navigate('/kham-pha')}>
              <CardButtonText $color="#E5E2E3" $weight={600}>
                Nhận Mã Khuyến Mãi
              </CardButtonText>
              <Gift color="#E5E2E3" size={14} />
            </CardButton>
          </CardWrapper>

          {/* Card 2: Exclusive Popcorn Combo */}
          <CardWrapper>
            <Card2Blur />

            <CardContent>
              <CardHeader>
                <Badge $bg="#DC9100">
                  <BadgeText $color="#4F3100">COMBO ĐỘC QUYỀN PHIM</BadgeText>
                </Badge>
                <CardStatus $color="#FFB955">Giới Hạn 500 Suất</CardStatus>
              </CardHeader>
              <CardTitle>Combo Sandworm Popcorn Bucket & Cup</CardTitle>
              <CardDescription>
                Sở hữu xô bắp tạo hình Sâu Cát Dune phiên bản sưu tầm kim loại
                dập nổi kèm bình nước hologram 1000ml trị giá 450.000đ chỉ với
                199.000đ.
              </CardDescription>

              <CheckmarkItem>
                <CheckCircle2 color="#FFB955" size={13} />
                <CardStatus $color="#AE8786">
                  Nhận tại tất cả các rạp CGV & Galaxy
                </CardStatus>
              </CheckmarkItem>
            </CardContent>

            <CardButton $variant="gradient" onClick={() => navigate('/dat-ve/1?booking=true')}>
              <CardButtonText $color="#5B000D">
                Đặt Kèm Vé Tiết Kiệm 40%
              </CardButtonText>
              <ShoppingCart color="#5B000D" size={16} />
            </CardButton>
          </CardWrapper>

          {/* Card 3: CinePass Subscription */}
          <GradientCardWrapper>
            <CardContent>
              <CardHeader>
                <Badge $bg="#FFB3B0">
                  <BadgeText $color="#680010">CINEPASS ELITE PASS</BadgeText>
                </Badge>
                <CardStatus
                  $color="#FFB955"
                  $fontFamily="'Liberation Mono', monospace"
                  $uppercase={true}
                >
                  VIP MEMBERSHIP
                </CardStatus>
              </CardHeader>
              <CardTitle>Xem Phim Không Giới Hạn Toàn Quốc</CardTitle>
              <CardDescription>
                Chỉ từ 299.000đ/tháng. Thưởng thức 04 vé 2D/3D miễn phí mỗi
                tháng, nâng hạng vé IMAX không phụ thu ngày thứ Ba và phòng chờ
                VIP Lounge riêng biệt.
              </CardDescription>

              <CheckmarkList>
                <CheckmarkListItem>
                  <CheckCircle2 color="#FFB955" size={14} />
                  <CheckmarkListText>
                    Ưu tiên chọn ghế trước 48 giờ
                  </CheckmarkListText>
                </CheckmarkListItem>
                <CheckmarkListItem>
                  <CheckCircle2 color="#FFB955" size={14} />
                  <CheckmarkListText>
                    Miễn phí hủy vé & đổi suất không giới hạn
                  </CheckmarkListText>
                </CheckmarkListItem>
              </CheckmarkList>
            </CardContent>

            <CardButton $variant="black" onClick={() => navigate('/profile/vip-elite')}>
              <CardButtonText $color="#FFB3B0">
                Đăng Ký CinePass Ngay
              </CardButtonText>
              <Crown color="#FFB3B0" size={15} />
            </CardButton>
          </GradientCardWrapper>
        </CardsGrid>
      </Container>
    </ExclusiveOffersSection>
  );
};
