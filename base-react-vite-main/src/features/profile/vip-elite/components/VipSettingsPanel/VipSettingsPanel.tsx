import { Bell, Sliders, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QUICK_PAY_METHODS } from '../../data/vip-elite-data';
import * as S from './VipSettingsPanel.styles';

interface VipSettingsPanelProps {
  notify2h: boolean;
  autoAiTaste: boolean;
  onToggleNotify2h: () => void;
  onToggleAutoAiTaste: () => void;
}

export function VipSettingsPanel({
  notify2h,
  autoAiTaste,
  onToggleNotify2h,
  onToggleAutoAiTaste,
}: VipSettingsPanelProps) {
  const navigate = useNavigate();

  return (
    <S.SectionCard>
      <div className="card-title-bar">
        <div className="title-left">
          <div className="icon-wrap">
            <Sliders size={18} />
          </div>
          <h3>Tiện Ích & Thiết Lập</h3>
        </div>
        <span style={{ fontSize: '11px', color: '#ae8786' }}>
          Tự động đồng bộ
        </span>
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
            className={`switch ${notify2h ? '' : 'off'}`}
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
            className={`switch ${autoAiTaste ? '' : 'off'}`}
            onClick={onToggleAutoAiTaste}
          />
        </S.ToggleRow>
      </div>

      {/* 1-Click Payments */}
      <div style={{ marginTop: '6px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              fontSize: '10px',
              fontWeight: 800,
              color: '#7d6b6a',
              letterSpacing: '0.5px',
            }}
          >
            PHƯƠNG THỨC THANH TOÁN 1-CLICK
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#ff535a',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/profile/PaymentMethods')}
          >
            + Thêm thẻ
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {QUICK_PAY_METHODS.map((method) => (
            <S.QuickPayItem key={method.id}>
              <div className="left">
                <div
                  className="brand-icon"
                  style={{ background: method.brandColor }}
                >
                  {method.brandLabel}
                </div>
                <div className="info">
                  <span className="name">{method.name}</span>
                  <span className="sub">{method.sub}</span>
                </div>
              </div>
              <span className="badge" style={method.badgeStyle}>
                {method.badge}
              </span>
            </S.QuickPayItem>
          ))}
        </div>
      </div>
    </S.SectionCard>
  );
}
