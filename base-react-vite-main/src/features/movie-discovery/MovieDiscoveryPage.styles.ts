import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: var(--page-top-offset, calc(var(--header-public-height, 80px) + 20px));
  background-color: var(--bg-primary, #0e0e0f);
  overflow-x: clip;
`;

export const AmbientBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 600px;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(255, 83, 90, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;
