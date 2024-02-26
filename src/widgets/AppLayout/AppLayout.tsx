import { ComponentProps, FC, ReactNode } from 'react';

import { AppFooter, AppHeader } from './ui';

interface AppLayoutProps extends ComponentProps<typeof AppHeader> {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children, extraContent }) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <AppHeader extraContent={extraContent} />
      <main className="py-1.5 flex-grow">{children}</main>
      <AppFooter />
    </div>
  );
};

export { AppLayout };
