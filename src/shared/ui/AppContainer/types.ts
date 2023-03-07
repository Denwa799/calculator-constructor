import { ReactNode } from 'react';

export interface IAppContainer {
  children: ReactNode;
  isVerticalCenter?: boolean;
  isHorizontalCenter?: boolean;
  isFullHeight?: boolean;
}
