import styled from 'styled-components';

export const SectionCard = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .card-title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-wrap {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 83, 90, 0.12);
        color: #ff535a;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h3 {
        font-size: 16px;
        font-weight: 800;
        color: #ffffff;
      }
    }

    .tag-pill {
      font-size: 9.5px;
      font-weight: 800;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.15);
      padding: 2px 7px;
      border-radius: 4px;
    }
  }
`;

export const ChallengeItem = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .left-meta {
    display: flex;
    gap: 14px;
    align-items: center;

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(255, 185, 85, 0.1);
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .title-row {
        display: flex;
        align-items: center;
        gap: 6px;

        .name {
          font-size: 13.5px;
          font-weight: 800;
          color: #ffffff;
        }

        .badge {
          font-size: 9px;
          font-weight: 800;
          color: #ffb955;
          background: rgba(255, 185, 85, 0.15);
          padding: 1px 6px;
          border-radius: 3px;
        }

        .badge.done {
          color: #4ade80;
          background: rgba(74, 222, 128, 0.15);
        }
      }

      .desc {
        font-size: 11.5px;
        color: #ae8786;
      }

      .progress-line {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 4px;

        .bar {
          width: 120px;
          height: 4px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          overflow: hidden;

          .fill {
            height: 100%;
            background: #ff535a;
          }
        }

        .txt {
          font-size: 10.5px;
          font-weight: 700;
          color: #ffffff;
        }
      }
    }
  }

  .right-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;

    .reward-tag {
      font-size: 11px;
      font-weight: 800;
      color: #ffb955;
    }

    button.claim-btn {
      padding: 7px 14px;
      border-radius: 8px;
      background: #ff535a;
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11.5px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: #ff7b54;
      }
    }

    button.book-btn {
      padding: 7px 14px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11.5px;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
`;
