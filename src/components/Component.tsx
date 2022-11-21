import * as React from 'react'

interface Props {
  children: React.ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
}

export default function ({ children, elementType: ElementType = 'h2' }: Props): JSX.Element {
  return (
    <ElementType>{children}</ElementType>
  );
}