import { FC } from 'react';
import { AppButton } from 'shared/ui';
import { AppCard } from 'shared/ui/AppCard';
import styles from './styles.module.scss';
import { IAppOperationButtons } from './types';

export const AppOperationButtons: FC<IAppOperationButtons> = ({
  styleClass,
}) => {
  return (
    <AppCard styleClass={styleClass}>
      <AppButton title="/" styleClass={styles.marginRight} onClick={() => {}} />
      <AppButton title="x" styleClass={styles.marginRight} onClick={() => {}} />
      <AppButton title="-" styleClass={styles.marginRight} onClick={() => {}} />
      <AppButton title="+" onClick={() => {}} />
    </AppCard>
  );
};
