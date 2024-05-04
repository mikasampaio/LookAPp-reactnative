import React from 'react';
import { Box, Title, Touchable } from '../styles/index';
import { colors } from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native';
interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <Box
      fluid
      row
      height="50px"
      justify="center"
      border={`1px solid ${colors.muted}30`}>
      <SafeAreaView style={{ flexDirection: 'row' }}>
        <Touchable width="80px" align="center" justify="center">
          <Icon name="menu" size={30} />
        </Touchable>
        <Box align="center" justify="center">
          <Title>{label}</Title>
        </Box>
        <Box width="80px">
          <Title />
        </Box>
      </SafeAreaView>
    </Box>
  );
};
