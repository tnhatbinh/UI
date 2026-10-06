import styled from 'styled-components';

export const TrailerModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .modal-content {
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .close-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      z-index: 10;
      transition: background 0.2s;

      &:hover {
        background: #ff535a;
      }
    }
  }
`;
