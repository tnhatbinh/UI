import type { FC } from 'react';
import { Shield, LogOut, AlertTriangle } from 'lucide-react';
import { message } from 'antd';
import * as S from './AccountControlCard.styles';

interface AccountControlCardProps {
  onLogoutDevices: () => void;
}

export const AccountControlCard: FC<AccountControlCardProps> = ({
  onLogoutDevices,
}) => {
  const handleLockAccount = () => {
    message.warning('Bạn có chắc chắn muốn tạm khóa tài khoản trong 30 ngày? Vui lòng xác thực liên kết bảo mật.');
  };

  return (
    <S.Card>
      <div className="card-title">
        <Shield size={14} />
        <span>KHU VỰC KIỂM SOÁT TÀI KHOẢN</span>
      </div>

      <div className="btn-row">
        <button
          type="button"
          className="device-logout"
          onClick={onLogoutDevices}
        >
          <LogOut size={13} />
          <span>Đăng xuất thiết bị</span>
        </button>

        <button
          type="button"
          className="lock-acc"
          onClick={handleLockAccount}
        >
          <AlertTriangle size={13} />
          <span>Tạm khóa tài khoản</span>
        </button>
      </div>
    </S.Card>
  );
};

export default AccountControlCard;
