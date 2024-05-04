import {
  ViewProps,
  TextProps as TextRProps,
  TouchableOpacityProps,
  TextInputProps,
} from 'react-native';
import theme from '../../styles/theme.json';

type Color = keyof typeof theme.colors;
type Font = keyof typeof theme.fonts.title.sizes;
type FontSize = keyof typeof theme.fonts.text.sizes;

export type BoxProps = {
  fluid?: boolean;
  width?: string;
  height?: string;
  spacing?: number;
  row?: boolean;
  justify?: string;
  align?: string;
  hasPadding?: boolean;
  radius?: string;
  background?: Color;
  gap?: string;
  border?: string;
  borderBottom?: string;
} & ViewProps;

export type TitleProps = {
  fluid?: boolean;
  color?: Color;
  variant?: Font;
  hasPadding?: boolean;
  align?: string;
  underline?: boolean;
  bold?: boolean;
} & TextRProps;

export type ButtonProps = {
  spacing?: number;
  background?: Color;
  block?: boolean;
} & TouchableOpacityProps;

export type SpacerProps = {
  size?: string;
} & ViewProps;

export type TextProps = {
  color?: Color;
  variant?: FontSize;
  bold?: boolean;
  spacing?: number | string;
  align?: string;
  underline?: boolean;
  removePaddingBottom?: boolean;
  hasPadding?: boolean;
  onPress?: () => void;
} & TextRProps;

export type InputProps = {
  placeholderTextColor?: string;
} & TextInputProps;
