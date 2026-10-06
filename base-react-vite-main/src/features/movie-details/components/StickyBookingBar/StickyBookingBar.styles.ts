import styled from 'styled-components';

export const StickyBottomBar = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(18, 17, 21, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255, 185, 85, 0.3);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.8);
  z-index: 70;
  display: flex;
  align-items: center;
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 640px) {
    height: auto;
    min-height: 72px;
    padding-top: 10px;
    padding-bottom: max(10px, env(safe-area-inset-bottom));
  }

  .bar-inner {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 0 16px;
    }

    @media (max-width: 480px) {
      padding: 0 12px;
      gap: 10px;
    }
  }

  .bar-left {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;

    @media (max-width: 640px) {
      gap: 8px;
      flex: 1;
    }

    .cinema-icon-wrap {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: rgba(255, 185, 85, 0.15);
      border: 1px solid rgba(255, 185, 85, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffb955;
      flex-shrink: 0;

      @media (max-width: 640px) {
        display: none;
      }
    }

    .info-group {
      display: flex;
      flex-direction: column;
      min-width: 0;

      .cinema-name-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;

        .cinema-name {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          @media (max-width: 480px) {
            font-size: 12.5px;
            max-width: 140px;
          }

          @media (max-width: 360px) {
            max-width: 110px;
          }
        }

        .badge {
          font-size: 9px;
          font-weight: 800;
          color: #ff535a;
          background: rgba(255, 83, 90, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
          flex-shrink: 0;

          @media (max-width: 480px) {
            font-size: 8px;
            padding: 1px 4px;
          }
        }
      }

      .session-details {
        font-size: 11.5px;
        color: #ae8786;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 480px) {
          font-size: 10px;
          max-width: 160px;
        }

        @media (max-width: 360px) {
          max-width: 120px;
        }
      }
    }
  }

  .bar-right {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;

    @media (max-width: 640px) {
      gap: 12px;
    }

    @media (max-width: 480px) {
      gap: 8px;
    }

    .price-group {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .label {
        font-size: 10.5px;
        color: #ae8786;
        text-transform: uppercase;
        white-space: nowrap;

        @media (max-width: 480px) {
          font-size: 9px;
        }
      }

      .price {
        font-size: 20px;
        font-weight: 900;
        color: #ffb955;
        white-space: nowrap;

        @media (max-width: 640px) {
          font-size: 17px;
        }

        @media (max-width: 480px) {
          font-size: 15px;
        }
      }
    }

    .cta-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 12px;
      background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
      color: #ffffff;
      font-size: 13.5px;
      font-weight: 800;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(255, 83, 90, 0.4);
      transition: all 0.2s;
      white-space: nowrap;

      .cta-full {
        display: inline;
      }
      .cta-short {
        display: none;
      }

      @media (max-width: 640px) {
        padding: 10px 16px;
        font-size: 12.5px;
        border-radius: 10px;
        gap: 6px;
      }

      @media (max-width: 480px) {
        padding: 9px 12px;
        font-size: 12px;

        .cta-full {
          display: none;
        }
        .cta-short {
          display: inline;
        }
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 24px rgba(255, 83, 90, 0.6);
      }
    }
  }
`;
