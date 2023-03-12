import { ReactNode } from 'react';

export interface IAppSwitch {
  isChecked: boolean;
  textLeft?: string;
  textRight?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onChange: () => void;
}
