import React from 'react';

import {
  Title,
  Button,
  Box,
  Spacer,
  Text,
  Input,
} from '../../components/styles/index';

const SignIn = () => {
  return (
    <Box background="light" hasPadding justify="center" align="center">
      <Title bold fluid color="black">
        Create a new account
      </Title>
      <Spacer />
      <Text align="center" color="black" spacing="0 40px">
        Enter your details below:
      </Text>
      <Spacer size="50px" />
      <Input placeholder="Name" />
      <Spacer size="20px" />

      <Input placeholder="E-mail" />
      <Spacer size="20px" />

      <Input placeholder="Password" secureTextEntry />
      <Spacer size="50px" />

      <Button block>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer />

      <Text underline>Back to sign In</Text>
    </Box>
  );
};

export default SignIn;
