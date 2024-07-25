import { cn } from '@/shared/lib/utils';

import React from 'react';

import Image from 'next/image';
import { Button } from '../ui';
import { CartButton, Container, SearchInput } from '.';
import { User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
  return (
    <header className={cn('border-b', className)}>
      {/* Левая часть */}
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo"
              width={35}
              height={35}
            />
            <div>
              <h1 className="text-2xl uppercase font-black">DUDU Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">вкуснее уже некуда</p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-1"
          >
            <User size={16} />
            Войти
          </Button>
          <div>{hasCart && <CartButton />}</div>
        </div>
      </Container>
    </header>
  );
};
