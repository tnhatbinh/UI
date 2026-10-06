import styled from 'styled-components';

// ─── CTA Wrapper ──────────────────────────────────────────────────────────────

export const ActionCtas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: auto;
  padding-top: 4px;

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

// ─── Book Button ──────────────────────────────────────────────────────────────

export const BookButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 320px;
  max-width: 100%;
  height: 48px;
  padding: 12px 28px;
  background-image: linear-gradient(
    to right,
    var(--primary),
    var(--primary-sub)
  );
  box-shadow: 0px 0px 32px rgba(255, 83, 90, 0.5);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    flex: 1;
    min-width: 0;
    width: auto;
    padding: 8px 10px;
    height: 46px;
    gap: 6px;
  }
`;

export const BookButtonText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--on-primary-dark);
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11px;
    letter-spacing: 0;
    white-space: normal;
    line-height: 1.2;
    text-align: center;
  }

  @media (max-width: 380px) {
    font-size: 10.5px;
    line-height: 1.15;
  }
`;

// ─── Trailer Button ───────────────────────────────────────────────────────────

export const TrailerButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 180px;
  height: 48px;
  padding: 12px 20px;
  background-color: rgba(42, 42, 43, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(42, 42, 43, 0.9);
  }

  @media (max-width: 640px) {
    flex-shrink: 0;
    width: auto;
    padding: 8px 12px;
    height: 46px;
    gap: 6px;
  }

  @media (max-width: 380px) {
    padding: 8px 8px;
  }
`;

export const PlayIconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: rgba(255, 83, 90, 0.2);

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
  }
`;

export const TrailerButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-text);
  letter-spacing: 0.28px;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11.5px;
    letter-spacing: 0;
  }

  @media (max-width: 380px) {
    font-size: 11px;
  }
`;
