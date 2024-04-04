import React, { FC } from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div className={'Hello'}>
    <h1>Hello React</h1>
    <a href="/github/freewind">Proxy to github</a>
  </div>;
}
