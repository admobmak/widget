import { alpha, styled } from '@mui/material/styles';
import { Box, BoxProps, ButtonBase, InputBase, Theme } from '@mui/material';
import { getCardFieldsetBackgroundColor } from '../../../utils';
import { inputBaseClasses } from '@mui/material/InputBase';

export const TabButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: getCardFieldsetBackgroundColor(theme),
  borderRadius: Math.max(
    theme.shape.borderRadius,
    theme.shape.borderRadiusSecondary,
  ),
  padding: theme.spacing(0.5),
  gap: theme.spacing(0.5),
  height: '3.5rem',
}));

const controlSelected = (theme: Theme) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : theme.palette.common.white,
  borderRadius: theme.shape.borderRadiusSecondary,
  boxShadow: `0px 2px 4px ${alpha(theme.palette.common.black, 0.04)}`,
});

interface TabButtonProps {
  selected?: boolean;
}
export const TabButton = styled(ButtonBase)<TabButtonProps>(({
  theme,
  selected,
}) => {
  const selectedStyle = selected
    ? {
        ...controlSelected(theme),
      }
    : {};

  return {
    height: '100%',
    width: '100%',
    fontSize: '1rem',
    fontWeight: 700,
    ...selectedStyle,
  };
});

export const TabCustomInput = styled(InputBase)<TabButtonProps>(({
  theme,
  selected,
}) => {
  const selectedStyle = selected
    ? {
        '&:not(:focus)': {
          ...controlSelected(theme),
        },
      }
    : {};

  return {
    height: '100%',
    width: '100%',

    [`.${inputBaseClasses.input}`]: {
      height: '100%',
      width: '100%',
      padding: 0,
      textAlign: 'center',
      '&::placeholder': {
        fontSize: '1rem',
        fontWeight: 700,
        opacity: 1,
      },
      '&:focus': {
        ...controlSelected(theme),
      },
      ...selectedStyle,
    },
  };
});

export const ColorSwatches = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

interface ColorSwatchProps {
  color: string;
}
export const ColorSwatch = styled(
  (props: BoxProps) => <Box {...props}>&nbsp;</Box>,
  {
    shouldForwardProp: (prop) => prop !== 'color',
  },
)<ColorSwatchProps>(({ theme, color }) => ({
  width: theme.spacing(3),
  height: 'auto',
  backgroundColor: color,
  content: '" "',
}));

export const ColorSelectorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: getCardFieldsetBackgroundColor(theme),
  borderRadius: Math.max(
    theme.shape.borderRadius,
    theme.shape.borderRadiusSecondary,
  ),
  padding: theme.spacing(0.5),
  paddingLeft: theme.spacing(2.5),
  gap: theme.spacing(0.5),
  height: '3.5rem',
}));

export const ColorValueButton = styled('input')<
  React.InputHTMLAttributes<HTMLInputElement>
>(({ theme, value }) => ({
  position: 'relative',
  border: 'none',
  height: '100%',
  width: 97,
  padding: 0,
  backgroundColor: value as string,
  borderRadius: theme.shape.borderRadiusSecondary,
  ['&::-webkit-color-swatch']: {
    border: 'none',
  },
  ['&::-moz-color-swatch']: {
    border: 'none',
  },
  ['&::after']: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    content: `"${value}"`,
    fontSize: '1rem',
    fontWeight: 700,
    color: theme.palette.getContrastText(value as string),
  },
}));
