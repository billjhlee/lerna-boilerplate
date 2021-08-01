import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Clickable } from '../../interface';

export interface LogoProps extends Clickable {
  src: string;
  classNames: string;
  width: string;
}

/**
 * Primary UI component for user interaction
 */
export function Logo({ src, width = '100%', classNames, ...props }: LogoProps): ReactElement {
  return (
    <div
      css={css`
        img {
          width: ${width};
        }
      `}
      className={`
        ${classNames}
        `}
      {...props}
    >
      <img src={src} alt="logo" />
    </div>
  );
}
