import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Clickable } from '../../interface';

export interface ButtonProps extends Clickable {
  backgroundColor?: string;
  label: string;
  classNames?: string;
}

/**
 * Primary UI component for user interaction
 */
export function Button({ backgroundColor, label, classNames, ...props }: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      css={css`
        outline: 0;
        border: 0;
        cursor: pointer;
        background-color: ${backgroundColor};
      `}
      className={`
        p-3 r-2 
        ${classNames}
        `}
      {...props}
    >
      {label}
    </button>
  );
}
