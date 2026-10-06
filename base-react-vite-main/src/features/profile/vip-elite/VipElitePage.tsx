import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit3, Gift, Sparkles } from 'lucide-react';
import * as S from './VipElitePage.styles';
import { UserProfileCard } from './components/UserProfileCard';
import { CinePassCard } from './components/CinePassCard';
import { AiTasteSection } from './components/AiTasteSection';
import { MonthlyChallenges } from './components/MonthlyChallenges';
import { VoucherVault } from './components/VoucherVault';
import { VipSettingsPanel } from './components/VipSettingsPanel';
import { VipBottomSecurityStrip } from './components/VipBottomSecurityStrip';

export default function VipElitePage() {
  const navigate = useNavigate();
  const [notify2h, setNotify2h] = useState(true);
  const [autoAiTaste, setAutoAiTaste] = useState(true);
  const [claimedReward, setClaimedReward] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleClaimMission = () => {
    setClaimedReward(true);
    showToast(
      'Chúc mừng! Đã cộng 01 Voucher Combo Bắp Nước 0đ vào ví của bạn!',
    );
  };

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* Breadcrumb */}
        <S.Breadcrumb>
          <span>PHIMBOOK PRIVILEGE CENTER</span>
          <span className="separator">/</span>
          <span className="current">HỒ SƠ CÁ NHÂN</span>
        </S.Breadcrumb>

        {/* Header Row */}
        <S.HeaderRow>
          <div className="title-area">
            <h1>Hồ Sơ VIP Elite & Đặc Quyền</h1>
            <Sparkles size={24} className="badge-icon" />
          </div>

          <div className="action-buttons">
            <button
              className="edit-btn"
              onClick={() => navigate('/profile/personal-info')}
            >
              <Edit3 size={14} />
              <span>Chỉnh sửa hồ sơ</span>
            </button>

            <button
              className="reward-btn"
              onClick={() =>
                showToast(
                  'Bạn đang có 1.250 PhimPoints. Sẵn sàng đổi vé IMAX 2D miễn phí!',
                )
              }
            >
              <Gift size={15} />
              <span>Đổi quà & Thưởng điểm</span>
            </button>
          </div>
        </S.HeaderRow>

        {/* Top Hero Section: Profile Card + CinePass */}
        <S.HeroGrid>
          <UserProfileCard />
          <CinePassCard />
        </S.HeroGrid>

        {/* Main Two-Column Content Grid */}
        <S.MainTwoColGrid>
          {/* Left Column */}
          <S.Column $gap="20px">
            <AiTasteSection
              onRefresh={() =>
                showToast(
                  'Đã đồng bộ khẩu vị điện ảnh với dữ liệu rạp mới nhất!',
                )
              }
            />
            <MonthlyChallenges
              claimedReward={claimedReward}
              onClaimMission={handleClaimMission}
            />
          </S.Column>

          {/* Right Column */}
          <S.Column $gap="20px">
            <VoucherVault />
            <VipSettingsPanel
              notify2h={notify2h}
              autoAiTaste={autoAiTaste}
              onToggleNotify2h={() => setNotify2h((v) => !v)}
              onToggleAutoAiTaste={() => setAutoAiTaste((v) => !v)}
            />
          </S.Column>
        </S.MainTwoColGrid>

        {/* Bottom Security & Policy Strip */}
        <VipBottomSecurityStrip
          onNavigateTickets={() => navigate('/ve-cua-toi')}
          onShowPrivilegeTerms={() =>
            showToast('Đang mở điều khoản quyền lợi VIP...')
          }
          onLogout={() => {
            showToast('Đã đăng xuất an toàn.');
            navigate('/login');
          }}
        />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <S.ToastNotification>
            <Sparkles size={16} color="#ffb955" />
            <span>{toastMessage}</span>
          </S.ToastNotification>
        )}
      </S.InnerWrapper>
    </S.PageContainer>
  );
}
