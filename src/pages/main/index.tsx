import { AppNumericBlock } from 'entities/numericBlock';
import { AppOperationButtons } from 'entities/operationButtons';
import { AppCalculatorDisplay, AppContainer } from 'shared/ui';
import styles from './styles.module.scss';

export const MainPage = () => {
  return (
    <AppContainer
      styleClass={styles.container}
      isVerticalCenter
      isHorizontalCenter
      isFullHeight
    >
      <div className={styles.itemsContainer}>
        <AppCalculatorDisplay containerClass={styles.marginBottom} />
        <AppOperationButtons styleClass={styles.marginBottom} />
        <AppNumericBlock />
      </div>
    </AppContainer>
  );
};
