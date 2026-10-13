import { WifiOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';

const SuccessWifiIcon = styled(WifiOutlined)`
  color: var(--success);
`;

export interface OnlineNotificationProps {
  isOnline: boolean;
}

export function OnlineNotification({ isOnline }: OnlineNotificationProps) {
  useEffect(() => {
    if (isOnline) {
      notification.success({
        message: 'Đã kết nối mạng',
        description: 'Kết nối internet đã được khôi phục.',
        placement: 'bottomRight',
        duration: 3,
        icon: <SuccessWifiIcon />,
      });
    }
  }, [isOnline]);

  return null;
}

export default OnlineNotification;

