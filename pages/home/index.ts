import { Home } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => ({
  isLoadInit: get(state, 'init.fetching', false),
  isLoadProduct: get(state, 'products.fetching', false),
});

export default connect(mapStateToProps, null)(Home);
