import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PageNotFound.styles';

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <S.PageNotFoundContainer>
      <S.StyledResult
        status="404"
        title="404 - Không Tìm Thấy Trang"
        subTitle="Trang bạn đang truy cập hiện chưa khả dụng hoặc đang trong quá trình phát triển."
        extra={
          <Button
            type="primary"
            onClick={handleNavigateHome}
          >
            Quay Về Trang Chủ
          </Button>
        }
      />
    </S.PageNotFoundContainer>
  );
};

export default PageNotFound;
