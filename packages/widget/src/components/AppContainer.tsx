import { Box, ScopedCssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, RefObject, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useWidgetConfig } from '../providers/WidgetProvider';
import { ElementId } from '../utils/elements';
import { PoweredBy } from './PoweredBy';

const CssBaselineContainer = styled(ScopedCssBaseline)(({ theme }) => ({
  // height: '100%',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflowX: 'clip',
  marginRight: 0,
  [theme.breakpoints.up('xs')]: {
    maxWidth: 392,
  },
}));

const RelativeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 392,
  background: theme.palette.background.default,
  overflow: 'auto',
  flex: 1,
}));

const ScrollableContainer = styled(Box)({
  // position: 'fixed',
  overflowY: 'auto',
  height: '100%',
  flex: 1,
  display: 'flex',
});

export const AppContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const { containerStyle } = useWidgetConfig();
  return (
    <RelativeContainer sx={containerStyle}>
      <ScrollableContainer id={ElementId.ScrollableContainer} ref={ref}>
        <CssBaselineContainer enableColorScheme>
          {children}
          <PoweredBy />
        </CssBaselineContainer>
      </ScrollableContainer>
      <ScrollToLocation elementRef={ref} />
    </RelativeContainer>
  );
};

export const ScrollToLocation: React.FC<{
  elementRef: RefObject<HTMLElement>;
}> = ({ elementRef }) => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    elementRef.current?.scrollTo(0, 0);
  }, [elementRef, pathname]);
  return null;
};