import { useEffect } from 'react';

/**
 * Đóng dropdown khi click ra bên ngoài phần tử ref.
 * Dùng chung cho tất cả dropdown trong header.
 */
export function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  handlers: (() => void)[],
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      refs.forEach((ref, i) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handlers[i]?.();
        }
      });
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
