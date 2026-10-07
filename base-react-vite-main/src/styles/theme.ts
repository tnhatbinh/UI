export const theme = {
  colors: {
    primary: '#ff2a42',
    primarySub: '#e01e35',
    primaryHover: '#ff475c',
    secondary: '#f5a623',
    secondaryHover: '#ffb738',
    tertiary: '#8c90a4',
    bgPrimary: '#0b0b0c',
    bgSecondary: '#131314',
    bgCard: '#1c1b1c',
    textPrimary: '#ffffff',
    textSecondary: '#ae8786',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
    largeDesktop: '1600px',
  },
};

export type ThemeType = typeof theme;

