import React from 'react';
import { Box, Text, Cover, Touchable } from '../styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';

export default function Post() {
  return (
    <Box hasPadding fluid>
      <Box row>
        <Cover
          image="https://rmi.org/wp-content/uploads/2022/08/charlin-bodley-headshot.jpg"
          height="40px"
          width="40px"
          circle
        />

        <Box row justify="space-between" spacing="0 0 0 10px">
          <Box>
            <Text variant="normal" bold>
              Mikasampaio
            </Text>
            <Text variant="small">2 mins ago</Text>
          </Box>
          <Touchable width="100px" height="40px" align="flex-end">
            <Icon name="options" size={15} />
          </Touchable>
        </Box>
      </Box>

      <Cover
        image="https://s2-g1.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"
        width="100%"
        height="190px"
        spacing="10px 0"
        radius="5px"
      />

      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map((item, index) => (
            <Cover
              key={index}
              width="40px"
              height="40px"
              border={`1px solid ${colors.light}`}
              circle
              image="https://rmi.org/wp-content/uploads/2022/08/charlin-bodley-headshot.jpg"
              spacing="0 -15px 0 0 "
            />
          ))}
          <Text variant="small" spacing="0 20px">
            Liked by 10,098
          </Text>
        </Box>

        <Box row align="center" justify="flex-end">
          <Touchable spacing="0 15px 0 0" width="24px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable spacing="0 15px 0 0" width="24px">
            <Icon name="bubbles" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Text variant="small">
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        ‘Slow Fashion’
      </Text>
    </Box>
  );
}
