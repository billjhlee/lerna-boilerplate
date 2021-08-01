import { ReactElement } from 'react';

export interface AnimatableProps {
  children: ReactElement;
  duration: number;
  in: boolean;
}
