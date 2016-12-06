import React, {PropTypes} from 'react';
import {ApplicationMenu, MenuItem} from 'electron-menu-react';

const Menu = ({value, increment, decrement}) =>
  <ApplicationMenu>
    <MenuItem label={String(value)} />
    <MenuItem label="increment">
      <MenuItem label="1" click={() => {increment(1);}} />
      <MenuItem label="2" click={() => {increment(2);}} />
      <MenuItem label="3" click={() => {increment(3);}} />
    </MenuItem>
    <MenuItem
      label="decrement"
      submenu={[ // You can also use submenu prop.
        {label: '1', click: () => {decrement(1);}},
      ]}
    >
      <MenuItem label="2" click={() => {decrement(2);}} />
      <MenuItem label="3" click={() => {decrement(3);}} />
    </MenuItem>
  </ApplicationMenu>;

Menu.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Menu;
