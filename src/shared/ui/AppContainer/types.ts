import { ReactNode } from 'react';

export interface IAppContainer {
  children: ReactNode;
  styleClass?: string;
  isVerticalCenter?: boolean;
  isHorizontalCenter?: boolean;
  isFullHeight?: boolean;
}
