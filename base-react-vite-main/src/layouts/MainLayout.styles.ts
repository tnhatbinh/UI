import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  flex-direction: column;
  background-color: var(--bg-primary, #0B0B0C);
  color: var(--text-primary, #ffffff);
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  min-width: 0;
`;

