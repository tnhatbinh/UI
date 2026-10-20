import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const MobileStickyBarWrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(18, 17, 21, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 83, 90, 0.35);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.9);
  padding: 12px 16px;
  padding-bottom: max(12px, env(safe-area-inset-bottom));
  z-index: 80;
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media ${media.lg} {
    display: block;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .bar-content {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .summary-info {
    display: flex;
    flex-direction: column;
    min-width: 0;

    .sub-label {
      font-size: 11.5px;
      color: #ae8786;
      display: flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      strong {
        color: #ffb955;
        font-weight: 700;
      }
    }

    .total-price {
      font-size: 18px;
      font-weight: 900;
      color: #ffffff;
      line-height: 1.2;
      letter-spacing: -0.2px;

      .currency {
        font-size: 14px;
        color: #ff535a;
        margin-left: 2px;
      }
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    background: linear-gradient(135deg, #ff535a 0%, #e02830 100%);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(255, 83, 90, 0.4);
    transition: all 0.2s ease;
    white-space: nowrap;
    flex-shrink: 0;

    &:active {
      transform: scale(0.97);
    }
  }
`;

