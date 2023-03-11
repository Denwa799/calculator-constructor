import cn from 'classnames';
import { FC } from 'react';
import { AppCard, AppButton } from 'shared/ui';
import styles from './styles.module.scss';
import { IAppOperationButtons } from './types';

export const AppOperationButtons: FC<IAppOperationButtons> = ({
  styleClass,
}) => {
  const cardClass = cn(styles.card, styleClass);

  return (
    <AppCard styleClass={cardClass}>
      <AppButton title="/" styleClass={styles.button} onClick={() => {}} />
      <AppButton title="x" styleClass={styles.button} onClick={() => {}} />
      <AppButton title="-" styleClass={styles.button} onClick={() => {}} />
      <AppButton title="+" onClick={() => {}} />
    </AppCard>
  );
};
