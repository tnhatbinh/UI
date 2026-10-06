import styled from 'styled-components';

export const UpcomingSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 48px;

  .section-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    flex-wrap: wrap;

    .section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.3px;

      .icon {
        color: #ffb955;
      }
    }

    .countdown-pill {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      color: #ffb955;
      padding: 4px 12px;
      border-radius: 999px;
      background: rgba(255, 185, 85, 0.12);
      border: 1px solid rgba(255, 185, 85, 0.3);
    }
  }
`;

export const TicketStubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  position: relative;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  /* Perforation notch */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: #0d0c0f;
    border-radius: 50%;
    z-index: 5;
  }

  &::before {
    top: -12px;
    right: 328px;
    @media (max-width: 980px) {
      display: none;
    }
  }

  &::after {
    bottom: -12px;
    right: 328px;
    @media (max-width: 980px) {
      display: none;
    }
  }
`;

export const TicketLeftInfo = styled.div`
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px 18px;
  }

  .status-order-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 800;
    flex-wrap: wrap;
    gap: 10px;

    .paid-status {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255, 185, 85, 0.3);

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ffb955;
      }
    }

    .order-id {
      color: #ae8786;
      letter-spacing: 0.5px;
    }
  }

  .movie-block {
    display: flex;
    gap: 20px;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }

    .poster-wrap {
      position: relative;
      width: 110px;
      height: 155px;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.6);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .badge {
        position: absolute;
        top: 6px;
        left: 6px;
        padding: 2px 6px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        color: #ffb955;
        font-size: 8.5px;
        font-weight: 800;
      }
    }

    .details-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;

      .highlight-tag {
        font-size: 10px;
        font-weight: 800;
        color: #ffb955;
        display: flex;
        align-items: center;
        gap: 4px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      h2.movie-title {
        font-size: 20px;
        font-weight: 900;
        color: #ffffff;
        line-height: 1.2;
      }

      .movie-meta-line {
        font-size: 11.5px;
        color: #ae8786;
      }

      .facts-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin-top: 6px;
        padding: 12px 14px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 10px;

        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }

        .fact-col {
          display: flex;
          flex-direction: column;
          gap: 2px;

          .label {
            font-size: 9.5px;
            font-weight: 700;
            color: #7d6b6a;
            text-transform: uppercase;
          }
          .val {
            font-size: 12px;
            font-weight: 800;
            color: #ffffff;
          }
          .sub {
            font-size: 10.5px;
            color: #ae8786;
          }
        }
      }
    }
  }

  .concessions-inclusion-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(255, 185, 85, 0.08);
    border: 1px solid rgba(255, 185, 85, 0.2);

    .icon {
      color: #ffb955;
      font-size: 18px;
      flex-shrink: 0;
    }

    .text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 12px;
        font-weight: 700;
        color: #ffb955;
      }
      .sub {
        font-size: 11px;
        color: #ae8786;
      }
    }
  }

  .ticket-actions-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    flex-wrap: wrap;

    button.action-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e5e2e3;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 185, 85, 0.15);
        border-color: #ffb955;
        color: #ffb955;
      }
    }

    .refund-link {
      font-size: 11.5px;
      color: #ae8786;
      margin-left: auto;
      cursor: pointer;

      &:hover {
        color: #ff535a;
        text-decoration: underline;
      }
    }
  }
`;

export const TicketRightQR = styled.div`
  background: #17161c;
  border-left: 1px dashed rgba(255, 255, 255, 0.15);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 14px;

  @media (max-width: 980px) {
    border-left: none;
    border-top: 1px dashed rgba(255, 255, 255, 0.15);
    padding: 24px;
  }

  .qr-header {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .label {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #ffb955;
      text-transform: uppercase;
    }

    .code-str {
      font-size: 14px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: 1px;
    }
  }

  .qr-box {
    width: 170px;
    height: 170px;
    padding: 12px;
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .qr-note {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .direct-tag {
      font-size: 11px;
      font-weight: 800;
      color: #ffb955;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .instructions {
      font-size: 10.5px;
      color: #ae8786;
      line-height: 1.4;
      max-width: 220px;
    }
  }
`;
