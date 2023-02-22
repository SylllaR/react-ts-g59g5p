import { InitApp } from './initApp';

import get from 'lodash/get';
import { connect } from 'react-redux';
import { getUpdateVersionAction, getGroupsAction } from './redux/actions/init';
import { getProductsAction } from './redux/actions/products';


const mapStateToProps = (state) => ({
  updateVersion: get(state, 'init.updateVersion', null),
});

const mapDispatchToProps = (dispatch) => ({
  getUpdateVersion: () => dispatch(getUpdateVersionAction()),
  getGroups: () => dispatch(getGroupsAction()),
  getProducts: () => dispatch(getProductsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitApp);
