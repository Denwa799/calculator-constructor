import { AppCalculatorComponents } from 'features/calculatorComponents';
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
      <AppCalculatorComponents />
    </AppContainer>
  );
};
