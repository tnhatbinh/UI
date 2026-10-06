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

export const TasteTagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .taste-tag {
    font-size: 11.5px;
    font-weight: 700;
    color: #e5e2e3;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;

    &:hover {
      border-color: #ff535a;
      color: #ff535a;
    }
  }
`;
