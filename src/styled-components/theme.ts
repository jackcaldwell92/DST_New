export default interface ITheme {
  backgroundColor: string;
  white: string;
  blue: string;
  lightBlue: string;
  lighterBlue: string;
  darkBlue: string;
  darkerBlue: string;
  taupe: string;
  lightTaupe: string;
  lighterTaupe: string;
  darkTaupe: string;
  darkerTaupe: string;
  red: string;
  lightRed: string;
  lighterRed: string;
  darkRed: string;
  darkerRed: string;
  navy: string;
  lightNavy: string;
  lighterNavy: string;
  darkNavy: string;
  darkerNavy: string;
  grey: string;
  lightGrey: string;
  lighterGrey: string;
  darkGrey: string;
  darkerGrey: string;
  darkBoxShadow: string;
  textShadow: string;
}

export const theme: ITheme = {
  backgroundColor: '#fff',
  blue: 'hsl(231, 19%, 35%)',
  darkBlue: 'hsl(231, 19%, 25%)',
  darkBoxShadow:
    '0 4px 6px hsla(0, 0%, 0%, 0.2), 0 5px 15px hsla(0, 0%, 0%, 0.1)',
  darkGrey: 'hsl(0, 0%, 30%)',
  darkNavy: 'hsl(218, 32%, 30%)',
  darkRed: 'hsl(344, 24%, 30%)',
  darkTaupe: 'hsl(332, 8%, 36%)',
  darkerBlue: 'hsl(231, 19%, 15%)',
  darkerGrey: 'hsl(0, 0%, 10%)',
  darkerNavy: 'hsl(218, 32%, 10%)',
  darkerRed: 'hsl(344, 24%, 20%)',
  darkerTaupe: 'hsl(332, 8%, 26%)',
  grey: 'hsl(0, 0%, 50%)',
  lightBlue: 'hsl(231, 19%, 55%)',
  lightGrey: 'hsl(0, 0%, 70%)',
  lightNavy: 'hsl(218, 32%, 70%)',
  lightRed: 'hsl(344, 24%, 65%)',
  lightTaupe: 'hsl(332, 8%, 66%)',
  lighterBlue: 'hsl(231, 19%, 65%)',
  lighterGrey: 'hsl(0, 0%, 90%)',
  lighterNavy: 'hsl(218, 32%, 90%)',
  lighterRed: 'hsl(344, 24%, 80%)',
  lighterTaupe: 'hsl(332, 8%, 76%)',
  navy: 'hsl(218, 32%, 50%)',
  red: 'hsl(344, 24%, 48%)',
  taupe: 'hsl(332, 8%, 56%)',
  textShadow:
    '0 4px 6px hsla(0, 0%, 0%, 0.1), 0 5px 15px hsla(0, 0%, 0%, 0.05)',
  white: '#fcfcfc',
};
