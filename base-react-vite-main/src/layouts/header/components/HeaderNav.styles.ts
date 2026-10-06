import styled from 'styled-components';

export const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 4px;
  height: 32px;
  background: rgba(28, 27, 28, 0.7);
  border-radius: 9999px;

  @media (max-width: 1140px) {
    display: none;
  }
`;

export const NavItem = styled.span<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  height: 24px;
  border-radius: 9999px;

  font-family: 'Be Vietnam Pro', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.66px;
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#E7BCBA')};
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(255,255,255,0.1)' : 'transparent'};
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
