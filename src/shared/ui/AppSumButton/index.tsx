import cn from 'classnames';
import { FC } from 'react';
import { AppButton, AppCard } from 'shared/ui';
import styles from './styles.module.scss';
import { IAppSumButton } from './types';

export const AppSumButton: FC<IAppSumButton> = ({ styleClass, onClick }) => {
  const cardClass = cn(styles.card, styleClass);

  return (
    <AppCard styleClass={cardClass}>
      <AppButton title="=" type="primary" onClick={onClick} />
    </AppCard>
  );
};
