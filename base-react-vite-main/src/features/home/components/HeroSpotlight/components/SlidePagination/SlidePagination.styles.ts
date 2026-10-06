import styled from 'styled-components';

// ─── Pagination Container ─────────────────────────────────────────────────────

export const SliderPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  z-index: 10;
`;

// ─── Dots ─────────────────────────────────────────────────────────────────────

export const PaginationDot = styled.button<{ $active: boolean }>`
  height: 5px;
  width: ${({ $active }) => ($active ? '36px' : '14px')};
  border-radius: 9999px;
  background: ${({ $active }) =>
    $active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.25)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $active }) =>
    $active ? '0 0 12px rgba(255, 83, 90, 0.6)' : 'none'};

  &:hover {
    background: ${({ $active }) =>
      $active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.6)'};
  }
`;

// ─── Slide Counter ────────────────────────────────────────────────────────────

export const SlideCounterText = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--primary-subtitle);
  font-family: 'Liberation Mono', monospace;
  margin-left: 6px;
`;
