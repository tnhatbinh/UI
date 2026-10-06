import { Shield, Sparkles } from 'lucide-react';
import * as S from './TasteBottomActionStrip.styles';

interface TasteBottomActionStripProps {
  onReset: () => void;
  onTrainAI: () => void;
}

export function TasteBottomActionStrip({
  onReset,
  onTrainAI,
}: TasteBottomActionStripProps) {
  return (
    <S.BottomActionStrip>
      <div className="left-sec">
        <Shield size={20} className="icon" />
        <div className="text">
          <span className="title">Dữ liệu được bảo mật chuẩn VIP Privacy</span>
          <span className="sub">
            Chỉ dùng cho mục đích cá nhân hóa khuyến mãi, rạp chiếu & gợi ý suất
            chiếu.
          </span>
        </div>
      </div>

      <div className="right-buttons">
        <button className="reset-btn" onClick={onReset}>
          Khôi phục mặc định
        </button>

        <button className="train-btn" onClick={onTrainAI}>
          <Sparkles size={15} />
          <span>Lưu sở thích & Huấn luyện AI</span>
        </button>
      </div>
    </S.BottomActionStrip>
  );
}
