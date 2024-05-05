import {
  ViewProps,
  TextProps as TextRProps,
  TouchableOpacityProps,
  TextInputProps,
  ScrollViewProps,
  ImageBackgroundProps,
} from 'react-native';
import theme from '../../styles/theme.json';

type Color = keyof typeof theme.colors;
type Font = keyof typeof theme.fonts.title.sizes;
type FontSize = keyof typeof theme.fonts.text.sizes;

export type BoxProps = {
  fluid?: boolean;
  width?: string;
  height?: string;
  spacing?: number | string;
  row?: boolean;
  justify?: string;
  align?: string;
  hasPadding?: boolean;
  radius?: string;
  background?: Color | string;
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

export type ScrollProps = {
  hasPadding?: boolean;
  fluid?: boolean;
  width?: string;
  height?: string;
  background?: Color;
} & ScrollViewProps;

export type CoverProps = {
  image?: string;
  source?: ImageBackgroundProps;
  width?: any;
  height?: any;
  spacing?: string;
  row?: boolean;
  justify?: string;
  align?: string;
  hasPadding?: boolean;
  circle?: boolean;
  radius?: string;
  border?: string;
} & ImageBackgroundProps;
