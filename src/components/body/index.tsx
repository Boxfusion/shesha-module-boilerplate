import React, { FC, PropsWithChildren } from 'react';

export interface IBodyProps {}

export const Body: FC<PropsWithChildren<IBodyProps>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Body;
