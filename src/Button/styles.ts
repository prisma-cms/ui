import styled, { css } from 'styled-components'

export type ButtonStyledProps = {
  variant?: 'default' | 'success'

  size?: 'small' | 'big'

  fullWidth?: boolean
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.43;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;

  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return css`
          color: #333;
          background-color: #fff;
          border-color: #ccc;
        `

      case 'success':
        return css`
          color: #fff;
          background-color: #05b105;
          border-color: #089a08;
        `
      default:
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 12px;
        `

      case 'big':
        return css`
          font-size: 16px;
        `
      default:
    }
  }}

  &[disabled] {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    box-shadow: none;
    opacity: 0.65;
  }
`
