import { CartCard } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';

import { addProductAction } from '../../redux/actions/cart';

export const mapStateToProps = (state) => ({
  products: get(state, 'products.productList', {}),
  order: get(state, 'cart.order', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  addProduct: (props: {}) => dispatch(addProductAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
