import { AppNumericBlock } from 'entities/numericBlock';
import { AppOperationButtons } from 'entities/operationButtons';
import { AppContainer } from 'shared/ui';
import styles from './styles.module.scss';

export const MainPage = () => {
  return (
    <AppContainer
      styleClass={styles.container}
      isVerticalCenter
      isHorizontalCenter
      isFullHeight
    >
      <AppOperationButtons styleClass={styles.marginBottom} />
      <AppNumericBlock />
    </AppContainer>
  );
};
