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
  const [isNotify2hEnabled, setIsNotify2hEnabled] = useState(true);
  const [isAutoAiTasteEnabled, setIsAutoAiTasteEnabled] = useState(true);
  const [hasClaimedReward, setHasClaimedReward] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleClaimMission = () => {
    setHasClaimedReward(true);
    showToast(
      'Chúc mừng! Đã cộng 01 Voucher Combo Bắp Nước 0đ vào ví của bạn!',
    );
  };

  const handleNavigateToPersonalInfo = () => {
    navigate('/profile/personal-info');
  };

  const handleRewardClick = () => {
    showToast(
      'Bạn đang có 1.250 PhimPoints. Sẵn sàng đổi vé IMAX 2D miễn phí!',
    );
  };

  const handleRefreshAiTaste = () => {
    showToast('Đã đồng bộ khẩu vị điện ảnh với dữ liệu rạp mới nhất!');
  };

  const handleToggleNotify2h = () => {
    setIsNotify2hEnabled((v) => !v);
  };

  const handleToggleAutoAiTaste = () => {
    setIsAutoAiTasteEnabled((v) => !v);
  };

  const handleNavigateTickets = () => {
    navigate('/ve-cua-toi');
  };

  const handleShowPrivilegeTerms = () => {
    showToast('Đang mở điều khoản quyền lợi VIP...');
  };

  const handleLogout = () => {
    showToast('Đã đăng xuất an toàn.');
    navigate('/login');
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
              onClick={handleNavigateToPersonalInfo}
            >
              <Edit3 size={14} />
              <span>Chỉnh sửa hồ sơ</span>
            </button>

            <button
              className="reward-btn"
              onClick={handleRewardClick}
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
              onRefresh={handleRefreshAiTaste}
            />
            <MonthlyChallenges
              hasClaimedReward={hasClaimedReward}
              onClaimMission={handleClaimMission}
            />
          </S.Column>

          {/* Right Column */}
          <S.Column $gap="20px">
            <VoucherVault />
            <VipSettingsPanel
              isNotify2hEnabled={isNotify2hEnabled}
              isAutoAiTasteEnabled={isAutoAiTasteEnabled}
              onToggleNotify2h={handleToggleNotify2h}
              onToggleAutoAiTaste={handleToggleAutoAiTaste}
            />
          </S.Column>
        </S.MainTwoColGrid>

        {/* Bottom Security & Policy Strip */}
        <VipBottomSecurityStrip
          onNavigateTickets={handleNavigateTickets}
          onShowPrivilegeTerms={handleShowPrivilegeTerms}
          onLogout={handleLogout}
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
