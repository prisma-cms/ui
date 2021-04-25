import { ButtonHTMLAttributes } from 'react'
import { ButtonStyledProps } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyledProps
