import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #0d0c0f;
  background-image:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 83, 90, 0.08) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 40%,
      rgba(255, 185, 85, 0.05) 0%,
      transparent 50%
    );
  padding-top: 100px;
  padding-bottom: 120px;
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const InnerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #ae8786;
  margin-bottom: 28px;

  .back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #e5e2e3;
    cursor: pointer;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #ffb955;
    }
  }

  .separator {
    color: rgba(255, 255, 255, 0.2);
  }

  .current {
    color: #ffffff;
    font-weight: 600;
  }
`;
