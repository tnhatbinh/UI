import styled from 'styled-components';

export const ShellContainer = styled.div`
  min-height: 100vh;
  background: #0d0c0f;
  background-image:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(255, 83, 90, 0.06) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 30%,
      rgba(255, 185, 85, 0.04) 0%,
      transparent 50%
    );
  padding-top: 100px;
  padding-bottom: 120px;
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;
`;

export const InnerWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: #7d6b6a;
  margin-bottom: 20px;

  span.link {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #ffffff;
    }
  }

  span.separator {
    color: #443736;
  }

  span.current {
    color: #ff535a;
    font-weight: 800;
  }
`;

export const HeroBannerCard = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 600px) {
    padding: 20px 16px;
  }

  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;

    .user-profile-left {
      display: flex;
      align-items: center;
      gap: 20px;

      .avatar-wrapper {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 18px;
        padding: 3px;
        background: linear-gradient(135deg, #ffb955 0%, #ff535a 100%);
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .vip-tag {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          padding: 2px 8px;
          border-radius: 999px;
          background: #141317;
          border: 1px solid #ffb955;
          color: #ffb955;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }
      }

      .user-meta {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .name-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;

          h2 {
            font-size: 26px;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.3px;
          }

          .verified-badge {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 10px;
            font-weight: 800;
            color: #ff535a;
            background: rgba(255, 83, 90, 0.12);
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid rgba(255, 83, 90, 0.3);
          }
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 12px;
          color: #ae8786;
          flex-wrap: wrap;

          span.item {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 4px;

          button.avatar-btn {
            padding: 6px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #e5e2e3;
            font-family: 'Be Vietnam Pro', sans-serif;
            font-size: 11.5px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.2s;

            &:hover {
              background: rgba(255, 255, 255, 0.1);
              color: #ffffff;
            }
          }

          button.upgrade-btn {
            padding: 6px 16px;
            border-radius: 999px;
            background: linear-gradient(135deg, #ffb955 0%, #e59930 100%);
            border: none;
            color: #141317;
            font-family: 'Be Vietnam Pro', sans-serif;
            font-size: 11.5px;
            font-weight: 900;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 4px 14px rgba(255, 185, 85, 0.35);
            transition: all 0.2s;

            &:hover {
              transform: translateY(-1px);
            }
          }
        }
      }
    }

    .diamond-progress-box {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 20px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);

      .circular-chart {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 3px solid #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 900;
        color: #ffffff;
        box-shadow: 0 0 10px rgba(255, 83, 90, 0.3);
        flex-shrink: 0;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 3px;

        .label {
          font-size: 9.5px;
          font-weight: 800;
          color: #7d6b6a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
        }

        .sub {
          font-size: 11px;
          color: #ae8786;
        }
      }
    }
  }

  .stats-grid-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 14px;

      .icon-box {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 83, 90, 0.1);
        color: #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .val {
          font-size: 17px;
          font-weight: 900;
          color: #ffffff;
        }

        .lbl {
          font-size: 11px;
          color: #ae8786;
        }
      }
    }
  }
`;

export const TabsNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 32px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavTabItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#ae8786')};
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? '#ff535a' : 'transparent')};
  transition: all 0.2s;
  margin-bottom: -1px;

  .icon {
    color: ${({ $isActive }) => ($isActive ? '#ff535a' : '#7d6b6a')};
    transition: color 0.2s;
  }

  &:hover {
    color: #ffffff;
    .icon {
      color: #ff535a;
    }
  }
`;
