import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  width: 127px;
  height: 30px;
  background: rgba(28, 27, 28, 0.9);
  border-radius: 9999px;
  transition: all 0.25s ease;

  @media (max-width: 680px) {
    display: none;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #ae8786;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.18px;
    width: 100%;
    margin-left: 6px;

    &::placeholder {
      color: #ae8786;
    }
  }

  .search-icon {
    color: #ae8786;
    font-size: 13.5px;
    flex-shrink: 0;
  }
`;
