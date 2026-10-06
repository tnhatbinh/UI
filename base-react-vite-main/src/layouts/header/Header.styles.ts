import styled from "styled-components";

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

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 68px;
  }
`;

export const NavLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 42px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  height: 42px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);

    .logo-icon {
      box-shadow: 0px 0px 28px rgba(255, 83, 90, 0.65),
        0px 0px 14px rgba(255, 185, 85, 0.4);
    }
  }

  .logo-icon {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    background: linear-gradient(135deg, #ff535a 0%, #ff7b54 50%, #ffb955 100%);
    box-shadow: 0px 0px 20px rgba(255, 83, 90, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4a0008;
    transition: all 0.3s ease;
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 38px;

    .brand-name {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      font-family: "Be Vietnam Pro", sans-serif;
      font-size: 21px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 22px;
      text-transform: uppercase;

      .brand-phim {
        color: #ffffff;
        text-shadow: 0px 2px 10px rgba(255, 179, 176, 0.3);
      }

      .brand-book {
        color: #ffb955;
        font-weight: 900;
        margin-left: 2px;
        text-shadow: 0px 2px 12px rgba(255, 185, 85, 0.4);
      }
    }

    .brand-tag {
      font-family: "Be Vietnam Pro", sans-serif;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #ae8786;
      line-height: 12px;
      text-transform: uppercase;
      white-space: nowrap;
      margin-top: 3px;
    }
  }
`;

export const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 4px;
  height: 32px;
  background: rgba(28, 27, 28, 0.7);
  border-radius: 9999px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const NavItem = styled.span<{ $isActive?: boolean; $isAi?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  height: 24px;
  border-radius: 9999px;

  font-family: "Be Vietnam Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "#E7BCBA")};
  background: ${({ $isActive }) =>
    $isActive ? "rgba(255,255,255,0.1)" : "transparent"};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #ffffff;
  }

  .ai-dot {
    width: 8px;
    height: 8px;
    background: #ffb955;
    border-radius: 9999px;
    margin-right: 4px;
  }
`;

export const ActionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  height: 37px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  width: 127px;
  height: 30px;
  background: rgba(28, 27, 28, 0.9);
  border-radius: 9999px;
  transition: all 0.25s ease;

  @media (max-width: 680px) {
    display: none;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #ae8786;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.18px;
    width: 100%;
    margin-left: 6px;

    &::placeholder {
      color: #ae8786;
    }
  }

  .search-icon {
    color: #ae8786;
    font-size: 13.5px;
    flex-shrink: 0;
  }
`;

export const LocationWrapper = styled.div`
  position: relative;
`;

export const LocationBadge = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  gap: 4px;
  height: 28px;
  background: ${({ $isOpen }) => ($isOpen ? "#2a2a2b" : "#1c1b1c")};
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background: #2a2a2b;
  }

  span {
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.66px;
    color: #e5e2e3;
    white-space: nowrap;
  }

  .loc-icon {
    color: #ffb955;
    font-size: 12px;
  }
  .chevron-icon {
    color: #ae8786;
    font-size: 10px;
    margin-left: auto;
    transition: transform 0.2s ease;
    ${({ $isOpen }) => $isOpen && "transform: rotate(180deg);"}
  }
`;

export const LocationDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 140px;
  background: rgba(28, 27, 28, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.8);
  padding: 6px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LocationItem = styled.button<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${({ $isSelected }) =>
    $isSelected ? "rgba(255, 83, 90, 0.15)" : "transparent"};
  cursor: pointer;
  transition: all 0.15s ease;

  span {
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 12px;
    font-weight: ${({ $isSelected }) => ($isSelected ? "700" : "500")};
    color: ${({ $isSelected }) => ($isSelected ? "#ffb955" : "#e5e2e3")};
    white-space: nowrap;
  }

  .check-icon {
    color: #ffb955;
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 83, 90, 0.12);
    span {
      color: #ffb955;
    }
  }
`;

export const TicketPassBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 6px;
  height: 28px;
  background: #ff535a;
  box-shadow: 0px 4px 20px rgba(255, 83, 90, 0.35);
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 860px) {
    display: none;
  }

  span {
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.66px;
    color: #5b000d;
    white-space: nowrap;
  }

  .ticket-icon {
    color: #5b000d;
    font-size: 12px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 6px 24px rgba(255, 83, 90, 0.45);
  }
`;

export const NotificationBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 37px;
  background: #1c1b1c;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  .bell-icon {
    color: #e7bcba;
    font-size: 14px;
  }

  .badge-dot {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    background: #ff535a;
    border-radius: 9999px;
    box-shadow: 0px 0px 0px 2px #0e0e0f;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

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
    ${({ $isOpen }) => ($isOpen ? "rgba(255, 83, 90, 0.4)" : "transparent")};

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
      font-family: "Be Vietnam Pro", sans-serif;
      font-size: 11px;
      font-weight: 600;
      line-height: 14px;
      letter-spacing: 0.66px;
      color: #e5e2e3;
      white-space: nowrap;
    }

    .points-text {
      font-family: "Be Vietnam Pro", sans-serif;
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
    ${({ $isOpen }) => $isOpen && "transform: rotate(180deg);"}
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
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
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 4px 14px rgba(255, 83, 90, 0.35);
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

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
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
  }

  .profile-membership {
    font-family: "Be Vietnam Pro", sans-serif;
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
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: #e7bcba;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;

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
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 83, 90, 0.15);
    color: #ffb3b0;
  }
`;
