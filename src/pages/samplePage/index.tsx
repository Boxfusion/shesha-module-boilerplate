import React, { FC } from 'react';
import { MainLayout } from '@shesha/reactjs';
import { Body } from 'components/body';

export interface IReportingReportProps {}

const SamplePage: FC<IReportingReportProps> = () => {
  return (
    <MainLayout>
      <Body>This is the body component</Body>
    </MainLayout>
  );
};

export default SamplePage;
