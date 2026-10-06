import styled from 'styled-components';

export const SnackCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 185, 85, 0.3);
    background: rgba(255, 255, 255, 0.04);
  }

  .card-top {
    display: flex;
    gap: 14px;

    .img-wrap {
      width: 88px;
      height: 88px;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info-wrap {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 4px;

      .tags-line {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;

        .tag-pill {
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 185, 85, 0.15);
          color: #ffb955;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .discount-pill {
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 83, 90, 0.2);
          color: #ff535a;
        }
      }

      .snack-name {
        font-size: 13.5px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.25;
      }

      .snack-desc {
        font-size: 11px;
        color: #ae8786;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .price-line {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;

        .price {
          font-size: 15px;
          font-weight: 900;
          color: #ffb955;
        }

        .original-price {
          font-size: 11.5px;
          color: #7d6b6a;
          text-decoration: line-through;
        }
      }
    }
  }

  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .note-text {
      font-size: 11px;
      color: #ae8786;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .counter-control {
      display: flex;
      align-items: center;
      gap: 8px;

      button.counter-btn {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.15s;

        &:hover {
          background: rgba(255, 83, 90, 0.2);
          border-color: #ff535a;
          color: #ff535a;
        }

        &.plus {
          background: #ff535a;
          border-color: #ff7b54;
          color: #fff;

          &:hover {
            background: #ff7b54;
          }
        }
      }

      .count {
        font-size: 13px;
        font-weight: 800;
        color: #ffffff;
        min-width: 16px;
        text-align: center;
      }
    }

    button.add-btn {
      padding: 6px 14px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #e5e2e3;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;

      &:hover {
        background: rgba(255, 83, 90, 0.18);
        border-color: #ff535a;
        color: #ff535a;
      }
    }
  }
`;
