import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import * as S from './ExclusiveOffersCard.styles';

export function ExclusiveOffersCard() {
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
            <span>Ưu đãi & Sự kiện độc quyền</span>
          </h3>
          <span className="sub">
            Đón đầu các suất chiếu đặc biệt và quyền lợi dành riêng cho hội
            viên.
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
                Vé mở bán sớm (Sneak Show) & Suất chiếu IMAX
              </span>
            </div>
            <span className="desc">
              Thông báo mở suất trước 48h cho các bom tấn Hollywood và liên hoan
              phim quốc tế.
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
              <span className="title">Đặc quyền VIP Elite & Thẻ Diamond</span>
              <span className="pill gold">DÀNH RIÊNG CHO BẠN</span>
            </div>
            <span className="desc">
              Voucher sinh nhật, vé mời Premiere thảm đỏ và nâng hạng ghế
              Sweetbox miễn phí.
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
                Khuyến mãi bắp nước combo & quà tặng phim
              </span>
            </div>
            <span className="desc">
              Tin khuyến mãi ly sưu tầm giới hạn, combo bắp phô mai và phụ kiện
              lưu niệm độc quyền.
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
                Bản tin điện ảnh hàng tuần (Weekly Cinema Digest)
              </span>
            </div>
            <span className="desc">
              Được AI trợ lý tuyển chọn riêng theo gu phim hành động, khoa học
              viễn tưởng của bạn.
            </span>
          </div>
        </label>
      </S.CheckOptionList>
    </S.Card>
  );
}
