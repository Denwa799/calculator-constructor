import cn from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { AppCard } from '../AppCard';
import styles from './styles.module.scss';
import { IAppCalculatorDisplay } from './types';

export const AppCalculatorDisplay: FC<IAppCalculatorDisplay> = ({
  number = 0,
  styleClass,
  containerClass,
  isError,
}) => {
  const [text, setText] = useState('0');

  const cardClass = cn(styles.card, containerClass);
  const displayClass = cn(styles.AppCalculatorDisplay, styleClass);

  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isError) {
      if (textRef.current) {
        textRef.current.style.fontSize = '24px';
      }
      setText('Не определено');
      return;
    }

    const stringNumber = String(number).replace('.', ',');

    if (textRef.current) {
      if (stringNumber.length >= 10) {
        textRef.current.style.fontSize = '19px';
      } else {
        textRef.current.style.fontSize = '';
      }
    }

    if (stringNumber.length >= 15) {
      const newString = stringNumber.slice(0, 15);

      if (Number.isInteger(number)) {
        setText(newString);
      } else {
        const roundedNumber = String(
          Number(newString.replace(',', '.')).toFixed(11)
        );
        setText(roundedNumber.replace('.', ','));
      }
    } else {
      setText(stringNumber);
    }
  }, [number, isError, textRef]);

  return (
    <AppCard styleClass={cardClass}>
      <div className={displayClass}>
        <p className={styles.text} ref={textRef}>
          {text}
        </p>
      </div>
    </AppCard>
  );
};
