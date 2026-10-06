import styled from 'styled-components';

export const BottomSecurityStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 11.5px;
  color: #7d6b6a;
  flex-wrap: wrap;

  .left-sec {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #ae8786;

    .icon {
      color: #ffb955;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      color: #ae8786;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #ffffff;
      }
    }

    .logout-btn {
      color: #ff535a;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
