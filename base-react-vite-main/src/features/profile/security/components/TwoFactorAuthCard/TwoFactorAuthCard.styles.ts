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

export const TwoFactorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p.desc {
    font-size: 12px;
    color: #ae8786;
    line-height: 1.45;
    margin: 0;
  }

  .method-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);

    .left {
      display: flex;
      align-items: center;
      gap: 12px;

      .icon {
        color: #ff535a;
      }

      .text {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 12.5px;
          font-weight: 800;
          color: #ffffff;
        }
        .sub {
          font-size: 10.5px;
          color: #ae8786;
        }
      }
    }

    .badge-primary {
      font-size: 9.5px;
      font-weight: 800;
      color: #ff535a;
      background: rgba(255, 83, 90, 0.15);
      padding: 2px 7px;
      border-radius: 4px;
    }

    .change-link {
      font-size: 11px;
      font-weight: 700;
      color: #ffb955;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .backup-codes-block {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 11.5px;
        font-weight: 800;
        color: #ffb955;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .count {
        font-size: 10px;
        color: #ae8786;
      }
    }

    .codes-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      background: #0d0c0f;
      padding: 10px 12px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 1px;
    }

    .actions-row {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      font-weight: 700;

      .copy-link {
        color: #ff535a;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;

        &:hover {
          text-decoration: underline;
        }
      }

      .regen-link {
        color: #ae8786;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }
`;
