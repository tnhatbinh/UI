import type { FC } from 'react';
import type { BookingState } from '../../../context/booking.types';
import { User, Phone, Mail, Lock } from 'lucide-react';
import { useBooking } from '../../../context/useBooking';
import * as S from './RecipientForm.styles';

export interface RecipientFormProps {
  recipient?: BookingState['recipient'];
  onRecipientChange?: (recipient: Partial<BookingState['recipient']>) => void;
}

export const RecipientForm: FC<RecipientFormProps> = ({
  recipient: propRecipient,
  onRecipientChange,
}) => {
  const { state, setRecipient } = useBooking();

  const recipient = propRecipient ?? state.recipient;
  const handleChange = onRecipientChange ?? setRecipient;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ name: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ phone: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ email: e.target.value });
  };

  const handleSendZaloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ isSendZalo: e.target.checked });
  };

  return (
    <S.SectionCard>
      <div className="card-header-row">
        <div className="header-left">
          <div className="icon-box">
            <User size={18} />
          </div>
          <div className="text-meta">
            <span className="title">Thông Tin Người Nhận Vé</span>
            <span className="sub">
              Mã QR và thông tin xác thực rạp sẽ được chuyển đến bạn ngay lập
              tức
            </span>
          </div>
        </div>
        <span className="badge-tag">👑 Khách VIP Elite</span>
      </div>

      <S.FormRowGrid>
        <S.FormField>
          <label>Họ và tên</label>
          <div className="input-wrapper">
            <User size={15} />
            <input
              type="text"
              value={recipient.name}
              onChange={handleNameChange}
              placeholder="Nguyễn Thanh Tùng"
            />
          </div>
        </S.FormField>

        <S.FormField>
          <label>Số điện thoại</label>
          <div className="input-wrapper">
            <Phone size={15} />
            <input
              type="text"
              value={recipient.phone}
              onChange={handlePhoneChange}
              placeholder="0988 123 456"
            />
          </div>
        </S.FormField>

        <S.FormField>
          <label>Email nhận vé QR</label>
          <div className="input-wrapper">
            <Mail size={15} />
            <input
              type="email"
              value={recipient.email}
              onChange={handleEmailChange}
              placeholder="tung.nguyen@gmail.com"
            />
          </div>
        </S.FormField>
      </S.FormRowGrid>

      <S.CheckboxLine>
        <label>
          <input
            type="checkbox"
            checked={recipient.isSendZalo}
            onChange={handleSendZaloChange}
          />
          <span>
            Gửi vé điện tử qua Zalo / SMS miễn phí kèm nhắc nhở lịch chiếu
          </span>
        </label>
        <span className="secure-tag">
          <Lock size={12} />
          <span>Bảo mật e-Ticket 256-bit</span>
        </span>
      </S.CheckboxLine>
    </S.SectionCard>
  );
};
