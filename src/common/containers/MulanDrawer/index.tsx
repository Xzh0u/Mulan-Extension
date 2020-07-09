import React, { Ref } from 'react';

interface Props {
    rootRef: Ref<HTMLDivElement>;
}

const MulanDrawer: React.FC<Props> = ({ rootRef }) => {
  console.log(rootRef);

  return (<div className="ml-absolute ml-top-0 ml-h-full ml-w-full ml-invisible">mulan</div>);
};

export default MulanDrawer;
