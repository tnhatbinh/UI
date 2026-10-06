import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Section,
  Container,
  HeaderContainer,
  TitleGroup,
  Subtitle,
  Title,
  HeaderStatus,
  HeaderStarIcon,
  HeaderStatusText,
  Grid,
  Card,
  ImageContainer,
  CardImage,
  ImageGradient,
  BrandBadge,
  BrandText,
  FormatBadge,
  FormatText,
  ContentContainer,
  CardTitle,
  AddressGroup,
  LocationIcon,
  AddressText,
  DescriptionText,
  ActionRow,
  StatusGroup,
  StatusIndicator,
  StatusText,
  ActionButton,
  ActionButtonText,
} from './LuxuryCinemas.styles';

const cinemas = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop',
    brand: 'CGV Flagship',
    brandColor: '#FFB3B0',
    format: 'IMAX LASER • GOLD CLASS',
    formatBg: '#DC9100',
    formatText: '#4F3100',
    name: 'CGV Vincom Landmark 81',
    address:
      'Tầng B1, TTTM Vincom Landmark 81, 720A Điện Biên Phủ, P.22, Bình Thạnh, TP.HCM',
    desc: 'Trang bị màn hình IMAX lớn nhất Việt Nam cùng hệ thống âm thanh vòm 12 kênh thế hệ mới. Phòng chiếu Gold Class phục vụ trà chiều và chăn len riêng biệt.',
    shows: '28',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    brand: 'Galaxy Premium',
    brandColor: '#FFB955',
    format: 'IMAX LASER • LA ROSA BED',
    formatBg: '#FF535A',
    formatText: '#5B000D',
    name: 'Galaxy Cinema Sala Thủ Thiêm',
    address:
      'Tầng 3, Thiso Mall Sala, Số 10 Mai Chí Thọ, Thủ Thiêm, TP. Thủ Đức, TP.HCM',
    desc: 'Khu phức hợp điện ảnh nghệ thuật đương đại, sở hữu phòng chiếu giường nằm La Rosa sang trọng và hệ thống âm thanh Dolby Atmos hàng đầu.',
    shows: '34',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop',
    brand: 'Lotte Cinema',
    brandColor: '#C2C5DB',
    format: 'CHARLOTTE SUITE • 4DX',
    formatBg: '#353436',
    formatText: '#FFB955',
    name: 'Lotte Cinema Lotte Mall Tây Hồ',
    address:
      'Tầng 4, Lotte Mall West Lake Hanoi, 272 Võ Chí Công, Tây Hồ, Hà Nội',
    desc: 'Phòng chiếu Charlotte Suite đỉnh cao với phòng chờ riêng phục vụ rượu vang, ghế massage chỉnh điện đa điểm và màn hình công nghệ LED Cineum không viền.',
    shows: '42',
  },
];

export const LuxuryCinemas: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Section>
      <Container>
        {/* Header Section */}
        <HeaderContainer>
          <TitleGroup>
            <Subtitle>{t('home:luxury.subtitle')}</Subtitle>
            <Title>{t('home:luxury.title')}</Title>
          </TitleGroup>
          <HeaderStatus>
            <HeaderStarIcon size={18} />
            <HeaderStatusText>{t('home:luxury.status')}</HeaderStatusText>
          </HeaderStatus>
        </HeaderContainer>

        {/* Luxury Cinemas Grid */}
        <Grid>
          {cinemas.map((cinema) => (
            <Card key={cinema.id}>
              {/* Image Container */}
              <ImageContainer>
                {/* Image */}
                <CardImage src={cinema.image} alt={cinema.name} />

                {/* Gradient */}
                <ImageGradient />

                {/* Top Left Badge */}
                <BrandBadge>
                  <BrandText style={{ color: cinema.brandColor }}>
                    {cinema.brand}
                  </BrandText>
                </BrandBadge>

                {/* Bottom Right Badge */}
                <FormatBadge style={{ backgroundColor: cinema.formatBg }}>
                  <FormatText style={{ color: cinema.formatText }}>
                    {cinema.format}
                  </FormatText>
                </FormatBadge>
              </ImageContainer>

              {/* Content Container */}
              <ContentContainer>
                <CardTitle>{cinema.name}</CardTitle>

                <AddressGroup>
                  <LocationIcon size={14} />
                  <AddressText>{cinema.address}</AddressText>
                </AddressGroup>

                <DescriptionText>{cinema.desc}</DescriptionText>
              </ContentContainer>

              {/* Bottom Action Row */}
              <ActionRow>
                <StatusGroup>
                  <StatusIndicator />
                  <StatusText>
                    Đang chiếu: {cinema.shows} suất hôm nay
                  </StatusText>
                </StatusGroup>

                <ActionButton onClick={() => navigate('/lich-chieu')}>
                  <ActionButtonText>Xem Lịch Rạp</ActionButtonText>
                </ActionButton>
              </ActionRow>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
