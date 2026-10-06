import styled from 'styled-components';

export const ShowtimesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ShowtimesHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .sub {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: #ff535a;
      text-transform: uppercase;
    }

    h2 {
      font-size: 28px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.3px;
    }
  }

  .filters-right {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const CitySelect = styled.select`
  height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  option {
    background: #19181c;
    color: #ffffff;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ae8786;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12.5px;
    width: 180px;

    &::placeholder {
      color: #7d6b6a;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StepLabel = styled.div`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: #ae8786;
  text-transform: uppercase;
`;

export const DayTabsRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }
`;

export const DayTab = styled.button<{ $isActive: boolean }>`
  flex-shrink: 0;
  min-width: 110px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? 'rgba(255, 83, 90, 0.6)' : 'rgba(255, 255, 255, 0.08)'};
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 83, 90, 0.18)' : 'rgba(255, 255, 255, 0.03)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  .tag {
    font-size: 9.5px;
    font-weight: 800;
    color: ${({ $isActive }) => ($isActive ? '#ff535a' : '#ae8786')};
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .date {
    font-size: 17px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.1;
  }

  .day {
    font-size: 11px;
    font-weight: 500;
    color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#7d6b6a')};
  }

  &:hover {
    border-color: rgba(255, 83, 90, 0.4);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const FormatChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FormatChip = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? 'rgba(255, 185, 85, 0.6)' : 'rgba(255, 255, 255, 0.08)'};
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 185, 85, 0.16)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${({ $isActive }) => ($isActive ? '#ffb955' : '#ae8786')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const CinemaScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const CinemaCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 16px 18px;
  }

  .cinema-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;

    .cinema-meta {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .name-row {
        display: flex;
        align-items: center;
        gap: 10px;

        .name {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
        }

        .badge {
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(255, 185, 85, 0.16);
          border: 1px solid rgba(255, 185, 85, 0.35);
          color: #ffb955;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
        }
      }

      .address-row {
        font-size: 12px;
        color: #ae8786;
        display: flex;
        align-items: center;
        gap: 6px;

        .dist {
          color: #7d6b6a;
        }
      }
    }

    .map-link {
      font-size: 12px;
      font-weight: 600;
      color: #ffb955;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .format-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .format-label-row {
      display: flex;
      align-items: center;
      gap: 8px;

      .format-title {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #e5e2e3;
        text-transform: uppercase;
      }

      .room-sub {
        font-size: 11px;
        color: #7d6b6a;
      }
    }

    .showtime-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;

export const ShowtimePill = styled.button<{
  $isSelected: boolean;
  $isAlmostFull?: boolean;
}>`
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isSelected, $isAlmostFull }) =>
      $isSelected
        ? '#ffb955'
        : $isAlmostFull
          ? 'rgba(255, 83, 90, 0.4)'
          : 'rgba(255, 255, 255, 0.09)'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 185, 85, 0.16)' : 'rgba(255, 255, 255, 0.04)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  transition: all 0.15s ease;
  min-width: 95px;

  .pill-time {
    font-size: 16px;
    font-weight: 800;
    color: ${({ $isSelected }) => ($isSelected ? '#ffb955' : '#ffffff')};
  }

  .pill-sub {
    font-size: 10.5px;
    font-weight: 600;
    color: ${({ $isSelected, $isAlmostFull }) =>
      $isSelected ? '#ffb955' : $isAlmostFull ? '#ff535a' : '#ae8786'};
    display: flex;
    align-items: center;
    gap: 4px;

    .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: currentColor;
    }
  }

  &:hover {
    border-color: rgba(255, 185, 85, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`;
