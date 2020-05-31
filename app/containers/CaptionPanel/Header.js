import React from 'react';
import Search from '../../components/Search';

const Header = ({ ...rest }) => (
  <div {...rest}>
    <Search />
  </div>
);

export default Header;
