import { Bell, Sliders, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QUICK_PAY_METHODS } from '../../data/vip-elite-data';
import * as S from './VipSettingsPanel.styles';

interface VipSettingsPanelProps {
  isNotify2hEnabled: boolean;
  isAutoAiTasteEnabled: boolean;
  onToggleNotify2h: () => void;
  onToggleAutoAiTaste: () => void;
}

export function VipSettingsPanel({
  isNotify2hEnabled,
  isAutoAiTasteEnabled,
  onToggleNotify2h,
  onToggleAutoAiTaste,
}: VipSettingsPanelProps) {
  const navigate = useNavigate();

  const handleNavigatePaymentMethods = () => {
    navigate('/profile/payment-methods');
  };

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Sliders size={18} />
          </div>
          <h3>Tiện Ích & Thiết Lập</h3>
        </div>
        <span className="auto-sync">Tự động đồng bộ</span>
      </div>

      {/* Notification Toggles */}
      <div>
        <S.ToggleRow>
          <div className="text">
            <span className="title">
              <Bell size={13} />
              Nhắc lịch chiếu trước 2 giờ
            </span>
            <span className="sub">
              Gửi push qua app & Zalo kèm mã vạch QR vào thẳng rạp
            </span>
          </div>
          <div
            className={`switch ${isNotify2hEnabled ? '' : 'off'}`}
            onClick={onToggleNotify2h}
          />
        </S.ToggleRow>

        <S.ToggleRow>
          <div className="text">
            <span className="title">
              <Sparkles size={13} />
              Cập nhật phim theo gu AI tự động
            </span>
            <span className="sub">
              Thông báo suất chiếu sớm khi đạo diễn hoặc diễn viên quen thuộc ra
              mắt phim
            </span>
          </div>
          <div
            className={`switch ${isAutoAiTasteEnabled ? '' : 'off'}`}
            onClick={onToggleAutoAiTaste}
          />
        </S.ToggleRow>
      </div>

      {/* 1-Click Payments */}
      <S.QuickPaySection>
        <S.QuickPayHeader>
          <span className="title">PHƯƠNG THỨC THANH TOÁN 1-CLICK</span>
          <span
            className="add-link"
            onClick={handleNavigatePaymentMethods}
          >
            + Thêm thẻ
          </span>
        </S.QuickPayHeader>

        <S.QuickPayList>
          {QUICK_PAY_METHODS.map((method) => (
            <S.QuickPayItem key={method.id}>
              <div className="left">
                <S.BrandIcon $bg={method.brandColor}>
                  {method.brandLabel}
                </S.BrandIcon>
                <div className="info">
                  <span className="name">{method.name}</span>
                  <span className="sub">{method.sub}</span>
                </div>
              </div>
              <span
                className={`badge${method.id === 'visa' ? ' verified' : ''}`}
              >
                {method.badge}
              </span>
            </S.QuickPayItem>
          ))}
        </S.QuickPayList>
      </S.QuickPaySection>
    </S.SectionCard>
  );
}
