export type AppId = 'lightbearing' | 'framemori' | 'voxcarve' | 'macroloom';
export type BlockKind = 'hero' | 'metrics' | 'chart' | 'timeline' | 'list' | 'grid' | 'form' | 'calendar' | 'camera' | 'filmstrip' | 'waveform' | 'map' | 'compass' | 'settings' | 'progress' | 'editor' | 'deck' | 'checklist' | 'export' | 'pair' | 'tabs';
export interface BlockSpec {
  kind: BlockKind;
  title: string;
  subtitle?: string;
  items?: string[];
  values?: string[];
  action?: string;
}
export interface PageSpec {
  id: string;
  title: string;
  subtitle: string;
  blocks: BlockSpec[];
  description: string;
  stateNotes: string[];
}
export interface AppSpec {
  id: AppId;
  name: string;
  cnName: string;
  symbol: string;
  tagline: string;
  primary: string;
  secondary: string;
  pages: PageSpec[];
}
export interface PreviewState {
  appId: AppId;
  pageIndex: number;
  deviceWidth: number;
  light: boolean;
  status: 'normal'|'empty'|'loading'|'error';
  activeTab: number;
  sheet: boolean;
  toast: string;
}
