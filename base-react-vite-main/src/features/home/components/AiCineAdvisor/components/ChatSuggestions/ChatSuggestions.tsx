import type { FC } from 'react';
import { Sparkles, Zap, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from '../../AiCineAdvisor.styles';

export const ChatSuggestions: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateBooking = () => {
    navigate('/dat-ve');
  };

  return (
    <>
      {/* Card 1: Oppenheimer */}
      <S.MovieCard>
        <S.CardTopGroup>
          <S.CardHeaderRow>
            <S.MatchBadge>
              <Sparkles color="#FFB3B0" size={12} fill="currentColor" />
              <S.MatchText>{t('home:advisor.card1_match')}</S.MatchText>
            </S.MatchBadge>
            <S.SourceText>{t('home:advisor.card1_source')}</S.SourceText>
          </S.CardHeaderRow>
          <S.MovieTitle>{t('home:advisor.card1_title')}</S.MovieTitle>
          <S.MovieDescription>
            {t('home:advisor.card1_desc')}
          </S.MovieDescription>
          <S.InfoBox>
            <S.IconContainer>
              <MapPin color="#FFB955" size={16} />
            </S.IconContainer>
            <S.InfoCol>
              <S.InfoLabel>
                {t('home:advisor.card1_info')}
              </S.InfoLabel>
              <S.InfoValue>CGV Vincom Center Landmark 81 • 20:15</S.InfoValue>
            </S.InfoCol>
          </S.InfoBox>
        </S.CardTopGroup>
        <S.CardBottomRow>
          <S.PriceGroup>
            <S.PriceValue>{t('home:advisor.card1_price')}</S.PriceValue>
            <S.PriceUnit>{t('home:advisor.card1_unit')}</S.PriceUnit>
          </S.PriceGroup>
          <S.PrimaryButton onClick={handleNavigateBooking}>
            <S.PrimaryButtonText>{t('home:advisor.card1_btn')}</S.PrimaryButtonText>
          </S.PrimaryButton>
        </S.CardBottomRow>
      </S.MovieCard>

      {/* Card 2: Mai */}
      <S.MovieCard>
        <S.CardTopGroup>
          <S.CardHeaderRow>
            <S.SoonBadge>
              <Zap color="#FFB955" size={12} fill="currentColor" />
              <S.SoonText>{t('home:advisor.card2_soon')}</S.SoonText>
            </S.SoonBadge>
            <S.SourceText>{t('home:advisor.card2_distance')}</S.SourceText>
          </S.CardHeaderRow>
          <S.MovieTitle>{t('home:advisor.card2_title')}</S.MovieTitle>
          <S.MovieDescription>
            {t('home:advisor.card2_desc')}
          </S.MovieDescription>
          <S.InfoBox>
            <S.IconContainer>
              <Car color="#FFB3B0" size={16} />
            </S.IconContainer>
            <S.InfoCol>
              <S.InfoLabel>{t('home:advisor.card2_info')}</S.InfoLabel>
              <S.InfoValue>{t('home:advisor.card2_promo')}</S.InfoValue>
            </S.InfoCol>
          </S.InfoBox>
        </S.CardTopGroup>
        <S.CardBottomRow>
          <S.PriceGroup>
            <S.PriceValue>{t('home:advisor.card2_price')}</S.PriceValue>
            <S.PriceUnit>{t('home:advisor.card2_unit')}</S.PriceUnit>
          </S.PriceGroup>
          <S.SecondaryButton onClick={handleNavigateBooking}>
            <S.SecondaryButtonText>{t('home:advisor.card2_btn')}</S.SecondaryButtonText>
          </S.SecondaryButton>
        </S.CardBottomRow>
      </S.MovieCard>
    </>
  );
};
