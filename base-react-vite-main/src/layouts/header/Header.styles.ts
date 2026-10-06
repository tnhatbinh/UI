import styled from 'styled-components';

export const OuterHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  z-index: 50;
  background: rgba(14, 14, 15, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0px 16px 40px -8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    height: 68px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1140px) {
    padding-right: 68px;
  }

  @media (max-width: 768px) {
    padding: 0 60px 0 16px;
    height: 68px;
  }

  @media (max-width: 480px) {
    padding: 0 48px 0 12px;
  }

  @media (max-width: 380px) {
    padding: 0 54px 0 8px;
  }
`;

export const NavLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 42px;
`;


export const EdgeMenuTrigger = styled.button<{ $isOpen?: boolean }>`
  display: none; /* Ẩn trên desktop/màn hình lớn */
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ $isOpen }) =>
    $isOpen ? 'rgba(255, 185, 85, 0.2)' : 'rgba(28, 27, 28, 0.9)'};
  border: 1px solid
    ${({ $isOpen }) =>
      $isOpen ? 'rgba(255, 185, 85, 0.5)' : 'rgba(255, 255, 255, 0.12)'};
  color: ${({ $isOpen }) => ($isOpen ? '#ffb955' : '#e5e2e3')};
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 60;
  backdrop-filter: blur(12px);

  @media (max-width: 1140px) {
    display: flex; /* Chỉ xuất hiện trên iPad hoặc màn hình nhỏ không đủ responsive */
  }

  &:hover {
    background: rgba(255, 83, 90, 0.2);
    color: #ffb955;
    border-color: rgba(255, 185, 85, 0.45);
    box-shadow: 0px 0px 18px rgba(255, 185, 85, 0.35);
    transform: translateY(-50%) scale(1.06);
  }

  &:active {
    transform: translateY(-50%) scale(0.96);
  }

  @media (max-width: 768px) {
    right: 12px;
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    right: 10px;
    width: 35px;
    height: 35px;
    border-radius: 8px;
  }
`;
