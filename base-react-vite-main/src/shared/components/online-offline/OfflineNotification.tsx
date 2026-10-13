import { DisconnectOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';

const ErrorDisconnectIcon = styled(DisconnectOutlined)`
  color: var(--error);
`;

export function OfflineNotification() {
  useEffect(() => {
    notification.error({
      message: 'Mất kết nối mạng',
      description: 'Bạn đang offline. Vui lòng kiểm tra kết nối internet.',
      placement: 'bottomRight',
      duration: 0,
      key: 'offline-notification',
      icon: <ErrorDisconnectIcon />,
    });

    return () => {
      notification.destroy('offline-notification');
    };
  }, []);

  return null;
}

export default OfflineNotification;

