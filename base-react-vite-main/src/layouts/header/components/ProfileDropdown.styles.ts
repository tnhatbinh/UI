import styled from 'styled-components';

export const UserProfileBadge = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px 4px 4px;
  gap: 8px;
  height: 36px;
  background: #1c1b1c;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? 'rgba(255, 83, 90, 0.4)' : 'transparent')};

  .avatar-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background: #ffb3b0;
    border-radius: 9999px;
    color: #680010;
    font-size: 12px;
    flex-shrink: 0;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;

    .vip-tag {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 600;
      line-height: 14px;
      letter-spacing: 0.66px;
      color: #e5e2e3;
      white-space: nowrap;
    }

    .points-text {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 400;
      line-height: 11px;
      color: #ffb955;
      margin-top: 2px;
      white-space: nowrap;
    }
  }

  .profile-chevron {
    color: #ae8786;
    margin-left: 4px;
    transition: transform 0.2s ease;
    ${({ $isOpen }) => $isOpen && 'transform: rotate(180deg);'}
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  @media (max-width: 880px) {
    padding: 3px;
    gap: 0;

    .user-info,
    .profile-chevron {
      display: none !important;
    }
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  height: 34px;
  background: var(--primary);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 4px 14px rgba(255, 83, 90, 0.35);
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 11px;
    height: 30px;
  }

  @media (max-width: 360px) {
    padding: 4px 8px;
    font-size: 10.5px;
  }

  &:hover {
    background: #e0353c;
    transform: translateY(-1px);
    box-shadow: 0px 6px 18px rgba(255, 83, 90, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 200px;
  background: rgba(28, 27, 28, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0px 16px 36px rgba(0, 0, 0, 0.9);
  padding: 8px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 3px;
  animation: fadeInDown 0.15s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProfileHeader = styled.div`
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  .profile-name {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
  }

  .profile-membership {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #ffb955;
  }
`;

export const ProfileDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 4px 0;
`;

export const ProfileMenuItem = styled.button`
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: #e7bcba;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }
`;

export const ProfileLogoutItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: #ff535a;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 83, 90, 0.15);
    color: #ffb3b0;
  }
`;
