import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tv, Volume2, Sliders, Armchair } from 'lucide-react';
import * as S from './CinemaTechCard.styles';

export function CinemaTechCard() {
  const { t } = useTranslation();
  const [hasTechImax, setHasTechImax] = useState(true);
  const [hasTechAtmos, setHasTechAtmos] = useState(true);
  const [hasTech4dx, setHasTech4dx] = useState(true);
  const [hasTechLounge, setHasTechLounge] = useState(true);

  const handleToggleTechImax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasTechImax(e.target.checked);
  };

  const handleToggleTechAtmos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasTechAtmos(e.target.checked);
  };

  const handleToggleTech4dx = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasTech4dx(e.target.checked);
  };

  const handleToggleTechLounge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasTechLounge(e.target.checked);
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <Tv size={17} color="#ff535a" />
            <span>{t('profile:cinema_tech_title')}</span>
          </h3>
          <span className="sub">
            {t('profile:cinema_tech_desc')}
          </span>
        </div>
      </div>

      <S.TechCheckList>
        <label className="tech-item">
          <div className="left">
            <div className="icon-box">
              <Tv size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:tech_imax_name')}</span>
              <span className="desc">
                {t('profile:tech_imax_desc')}
              </span>
            </div>
          </div>
          <input
            type="checkbox"
            checked={hasTechImax}
            onChange={handleToggleTechImax}
          />
        </label>

        <label className="tech-item">
          <div className="left">
            <div className="icon-box">
              <Volume2 size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:tech_atmos_name')}</span>
              <span className="desc">{t('profile:tech_atmos_desc')}</span>
            </div>
          </div>
          <input
            type="checkbox"
            checked={hasTechAtmos}
            onChange={handleToggleTechAtmos}
          />
        </label>

        <label className="tech-item">
          <div className="left">
            <div className="icon-box">
              <Sliders size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:tech_4dx_name')}</span>
              <span className="desc">
                {t('profile:tech_4dx_desc')}
              </span>
            </div>
          </div>
          <input
            type="checkbox"
            checked={hasTech4dx}
            onChange={handleToggleTech4dx}
          />
        </label>

        <label className="tech-item">
          <div className="left">
            <div className="icon-box">
              <Armchair size={16} />
            </div>
            <div className="text">
              <span className="name">{t('profile:tech_lounge_name')}</span>
              <span className="desc">
                {t('profile:tech_lounge_desc')}
              </span>
            </div>
          </div>
          <input
            type="checkbox"
            checked={hasTechLounge}
            onChange={handleToggleTechLounge}
          />
        </label>
      </S.TechCheckList>
    </S.Card>
  );
}
