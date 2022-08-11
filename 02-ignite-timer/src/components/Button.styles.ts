import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'success' | 'danger';

interface ButtonContentainerProps {
  variant: ButtonVariant;
}

const ButtonColors = {
  primary: 'purple',
  secundary: 'orange',
  success: 'blue',
  danger: 'red'
}

export const ButtonContentainer = styled.button<ButtonContentainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 8px;
  margin: 5px;
  border: 1px solid red;

  background-color: ${props => props.theme.buttons};

  /* ${(props) => {
    return `background: ${ButtonColors[props.variant]}`
  }} */
`