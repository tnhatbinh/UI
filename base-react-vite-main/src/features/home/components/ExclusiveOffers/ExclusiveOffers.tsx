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
import * as S from './ExclusiveOffers.styles';

export const ExclusiveOffers: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateExplore = () => {
    navigate('/kham-pha');
  };

  const handleNavigateBooking = () => {
    navigate('/dat-ve/1?booking=true');
  };

  const handleNavigateVipElite = () => {
    navigate('/profile/vip-elite');
  };

  return (
    <S.ExclusiveOffersSection>
      <S.Container>
        {/* Header Section */}
        <S.HeaderWrapper>
          <S.HeaderTextGroup>
            <S.HeaderSubtitle>{t('home:offers.subtitle')}</S.HeaderSubtitle>
            <S.HeaderTitle>{t('home:offers.title')}</S.HeaderTitle>
          </S.HeaderTextGroup>
          <S.HeaderButton className="group" onClick={handleNavigateExplore}>
            <S.HeaderButtonText>{t('home:offers.view_all_btn')}</S.HeaderButtonText>
            <ChevronRight color="#FFB3B0" size={14} />
          </S.HeaderButton>
        </S.HeaderWrapper>

        {/* Promotional Cards Triplet */}
        <S.CardsGrid>
          {/* Card 1: Bank Partners */}
          <S.CardWrapper>
            <S.Card1Blur />

            <S.CardContent>
              <S.CardHeader>
                <S.Badge $bg="#2A2A2B">
                  <S.BadgeText $color="#FFB955">THẺ TÍN DỤNG VIP</S.BadgeText>
                </S.Badge>
                <S.CardStatus $color="#AE8786">Hết hạn: 31/12</S.CardStatus>
              </S.CardHeader>
              <S.CardTitle>Mua 1 Tặng 1 Suất Chiếu IMAX Cuối Tuần</S.CardTitle>
              <S.CardDescription>
                Dành riêng cho chủ thẻ Visa Signature, Mastercard World Elite
                của Techcombank, VPBank và Vietcombank khi đặt vé qua PhimBook.
              </S.CardDescription>

              {/* Bank Icons */}
              <S.BankIconsWrapper>
                <S.BankIcon>
                  <S.BankIconText>VISA</S.BankIconText>
                </S.BankIcon>
                <S.BankIcon>
                  <S.BankIconText>Mastercard</S.BankIconText>
                </S.BankIcon>
                <S.BankIcon>
                  <S.BankIconText>JCB Elite</S.BankIconText>
                </S.BankIcon>
              </S.BankIconsWrapper>
            </S.CardContent>

            <S.CardButton $variant="dark" onClick={handleNavigateExplore}>
              <S.CardButtonText $color="#E5E2E3" $weight={600}>
                Nhận Mã Khuyến Mãi
              </S.CardButtonText>
              <Gift color="#E5E2E3" size={14} />
            </S.CardButton>
          </S.CardWrapper>

          {/* Card 2: Exclusive Popcorn Combo */}
          <S.CardWrapper>
            <S.Card2Blur />

            <S.CardContent>
              <S.CardHeader>
                <S.Badge $bg="#DC9100">
                  <S.BadgeText $color="#4F3100">COMBO ĐỘC QUYỀN PHIM</S.BadgeText>
                </S.Badge>
                <S.CardStatus $color="#FFB955">Giới Hạn 500 Suất</S.CardStatus>
              </S.CardHeader>
              <S.CardTitle>Combo Sandworm Popcorn Bucket & Cup</S.CardTitle>
              <S.CardDescription>
                Sở hữu xô bắp tạo hình Sâu Cát Dune phiên bản sưu tầm kim loại
                dập nổi kèm bình nước hologram 1000ml trị giá 450.000đ chỉ với
                199.000đ.
              </S.CardDescription>

              <S.CheckmarkItem>
                <CheckCircle2 color="#FFB955" size={13} />
                <S.CardStatus $color="#AE8786">
                  Nhận tại tất cả các rạp CGV & Galaxy
                </S.CardStatus>
              </S.CheckmarkItem>
            </S.CardContent>

            <S.CardButton $variant="gradient" onClick={handleNavigateBooking}>
              <S.CardButtonText $color="#5B000D">
                Đặt Kèm Vé Tiết Kiệm 40%
              </S.CardButtonText>
              <ShoppingCart color="#5B000D" size={16} />
            </S.CardButton>
          </S.CardWrapper>

          {/* Card 3: CinePass Subscription */}
          <S.GradientCardWrapper>
            <S.CardContent>
              <S.CardHeader>
                <S.Badge $bg="#FFB3B0">
                  <S.BadgeText $color="#680010">CINEPASS ELITE PASS</S.BadgeText>
                </S.Badge>
                <S.CardStatus
                  $color="#FFB955"
                  $uppercase={true}
                >
                  VIP MEMBERSHIP
                </S.CardStatus>
              </S.CardHeader>
              <S.CardTitle>Xem Phim Không Giới Hạn Toàn Quốc</S.CardTitle>
              <S.CardDescription>
                Chỉ từ 299.000đ/tháng. Thưởng thức 04 vé 2D/3D miễn phí mỗi
                tháng, nâng hạng vé IMAX không phụ thu ngày thứ Ba và phòng chờ
                VIP Lounge riêng biệt.
              </S.CardDescription>

              <S.CheckmarkList>
                <S.CheckmarkListItem>
                  <CheckCircle2 color="#FFB955" size={14} />
                  <S.CheckmarkListText>
                    Ưu tiên chọn ghế trước 48 giờ
                  </S.CheckmarkListText>
                </S.CheckmarkListItem>
                <S.CheckmarkListItem>
                  <CheckCircle2 color="#FFB955" size={14} />
                  <S.CheckmarkListText>
                    Miễn phí hủy vé & đổi suất không giới hạn
                  </S.CheckmarkListText>
                </S.CheckmarkListItem>
              </S.CheckmarkList>
            </S.CardContent>

            <S.CardButton $variant="black" onClick={handleNavigateVipElite}>
              <S.CardButtonText $color="#FFB3B0">
                Đăng Ký CinePass Ngay
              </S.CardButtonText>
              <Crown color="#FFB3B0" size={15} />
            </S.CardButton>
          </S.GradientCardWrapper>
        </S.CardsGrid>
      </S.Container>
    </S.ExclusiveOffersSection>
  );
};
