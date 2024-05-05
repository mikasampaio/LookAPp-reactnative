import React from 'react';
import { Box, Cover, Text, Touchable } from '../styles';
import { colors } from '../../styles/theme.json';

export default function Story() {
  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0 5px 0">
      <Cover
        image="https://rmi.org/wp-content/uploads/2022/08/charlin-bodley-headshot.jpg"
        width="100%"
        height="100%">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between">
          <Cover
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            circle
            image="https://rmi.org/wp-content/uploads/2022/08/charlin-bodley-headshot.jpg"
          />

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              Mikasampaio
            </Text>
            <Text variant="small" color="light">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
}
