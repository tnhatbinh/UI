import { FileText, Edit } from 'lucide-react';
import * as S from './VatInvoiceCard.styles';

export function VatInvoiceCard() {
  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <FileText size={16} color="#ff535a" />
            <span>Hóa đơn điện tử VAT</span>
          </h3>
        </div>
        <span className="badge-count">Doanh nghiệp</span>
      </div>

      <S.VatConfigBox>
        <p className="desc">
          Thông tin cấu hình mặc định để xuất hóa đơn điện tử tự động khi mua vé
          đoàn hoặc tiếp khách.
        </p>

        <div className="vat-details">
          <div className="detail-row">
            <span className="label">TÊN CÔNG TY</span>
            <span className="val">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ CINEMA MEDIA VIỆT NAM
            </span>
          </div>
          <div className="detail-row">
            <span className="label">MÃ SỐ THUẾ (MST)</span>
            <span className="val">0316294021</span>
          </div>
          <div className="detail-row">
            <span className="label">EMAIL NHẬN HÓA ĐƠN</span>
            <span className="val">ketoan@cinemavn.com</span>
          </div>
          <div className="detail-row">
            <span className="label">ĐỊA CHỈ TRỤ SỞ</span>
            <span className="val">
              Tầng 18, Bitexco Financial Tower, Quận 1, TP. Hồ Chí Minh
            </span>
          </div>
        </div>

        <button
          className="edit-vat-btn"
          onClick={() => alert('Cập nhật thông tin xuất hóa đơn VAT...')}
        >
          <Edit size={12} />
          <span>Chỉnh sửa thông tin công ty</span>
        </button>
      </S.VatConfigBox>
    </S.MainCard>
  );
}
