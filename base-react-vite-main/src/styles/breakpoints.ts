/**
 * Breakpoints chuẩn hóa toàn dự án PhimBook Cinema.
 * Dùng thống nhất cho styled-components để tránh phân mảnh media query.
 */

export const BREAKPOINTS = {
  xs: 375,  // Mobile nhỏ (iPhone SE, màn hình gập)
  sm: 480,  // Mobile tiêu chuẩn
  md: 768,  // Tablet dọc
  lg: 1024, // Tablet ngang / Laptop nhỏ
  xl: 1280, // Desktop tiêu chuẩn (max-width nội dung)
  xxl: 1440, // Màn hình rộng
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Helper media query conditions - Max-width (Desktop-first)
 * Ví dụ sử dụng:
 * @media ${media.md} {
 *   padding: 16px;
 * }
 */
export const media = {
  xs: `(max-width: ${BREAKPOINTS.xs}px)`,
  sm: `(max-width: ${BREAKPOINTS.sm}px)`,
  md: `(max-width: ${BREAKPOINTS.md}px)`,
  lg: `(max-width: ${BREAKPOINTS.lg}px)`,
  xl: `(max-width: ${BREAKPOINTS.xl}px)`,
  xxl: `(max-width: ${BREAKPOINTS.xxl}px)`,

  // Min-width helpers nếu cần
  minSm: `(min-width: ${BREAKPOINTS.sm + 1}px)`,
  minMd: `(min-width: ${BREAKPOINTS.md + 1}px)`,
  minLg: `(min-width: ${BREAKPOINTS.lg + 1}px)`,
  minXl: `(min-width: ${BREAKPOINTS.xl + 1}px)`,
} as const;

export default BREAKPOINTS;

