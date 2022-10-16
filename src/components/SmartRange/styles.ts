import styled, { css } from 'styled-components';

import { ICorners, IVariant } from './types';

const getVariations = () => ({
  corners: {
    square: css`
      border-radius: 0px;
    `,
    rounded: css`
      border-radius: 4px;
    `,
    round: css`
      border-radius: 50px;
    `,
  },
  variant: {
    outlined: css``,
    standard: css`
      &:after {
        content: '';

        width: 100%;
        height: 1px;

        position: absolute;
        top: 100%;
        left: 0;

        transition: all 400ms;
      }
    `,
  },
  state: {
    default: css`
      &:after {
        background: #8159c1;
      }
    `,
    focused: css`
      &:after {
        background: #1ea7fd;
      }
    `,
  },
});

interface IContainerProps {
  corners: ICorners;
  variant: IVariant;
  isFocused: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ corners, variant, isFocused }) => css`
    width: 200px;
    height: 40px;

    background: transparent;

    position: relative;

    display: flex;
    align-items: center;

    input {
      background: inherit;
      border: none;
      border-radius: inherit;
      outline: none;

      padding: 12px;

      flex: 1;

      cursor: pointer;
    }

    /*
  height: 32px;

  border: 1px solid red;
  border-radius: 4px;

  color: #f7f7f7;
  line-height: 14px;

  padding: 2px 8px; */

    ${getVariations().corners[corners]}
    ${getVariations().variant[variant]}
    ${getVariations().state[isFocused ? 'focused' : 'default']}
  `}
`;

interface IArrowProps {
  isFocused: boolean;
}

export const Arrow = styled.div<IArrowProps>`
  ${({ isFocused }) => css`
    width: 0;
    height: 0;

    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 9px solid ${isFocused ? '#1ea7fd' : '#8159c1'};

    position: absolute;
    right: 8px;

    pointer-events: none;
    cursor: pointer;

    transform: ${isFocused ? 'rotate(0deg)' : 'rotate(180deg)'};

    transition: all 400ms;
  `}
`;

export const variations = getVariations();
