import { cardHeaderClasses, styled } from '@mui/material';
import { CardHeader } from '../Card/CardHeader.js';

export const SelectTokenCardHeader = styled(CardHeader, {
  shouldForwardProp: (prop) =>
    !['selected', 'compact'].includes(prop as string),
})<{ selected?: boolean; compact?: boolean }>(
  ({ theme, selected, compact }) => ({
    padding: theme.spacing(2),
    [`.${cardHeaderClasses.title}`]: {
      color: selected
        ? theme.palette.text.primary
        : theme.palette.text.secondary,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: compact ? 88 : 256,
      fontSize: compact && !selected ? 16 : 18,
      [theme.breakpoints.down(392)]: {
        width: compact ? 88 : 224,
      },
    },
    [`.${cardHeaderClasses.subheader}`]: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: compact ? 88 : 256,
      [theme.breakpoints.down(392)]: {
        width: compact ? 88 : 224,
      },
    },
  }),
);
