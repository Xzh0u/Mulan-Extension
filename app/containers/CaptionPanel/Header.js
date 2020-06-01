import React from 'react';
import Search from '../../components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Avatar } from '@material-ui/core';

const Header = ({ ...rest }) => (
  <div
    className={
      'ml-flex ml-items-center ml-bg-gray-500 ml-w-full ml-z-9999 ml-px-4 ml-items-center'
    }
    {...rest}>
    <Search />
    <IconButton className="ml-mx-2">
      <FontAwesomeIcon icon={faHome} color="white" size="lg" />
    </IconButton>
    <Avatar
      alt="round"
      src="https://i.loli.net/2020/06/01/2uHvPFcdwAb3tRi.png"
    />
  </div>
);

export default Header;
