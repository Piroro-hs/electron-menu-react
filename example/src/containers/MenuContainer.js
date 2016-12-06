import {connect} from 'react-redux';

import Menu from '../components/Menu';
import {increment, decrement} from '../modules/counter';

const MenuContainer = connect(
  ({counter}) => ({value: counter}),
  dispatch => ({
    increment: (payload) => {dispatch(increment(payload));},
    decrement: (payload) => {dispatch(decrement(payload));},
  }),
)(Menu);

export default MenuContainer;
