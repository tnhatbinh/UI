import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import * as S from './RecentTransactionsCard.styles';

export function RecentTransactionsCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateTickets = () => {
    navigate('/ve-cua-toi');
  };

  return (
    <S.MainCard>
      <div className="card-top-bar">
        <div className="title-left">
          <h3>
            <Clock size={16} color="#ff535a" />
            <span>{t('profile:recent_transactions_title')}</span>
          </h3>
        </div>
        <span className="see-all-link" onClick={handleNavigateTickets}>
          {t('common:see_more')}
        </span>
      </div>

      <S.RecentTxList>
        <div className="tx-item">
          <div className="info">
            <span className="name">{t('profile:tx1_name')}</span>
            <span className="sub">{t('profile:tx1_sub')}</span>
          </div>
          <div className="amt-status">
            <span className="amt">- 380.000 đ</span>
            <span className="status">{t('profile:tx_status_success')}</span>
          </div>
        </div>

        <div className="tx-item">
          <div className="info">
            <span className="name">{t('profile:tx2_name')}</span>
            <span className="sub">{t('profile:tx2_sub')}</span>
          </div>
          <div className="amt-status">
            <span className="amt">- 145.000 đ</span>
            <span className="status">{t('profile:tx_status_success')}</span>
          </div>
        </div>
      </S.RecentTxList>
    </S.MainCard>
  );
}
