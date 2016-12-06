/* eslint-disable fp/no-class, fp/no-this, react/no-unused-prop-types */

import React, {Component, PropTypes} from 'react';

const menuItemOptions = new Set([
  'click',
  'role',
  'type',
  'label',
  'sublabel',
  'accelerator',
  'icon',
  'enabled',
  'visible',
  'checked',
  'submenu',
  'id',
  'position',
]);

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.appendMenuItem = this.appendMenuItem.bind(this);
    this.submenu = [];
    this.childUpdated = true;
  }
  getChildContext() {
    return {append: this.appendMenuItem};
  }
  componentDidMount() {
    this.appendToParent();
  }
  // shouldComponentUpdate(nextProps) {
  //   return this.childUpdated || this.props !== nextProps;
  // }
  componentDidUpdate(prevProps) {
    this.childUpdated = this.props !== prevProps || this.childUpdated; // not work
    this.appendToParent();
  }
  appendMenuItem(menuItem, updated = true) {
    this.submenu.push(menuItem);
    this.childUpdated = updated || this.childUpdated;
  }
  appendToParent() {
    const submenu = [...this.props.submenu, ...this.submenu];
    this.context.append(
      Object.keys(this.props)
        .filter(key => menuItemOptions.has(key))
        .filter(key => key !== 'submenu' || submenu.length > 0)
        .reduce((acc, key) => ({
          ...acc,
          [key]: key === 'submenu' ? submenu : this.props[key],
        }), {}),
      this.childUpdated,
    );
    // this.context.append(
    //   Object.entries({...this.props, submenu})
    //     .reduce((acc, [k, v]) => menuItemOptions.includes(k) ? {...acc, [k]: v} : acc, {}),
    // );
    this.submenu = [];
    this.childUpdated = false;
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

MenuItem.childContextTypes = {
  append: PropTypes.func.isRequired,
};

MenuItem.contextTypes = {
  append: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
  submenu: [],
};

MenuItem.propTypes = {
  children: PropTypes.node,
  click: PropTypes.func,
  role: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  accelerator: PropTypes.string,
  icon: PropTypes.any,
  enabled: PropTypes.bool,
  visible: PropTypes.bool,
  checked: PropTypes.bool,
  submenu: PropTypes.any,
  id: PropTypes.string,
  position: PropTypes.string,
};

export default MenuItem;
