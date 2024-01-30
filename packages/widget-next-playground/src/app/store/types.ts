import {
  Appearance,
  WidgetConfig,
  WidgetSubvariant,
  WidgetVariant,
} from '@lifi/widget';
import { UseBoundStoreWithEqualityFn } from 'zustand/traditional';
import { StoreApi } from 'zustand';

export interface WidgetConfigValues {
  config?: Partial<WidgetConfig>;
}

export interface WidgetConfigActions {
  setConfig: (config: Partial<WidgetConfig>) => void;
  setAppearance: (appearance: Appearance) => void;
  setVariant: (variant: WidgetVariant) => void;
  setSubvariant: (subvariant: WidgetSubvariant) => void;
}

export type WidgetConfigState = WidgetConfigValues & WidgetConfigActions;

export type WidgetConfigStore = UseBoundStoreWithEqualityFn<
  StoreApi<WidgetConfigState>
>;
