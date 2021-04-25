import React from 'react'
import { ButtonProps } from './interfaces'
import { ButtonStyled } from './styles'

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  fullWidth,
  ...other
}) => {
  return <ButtonStyled variant={variant} fullWidth={fullWidth} {...other} />
}

export default Button
