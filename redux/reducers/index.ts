import { combineReducers } from 'redux';
import cart from './cart';
import init from './init';
import products from './products';

export const rootReducer = combineReducers({ cart, init, products });
