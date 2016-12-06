# electron-menu-react

Electron's menu in React way.

## Usage

```js
import React from 'react';
import {render} from 'react-dom';
import {ApplicationMenu, MenuItem} from 'electron-menu-react';

const Menu = () =>
  <ApplicationMenu>
    <MenuItem label="menu 1">
      <MenuItem label="item 1" click={() => {console.log('Menu 1, item 1 was clicked!');}} />
      <MenuItem label="item 2" click={() => {console.log('Menu 1, item 2 was clicked!');}} />
    </MenuItem>
    <MenuItem label="menu 2">
      <MenuItem label="nested 1">
        <MenuItem label="item 1" click={() => {console.log('Menu 2, item 1 was clicked!');}} />
        <MenuItem type="separator" />
        <MenuItem label="item 2" click={() => {console.log('Menu 2, item 2 was clicked!');}} />
      </MenuItem>
    </MenuItem>
    <MenuItem role="close" />
  </ApplicationMenu>;

render(
  <Menu />,
  document.body,
);

```

Then you'll see something like this.

![screenshot](/assets/menu.png)

Take a look at the counter example in the [example folder](https://github.com/Piroro-hs/electron-menu-react/tree/master/example) for more interactive usage.

## Installation

```
npm i electron-menu-react -S
```

## API Reference

See Electron's doc for [MenuItem](http://electron.atom.io/docs/api/menu-item/)

## License

MIT
