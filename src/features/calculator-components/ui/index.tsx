import { AppCalculatorModeSwitch } from 'entities/calculator-mode-switch';
import { AppNumericBlock } from 'entities/numeric-block';
import { AppOperationButtons } from 'entities/operation-buttons';
import { AppCalculatorDisplay, AppSumButton } from 'shared/ui';
import styles from './styles.module.scss';

export const AppCalculatorComponents = () => {
  return (
    <div className={styles.itemsContainer}>
      <AppCalculatorModeSwitch />
      <AppCalculatorDisplay containerClass={styles.marginBottom} />
      <AppOperationButtons styleClass={styles.marginBottom} />
      <AppNumericBlock styleClass={styles.marginBottom} />
      <AppSumButton onClick={() => {}} />
    </div>
  );
};
