import { AppNumericBlock } from 'entities/numericBlock';
import { AppOperationButtons } from 'entities/operationButtons';
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
