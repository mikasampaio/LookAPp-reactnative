import React from 'react';
import { Box } from '../styles';
import Post from '.';

export default function PostList() {
  return (
    <Box>
      {Array.from(Array(10))?.map((item, index) => (
        <Post key={index} />
      ))}
    </Box>
  );
}
