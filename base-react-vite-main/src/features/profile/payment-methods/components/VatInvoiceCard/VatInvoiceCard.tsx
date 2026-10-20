import { useTranslation } from 'react-i18next';
import { FileText, Edit } from 'lucide-react';
import * as S from './VatInvoiceCard.styles';

export function VatInvoiceCard() {
  const { t } = useTranslation();
  const handleEditVat = () => {};

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <FileText size={16} color="#ff535a" />
            <span>{t('profile:vat_invoice_title')}</span>
          </h3>
        </div>
        <span className="badge-count">{t('profile:business_badge')}</span>
      </div>

      <S.VatConfigBox>
        <p className="desc">
          {t('profile:vat_desc')}
        </p>

        <div className="vat-details">
          <div className="detail-row">
            <span className="label">{t('profile:company_name_label')}</span>
            <span className="val">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ CINEMA MEDIA VIỆT NAM
            </span>
          </div>
          <div className="detail-row">
            <span className="label">{t('profile:tax_id_label')}</span>
            <span className="val">0316294021</span>
          </div>
          <div className="detail-row">
            <span className="label">{t('profile:invoice_email_label')}</span>
            <span className="val">ketoan@cinemavn.com</span>
          </div>
          <div className="detail-row">
            <span className="label">{t('profile:headquarters_label')}</span>
            <span className="val">
              Tầng 18, Bitexco Financial Tower, Quận 1, TP. Hồ Chí Minh
            </span>
          </div>
        </div>

        <button
          className="edit-vat-btn"
          onClick={handleEditVat}
        >
          <Edit size={12} />
          <span>{t('profile:edit_company_info_btn')}</span>
        </button>
      </S.VatConfigBox>
    </S.MainCard>
  );
}
