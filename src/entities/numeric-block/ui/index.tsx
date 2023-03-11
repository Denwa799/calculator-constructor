import cn from 'classnames';
import { FC } from 'react';
import { AppCard, AppButton } from 'shared/ui';
import styles from './styles.module.scss';
import { IAppNumericBlock } from './types';

export const AppNumericBlock: FC<IAppNumericBlock> = ({ styleClass }) => {
  const cardClass = cn(styles.card, styleClass);

  return (
    <AppCard styleClass={cardClass}>
      <div className={styles.row}>
        <AppButton
          styleClass={styles.buttonMargin}
          title="7"
          onClick={() => {}}
        />
        <AppButton
          styleClass={styles.buttonMargin}
          title="8"
          onClick={() => {}}
        />
        <AppButton styleClass={styles.button} title="9" onClick={() => {}} />
      </div>
      <div className={styles.row}>
        <AppButton
          styleClass={styles.buttonMargin}
          title="4"
          onClick={() => {}}
        />
        <AppButton
          styleClass={styles.buttonMargin}
          title="5"
          onClick={() => {}}
        />
        <AppButton styleClass={styles.button} title="6" onClick={() => {}} />
      </div>
      <div className={styles.row}>
        <AppButton
          styleClass={styles.buttonMargin}
          title="1"
          onClick={() => {}}
        />
        <AppButton
          styleClass={styles.buttonMargin}
          title="2"
          onClick={() => {}}
        />
        <AppButton styleClass={styles.button} title="3" onClick={() => {}} />
      </div>
      <div className={styles.footer}>
        <AppButton
          styleClass={styles.buttonMargin}
          title="0"
          onClick={() => {}}
        />
        <AppButton
          styleClass={styles.buttonFooter}
          title=","
          onClick={() => {}}
        />
      </div>
    </AppCard>
  );
};
