import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { IAppCard } from './types';

export const AppCard: FC<IAppCard> = ({ children, styleClass }) => {
  const cardClass = cn(styles.AppCard, styleClass);

  return <div className={cardClass}>{children}</div>;
};
