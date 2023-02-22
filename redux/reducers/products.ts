import { GetProducts } from '../../constatnts';
import products from '../store/init';

export default function (state = products, action) {
  switch (action.type) {
    case GetProducts.FETCH:
      return {
        ...state,
        fetching: true,
      };

    case GetProducts.SUCCESS:
      return {
        ...state,
        productList: action.payload,
        fetching: false,
      };

    case GetProducts.ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
}
