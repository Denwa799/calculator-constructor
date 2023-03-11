import { AppNumericBlock } from 'entities/numeric-block';
import { AppOperationButtons } from 'entities/operation-buttons';
import { AppCalculatorDisplay } from 'shared/ui';
import { AppSumButton } from 'shared/ui/AppSumButton';
import styles from './styles.module.scss';

export const AppCalculatorComponents = () => {
  return (
    <div className={styles.itemsContainer}>
      <AppCalculatorDisplay containerClass={styles.marginBottom} />
      <AppOperationButtons styleClass={styles.marginBottom} />
      <AppNumericBlock styleClass={styles.marginBottom} />
      <AppSumButton onClick={() => {}} />
    </div>
  );
};
