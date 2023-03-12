import { useState } from 'react';
import { AppEyeIcon, AppMarkIcon } from 'shared';
import { THEME } from 'shared/config';
import { AppSwitch } from 'shared/ui';

export const AppCalculatorModeSwitch = () => {
  const [isConstructor, setIsConstructor] = useState(false);

  const onChange = () => {
    setIsConstructor((prev) => !prev);
  };

  return (
    <AppSwitch
      isChecked={isConstructor}
      textLeft="Runtime"
      textRight="Constructor"
      iconLeft={
        <AppEyeIcon
          color={!isConstructor ? THEME.colorPrimary : THEME.colorText3}
        />
      }
      iconRight={
        <AppMarkIcon
          color={isConstructor ? THEME.colorPrimary : THEME.colorText3}
        />
      }
      onChange={onChange}
    />
  );
};
