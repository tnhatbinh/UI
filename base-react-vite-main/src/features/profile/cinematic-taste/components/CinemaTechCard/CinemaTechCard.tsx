import { useState } from 'react';
import { Tv, Volume2, Sliders, Armchair } from 'lucide-react';
import * as S from './CinemaTechCard.styles';

export function CinemaTechCard() {
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
            <span>CÔNG NGHỆ PHÒNG CHIẾU ƯU TIÊN</span>
          </h3>
          <span className="sub">
            Hệ thống sẽ lọc lịch chiếu ưu tiên định dạng trải nghiệm bạn mong
            muốn.
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
              <span className="name">IMAX Laser 3D/2D</span>
              <span className="desc">
                Màn chiếu khổng lồ, tỉ lệ 1.43:1 & 1.90:1
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
              <span className="name">Dolby Atmos 360</span>
              <span className="desc">Âm thanh vòm đa chiều chuyển động</span>
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
              <span className="name">4DX Chuyển Động & Hiệu Ứng</span>
              <span className="desc">
                Ghế rung lắc, gió nước, sương mù sống động
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
              <span className="name">VIP Bed Lounge / Sweetbox Nhung</span>
              <span className="desc">
                Giường nằm cao cấp, phục vụ ẩm thực tại chỗ
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
