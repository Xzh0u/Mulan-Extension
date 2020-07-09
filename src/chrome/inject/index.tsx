import React from "react";
import { render } from 'react-dom';

const Inject: React.FC = () => {
  return (<div>Inejct</div>);
};

const injectDOM = document.createElement('div');
injectDOM.id = 'mulan_DWAfawfwardzarf';
document.body.appendChild(injectDOM);
render(<Inject />, injectDOM);