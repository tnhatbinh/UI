import { LogOut, Shield } from 'lucide-react';
import * as S from './VipBottomSecurityStrip.styles';

interface VipBottomSecurityStripProps {
  onNavigateTickets: () => void;
  onShowPrivilegeTerms: () => void;
  onLogout: () => void;
}

export function VipBottomSecurityStrip({
  onNavigateTickets,
  onShowPrivilegeTerms,
  onLogout,
}: VipBottomSecurityStripProps) {
  return (
    <S.BottomSecurityStrip>
      <div className="left-sec">
        <Shield size={14} className="icon" />
        <span>
          Bảo mật dữ liệu hội viên được bảo vệ đa lớp bởi chuẩn PCI-DSS & mã hóa
          phòng chiếu PhimBook Security.
        </span>
      </div>

      <div className="links">
        <a onClick={onNavigateTickets}>Lịch sử giao dịch</a>
        <span>•</span>
        <a onClick={onShowPrivilegeTerms}>Điều khoản đặc quyền VIP</a>
        <span>•</span>
        <span className="logout-btn" onClick={onLogout}>
          <LogOut size={12} />
          <span>Đăng xuất</span>
        </span>
      </div>
    </S.BottomSecurityStrip>
  );
}
