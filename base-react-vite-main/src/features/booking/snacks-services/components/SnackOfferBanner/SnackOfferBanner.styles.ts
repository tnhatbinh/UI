import styled from 'styled-components';

export const OfferBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 185, 85, 0.2);
  border-radius: 16px;
  flex-wrap: wrap;

  .banner-left {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon-box {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(255, 185, 85, 0.15);
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .banner-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 13.5px;
        font-weight: 800;
        color: #ffffff;
      }
      .sub {
        font-size: 11.5px;
        color: #ae8786;
      }
    }
  }

  .badge-hot {
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(255, 185, 85, 0.15);
    border: 1px solid rgba(255, 185, 85, 0.4);
    color: #ffb955;
    font-size: 11px;
    font-weight: 800;
    white-space: nowrap;
  }
`;
