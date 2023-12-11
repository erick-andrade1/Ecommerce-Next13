import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  // o tailwind-merge serve para que as classes que vierem na propriedade não sobreponham as classes decladaras aqui:

  return <div className={twMerge('bg-zinc-50/10 animate-pulse rounded-md ', className)} {...props} />;
}
