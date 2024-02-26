import { FC, ReactNode } from 'react';

import Link from 'next/link';

import { Container } from 'shared/ui';

import { AppNavigationSheet } from './AppNavigationSheet';

interface AppHeaderProps {
  extraContent?: ReactNode;
}

const AppHeader: FC<AppHeaderProps> = ({ extraContent }) => {
  return (
    <header>
      <Container>
        <div className="py-3 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-semibold tracking-tight">Logo</span>
          </Link>

          <AppNavigationSheet />
        </div>

        {extraContent && <div>{extraContent}</div>}
      </Container>
    </header>
  );
};

export { AppHeader };
