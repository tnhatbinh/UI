import { AlertTriangle } from 'lucide-react';
import * as S from './DangerZoneCard.styles';

export function DangerZoneCard() {
  return (
    <S.Container>
      <div className="header-line">
        <AlertTriangle size={16} />
        <span>Vùng kiểm soát nâng cao</span>
      </div>
      <span className="sub">
        Các hành động không thể hoàn tác hoặc khôi phục tự do
      </span>

      <div className="action-row">
        <div className="txt">
          <span className="name">Tạm khóa tài khoản (30 ngày)</span>
          <span className="desc">
            Ẩn hồ sơ thành viên, tạm ngừng nhận thông báo và ưu đãi
          </span>
        </div>
        <button
          className="btn gray"
          onClick={() => alert('Bạn có chắc chắn muốn tạm khóa tài khoản?')}
        >
          Tạm khóa
        </button>
      </div>

      <div className="action-row">
        <div className="txt">
          <span className="name">Xóa vĩnh viễn tài khoản VIP</span>
          <span className="desc">
            Hủy toàn bộ 1.250 PhimPoints, hạng Diamond và vé đã đặt
          </span>
        </div>
        <button
          className="btn red"
          onClick={() =>
            alert(
              'Cảnh báo: Hành động này sẽ xóa vĩnh viễn tài khoản và không thể phục hồi!',
            )
          }
        >
          Xóa tài khoản
        </button>
      </div>
    </S.Container>
  );
}
