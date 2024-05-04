import React from 'react';

import {
  Title,
  Button,
  Box,
  Spacer,
  Text,
} from '../../components/styles/index';

const Home = () => {
  return (
    <Box background="dark" hasPadding>
      <Box justify="center" align="center" fluid>
        <Title bold fluid color="light">
          LOOKAPP
        </Title>
        <Spacer />
        <Text align="center" spacing="0 40px">
          Stay on top of the fashion world and buy your favorite looks.
        </Text>
      </Box>

      <Box justify="center" align="center" fluid>
        <Button block>
          <Text>Sign In my account</Text>
        </Button>
        <Spacer size="40px" />
        <Text underline>Create new account</Text>
      </Box>
    </Box>
  );
};

export default Home;
