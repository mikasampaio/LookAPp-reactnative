import React from 'react';

import { Box, ScrollView, Spacer } from '../../components/styles/index';
import { Header } from '../../components/Header';
import Story from '../../components/Story/list';
import PostList from '../../components/Post/list';

const Feed = () => {
  return (
    <Box>
      <Header label="Explore" />
      <ScrollView>
        <Story />
        <Spacer />
        <PostList />
      </ScrollView>
    </Box>
  );
};

export default Feed;
