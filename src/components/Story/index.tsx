import React from 'react';
import { Cover, Touchable } from '../styles';

export default function Story() {
  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0 10px 0">
      <Cover
        image="https://rmi.org/wp-content/uploads/2022/08/charlin-bodley-headshot.jpg"
        width="100%"
        height="100%"
      />
    </Touchable>
  );
}
