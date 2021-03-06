const size = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
};

export const defaultTheme = {
  inactiveNavColor: 'rgba(255, 255, 255, 0.5)',
  smallScreen: `${size.sm}`,
  mediumScreen: `${size.md}`,
  largeScreen: `${size.lg}`,
  grey60: '#808080',
  grey10: '#E5E5E5',
  grey20: 'rgba(0,0,0,0.2)',
  primary20: '#FEE8CC',
  medium: 500,
  bold: 900,
  heading1: '26px',
  heading2: '20px',
  body: '16px',
  button: '12px',
};

export const lightTheme = {
  name: 'lightTheme',
  primary: '#FB8E01',
  textPrimary: '#333',
  textSecondary: '#fff',
  background: '#fff',
  activeTextColorNav: '#fff',
  wideScreenBackground: defaultTheme.grey10,
  buttonPrimary: defaultTheme.grey60,
  cancelButton: 'rgba(0, 0, 0, 0.4);',
  minQuantityColor: '#808080',
};

export const darkTheme = {
  name: 'darkTheme',
  primary: '#FB8E01',
  textPrimary: '#eee',
  textSecondary: '#333',
  background: '#666',
  activeTextColorNav: '#333',
  wideScreenBackground: '#202020',
  buttonPrimary: defaultTheme.grey10,
  cancelButton: 'rgba(0, 0, 0, 0.8);',
  minQuantityColor: '#eee',
};
