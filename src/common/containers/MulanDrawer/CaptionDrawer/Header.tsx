import React from 'react';
import Search from '@src/common/components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Avatar } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <div
      className={
        'ml-shadow ml-flex ml-items-center ml-bg-white ml-w-full ml-z-9999 ml-px-4 ml-fixed'
      }>
      <Search />
      <IconButton size="small" className="ml-m-2">
        <FontAwesomeIcon icon={faCog} color="gray" size="lg" />
      </IconButton>
      <IconButton size="small" className="ml-m-2">
        <FontAwesomeIcon icon={faHome} color="gray" size="lg" />
      </IconButton>
      <Avatar
        className="ml-m-2 ml-h-7 ml-w-7"
        alt="round"
        src="https://i.loli.net/2020/06/01/2uHvPFcdwAb3tRi.png"
      />
    </div>
  );
};

export default Header;
