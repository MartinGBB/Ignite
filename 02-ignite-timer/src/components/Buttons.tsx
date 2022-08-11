import { ButtonContentainer, ButtonVariant } from './Button.styles'

interface ButtomColor {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtomColor) {
  return <ButtonContentainer variant={variant}>Enviar</ButtonContentainer>
}
