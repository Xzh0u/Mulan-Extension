import React from 'react';
import Search from '../../components/Search';

const Header = ({ ...rest }) => (
  <div {...rest}>
    <div>Header</div>
    <Search />
  </div>
);

export default Header;
