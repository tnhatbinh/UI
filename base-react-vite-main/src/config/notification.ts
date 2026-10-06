import type { NotificationArgsProps } from 'antd';
import { notification } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

const defaultPlacement: NotificationPlacement = 'topRight';

const notify = {
  success: (description?: string) => {
    notification.success({
      message: 'Thành công',
      description,
      placement: defaultPlacement,
      duration: 1,
      showProgress: true,
      style: {
        backgroundColor: 'var(--bg-success)',
        border: '1px solid var(--border-success)',
        borderRadius: '5px',
      },
    });
  },
  error: (description?: string) => {
    notification.error({
      message: 'Lỗi',
      description,
      placement: defaultPlacement,
      duration: 3,
      showProgress: true,
      style: {
        backgroundColor: 'var(--bg-danger)',
        border: '1px solid var(--border-danger)',
        borderRadius: '5px',
      },
    });
  },
  warning: (description?: string) => {
    notification.warning({
      message: 'Cảnh báo',
      description,
      placement: defaultPlacement,
      duration: 3,
      showProgress: true,
      style: {
        backgroundColor: 'var(--bg-warning)',
        border: '1px solid var(--border-warning)',
        borderRadius: '5px',
      },
    });
  },
  info: (description?: string) => {
    notification.info({
      message: 'Thông báo',
      description,
      placement: defaultPlacement,
      duration: 2,
      showProgress: true,
      style: {
        backgroundColor: 'var(--bg-info)',
        border: '1px solid var(--info)',
        borderRadius: '5px',
      },
    });
  },
};

export default notify;
