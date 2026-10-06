import styled from 'styled-components';

export const PickupMethodSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .section-title {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #ffb955;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .options-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const PickupOptionCard = styled.div<{ $isSelected: boolean }>`
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? '#ff535a' : 'rgba(255, 255, 255, 0.08)'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 83, 90, 0.1)' : 'rgba(255, 255, 255, 0.02)'};
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  transition: all 0.2s ease;

  .radio-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid
      ${({ $isSelected }) => ($isSelected ? '#ff535a' : '#7d6b6a')};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    flex-shrink: 0;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff535a;
      display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
    }
  }

  .text-group {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .title-row {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;

      .title {
        font-size: 12.5px;
        font-weight: 700;
        color: #ffffff;
      }

      .free-badge {
        font-size: 9.5px;
        font-weight: 800;
        color: #ffb955;
        background: rgba(255, 185, 85, 0.15);
        padding: 2px 6px;
        border-radius: 4px;
      }
    }

    .desc {
      font-size: 11px;
      color: #ae8786;
      line-height: 1.4;
    }
  }

  &:hover {
    border-color: rgba(255, 83, 90, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
`;
