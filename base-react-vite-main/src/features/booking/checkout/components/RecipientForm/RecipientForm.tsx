import type { FC } from 'react';
import type { BookingState } from '../../../context/booking.types';
import { User, Phone, Mail, Lock } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
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
              onChange={(e) => handleChange({ name: e.target.value })}
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
              onChange={(e) => handleChange({ phone: e.target.value })}
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
              onChange={(e) => handleChange({ email: e.target.value })}
              placeholder="tung.nguyen@gmail.com"
            />
          </div>
        </S.FormField>
      </S.FormRowGrid>

      <S.CheckboxLine>
        <label>
          <input
            type="checkbox"
            checked={recipient.sendZalo}
            onChange={(e) => handleChange({ sendZalo: e.target.checked })}
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
