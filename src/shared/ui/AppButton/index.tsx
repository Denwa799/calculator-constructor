import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { IAppButton } from './types';

export const AppButton: FC<IAppButton> = ({
  title,
  styleClass,
  type,
  onClick,
}) => {
  const buttonClass = cn(
    styles.AppButton,
    {
      [styles.primary]: type === 'primary',
    },
    styleClass
  );

  return (
    <button className={buttonClass} type="button" onClick={onClick}>
      {title}
    </button>
  );
};
