import styled from 'styled-components';

export const SeatLegendBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;

  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    color: #dedede;

    .sample-box {
      width: 18px;
      height: 18px;
      border-radius: 4px;

      &.standard {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
      &.vip {
        background: rgba(255, 185, 85, 0.15);
        border: 1px solid rgba(255, 185, 85, 0.5);
      }
      &.sweetbox {
        width: 26px;
        border-radius: 999px;
        background: rgba(255, 83, 90, 0.15);
        border: 1px solid rgba(255, 83, 90, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff535a;
        font-size: 9px;
      }
      &.selected {
        background: #ff535a;
        border: 1px solid #ff7b54;
      }
      &.sold {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
      }
    }

    .price-tag {
      color: #ae8786;
      font-size: 10.5px;
    }
  }
`;
