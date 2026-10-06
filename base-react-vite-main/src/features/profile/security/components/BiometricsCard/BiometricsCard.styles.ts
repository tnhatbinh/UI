import styled from 'styled-components';

export const Card = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px 16px;
  }

  .card-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .title-left {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 17px;
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }

      .sub {
        font-size: 12px;
        color: #ae8786;
      }
    }
  }
`;

export const BiometricContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .title {
        font-size: 12.5px;
        font-weight: 800;
        color: #ffffff;
      }

      .desc {
        font-size: 10.5px;
        color: #ae8786;
      }
    }

    .pin-dots {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #ffb955;
      font-size: 16px;
    }

    .edit-pin-link {
      font-size: 11px;
      color: #ff535a;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ToggleSwitch = styled.div<{ $active: boolean }>`
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#ff535a' : 'rgba(255, 255, 255, 0.2)')};
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  .thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? '19px' : '3px')};
    transition: left 0.2s ease;
  }
`;
