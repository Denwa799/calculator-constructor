import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { IAppContainer } from './types';

export const AppContainer: FC<IAppContainer> = ({
  children,
  isVerticalCenter,
  isHorizontalCenter,
  isFullHeight,
}) => {
  const containerClass = cn(styles.AppContainer, {
    [styles.verticalCenter]: isVerticalCenter,
    [styles.horizontalCenter]: isHorizontalCenter,
    [styles.fullHeight]: isFullHeight,
  });

  return <div className={containerClass}>{children}</div>;
};
