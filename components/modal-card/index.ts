import { ModalCard } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { addProductAction } from '../../redux/actions/cart';

export const mapStateToProps = (state) => ({
  order: get(state, 'cart.order', {}),
  pruducts: get(state, 'products.productList', []),
});

export const mapDispatchToProps = (dispatch) => ({
  addProduct: (props: {}) => dispatch(addProductAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);
