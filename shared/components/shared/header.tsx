'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import { CartButton, Container, ProfileButton, SearchInput } from '.';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Props {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
  const { data: session } = useSession();

  console.log(session, 777);
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
          <ProfileButton />
          <div>{hasCart && <CartButton />}</div>
        </div>
      </Container>
    </header>
  );
};
