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

      .tag-pill {
        font-size: 9.5px;
        font-weight: 800;
        color: #ffb955;
        background: rgba(255, 185, 85, 0.15);
        padding: 2px 7px;
        border-radius: 4px;
      }
    }

    .refresh-btn {
      color: #ae8786;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #ffffff;
      }
    }

    .link-all {
      font-size: 12px;
      font-weight: 700;
      color: #ae8786;
      cursor: pointer;

      &:hover {
        color: #ff535a;
      }
    }
  }
`;

export const AiInsightBox = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }

  .gauge-circle {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: 3px solid #ff535a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 15px rgba(255, 83, 90, 0.3);

    .percent {
      font-size: 18px;
      font-weight: 900;
      color: #ffffff;
    }

    .sub {
      font-size: 8px;
      font-weight: 800;
      color: #ff535a;
      text-transform: uppercase;
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .ai-badge {
      font-size: 11px;
      font-weight: 800;
      color: #ffb955;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .desc {
      font-size: 12px;
      color: #dedede;
      line-height: 1.45;
    }

    .recommend {
      font-size: 11.5px;
      color: #ae8786;
      margin-top: 2px;

      strong {
        color: #ffb955;
        cursor: pointer;
      }
    }
  }
`;

export const TasteSubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .sub-block {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .block-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 11px;
        font-weight: 800;
        color: #7d6b6a;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .badge {
        font-size: 9.5px;
        color: #ae8786;
      }
    }

    .tags-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      .tag {
        font-size: 11px;
        font-weight: 600;
        color: #e5e2e3;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        padding: 5px 10px;
        border-radius: 6px;
      }

      .tag.highlight {
        color: #ffb955;
        background: rgba(255, 185, 85, 0.12);
        border-color: rgba(255, 185, 85, 0.3);
      }
    }
  }
`;

export const CinemaFavsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);

    .name {
      font-size: 12px;
      font-weight: 700;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 6px;

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ff535a;
      }
    }

    .tag {
      font-size: 10.5px;
      font-weight: 700;
      color: #ffb955;
    }

    .dist {
      font-size: 10.5px;
      color: #ae8786;
    }
  }
`;

export const SeatVisualizerBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .screen-arc {
    width: 70%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff535a, transparent);
    box-shadow: 0 0 10px #ff535a;
    border-radius: 50%;
  }

  .grid-mini {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;

    .row {
      display: flex;
      gap: 4px;

      .seat-dot {
        width: 12px;
        height: 10px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.15);
      }

      .seat-dot.fav {
        background: #ff535a;
        box-shadow: 0 0 6px rgba(255, 83, 90, 0.6);
      }
    }
  }

  .seat-legend {
    font-size: 10px;
    color: #ae8786;
    text-align: center;
  }
`;
