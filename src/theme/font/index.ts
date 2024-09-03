import { Platform } from 'react-native';
import { MD3Type } from 'react-native-paper/lib/typescript/types';

const baseFont: Required<
  Pick<MD3Type, 'fontFamily' | 'fontWeight' | 'letterSpacing' | 'lineHeight'>
> = {
  fontFamily: Platform.select({
    web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    ios: 'System',
    default: 'sans-serif',
  }),
  fontWeight: '400',
  letterSpacing: 0.2,
  lineHeight: 12.6,
};
export const fontConfig: Record<string, MD3Type> = {
  default: {
    ...baseFont,
    fontSize: 10,
  },
  bodySmall: {
    ...baseFont,
    fontSize: 11.32,
    fontWeight: '400',
    lineHeight: 16,
  },
  bodyMedium: {
    ...baseFont,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
  },
  bodyLarge: {
    ...baseFont,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18.9,
  },
  labelSmall: {
    ...baseFont,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16.38,
  },
  labelMedium: {
    ...baseFont,
    fontSize: 13.73,
    fontWeight: '500',
    lineHeight: 17.3,
  },
  labelLarge: {
    ...baseFont,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.9,
  },
  titleSmall: {
    ...baseFont,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.64,
  },
  titleMedium: {
    ...baseFont,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20.16,
  },
  titleLarge: {
    ...baseFont,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 25.2,
  },
};
