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

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-group {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }
    }

    .edit-link {
      font-size: 11.5px;
      font-weight: 700;
      color: #ff535a;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const SideItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .side-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);

    .left-info {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;

      .icon-box {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: #ae8786;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &.momo {
          background: #a50064;
          color: #ffffff;
          font-weight: 800;
          font-size: 10px;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;

        .name {
          font-size: 12.5px;
          font-weight: 800;
          color: #ffffff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .desc {
          font-size: 10.5px;
          color: #ae8786;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .more-dots {
      color: #7d6b6a;
      font-size: 14px;
      flex-shrink: 0;
    }
  }
`;
