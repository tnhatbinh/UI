import styled from 'styled-components';

export const FeatureBadgesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .feat-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;

    .icon {
      color: #ffb955;
      font-size: 16px;
      flex-shrink: 0;
    }

    .text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 11px;
        font-weight: 700;
        color: #ffffff;
      }
      .desc {
        font-size: 9.5px;
        color: #ae8786;
      }
    }
  }
`;
