import React from 'react';

import {
  Title,
  Button,
  Box,
  Spacer,
  Text,
  Input,
} from '../../components/styles/index';

const SignUp = () => {
  return (
    <>
      <Box background="light" hasPadding justify="center" align="center">
        <Title bold fluid color="black">
          LOOKAPP
        </Title>
        <Spacer size="50px" />

        <Title align="center" color="black" variant="normal">
          SignIn my account
        </Title>
        <Spacer size="50px" />

        <Input placeholder="E-mail" />
        <Spacer size="20px" />

        <Input placeholder="Password" secureTextEntry />
        <Spacer size="50px" />

        <Button block>
          <Text color="light">SignIn into my account</Text>
        </Button>
        <Spacer />

        <Text color="black" underline>
          Create new account
        </Text>
      </Box>
    </>
  );
};

export default SignUp;
