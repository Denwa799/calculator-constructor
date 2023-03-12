import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { IAppSwitch } from './types';

export const AppSwitch: FC<IAppSwitch> = ({
  isChecked,
  textLeft,
  textRight,
  iconLeft,
  iconRight,
  onChange,
}) => {
  const rightPartClass = cn(styles.part, styles.rightPart);

  return (
    <>
      <input
        id="app-switch"
        type="checkbox"
        className={styles.checkbox}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor="app-switch" className={styles.label}>
        <div className={styles.part}>
          {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
          {textLeft && <span className={styles.text}>{textLeft}</span>}
        </div>
        <div className={rightPartClass}>
          {iconRight && <span className={styles.icon}>{iconRight}</span>}
          {textRight && <span className={styles.text}>{textRight}</span>}
        </div>
        <span className={styles.button} />
      </label>
    </>
  );
};
