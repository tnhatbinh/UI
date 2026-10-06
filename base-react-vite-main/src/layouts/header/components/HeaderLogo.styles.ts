import styled from 'styled-components';

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
      box-shadow:
        0px 0px 28px rgba(255, 83, 90, 0.65),
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

    @media (max-width: 480px) {
      width: 34px;
      height: 34px;
      border-radius: 9px;
    }
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
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 21px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 22px;
      text-transform: uppercase;

      @media (max-width: 480px) {
        font-size: 18px;
        line-height: 19px;
      }

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
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #ae8786;
      line-height: 12px;
      text-transform: uppercase;
      white-space: nowrap;
      margin-top: 3px;

      @media (max-width: 640px) {
        display: none;
      }
    }
  }
`;
