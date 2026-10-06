import styled from 'styled-components';

export const MobileStickySeatBar = styled.div<{ $visible: boolean }>`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(18, 17, 21, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 185, 85, 0.35);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.9);
  padding: 10px 16px;
  padding-bottom: max(10px, env(safe-area-inset-bottom));
  z-index: 80;
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 1080px) {
    display: block;
  }

  .bar-content {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .seat-info {
    display: flex;
    flex-direction: column;
    min-width: 0;

    .seats-label {
      font-size: 11px;
      color: #ae8786;
      display: flex;
      align-items: center;
      gap: 5px;

      strong {
        color: #ffb955;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
      }
    }

    .total-price {
      font-size: 17px;
      font-weight: 900;
      color: #ffffff;
      line-height: 1.2;
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-radius: 10px;
    background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
    color: #ffffff;
    font-size: 13px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(255, 83, 90, 0.4);
    white-space: nowrap;
    flex-shrink: 0;

    &:active {
      transform: scale(0.97);
    }
  }
`;
