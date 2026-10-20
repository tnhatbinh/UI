import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import * as S from './ExclusiveOffersCard.styles';

export function ExclusiveOffersCard() {
  const { t } = useTranslation();
  const [hasOfferSneak, setHasOfferSneak] = useState(true);
  const [hasOfferVip, setHasOfferVip] = useState(true);
  const [hasOfferSnacks, setHasOfferSnacks] = useState(false);
  const [hasOfferDigest, setHasOfferDigest] = useState(true);

  const handleToggleOfferSneak = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasOfferSneak(e.target.checked);
  };

  const handleToggleOfferVip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasOfferVip(e.target.checked);
  };

  const handleToggleOfferSnacks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasOfferSnacks(e.target.checked);
  };

  const handleToggleOfferDigest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasOfferDigest(e.target.checked);
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Sparkles size={16} color="#ffb955" />
            <span>{t('profile:exclusive_offers_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:exclusive_offers_sub')}
          </span>
        </div>
      </div>

      <S.CheckOptionList>
        <label className="check-card">
          <input
            type="checkbox"
            checked={hasOfferSneak}
            onChange={handleToggleOfferSneak}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                {t('profile:offer_sneak_title')}
              </span>
            </div>
            <span className="desc">
              {t('profile:offer_sneak_desc')}
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={hasOfferVip}
            onChange={handleToggleOfferVip}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">{t('profile:offer_vip_title')}</span>
              <span className="pill gold">{t('profile:offer_vip_badge')}</span>
            </div>
            <span className="desc">
              {t('profile:offer_vip_desc')}
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={hasOfferSnacks}
            onChange={handleToggleOfferSnacks}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                {t('profile:offer_snacks_title')}
              </span>
            </div>
            <span className="desc">
              {t('profile:offer_snacks_desc')}
            </span>
          </div>
        </label>

        <label className="check-card">
          <input
            type="checkbox"
            checked={hasOfferDigest}
            onChange={handleToggleOfferDigest}
          />
          <div className="text">
            <div className="title-line">
              <span className="title">
                {t('profile:offer_digest_title')}
              </span>
            </div>
            <span className="desc">
              {t('profile:offer_digest_desc')}
            </span>
          </div>
        </label>
      </S.CheckOptionList>
    </S.Card>
  );
}
