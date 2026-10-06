import styled from 'styled-components';

// ─── Section Root ─────────────────────────────────────────────────────────────

export const SectionContainer = styled.section`
  width: 100%;
  height: 868px;
  position: relative;
  background-color: var(--bg-primary);
  z-index: 10;
  overflow: visible;
  user-select: auto;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 1050px;
  }

  @media (max-width: 640px) {
    min-height: 1080px;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -80px;
  height: 948px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100%;
    min-height: 1050px;
  }

  @media (max-width: 640px) {
    min-height: 1080px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 920px;
  max-width: 1920px;
  margin-top: -64px;
  isolation: isolate;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 100%;
    min-height: 1050px;
  }

  @media (max-width: 640px) {
    min-height: 1080px;
  }
`;

// ─── Embla Carousel Viewport & Track ─────────────────────────────────────────

export const SliderViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: default;
  user-select: auto;
`;

export const SliderTrack = styled.div`
  display: flex;
  height: 100%;
  user-select: auto;
  touch-action: pan-y pinch-zoom;
`;

// ─── Navigation Arrows ────────────────────────────────────────────────────────

export const SliderArrowButton = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 45%;
  ${({ $direction }) =>
    $direction === 'prev' ? 'left: 32px;' : 'right: 32px;'}
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(14, 14, 15, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 40;
  transition: all 0.25s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);

  &:hover {
    background: rgba(255, 83, 90, 0.25);
    border-color: var(--primary);
    color: #ffffff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 25px rgba(255, 83, 90, 0.45);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 1024px) {
    width: 44px;
    height: 44px;
    ${({ $direction }) =>
      $direction === 'prev' ? 'left: 16px;' : 'right: 16px;'}
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

// ─── Quick Booking Bar ────────────────────────────────────────────────────────

export const QuickBookingBar = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  width: 1232px;
  max-width: calc(100% - 32px);
  height: 92px;
  background-color: rgba(28, 27, 28, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0px 24px 60px -12px rgba(0, 0, 0, 0.9);
  gap: 12px;
  z-index: 100;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    padding: 16px;
    bottom: 20px;
    gap: 10px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    bottom: 16px;
    padding: 10px;
    gap: 8px;
    border-radius: 14px;
    max-width: calc(100% - 24px);
  }
`;

// ─── Booking Bar Step Items ───────────────────────────────────────────────────

export const StepItem = styled.div<{ $isOpen?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  width: 100%;
  height: 60px;
  background-color: ${({ $isOpen }) =>
    $isOpen ? 'rgba(42, 42, 43, 0.75)' : 'rgba(42, 42, 43, 0.4)'};
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? 'rgba(255, 83, 90, 0.5)' : 'transparent')};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;

  @media (max-width: 640px) {
    height: 52px;
    padding: 6px 12px;
    gap: 10px;
    border-radius: 10px;
  }

  &:hover {
    background-color: rgba(42, 42, 43, 0.65);
  }
`;

export const IconBox1 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 83, 90, 0.15);
  border-radius: 8px;

  @media (max-width: 640px) {
    width: 34px;
    height: 34px;
    border-radius: 7px;
  }
`;

export const IconBox2 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 185, 85, 0.15);
  border-radius: 8px;

  @media (max-width: 640px) {
    width: 34px;
    height: 34px;
    border-radius: 7px;
  }
`;

export const IconBox3 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(140, 144, 164, 0.2);
  border-radius: 8px;

  @media (max-width: 640px) {
    width: 34px;
    height: 34px;
    border-radius: 7px;
  }
`;

export const IconBox4 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-border-light);
  border-radius: 8px;

  @media (max-width: 640px) {
    width: 34px;
    height: 34px;
    border-radius: 7px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 36px;
  flex: 1;
  min-width: 0;

  @media (max-width: 640px) {
    height: 34px;
    justify-content: center;
  }
`;

export const StepLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--primary-subtitle);
  letter-spacing: 0.66px;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif;

  @media (max-width: 640px) {
    font-size: 10px;
    letter-spacing: 0.5px;
  }
`;

export const StepValueRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20px;
`;

export const StepValue1 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 190px;
`;

export const StepValue2 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

export const StepValue3 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StepValue4 = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary);
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DropdownChevron = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

// ─── Booking Dropdown ─────────────────────────────────────────────────────────

export const BookingDropdown = styled.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  min-width: 100%;
  width: max-content;
  max-width: 320px;
  max-height: 280px;
  overflow-y: auto;
  background: rgba(24, 23, 24, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.9);
  padding: 6px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 3px;
  animation: slideUpFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
    max-height: 220px;
    bottom: calc(100% + 8px);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

export const BookingDropdownItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 83, 90, 0.15)' : 'transparent'};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: ${({ $isSelected }) =>
      $isSelected ? 'rgba(255, 83, 90, 0.25)' : 'rgba(255, 255, 255, 0.08)'};
  }

  span {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 13px;
    font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 500)};
    color: ${({ $isSelected }) => ($isSelected ? '#FFFFFF' : '#E7BCBA')};
    white-space: nowrap;
  }

  .check-icon {
    color: var(--primary);
    flex-shrink: 0;
  }
`;

export const QuickBookSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 60px;
  padding: 0 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff535a 0%, #ff2a42 100%);
  color: #ffffff;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(255, 42, 66, 0.4);
  transition: all 0.25s ease;
  user-select: none;

  &:hover {
    background: linear-gradient(135deg, #ff6b71 0%, #e01e35 100%);
    box-shadow: 0 6px 20px rgba(255, 42, 66, 0.6);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    grid-column: span 2;
    height: 52px;
  }

  @media (max-width: 640px) {
    grid-column: span 1;
    height: 48px;
    font-size: 13px;
  }
`;

