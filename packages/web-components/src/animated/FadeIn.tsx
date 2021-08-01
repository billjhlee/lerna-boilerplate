import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { CSSTransition } from 'react-transition-group';

import { AnimatableProps } from './common';

export function FadeIn({ children, duration }: AnimatableProps): ReactElement {
  return (
    <CSSTransition
      css={css`
        animation-duration: ${duration}s;
      `}
      timeout={duration}
      in
    >
      {children}
    </CSSTransition>
  );
}
