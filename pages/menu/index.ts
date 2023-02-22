import { MenuPage } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => ({
  updateVersion: get(state, 'init.updateVersion', 0),
  groups: get(state, 'init.groups', {}),
  productList: get(state, 'products.productList', []),
});

export default connect(mapStateToProps, null)(MenuPage);
