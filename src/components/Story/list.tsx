import React from 'react';
import { Box, Text, ScrollView } from '../styles';
import Story from '.';

export default function Stories() {
  return (
    <Box fluid>
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold color="dark">
          Stories
        </Text>

        <Text bold color="danger" underline>
          Show All
        </Text>
      </Box>

      <ScrollView horizontal style={{ paddingLeft: 20 }}>
        {Array.from(Array(20))?.map((item, index) => (
          <Story key={index} />
        ))}
      </ScrollView>
    </Box>
  );
}
