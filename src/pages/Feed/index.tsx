import React from 'react';

import { Box } from '../../components/styles/index';
import { Header } from '../../components/Header';
import Story from '../../components/Story/list';

const Feed = () => {
  return (
    <Box>
      <Header label="Explore" />
      <Story />
    </Box>
  );
};

export default Feed;
