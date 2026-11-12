import type { AppId } from './types.js';
export interface ColorPair { primary: string; secondary: string; }
export const COMMON_TOKENS = {
  darkBackground: '#0B1622',
  darkSurface: '#152836',
  darkElevated: '#1C3546',
  textPrimary: '#F9FAF3',
  textSecondary: '#93A9B6',
  lightBackground: '#F4F1EA',
  spacing: [4, 8, 12, 16, 20, 24, 32],
  radii: [8, 12, 16, 20, 28],
  minimumTouchTargetVp: 48
};
export const APP_COLORS: Record<AppId, ColorPair> = {
  lightbearing: {primary:'#FFBC6B',secondary:'#73D9D5'},
  framemori: {primary:'#FF9471',secondary:'#75DDC4'},
  voxcarve: {primary:'#AF9DFF',secondary:'#FDBF92'},
  macroloom: {primary:'#B3F07C',secondary:'#7FC8FF'}
};
