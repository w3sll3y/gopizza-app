import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title, Load, TypeProps } from "./style";

type Props = RectButtonProps & {
  title: string,
  type?: TypeProps;
  isLoadging?: boolean;
};

export function Button({ title, type = 'primary', isLoadging = false, ...rest }: Props) {
  return (
    <Container type={type} enabled={!isLoadging} {...rest}>
      {isLoadging ? <Load /> : <Title> {title} </Title>}
    </Container>
  )
}