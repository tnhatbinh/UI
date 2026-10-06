import styled from 'styled-components';

export const VouchersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const VoucherCard = styled.div`
  background: #141317;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 185, 85, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .code-badge {
      font-size: 13px;
      font-weight: 900;
      color: #ffb955;
      background: rgba(255, 185, 85, 0.12);
      border: 1px dashed rgba(255, 185, 85, 0.4);
      padding: 4px 10px;
      border-radius: 6px;
      letter-spacing: 1px;
    }

    .discount-val {
      font-size: 18px;
      font-weight: 900;
      color: #ff535a;
    }
  }

  .title {
    font-size: 15px;
    font-weight: 800;
    color: #ffffff;
  }

  .desc {
    font-size: 12px;
    color: #ae8786;
    line-height: 1.4;
  }

  .bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .expiry {
      font-size: 11px;
      color: #7d6b6a;
    }

    button.copy-btn {
      padding: 6px 14px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.08);
      border: none;
      color: #ffffff;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;

      &:hover {
        background: #ff535a;
      }
    }
  }
`;

export const VoucherSectionHeader = styled.div`
  margin-bottom: 24px;

  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .sub {
    font-size: 12.5px;
    color: #ae8786;
  }
`;
