import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageNotFoundContainer, StyledResult } from './PageNotFound.styles';

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <PageNotFoundContainer>
      <StyledResult
        status="404"
        title="404 - Không Tìm Thấy Trang"
        subTitle="Trang bạn đang truy cập hiện chưa khả dụng hoặc đang trong quá trình phát triển."
        extra={
          <Button onClick={() => navigate('/')} type="primary">
            Quay Về Trang Chủ
          </Button>
        }
      />
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
