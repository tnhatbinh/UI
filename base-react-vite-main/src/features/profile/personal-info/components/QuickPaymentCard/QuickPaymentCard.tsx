import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import * as S from './QuickPaymentCard.styles';

export const QuickPaymentCard: FC = () => {
  const navigate = useNavigate();

  return (
    <S.Card>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <CreditCard size={16} color="#ff535a" />
            <span>Phương thức thanh toán</span>
          </h3>
        </div>
        <span
          className="edit-link"
          onClick={() => navigate('/profile/PaymentMethods')}
        >
          + Thêm mới
        </span>
      </div>

      <S.SideItemList>
        <div className="side-item">
          <div className="left-info">
            <div
              className="icon-box"
              style={{
                background: '#a50064',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '10px',
              }}
            >
              M
            </div>
            <div className="text">
              <span className="name">Ví Điện Tử MoMo</span>
              <span className="desc">•••• 9988 • Liên kết tự động</span>
            </div>
          </div>
          <CheckCircle2 size={16} color="#ff535a" />
        </div>

        <div className="side-item">
          <div className="left-info">
            <div className="icon-box">
              <CreditCard size={16} />
            </div>
            <div className="text">
              <span className="name">Techcombank Visa Signature</span>
              <span className="desc">•••• 4421 • Hết hạn 11/28</span>
            </div>
          </div>
          <span style={{ color: '#7d6b6a', fontSize: '14px' }}>•••</span>
        </div>
      </S.SideItemList>
    </S.Card>
  );
};

export default QuickPaymentCard;
