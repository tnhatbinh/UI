import { useState } from 'react';
import { Save } from 'lucide-react';
import * as S from './EmailFrequencyCard.styles';

interface EmailFrequencyCardProps {
  onToast?: (msg: string) => void;
}

export function EmailFrequencyCard({ onToast }: EmailFrequencyCardProps) {
  const [emailFreq, setEmailFreq] = useState<
    'instant' | 'friday' | 'tickets_only'
  >('friday');

  const handleSave = () => {
    onToast?.('Đã lưu toàn bộ cài đặt thông báo & ưu đãi thành công!');
  };

  const handleCancel = () => {
    setEmailFreq('friday');
    onToast?.('Đã hủy các thay đổi gần nhất.');
  };

  return (
    <S.Card>
      <div className="card-top">
        <div className="title-left">
          <h3>
            <span>Tần suất nhận email tin tức</span>
          </h3>
          <span className="sub">
            Kiểm soát mật độ thư gửi về hòm thư điện tử cá nhân.
          </span>
        </div>
      </div>

      <S.FrequencyList>
        <div
          className={`radio-item ${emailFreq === 'instant' ? 'selected' : ''}`}
          onClick={() => setEmailFreq('instant')}
        >
          <div className="left-txt">
            <span className="title">Tức thì khi có sự kiện hot</span>
            <span className="sub">
              Nhận ngay khi mở bán vé sneak show hoặc có voucher mới
            </span>
          </div>
          <input
            type="radio"
            name="freq"
            checked={emailFreq === 'instant'}
            onChange={() => setEmailFreq('instant')}
          />
        </div>

        <div
          className={`radio-item ${emailFreq === 'friday' ? 'selected' : ''}`}
          onClick={() => setEmailFreq('friday')}
        >
          <div className="left-txt">
            <div className="title-row">
              <span className="title">Tóm tắt mỗi thứ Sáu hàng tuần</span>
              <span className="gold-pill">LÝ TƯỞNG CUỐI TUẦN</span>
            </div>
            <span className="sub">
              1 email duy nhất vào 10:00 sáng Thứ Sáu tổng hợp lịch phim hay
            </span>
          </div>
          <input
            type="radio"
            name="freq"
            checked={emailFreq === 'friday'}
            onChange={() => setEmailFreq('friday')}
          />
        </div>

        <div
          className={`radio-item ${emailFreq === 'tickets_only' ? 'selected' : ''}`}
          onClick={() => setEmailFreq('tickets_only')}
        >
          <div className="left-txt">
            <span className="title">Chỉ nhận email xác nhận vé</span>
            <span className="sub">
              Tắt toàn bộ email quảng cáo, ưu đãi và bản tin định kỳ
            </span>
          </div>
          <input
            type="radio"
            name="freq"
            checked={emailFreq === 'tickets_only'}
            onChange={() => setEmailFreq('tickets_only')}
          />
        </div>

        <div className="btn-row">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Hủy thay đổi
          </button>

          <button type="button" className="save-btn" onClick={handleSave}>
            <Save size={13} />
            <span>Lưu cài đặt thông báo</span>
          </button>
        </div>
      </S.FrequencyList>
    </S.Card>
  );
}
