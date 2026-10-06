import styled from 'styled-components';

export const CategoryTabsRow = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }
`;

export const CategoryTab = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? '#ff535a' : 'rgba(255, 255, 255, 0.08)')};
  background: ${({ $isActive }) =>
    $isActive ? '#ff535a' : 'rgba(255, 255, 255, 0.04)'};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#ae8786')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    border-color: rgba(255, 83, 90, 0.4);
  }
`;
