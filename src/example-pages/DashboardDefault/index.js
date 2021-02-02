import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import PaginationBasic from '../../example-components/Pagination/PaginationBasic';
import { VStack } from '@chakra-ui/react';

export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Olive-agro"
        titleDescription="Get personalized notifications here... "
      />

      <DashboardDefaultSection1 />
      <DashboardDefaultSection2 />
      <VStack spacing="4em" my="4em">
        <PaginationBasic />
        <DashboardDefaultSection3 />
        <DashboardDefaultSection4 />
      </VStack>
    </Fragment>
  );
}
