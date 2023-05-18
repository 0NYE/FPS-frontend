import * as React from 'react';

import styled from 'styled-components';

import { colors } from '@/style/theme';

interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string | null;
}

const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.label<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? `${colors.blue}` : `${colors.white}`)};
  border: 1px solid ${(props)=>props.theme.colors.grey3};
  border-radius: 4px;
  cursor: pointer;

  & > svg {
    position: absolute;
  }
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Label = styled.label`
   display:inline-block; 
   line-height: 16px;
   cursor: pointer;
`;

const StyledCheckBox = styled.div<{ checked: boolean }>`
	display: inline-block;
	width: 16px;
	height: 16px;
	border: ${props => props.checked ? 'none' : 'solid 0.1rem #dddddd'};
	background: ${props => props.checked ? props.theme.colors.blue : props.theme.colors.white};
	border-radius: 0.4rem;
	transition: all 150ms;

	${Icon} {
		visibility: ${props=>props.checked? 'visible': 'hidden'};
	}
`;

export default function Checkbox({
  id, checked, onChange, label,
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <CheckBox checked={checked} htmlFor={id}>
        <HiddenCheckbox id={id} type="checkbox" onChange={onChange} checked={checked} />
        <StyledCheckBox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="19 7 10 17 5 12"/>
            </Icon>
        </StyledCheckBox>
      </CheckBox>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </CheckboxContainer>
  );
}


