import styled, { css } from "styled-components"
import { LoadingStyledProps } from "./interfaces"

export const LoadingStyled = styled.div<LoadingStyledProps>`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ $full }) =>
    $full
      ? css`
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          position: fixed;
          background-color: #00ffbf;
        `
      : css`
          padding: 40px 0px;
        `};
`

export const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const ImageStyled = styled.img`
  max-width: 72px;
  max-height: 72px;
`

export const CircularIconStyled = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  animation: spin 0.7s linear infinite;
  border-color: transparent transparent transparent #c200ff;
  border-style: solid;
  border-width: 8px;
  border-radius: 50%;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
