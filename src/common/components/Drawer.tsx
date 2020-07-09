import React from 'react';
import styled from 'styled-components';
import { Drawer as MDrawer, DrawerProps } from '@material-ui/core';

const StyledDrawerDrawer = styled(MDrawer)`
  ${({ containerstyle }: { containerstyle?: string }) => `
    .MuiDrawer-paper {
        ${containerstyle}
    }
`}
`;

interface Props extends DrawerProps {
  containerstyle?: string;
}

const Drawer: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledDrawerDrawer
      variant="persistent"
      {...rest}>
      {children}
    </StyledDrawerDrawer>
  );
};

export default Drawer;
