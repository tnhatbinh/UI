import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import * as S from './ExclusiveOffersCard.styles';

export function ExclusiveOffersCard() {
  const [offerSneak, setOfferSneak] = useState(true);
  const [offerVip, setOfferVip] = useState(true);
  const [offerSnacks, setOfferSnacks] = useState(false);
  const [offerDigest, setOfferDigest] = useState(true);

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
            checked={offerSneak}
            onChange={(e) => setOfferSneak(e.target.checked)}
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
            checked={offerVip}
            onChange={(e) => setOfferVip(e.target.checked)}
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
            checked={offerSnacks}
            onChange={(e) => setOfferSnacks(e.target.checked)}
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
            checked={offerDigest}
            onChange={(e) => setOfferDigest(e.target.checked)}
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
