import * as React from 'react';

import { cn } from 'shared/lib';

interface ContainerProps {
  className?: string;
  withPadding?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  withPadding = true,
  children,
}) => (
  <section
    className={cn(
      'container px-0',
      {
        'px-8': withPadding,
      },
      className,
    )}
  >
    {children}
  </section>
);
