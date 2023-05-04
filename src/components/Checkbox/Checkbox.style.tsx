import React, { useState } from 'react';

import Checkbox from './Checkbox.component';


export const BasicCheckbox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const onChange = () => {
        setIsChecked((prev: boolean) => !prev)
    };
    return (
      <Checkbox id="checkbox" checked={isChecked} onChange={onChange} />
    );
}
export const LabeledCheckbox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const onChange = () => {
        setIsChecked((prev: boolean) => !prev)
    };
    return (
      <Checkbox id="checkbox_labeled" checked={isChecked} onChange={onChange} label="늘보" />
    );
}