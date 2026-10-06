import styled from 'styled-components';

export const HistorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  .history-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;

    .left-title {
      display: flex;
      flex-direction: column;
      gap: 4px;

      h2 {
        font-size: 20px;
        font-weight: 800;
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;

        .icon {
          color: #ffb955;
        }
      }

      .sub {
        font-size: 12px;
        color: #ae8786;
      }
    }

    .right-tools {
      display: flex;
      align-items: center;
      gap: 10px;

      select {
        height: 36px;
        padding: 0 12px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #ffffff;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 12px;
        cursor: pointer;
      }

      button.export-btn {
        height: 36px;
        padding: 0 14px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #e5e2e3;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
      }
    }
  }

  .history-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const PastTicketCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 185, 85, 0.3);
    background: rgba(255, 255, 255, 0.04);
  }

  .top-meta {
    display: flex;
    gap: 14px;

    img.poster {
      width: 60px;
      height: 84px;
      object-fit: cover;
      border-radius: 8px;
      flex-shrink: 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .badge-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .watched-badge {
          font-size: 9px;
          font-weight: 800;
          color: #ae8786;
          background: rgba(255, 255, 255, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .date {
          font-size: 10.5px;
          color: #7d6b6a;
        }
      }

      .movie-name {
        font-size: 14px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.2;
      }

      .genre {
        font-size: 11px;
        color: #ae8786;
      }

      .cinema-line {
        font-size: 11px;
        color: #dedede;
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .cost {
      font-size: 12px;
      color: #ae8786;
      strong {
        color: #ffffff;
        font-weight: 800;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 8px;

      button.rate-btn {
        padding: 5px 10px;
        border-radius: 6px;
        background: rgba(255, 185, 85, 0.12);
        border: 1px solid rgba(255, 185, 85, 0.3);
        color: #ffb955;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      button.rebook-btn {
        padding: 5px 12px;
        border-radius: 6px;
        background: #ff535a;
        border: none;
        color: #ffffff;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
      }

      button.detail-btn {
        padding: 5px 10px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #e5e2e3;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;

export const ViewAllHistoryBtn = styled.button`
  align-self: center;
  padding: 10px 24px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    color: #ffffff;
  }
`;
